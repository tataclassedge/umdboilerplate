import { NgModuleFactory } from '@angular/core';

/**
 * Base widget loader, Can be extended with multiple loader types
 * in future
 *
 * @export
 * @abstract
 * @class WidgetLoaderService
 */
export abstract class UmdLoaderService {
    protected constructor() {
        this.provideSupportModules();
    }

    /**
     * Register all the support libraries for the module
     *
     * @abstract
     * @memberof WidgetLoaderService
     */
    abstract provideSupportModules(): void;

    /**
     * Load the module itself
     *
     * @abstract
     * @template T
     * @param {string} widgetName
     * @returns {Promise<NgModuleFactory<T>>}
     * @memberof WidgetLoaderService
     */
    abstract load<T>(widgetName: string): Promise<NgModuleFactory<T>>;
}
