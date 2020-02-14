import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { UmdLoaderConfigProvider } from './umd-loader-config-provider';
import { WidgetLoaderService } from './widget-loader.service'
import { UmdLoaderService } from './umd-loader.service';

export function appInit(provider: UmdLoaderConfigProvider) {
    return () => provider.loadConfig();
} 

@NgModule({})

export class UmdSharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UmdSharedModule,
            providers: [
                { 
                    provide: UmdLoaderService, 
                    useClass: WidgetLoaderService 
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: appInit,
                    multi: true,
                    deps: [UmdLoaderConfigProvider]
                }
            ]
        }
    }

    static forChild(): ModuleWithProviders {
        return {
            ngModule: UmdSharedModule
        };
    }
    
}