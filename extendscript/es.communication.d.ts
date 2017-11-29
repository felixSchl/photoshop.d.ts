/*** cross-DOM communication ***/

/**
 * All forms of interapplication communication use Application specifiers to
 * identify Adobe applications. Application specifiers are strings that encode
 * the application name, a version number and a language code. They take the
 * following form:
 * appname[_instance[[-version[-locale]]]
 */
declare const acrobat: crossDOM
declare const aftereffects: crossDOM
declare const bridge: crossDOM
declare const estoolkit: crossDOM
declare const illustrator: crossDOM
declare const incopy: crossDOM
declare const indesign: crossDOM
declare const indesignserver: crossDOM
declare const photoshop: crossDOM
declare const premiere: crossDOM

interface crossDOM {
    /**
     * Performs a JavaScript eval on the specified script. The entire document
     * object model (DOM) of the target application is available to the script.
     * Returns undefined.
     * @param script A string containing the script to be evaluated.
     */
    executeScript(script: string): void

    /**
     * Performs the equivalent of the target application’s File > Open command
     * on the specified files. Returns undefined.
     * @param files A File object or array of File objects. For applications
     * that use compound documents, this should be a project file.
     */
    open(files: File | File[]): void

    /**
     * Performs the equivalent of the target application’s File > New command.
     * Returns true on success. Options argument depends on target application.
     * Adobe Bridge: none
     * Photoshop: none
     * InDesign: creation options are:
     * (Boolean:showingWindow, ObjectOrString:documentPresets)
     * See the arguments for documents.add() in the Adobe InDesign CS5
     * Scripting Reference.
     * Illustrator: creation options are:
     * ([DocumentColorSpace:colorspace][, Number:width, Number:height])
     * See the arguments for documents.add() in the Adobe Illustrator CS5
     * JavaScript Reference.
     */
    openAsNew(): void
    openAsNew(showingWindow?: boolean, documentPresets?: any): void
    openAsNew(colorSpace?: any, width?: number, height?: number): void

    /**
     * Performs the equivalent of the target application’s File > Print command
     * on the specified files. Returns undefined.
     * @param files A File object or array of File objects. For applications
     * that use compound documents, this should be a project file.
     */
    print(files: File | File[]): void

    /**
     * Performs the equivalent of the target application’s File > Exit or
     * File > Close command. Returns undefined. NOTE: This function is 
     * available for Adobe Acrobat®, but does nothing. Scripts cannot terminate
     * the application.
     */
    quit(): void

    /**
     * Gives the target application the operating-system focus, and, if the
     * specified file is open in that application, brings it to the foreground.
     * Returns undefined.
     * @param files A File object or string specifying a file that can be
     * opened in the target application.
     */
    reveal(files: File | string): void

}

/*** BridgeTalk ***/

/**
 * Static properties and methods of this class provide a way for your script to
 * determine basic messaging system information before you create any specific
 * message objects. Static methods allow you to check if an application is
 * installed and is already running, and to launch the application. A callback
 * defined on the class determines how the application processes incoming
 * messages. You can access static properties and methods in the
 * BridgeTalkclass, which is available in the global namespace. For example:
 * var thisApp = BridgeTalk.appName;
 * NOTE: You must instantiate the BridgeTalk class to create the BridgeTalk
 * message object, which is used to send message packets between applications.
 * Dynamic properties and methods can be accessed only in instances.
 */
interface BridgeTalk {
    /**
     * The instance identifier of an application launched by the messaging
     * framework, the instance portion of an application specifier; Read only.
     * Used only for those applications, such as InDesign, that support
     * launching and running multiple instances.
     */
    readonly appInstance: string

    /** 
     * The locale of this application, the locale portion of an application
     * specifier; When a message is sent, this is the locale of the sending
     * application. Read only. 
     */
    readonly appLocale: string

    /**
     * The name of this application, the appname portion of an application
     * specifier; When a message is sent, this is the name of the sending
     * application. Read only.
     */
    readonly appName: string

    /**
     * A lower-case string containing the complete specifier for this
     * application; Read/write.
     */
    appSpecifier: string

    /**
     * The current processing status of this application. Read only. One of:
     * busy — The application is currently busy, but not processing messages.
     * This is the case, for example, when a modal dialog is shown.
     * idle — The application is currently idle, but processes messages
     * regularly.
     * not installed — The application is not installed.
     */
    appStatus: "busy" | "idle" | "not installed"

    /**
     * The version number of this application, the version portion of an
     * application specifier; When a message is sent, this is the version of
     * the sending application. Read only.
     */
    readonly appVersion: string

    /**
     * A callback function that this application applies to unsolicited
     * incoming messages. The default function evaluates the body of the
     * received message and returns the result of evaluation. To change the
     * default behavior, set this to a function definition in the following
     * form:
     * BridgeTalk.onReceive = function( bridgeTalkObject ) {
     * // act on received message
     * };
     * The body property of the received message object contains the received
     * data. The function can return any type.
     */
    onReceive: Function

