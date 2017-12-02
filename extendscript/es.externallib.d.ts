/**
 * You specify the name of the library in the constructor. The constructor
 * searches for the named library using the paths defined in the static
 * property ExternalObject.searchFolders. If you are having difficulty loading
 * your library as an ExternalObject, set the property ExternalObject.log to
 * true, then call ExternalObject.search('lib:myLibrary'). This function
 * performs the search, and the log reports the paths that have been searched
 * to the ExtendScript Toolkit Console. Before loading the library, the current
 * folder is temporarily switched to the location of the found executable file.
 */
interface ExternalObject {
    /**
     * Set to true to write status information to standard output (the
     * JavaScript Console in the ExtendScript Toolkit). Set to false to turn
     * logging off. Default is false.
     */
    log: boolean

    /** 
     * A set of alternate paths in which to search for the shared library files,
     * a single string with multiple path specifications delimited by
     * semicolons (;). Paths can be absolute or relative to the Folder.startup
     * location.
     */
    searchFolders: string

    /** 
     * The version of the library, as returned by ESGetVersion().
     */
    version: number

    /** 
     * The ExternalObject class provides this static function to help debug
     * problems with loading libraries as external object. Reports whether a
     * compiled C/C++ library can be found, but does not load it. If logging is
     * on, the paths searched are reported to the JavaScript Console in the
     * ExtendScript Toolkit. Returns true if the library is found, false
     * otherwise.
     * @param spec The file specification for the compiled library, with or
     * without path 
     * information.
     */
    terminate(): void
}

declare const ExternalObject: {
    /**
     * @param filespec The specifier "lib:" is case sensitive, and serves as
     * the marker for dynamic libraries. Concatenate this to the base name of
     * the shared library, with or without an extension. ExtendScript appends a
     * file extension if necessary, according to the operating system.
     * @param args Optional. Any number of arguments to pass to the library’s
     * initialization routine.
     */
    new(filespec: string, ...args: any[]): ExternalObject

    /** 
     * The ExternalObject class provides this static function to help debug
     * problems with loading libraries as external object. Reports whether a
     * compiled C/C++ library can be found, but does not load it. If logging is
     * on, the paths searched are reported to the JavaScript Console in the
     * ExtendScript Toolkit. Returns true if the library is found, false
     * otherwise.
     * @param spec The file specification for the compiled library, with or
     * without path information.
     */
    search(spec: string): boolean
}

/**
 * CSXSEvent for creating and dispatching application-level CSXS events to be
 * exposed to the frontend extension. On HTML extension side, event
 * listeners can be registered via the addEventListener API in CSInterface.js
 * to listen to CSXS events. The CSXSEvent depends on the presence of an
 * external object instance that needs to be created first:
 * let xLib = new ExternalObject("lib:\PlugPlugExternalObject");
*/
declare class CSXSEvent {

    constructor()

    /**
     * Type or name or the event, that an event listener in the HTML extension
     * can be registered to via the addEventListener API in CSInterface.js.
     */
    type: string

    /**
     * The data object of any type that gets dispatched to the frontend
     * extension.
     */
    data: any

    /**
     * Dispatches the data of the CSXSEvent instance to the HTML extension.
     */
    dispatch(): void

}
