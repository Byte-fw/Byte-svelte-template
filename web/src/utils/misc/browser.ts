/**
 * Returns true if the project is running in the browser
*/
export const isEnvBrowser = (): boolean => !(window as any).invokeNative;