    /**
     * A specifier for the target application; Brings all windows of the
     * specified application to the front of the screen. In Mac OS, an
     * application can be running but have no windows open. In this case,
     * calling this function might or might not open a new window, depending
     * on the application. For Adobe Bridge, it opens a new browser window.
     * Possible app specifiers:
     * aftereffects, bridge, estoolkit, illustrator, incopy, indesign,
     * indesignserver, photoshop
     */
    bringToFront(app: string): void

    /**
     * A specifier for the target application; Retrieves the full path of the
     * executable file for a specified application. Returns a string. Possible
     * app specifiers:
     * aftereffects, bridge, estoolkit, illustrator, incopy, indesign,
     * indesignserver, photoshop
     */
    getAppPath(app: string): string

    /**
     * A specifier for the target application; Returns a localized display name
     * for an application, or NULL if the application is not installed. For
     * example:
     * BridgeTalk.getDisplayName("photoshop-10.0");
     * => Adobe Photoshop CS4
     * Possible app specifiers:
     * aftereffects, bridge, estoolkit, illustrator, incopy, indesign,
     * indesignserver, photoshop
     */
    getDisplayName(app: string): string

    /**
     * Retrieves a complete application specifier. Returns a complete specifier
     * for a messaging-enabled application version installed on this computer,
     * or null if the requested version of the application is not installed.
     * @param appName The base name of the application to search for. Possible
     * app specifiers:
     * aftereffects, bridge, estoolkit, illustrator, incopy, indesign,
     * indesignserver, photoshop
     * @param version Optional. The specific version number to search for. If 0
     * or not supplied, returns the most recent version. If negative, returns
     * the highest version up to and including the absolute value. If a major
     * version is specified, returns the highest minor-version variation.
     * @param locale Optional. The specific locale to search for. If not
     * supplied and multiple language versions are installed, prefers the
     * version for the current locale.
     */
    getSpecifier(appName: string, version?: number, locale?: string): string

    /**
     * Optional, a specifier for the target application; If not supplied,
     * returns the processing status of the current application.
     */
    getStatus(targetSpec?: string): string

    /**
     * Retrieves a list of messaging-enabled applications installed on this
     * computer. Returns an array of Application specifiers.
     */
    getTargets(version?: number | null, locale?: string): string[]

    /**
     * Returns true if the given application is running and active on the local
     * computer. Specifiers:
     * aftereffects, bridge, estoolkit, illustrator, incopy, indesign,
     * indesignserver, photoshop
     */
    isRunning(specifier: string): boolean

    /**
     * Launches the given application on the local computer. It is not
     * necessary to launch an application explicitly in order to send it a
     * message; sending a message to an application that is not running
     * automatically launches it. Returns true if the application has already
     * been launched, false if it was launched by this call. Specifiers:
     * aftereffects, bridge, estoolkit, illustrator, incopy, indesign,
     * indesignserver, photoshop
     * @param where Optional. If the value "background" is specified, the
     * application’s main window
     * is not brought to the front of the screen.
     */
    launch(specifier: string, where?: string): boolean

    /**
     * Loads the startup script for an application from the common
     * StartupScripts folders. Use to implement late loading of startup
     * scripts. Returns true if the script was successfully loaded.
     */
    loadAppScript(specifier: string): boolean

    /**
     * Sends a message to another application to determine whether it can be
     * contacted. Returns a string whose meaning is defined by the ping-request
     * key.
     */
    ping(specifier: string, pingRequest: string): string

    /**
     * Checks all active messaging interfaces for outgoing and incoming
     * messages, and processes them if there are any. Returns true if any
     * messages have been processed, false otherwise. (Most applications
     * have a message processing loop that continually checks the message
     * queues, so use of this method is rarely required.)
     */
    pump(): boolean

}

