import { Injectable, NgModuleFactory } from '@angular/core';
import { UmdLoaderConfigProvider } from './umd-loader-config-provider';
import { UmdLoaderService } from './umd-loader.service';
import { WIDGETS_EXTERNALS_MAP } from './umd-loder-map';

// System js holder 
const SystemJs = window.System; // <-Resolve error check add typings.d.ts

@Injectable({
    providedIn: 'root'
})

export class WidgetLoaderService extends UmdLoaderService {
    constructor(private configProvider: UmdLoaderConfigProvider) {
        super();
    }

    /**
     * Attach the support dependencies for the module that is loaded
     *
     * @memberof UmdLoaderService
     */
    provideSupportModules(): void {
        Object.keys(WIDGETS_EXTERNALS_MAP).forEach(externalKey => {
            // Support provided by systemjs for AMD module loading
            window.define(externalKey, [], () => WIDGETS_EXTERNALS_MAP[externalKey]);
        });
    }

    /**
     * Load the factory details for the module specified
     *
     * @template T
     * @param {string} widgetName
     * @returns {Promise<NgModuleFactory<T>>}
     * @memberof UmdLoaderService
     */
    async load<T>(widgetName: string): Promise<NgModuleFactory<T>> {
        const { config } = this.configProvider;
        if (!config[widgetName]) {
            throw Error(`Cannot find template specified`);
        }

        // Get the shared dependencies for the module if specified
        const depsPromises = (config[widgetName].deps || []).map(async (dep: any) => {
            return SystemJs.import(config[dep].path).then((m: any) => {
                window['define'](dep, [], () => m.default);
            });
        });

        // Get the factory object for the module itself
        return Promise.all(depsPromises).then(async () => {
            return SystemJs.import(config[widgetName].path).then(
                (module: any) => module.default.default
            );
        });
    }
}