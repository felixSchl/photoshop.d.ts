/**
 * The globally available ScriptUI class provides central information about the
 * ScriptUI module. This object is not instantiable.
 */
declare var ScriptUI: any


/**
 * The globally available Window class provides access to user notification
 * tools like Window.alert(), Window.confirm(), Windof.find() and Window.prompt
 * ().
 * 
 * The global Window has provides different functions from instantiated windows.
 * The constructor creates and returns a new Window object, or null if window
 * creation failed. Example: 
 * new Window (type [, title, bounds, {creation_properties}]);
 */
declare var Window: any


/**
 * Controls the automatic layout behavior for a window or container. The
 * subclass AutoLayoutManager implements the default automatic layout behavior.
 * Create an instance of the AutoLayoutManager class with the new operator:
 * myWin.layout = new AutoLayoutManager(myWin);
 */
declare var AutoLayoutManager: any
