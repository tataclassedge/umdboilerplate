
/**
 * Interface for the template configuration
 *
 * @export
 * @interface IWidgetConfig
 */
export interface IWidgetConfig {
    [key: string]: {
        // Name of the module
        name: string;
        // Location of the umd file
        path: string;
        // Shared dependencies of the module
        deps: string[];
    };
}