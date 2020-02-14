import { Component, ViewChild, ViewContainerRef, OnInit, Injector, ComponentRef } from '@angular/core';
import { UmdLoaderConfigProvider } from './../umd-loader/umd-loader-config-provider';
import { WidgetLoaderService } from './../umd-loader/widget-loader.service';

@Component({
  selector: 'wb-umd-test-umd-container',
  templateUrl: './umd-container.component.html',
  styleUrls: ['./umd-container.component.scss']
})
export class UmdContainerComponent implements OnInit {
  @ViewChild('targetRef', { read: ViewContainerRef, static: true }) vcRef: ViewContainerRef;
  widgetConfig: any;

  constructor(
    private injector: Injector,
    private widgetLoader: WidgetLoaderService,
    private configProvider: UmdLoaderConfigProvider,
  ) { }

  ngOnInit(): void {
    // All the configs that are loaded
    this.widgetConfig = this.configProvider.config;
    console.log(this.widgetConfig)

    this.loadWidget('test');
  }

  loadWidget(pluginName: string) {
    this.widgetLoader.load(pluginName).then(moduleFactory => {
      // Get the reference to the module
      const moduleRef = moduleFactory.create(this.injector);

      // Select the default component to load from the widgets. This referene 
      // can be found at the module level where the  static reference to the 
      // component is defined like `static defaultEntryComponent = Component;`
      const entryComponent = (moduleFactory.moduleType as any).defaultEntryComponent;
      
      // Get the component factory
      const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);

      // Create the component on the container specified
      const componentRef: ComponentRef<any> = this.vcRef.createComponent(compFactory);
      
      // Detect changes on the component
      componentRef.changeDetectorRef.detectChanges();
      // Detach the change reference subscriptions if any
      componentRef.onDestroy(() => {
        componentRef.changeDetectorRef.detach();
      });
    });
  }
}