declare const BridgeTalk: {

    /**
     * constructor
     */
    new(): BridgeTalk

    /**
     * The data payload of the message. Read/write.
     */
    body: string

    /**
     * A JavaScript object containing script-defined headers. Read/write. Use
     * this property to define custom header data to send supplementary
     * information between applications. You can add any number of new headers.
     * The headers are name/value pairs, and can be accessed with the JavaScript
     * dot notation (msgObj.headers.propName), or bracket notation 
     * (msgObj.headers[propName]). If the header name conforms to JavaScript
     * symbol syntax, use the dot notation. If not, use the bracket notation.
     */
    headers: any

    /**
     * The application specifier for the sending application. Read/write.
     */
    sender: string

    /**
     * The application specifier for the target, or receiving, application.
     * Read/write.
     */
    target: string

    /**
     * The number of seconds before the message times out. Read/write. If a
     * message has not been removed from the input queue for processing before
     * this time elapses, the message is discarded. If the sender has defined
     * an onTimeout callback for the message, the target application sends a
     * time-out message back to the sender.
     */
    timeout: number

    /**
     * The message type, which indicates what type of data the body contains.
     * Read/write. 
     * Default is ExtendScript. You can define a type for script-defined data.
     * If you do so, the target application must have a static BridgeTalk
     * onReceive method that checks for and processes that type.
     */
    type: string

    /**
     * A callback function that the target application invokes to return an
     * error response to the sender. It can send JavaScript run-time errors or
     * exceptions, or C++ exceptions. To define error-response 
     * behavior, set this to a function definition in the following form:
     * bridgeTalkObj.onError = function( errorMsgObject ) {
     * // error handler defined here
     * };
     */
    onError: Function

    /**
     * A callback function that the target application invokes to confirm that
     * the message was received. (Note that this is different from the static
     * onReceive method of the BridgeTalk class that handles unsolicited
     * messages.) To define a response to receipt notification, set this to a
     * function definition in the following form:
     * bridgeTalkObj.onReceived = function( origMsgObject ) {
     * // handler defined here
     * };
     */
    onReceived: Function

    /**
     * A callback function that the target application invokes to return a
     * response to the sender. This can be an intermediate response or the
     * final result of processing the message. To handle the response, set this
     * to a function definition in the following form:
     * bridgeTalkObj.onResult = function( responseMsgObject ) {
     * // handler defined here
     * };
     */
    onResult: Function

    /**
     * A callback function that the target application invokes with a time-out
     * message if time-out occurred before the target finished processing
     * another message previously sent by this application. To enable this
     * callback, the message must specify a value for the timeout property. To
     * define a response to the timeout event, set this to a function
     * definition in the following form:
     * bridgeTalkObj.onTimeout = function( timeoutMsgObject ) {
     * // handler defined here
     * };
     */
    onTimeout: Function

    /**
     * Sends this message to the target application. Returns true if the
     * message could be sent immediately, false if it could not be sent or was
     * queued for sending later. If the target application is not running and
     * the message contains a body, the messaging system automatically launches
     * the target application, passing in any supplied launch parameters. In
     * this case, the message is queued rather than sent immediately, and this
     * method returns false. The message is processed once the application
     * is running.
     */
    send(timeoutInSecs?: number, launchParameters?: string): boolean

    /**
     * When processing an unsolicited message, the static BridgeTalk onReceive
     * method can return an intermediate result to the sender by calling this
     * method in the received message object. It invokes the onResult callback
     * of the original message, passing a new message object containing the
     * specified result value. This allows you to send multiple responses to
     * messages. Returns true if the received message has an onResult callback
     * defined and the response message can be sent, false otherwise.
     */
    sendResult(result: any): boolean
}


/*** Socket ***/

/**
 * ExtendScript offers tools for communicating with other computers or the
 * Internet using standard protocols. The Socket object supports low-level TCP
 * connections.
 */
interface Socket {
    /**
     * When true, the connection is active. Read only.
     */
    readonly connected: boolean

    /** 
     * Sets or retrieves the name of the encoding used to transmit data. Typical
     * values are "ASCII", "BINARY", or "UTF-8".
     */
    encoding: string

    /** 
     * When true, the receive buffer is empty. Read only.
     */
    readonly eof: boolean

    /** 
     * A message describing the most recent error. Setting this value clears
     * any error message.
     */
    error: string

    /** 
     * The name of the remote computer when a connection is established. If the
     * connection is shut down or does not exist, the property contains the 
     * empty string. Read only.
     */
    readonly host: string

    /** 
     * The timeout in seconds to be applied to read or write operations.
     * Default is 10.
     */
    timeout: number

    /** 
     * Instructs the object to start listening for an incoming connection. The
     * call to open() and the call to listen() are mutually exclusive. Call one
     * function or the other, not both. Returns true on success.
     */
    listen(port: number, encoding?: string): boolean

    /** 
     * Opens the connection for subsequent read/write operations. The call to
     * open() and the call to listen() are mutually exclusive. Call one
     * function or the other, not both. Returns true on success.
     */
    open(host: string, encoding?: string): boolean

    /** 
     * Checks a listening object for a new incoming connection. If a connection
     * request was detected, the method returns a new Socket object that wraps
     * the new connection. Use this connection object to communicate with the
     * remote computer. After use, close the connection and delete the
     * JavaScript object. If no new connection request was detected, the method
     * returns null. Returns a Socket object or null.
     */
    poll(): Socket | null

    /** 
     * Reads up to the specified number of characters from the connection,
     * waiting if necessary. Ignores CR characters unless encoding is set to
     * BINARY. Returns a string that contains up to the number of characters
     * that were supposed to be read, or the number of characters read before
     * the connection closed or timed out.
     */
    read(count?: number): string

    /** 
     * Reads one line of text up to the next line feed. Line feeds are
     * recognized as LF or CRLF pairs. CR characters are ignored. Returns a
     * string.
     */
    readln(): string

    /** 
     * Concatenates all arguments into a single string and writes that string
     * to the connection. CRLF sequences are converted to LFs unless encoding
     * is set to BINARY. Returns true on success.
     */
    write(text: string, ...args: string[]): boolean

    /** 
     * Concatenates all arguments into a single string, appends a Line Feed
     * character, and writes that string to the connection. Returns true on
     * success.
     */
    writeln(text: string, ...args: string[]): boolean
}

declare const Socket: {
    /**
     * constructor
     */
    new(): Socket
}
