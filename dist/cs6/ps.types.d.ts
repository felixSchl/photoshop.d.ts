////////////////////////////////////////////////////////////////////////////////
//
// This file was generated. Do not modify.
//
////////////////////////////////////////////////////////////////////////////////

/// <reference path="./ps.constants.d.ts" />
/// <reference path="./ps.extendscript.d.ts" />

interface ActionDescriptor {
    /*
     * The number of keys contained in the descriptor.
     * 
     */
    count: number

    /*
     * The class name of the referenced
     * actionDescriptor object.
     * 
     */
    typename: string

    /*
     * Clears the descriptor.
     */
    clear(): void

    /*
     * Erases a key from the descriptor.
     */
    erase(key: number): void

    /*
     * Creates a descriptor from a stream
     * of bytes; for reading from disk.
     */
    fromStream(value: string): void

    /*
     * Gets the value of a key of type
     * boolean.
     */
    getBoolean(key: number): void

    /*
     * Gets the value of a key of type
     * class.
     */
    getClass(key: number): void

    /*
     * Gets raw byte data as a string
     * value.
     */
    getData(key: number): void

    /*
     * Gets the value of a key of type
     * double.
     */
    getDouble(key: number): void

    /*
     * Gets the enumeration type of a
     * key.
     */
    getEnumerationType(key: number): void

    /*
     * Gets the enumeration value of a
     * key.
     */
    getEnumerationValue(key: number): void

    /*
     * Gets the value of a key of type
     * integer.
     */
    getInteger(key: number): void

    /*
     * Gets the ID of the Nth key,
     * provided by index.
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 38
     */
    getKey(index: number): void

    /*
     * Gets the value of a key of type
     * large integer.
     */
    getLargeInteger(key: number): void

    /*
     * Gets the value of a key of type list.
     */
    getList(key: number): void

    /*
     * Gets the class ID of an object in a
     * key of type object.
     */
    getObjectType(key: number): void

    /*
     * Gets the value of a key of type
     * object.
     */
    getObjectValue(key: number): void

    /*
     * Gets the value of a key of type
     * File.
     */
    getPath(key: number): void

    /*
     * Gets the value of a key of type
     * ActionReference.
     */
    getReference(key: number): void

    /*
     * Gets the value of a key of type
     * string.
     */
    getString(key: number): void

    /*
     * Gets the type of a key.
     */
    getType(key: number): void

    /*
     * Gets the unit type of a key of type
     * UnitDouble.
     */
    getUnitDoubleType(key: number): void

    /*
     * Gets the value of a key of type
     * UnitDouble.
     */
    getUnitDoubleValue(key: number): void

    /*
     * Checks whether the descriptor
     * contains the provided key.
     */
    hasKey(key: number): void

    /*
     * Determines whether the
     * descriptor is the same as another
     * descriptor.
     */
    isEqual(otherDesc: ActionDescriptor): void

    /*
     * Sets the value for a key whose type
     * is boolean.
     */
    putBoolean(key: number, value: boolean): void

    /*
     * Sets the value for a key whose type
     * is class.
     */
    putClass(key: number, value: number): void

    /*
     * Puts raw byte data as a string
     * value.
     */
    putData(key: number, value: string): void

    /*
     * Sets the value for a key whose type
     * is double.
     */
    putDouble(key: number, value: number): void

    /*
     * Sets the enumeration type and
     * value for a key.
     * Method Parameter type Returns What it does (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 39
     */
    putEnumerated(key: number, enumType: number, value: number): void

    /*
     * Sets the value for a key whose type
     * is integer.
     */
    putInteger(key: number, value: number): void

    /*
     * Sets the value for a key whose type
     * is large integer.
     */
    putLargeInteger(key: number, value: number): void

    /*
     * Sets the value for a key whose type
     * is an ActionList object.
     */
    putList(key: number, value: ActionList): void

    /*
     * Sets the value for a key whose type
     * is an object, represented by an
     * Action Descriptor.
     */
    putObject(key: number, classID: number, value: ActionDescriptor): void

    /*
     * Sets the value for a key whose type
     * is path.
     */
    putPath(key: number, value: File): void

    /*
     * Sets the value for a key whose type
     * is an object reference.
     */
    putReference(key: number, value: ActionReference): void

    /*
     * Sets the value for a key whose type
     * is string.
     */
    putString(key: number, value: string): void

    /*
     * Sets the value for a key whose type
     * is a unit value formatted as a
     * double.
     */
    putUnitDouble(key: number, unitID: number, value: number): void

    /*
     * Gets the entire descriptor as a
     * stream of bytes, for writing to disk.
     * Method Parameter type Returns What it does (Continued)
     * 
     */
    toStream(): void

}

interface ActionList {
    /*
     * The number of commands that comprise the
     * action.
     * 
     */
    count: number

    /*
     * The class name of the referenced
     * ActionList object.
     * 
     */
    typename: string

    /*
     * Clears the list.
     */
    clear(): void

    /*
     * Gets the value of a list element of
     * type boolean.
     */
    getBoolean(index: number): void

    /*
     * Gets the value of a list element of
     * type class.
     */
    getClass(index: number): void

    /*
     * Gets raw byte data as a string
     * value.
     */
    getData(index: number): void

    /*
     * Gets the value of a list element of
     * type double.
     */
    getDouble(index: number): void

    /*
     * Gets the enumeration type of a list
     * element.
     */
    getEnumerationType(index: number): void

    /*
     * Gets the enumeration value of a
     * list element.
     */
    getEnumerationValue(index: number): void

    /*
     * Gets the value of a list element of
     * type integer.
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 41
     */
    getInteger(index: number): void

    /*
     * Gets the value of a list element of
     * type large integer.
     */
    getLargeInteger(index: number): void

    /*
     * Gets the value of a list element of
     * type list.
     */
    getList(index: number): void

    /*
     * Gets the class ID of a list element
     * of type object.
     */
    getObjectType(index: number): void

    /*
     * Gets the value of a list element of
     * type object.
     */
    getObjectValue(index: number): void

    /*
     * Gets the value of a list element of
     * type File.
     */
    getPath(index: number): void

    /*
     * Gets the value of a list element of
     * type ActionReference.
     */
    getReference(index: number): void

    /*
     * Gets the value of a list element of
     * type string.
     */
    getString(index: number): void

    /*
     * Gets the type of a list element.
     */
    getType(index: number): void

    /*
     * Gets the unit value type of a list
     * element of type Double.
     */
    getUnitDoubleType(index: number): void

    /*
     * Gets the unit value of a list
     * element of type double.
     */
    getUnitDoubleValue(index: number): void

    /*
     * Appends a new value, true or
     * false.
     */
    putBoolean(value: boolean): void

    /*
     * Appends a new value, a class or
     * data type.
     */
    putClass(value: number): void

    /*
     * Appends a new value, a string
     * containing raw byte data.
     */
    putData(value: string): void

    /*
     * Appends a new value, a double.
     */
    putDouble(value: number): void

    /*
     * Appends a new value, an
     * enumerated (constant) value.
     */
    putEnumerated(enumType: number, value: number): void

    /*
     * Appends a new value, an integer.
     */
    putInteger(value: number): void

    /*
     * Appends a new value, a large
     * integer.
     */
    putLargeInteger(value: number): void

    /*
     * Appends a new value, a nested
     * action list.
     * Method Parameter type Returns What it does (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 42
     */
    putList(value: ActionList): void

    /*
     * Appends a new value, an object.
     */
    putObject(classID: number, value: ActionDescriptor): void

    /*
     * Appends a new value, a path.
     */
    putPath(value: File): void

    /*
     * Appends a new value, a reference
     * to an object created in the script.
     */
    putReference(value: ActionReference): void

    /*
     * Appends a new value, a string.
     */
    putString(value: string): void

    /*
     * Appends a new value, a unit/value
     * pair.
     * Method Parameter type Returns What it does (Continued)
     * 
     */
    putUnitDouble(classID: number, value: number): void

}

interface ActionReference {
    /*
     * The class name of the referenced Action
     * object.
     * 
     */
    typename: string

    /*
     * Gets a reference contained in this
     * reference.
     * Container references provide
     * additional pieces to the reference.
     * This looks like another reference,
     * but it is actually part of the same
     * reference.
     */
    getContainer(): void

    /*
     * Gets a number representing the
     * class of the object.
     */
    getDesiredClass(): void

    /*
     * Gets the enumeration type.
     */
    getEnumeratedType(): void

    /*
     * Gets the enumeration value.
     */
    getEnumeratedValue(): void

    /*
     * Gets the form of this action
     * reference.
     */
    getForm(): void

    /*
     * Gets the identifier value for a
     * reference whose form is identifier.
     */
    getIdentifier(): void

    /*
     * Gets the index value for a
     * reference in a list or array.
     */
    getIndex(): void

    /*
     * Gets the name of a reference.
     */
    getName(): void

    /*
     * Gets the offset of the object’s
     * index value.
     */
    getOffset(): void

    /*
     * Gets the property ID value.
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 44
     */
    getProperty(): void

    /*
     * Puts a new class form and class
     * type into the reference.
     */
    putClass(desiredClass: number): void

    /*
     * Puts an enumeration type and ID
     * into a reference along with the
     * desired class for the reference.
     */
    putEnumerated(desiredClass: number, enumType: number, value: number): void

    /*
     * Puts a new identifier and value into
     * the reference.
     */
    putIdentifier(desiredClass: number, value: number): void

    /*
     * Puts a new index and value into
     * the reference.
     */
    putIndex(desiredClass: number, value: number): void

    /*
     * Puts a new name and value into
     * the reference.
     */
    putName(desiredClass: number, value: string): void

    /*
     * Puts a new offset and value into
     * the reference.
     */
    putOffset(desiredClass: number, value: number): void

    /*
     * Puts a new property and value into
     * the reference.
     * Method Parameter type Returns What it does (Continued)
     * 
     */
    putProperty(desiredClass: number, value: number): void

}

interface Application {
    /*
     * The frontmost document.
     * Setting this property is equivalent to clicking an
     * open document in the Adobe Photoshop CS6
     * application to bring it to the front of the screen.
     * Tip: If there is no open document, accessing this
     * property throws an exception.
     * 
     */
    activeDocument: Document

    /*
     * The default background color and color
     * style for documents.
     * 
     */
    backgroundColor: SolidColor

    /*
     * Information about the application.
     * 
     */
    build: string

    /*
     * The name of the current color settings,
     * as selected with Edit > Color Settings.
     * 
     */
    colorSettings: string

    /*
     * The dialog mode for the application,
     * which controls what types of dialogs should be
     * displayed when running scripts.
     * 
     */
    displayDialogs: DialogModes

    /*
     * The collection of open documents.
     * This is the primary point of access for documents
     * that are currently open in the application. The array
     * allows you to access any open document, or to
     * iterate through all open documents.
     * 
     */
    documents: Documents

    /*
     * The fonts installed on this system.
     * 
     */
    fonts: TextFonts

    /*
     * The default foreground color (used to
     * paint, fill, and stroke selections).
     * 
     */
    foregroundColor: SolidColor

    /*
     * The amount of unused memory
     * available to Adobe Photoshop CS6.
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 46
     * 
     */
    freeMemory: number

    /*
     * The language location of the
     * application.
     * An Adobe locale code consists of a 2-letter ISO-639
     * language code and an optional 2-letter ISO 3166
     * country code separated by an underscore. Case is
     * significant. For example, en_US, en_UK, ja_JP, de_DE,
     * fr_FR.
     * 
     */
    locale: string

    /*
     * A list of file image types Adobe
     * Photoshop CS6 can open.
     * measurementLog MeasurementLog The log of measurements taken.
     * 
     */
    macintoshFileTypes: string[]

    /*
     * The application's name.
     * 
     */
    name: string

    /*
     * The collection of notifiers currently
     * configured (in the Scripts Events Manager menu in
     * the Adobe Photoshop CS6 application).
     * 
     */
    notifiers: Notifiers

    /*
     * True if all notifiers are enabled.
     * 
     */
    notifiersEnabled: boolean

    /*
     * The full path to the location of the
     * Adobe Photoshop CS6 application.
     * 
     */
    path: File

    /*
     * The dialog mode for playback mode,
     * which controls what types of dialog to display
     * when playing back a recorded action with the
     * Actions palette.
     * 
     */
    playbackDisplayDialogs: DialogModes

    /*
     * Stores and retrieves parameters used as
     * part of a recorded action. Can be used, for example,
     * to control playback speed.
     * 
     */
    playbackParameters: ActionDescriptor

    /*
     * The application preference settings
     * (equivalent to selecting Edit > Preferences in the
     * Adobe Photoshop CS6 application in Windows or
     * Photoshop > Preferences in Mac OS).
     * 
     */
    preferences: Preferences

    /*
     * The full path to the Preferences folder.
     * 
     */
    preferencesFolder: File

    /*
     * Files in the Recent Files list.
     * 
     */
    recentFiles: File[]

    /*
     * The build date of the Scripting interface.
     * 
     */
    scriptingBuildDate: string

    /*
     * The version of the Scripting interface.
     * 
     */
    scriptingVersion: string

    /*
     * Runtime details of the application and
     * system.
     * 
     */
    systemInformation: string

    /*
     * The class name of the referenced app
     * object.
     * Property Value type What it is (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 47
     * Methods
     * 
     */
    typename: string

    /*
     * The version of Adobe Photoshop
     * application you are running.
     * 
     */
    version: string

    /*
     * A list of file image extensions Adobe
     * Photoshop CS6 can open.
     * Property Value type What it is (Continued)
     * 
     */
    windowsFileTypes: string[]

    /*
     * Runs the batch automation routine
     * (similar to the File > Automate >
     * Batch command).
     * The inputFiles parameter specifies
     * the sources for the files to be
     * manipulated by the batch command.
     */
    batch(inputFiles: File[], action: string, from: string, options?: BatchOptions): void

    /*
     * Causes a "beep" sound.
     */
    beep(): void

    /*
     * Adobe Photoshop CS6 the
     * active (front-most) application.
     */
    bringToFront(): void

    /*
     * Converts from a four character code
     * (character ID) to a runtime ID.
     */
    charIDToTypeID(charID: string): void

    /*
     * Plays an action from the Actions
     * palette. The action parameter is the
     * name of the action, the from
     * parameter is the name of the action
     * set.
     */
    doAction(action: string, from: string): void

    /*
     * Erases the user object with specified
     * ID value from the Photoshop registry.
     */
    eraseCustomOptions(key: string): void

    /*
     * Plays an Action Manager event.
     */
    executeAction(eventID: number, descriptor?: ActionDescriptor, displayDialogs?: DialogModes): void

    /*
     * Obtains information about a
     * predefined or recorded action.
     */
    executeActionGet(reference: ActionReference): void

    /*
     * Determines whether the feature
     * specified by name is enabled.
     * The following features are supported
     * as values for name:
     * "photoshop/extended"
     * "photoshop/standard"
     * "photoshop/trial"
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 48
     */
    featureEnabled(name: string): void

    /*
     * Retreives user objects in the
     * Photoshop registry for the ID with
     * value key.
     */
    getCustomOptions(key: string): void

    /*
     * Returns true if Quicktime is installed.
     */
    isQuicktimeAvailable(): void

    /*
     * Loads a support file (as opposed to a
     * Photoshop image document) from
     * the specified location.
     */
    load(document: File): void

    /*
     * DEPRECATED for Adobe Photoshop CS4.
     */
    makeContactSheet(inputFiles: File[], options?: ContactSheetOptions): void

    /*
     * DEPRECATED for Adobe Photoshop CS4.
     */
    makePDFPresentation(inputFiles: File[], outputFiles: File, options?: PresentationOptions): void

    /*
     * DEPRECATED for Adobe Photoshop CS4.
     */
    makePhotoGallery(inputFolder: File, outputFolder: File, options?: GalleryOptions): void

    /*
     * DEPRECATED for Adobe Photoshop CS6.
     * Use provided script:
     * runphotomergeFromScript = true;
     * $.evalFile( app.path +
     * "Presets/Scripts/Photomerge.jsx")
     * photomerge.createPanorama(
     * fileList, displayDialog );
     * Merges multiple files into one, with
     * user interaction required.
     */
    makePhotomerge(inputFiles: File[]): void

    /*
     * DEPRECATED for Adobe Photoshop CS4.
     * Method Parameter type Returns What it does (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 49
     */
    makePicturePackage(inputFiles: File[], options?: PicturePackageOptions): void

    /*
     * Opens the specified document.
     * Use the optional as parameter to
     * specify the file format using the
     * constants in OpenDocumentType; or,
     * you can specify a file format together
     * with its open options using these
     * objects:
     * CameraRAWOpenOptions
     * DICOMOpenOptions
     * EPSOpenOptions
     * PDFOpenOptions
     * PhotoCDOpenOptions
     * RawFormatOpenOptions
     * Use the optional parameter
     * asSmartObject (default: false) to
     * create a smart object around the
     * opened document.
     * See the Application sample scripts for
     * an example of using the File object
     * in the open method.
     */
    open(document: File, as?: any, asSmartObject?: boolean): void
    open(document: File, as?: OpenDocumentType, asSmartObject?: boolean): void

    /*
     * Invokes the Photoshop Open dialog
     * box for the user to select files.
     * Returns an array of File objects for
     * the files selected in the dialog.
     */
    openDialog(): void

    /*
     * Purges one or more caches.
     */
    purge(target: PurgeTarget): void

    /*
     * Saves a customized settings object in
     * the Photoshop registry.
     * key is the unique identifier for your
     * custom settings.
     * customObject is the object to save in
     * the registry.
     * persistent indicates whether the
     * object should persist once the script
     * has finished.
     */
    putCustomOptions(key: string, customObject: ActionDescriptor, persistent?: boolean): void

    /*
     * Pauses the script while the
     * application refreshes. Use to slow
     * down execution and show the results
     * to the user as the script runs. Use
     * carefully; your script runs much more
     * slowly when using this method.
     */
    refresh(): void

    /*
     * Force the font list to get updated.
     */
    refreshFonts(): void

    /*
     * Run a menu item given the menu ID.
     * Method Parameter type Returns What it does (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 50
     * Application sample scripts
     * Application.jsx
     * This script invokes an alert box to display Properties important to an
     * application such as version number,
     * the path to the application, the amount of memory available, and the
     * number of documents open.
     * When a user presses the OK button on the alert box, a second dialog
     * opens, which asks users whether they
     * would like the foreground and background colors set for the document
     * presently open. If no document is
     * open, the script opens a new document for the user.
     * The script (with no document open) produces a progression of three
     * dialogs.
     * //Create a Welcome message
     * // Use the name and version properties of the application object to
     * // Append the application’s name and version to the Welcome message
     * // use "\r" to insert a carriage return
     * // use the combination operator += to append info to the message
     * var message = "Welcome to " + app.name
     * message += " version " + app.version + "\r\r"
     * // find out where Adobe Photoshop CS6 is installed
     * // and add the path to the message
     * // add the optional parameter fsName to the path property
     * // to display the file system name in the most common format
     * message += "I’m installed in " + app.path.fsName + "\r\r"
     * // see how much memory Adobe Photoshop CS6 has to play with
     * message += "You have this much memory available for Adobe Photoshop CS6:
     * " +
     * app.freeMemory + "\r\r"
     * // use the length property of the documents object to
     * // see how many documents are open
     * var documentsOpen = app.documents.length
     * message += "You currently have " + documentsOpen + " document(s)
     * open.\r\r"
     * // display the message to the user
     * alert(message)
     * // answer will be true for a "Yes" answer and false for a "No" answer
     * var answer = confirm("Set the foreground and background to my favorite
     * colors?")
     */
    runMenuItem(menuID: number): void

    /*
     * Returns false if dialog is cancelled,
     * true otherwise.
     */
    showColorPicker(): void

    /*
     * Converts from a string ID to a runtime
     * ID.
     */
    stringIDToTypeID(stringID: string): void

    /*
     * Toggle palette visibility.
     */
    togglePalettes(): void

    /*
     * Converts from a runtime ID to a
     * character ID.
     */
    typeIDToCharID(typeID: number): void

    /*
     * Converts from a runtime ID to a string
     * ID.
     * Method Parameter type Returns What it does (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 51
     * // set the colors
     * if (answer) {
     * // I don’t have a favorite color. Why did I ask you may wonder?
     * app.foregroundColor.rgb.red = Math.random() * 255
     * app.foregroundColor.rgb.green = Math.random() * 255
     * app.foregroundColor.rgb.blue = Math.random() * 255
     * app.backgroundColor.rgb.red = Math.random() * 255
     * app.backgroundColor.rgb.green = Math.random() * 255
     * app.backgroundColor.rgb.blue = Math.random() * 255
     * }
     * // Open a document
     * if (app.documents.length == 0) {
     * // use the application’s path and the offset to the samples folder
     * var sampleDocToOpen = File(app.path + "/Samples/Fish.psd")
     * // compose a message with the name of the file
     * message = "Would you like me to open a sample for you? ("
     * message += sampleDocToOpen.fsName
     * message += ")"
     * // ask the user another question
     * answer = confirm(message)
     * // open the document accordingly
     * if (answer) {
     * open(sampleDocToOpen)
     * }
     * }
     * PDFPresentation.jsx
     * This script presents a progression of images as an Adobe PDF slide show.
     * // use all the files in the Samples folder
     * var inputFolder = new Folder(app.path + "/Samples/")
     * // see if we have something interesting
     * if (inputFolder != null) {
     * // get all the files found in this folder that are Adobe Photoshop CS6
     * (.psd
     * format)
     * var inputFiles = inputFolder.getFiles("*.psd")
     * // output to the desktop
     * var outputFile = File("~/Desktop/JavaScriptPresentation.pdf")
     * // there are defaults but I like to set the options myself
     * var options = new PresentationOptions
     * options.presentation = true
     * options.view = true
     * options.autoAdvance = true
     * options.interval = 5
     * options.loop = true
     * options.transition = TransitionType.RANDOM
     * // create the presentation
     * makePDFPresentation(inputFiles, outputFile, options)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 52
     * alert("Presentation file saved to: " + outputFile.fsName)
     * }
     * 
     */
    typeIDToStringID(typeID: number): void

}

interface ArtLayer {
    /*
     * True to completely lock the contents and
     * settings of this layer.
     * 
     */
    allLocked: boolean

    /*
     * The blending mode.
     * 
     */
    blendMode: BlendMode

    /*
     * An array of coordinates that describes the
     * bounding rectangle of the layer.
     * 
     */
    bounds: UnitValue[]

    /*
     * The interior opacity of the layer, a
     * percentage value.
     * 
     */
    fillOpacity: number

    /*
     * The density of the filter mask (between
     * 0.0 and 250.0)
     * 
     */
    filterMaskDensity: number

    /*
     * The feather of the filter mask (between 0.0
     * and 250.0)
     * 
     */
    filterMaskFeather: number

    /*
     * True if this layer is grouped with the layer
     * beneath it.
     * 
     */
    grouped: boolean

    /*
     * True if this is the background layer of the
     * document. A document can have only one
     * background layer. If there is no background layer,
     * setting this to true causes this to become the
     * background layer.
     * 
     */
    isBackgroundLayer: boolean

    /*
     * Sets the type (such as 'text layer') for an
     * empty layer.
     * Valid only when the layer is empty and when
     * isBackgroundLayer is false. See
     * isBackgroundLayer.
     * You can use the kind property to make a background
     * layer a normal layer; however, to make a layer a
     * background layer, you must set isBackgroundLayer
     * to true.
     * 
     */
    kind: LayerKind

    /*
     * The density of the layer mask (between
     * 0.0 and 100.0)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 54
     * 
     */
    layerMaskDensity: number

    /*
     * The feather of the layer mask (between
     * 0.0 and 250.0)
     * 
     */
    layerMaskFeather: number

    /*
     * The layers linked to this layer. See
     * ArtLayer.link.
     * 
     */
    linkedLayers: ArtLayer[]

    /*
     * The name.
     * 
     */
    name: string

    /*
     * The master opacity of the layer, a
     * percentage value.
     * 
     */
    opacity: number

    /*
     * The object's container.
     * 
     */
    parent: Document

    /*
     * True if the pixels in the layer’s image
     * cannot be edited using the paintbrush tool.
     * 
     */
    pixelsLocked: boolean

    /*
     * True if the pixels in the layer’s image
     * cannot be moved within the layer.
     * 
     */
    positionLocked: boolean

    /*
     * The text item that is associated with the
     * layer.
     * Valid only when kind = LayerKind.TEXT.
     * 
     */
    textItem: TextItem

    /*
     * True if editing is confined to the opaque
     * portions of the layer.
     * 
     */
    transparentPixelsLocked: boolean

    /*
     * The class name of the referenced
     * artLayer object.
     * 
     */
    typename: string

    /*
     * The density of the vector mask (between
     * 0.0 and 250.0)
     * 
     */
    vectorMaskDensity: number

    /*
     * The feather of the vector mask (between
     * 0.0 and 250.0)
     * 
     */
    vectorMaskFeather: number

    /*
     * True if the layer is visible.
     * 
     */
    visible: boolean

    /*
     * Metadata for the layer.
     * Property Value type What it is (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 55
     * Methods
     * 
     */
    xmpMetadata: xmpMetadata

    /*
     * Adjusts the brightness in the
     * range [-100..100] and contrast
     * [-100..100].
     */
    adjustBrightnessContrast(brightness: number, contrast: number): void

    /*
     * Adjusts the color balance of the
     * layer’s component channels. For
     * shadows, midtones, and
     * highlights, the array must
     * include three values in the
     * range [-100..100], which
     * represent cyan or red, magenta
     * or green, and yellow or blue,
     * when the document mode is
     * CMYK or RGB.
     * See Document.mode.
     */
    adjustColorBalance(shadows?: number[], midtones?: number[], highlights?: number[], preserveLuminosity?: boolean): void

    /*
     * Adjusts the tonal range of the
     * selected channel using up to
     * fourteen points.
     * Each value in the curveShape
     * array is a point pair, an array of
     * an x and y integer value.
     */
    adjustCurves(curveShape: number[][]): void

    /*
     * Adjusts the levels of the
     * selected channels
     */
    adjustLevels(inputRangeStart: number, inputRangeEnd: number, inputRangeGamma: number, outputRangeStart: number, outputRangeEnd: number): void

    /*
     * Applies the Add Noise filter
     * amount is a percentage value.
     */
    applyAddNoise(amount: number, distribution: NoiseDistribution, monochromatic: boolean): void

    /*
     * Applies the Average filter.
     */
    applyAverage(): void

    /*
     * Applies the Blur filter.
     */
    applyBlur(): void

    /*
     * Applies the Blur More filter.
     */
    applyBlurMore(): void

    /*
     * Applies the Clouds filter.
     */
    applyClouds(): void

    /*
     * Applies a custom filter.
     * The characteristics array has
     * 25 members.
     * See Adobe Photoshop CS6 Help
     * for specific instructions.
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 56
     */
    applyCustomFilter(characteristics: number[], scale: number, offset: number): void

    /*
     * Applies the De-Interlace filter.
     */
    applyDeInterlace(eliminateFields: EliminateFields, createFields: CreateFields): void

    /*
     * Applies the Despeckle filter.
     */
    applyDespeckle(): void

    /*
     * Applies the Difference Clouds
     * filter.
     */
    applyDifferenceClouds(): void

    /*
     * Applies the Diffuse Glow filter.
     */
    applyDiffuseGlow(graininess: number, glowAmount: number, clearAmount: number): void

    /*
     * Applies the Displace filter using
     * the specified horizontal and
     * vertical scale, mapping type,
     * treatment of undistorted areas,
     * and path to the distortion
     * image map.
     */
    applyDisplace(horizontalScale: number, verticalScale: number, displacement: DisplacementMapType, undefinedareas: UndefinedAreas, displacementMapFiles: File): void

    /*
     * Applies the Dust & Scratches
     * filter.
     */
    applyDustAndScratches(radius: number, threshold: number): void

    /*
     * Applies the Gaussian Blur filter
     * within the specified radius (in
     * pixels)
     */
    applyGaussianBlur(radius: number): void

    /*
     * Applies the Glass filter.
     * scaling is a percentage value.
     */
    applyGlassEffect(distortion: number, smoothness: number, scaling: number, invert?: boolean, texture?: TextureType, textureFile?: File): void

    /*
     * Applies the High Pass filter
     * within the specified radius.
     * Method Parameter type Returns What it does (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 57
     */
    applyHighPass(radius: number): void

    /*
     * Applies the Lens Blur filter.
     * source: The source for the
     * depth map (default:
     * DepthMapSource.NONE)
     * focalDistance : The blur focal
     * distance for the depth map
     * (default: 0).
     * invertDepthMask : True if the
     * depth map is inverted (default:
     * false).
     * shape: The shape of the iris
     * (default: Geometry.HEXAGON)
     * radius: The radius of the iris
     * (default: 15).
     * bladeCurvature: The blade
     * curvature of the iris (default: 0).
     * rotation: The rotation of the
     * iris (default: 0)
     * brightness: The brightness for
     * the specular highlights (default:
     * 0).
     * threshold: The threshold for
     * the specular highlights (default:
     * 0).
     * amount: The amount of noise
     * (default: 0)
     * distribution: The distribution
     * value for the noise (default:
     * NoiseDistribution.UNIFORM).
     * monochromatic: True if the
     * noise is monochromatic
     * (default: false).
     */
    applyLensBlur(source?: DepthMapSource, focalDistance?: number, invertDepthMap?: boolean, shape?: Geometry, radius?: number, bladeCurvature?: number, rotation?: number, brightness?: number, threshold?: number, amount?: number, distribution?: NoiseDistribution, monochromatic?: boolean): void

    /*
     * Applies the Lens Flare filter with
     * the specified brightness (0 - 300,
     * as a percentage), the x and y
     * coordinates (unit value) of the
     * flare center, and the lens type.
     */
    applyLensFlare(brightness: number, flareCenter: UnitValue[], lensType: LensType): void

    /*
     * Applies the Maximum filter
     * within the specified radius (in
     * pixels).
     */
    applyMaximum(radius: number): void

    /*
     * Applies the Median Noise filter
     * within the specified radius (in
     * pixels).
     * Method Parameter type Returns What it does (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 58
     */
    applyMedianNoise(radius: number): void

    /*
     * Applies the Minimum filter
     * within the specified radius (in
     * pixels) (1 - 100).
     */
    applyMinimum(radius: number): void

    /*
     * Applies the Motion Blur filter.
     */
    applyMotionBlur(angle: number, radius: number): void

    /*
     * Applies the NTSC colors filter.
     */
    applyNTSC(): void

    /*
     * Applies the Ocean Ripple filter.
     */
    applyOceanRipple(size: number, magnitude: number): void

    /*
     * Moves the layer the specified
     * amount horizontally and
     * vertically (min/max amounts
     * depend on layer size), leaving
     * an undefined area at the layer’s
     * original location.
     */
    applyOffset(horizontal: UnitValue, vertical: UnitValue, undefinedAreas: OffsetUndefinedAreas): void

    /*
     * Applies the Pinch filter.
     * amount is a percentage value.
     */
    applyPinch(amount: number): void

    /*
     * Applies the Polar Coordinates
     * filter.
     */
    applyPolarCoordinates(conversion: PolarConversionType): void

    /*
     * Applies the Radial Blur filter in
     * the specified amount, using
     * either a spin or zoom effect and
     * the specified quality.
     */
    applyRadialBlur(amount: number, blurMethod: RadialBlurMethod, blurQuality: RadialBlurQuality): void

    /*
     * Applies the Ripple filter in the
     * specified amount, throughout
     * the image and in the specified
     * size.
     */
    applyRipple(amount: number, size: RippleSize): void

    /*
     * Applies the Sharpen filter.
     */
    applySharpen(): void

    /*
     * Applies the Sharpen Edges filter.
     */
    applySharpenEdges(): void

    /*
     * Applies the Sharpen More filter.
     */
    applySharpenMore(): void

    /*
     * Applies the Shear filter. The
     * curve defines a curve with
     * [2..255] points.
     * Each value in the curve array is a
     * point pair, an array of an x and y
     * integer value.
     * Method Parameter type Returns What it does (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 59
     */
    applyShear(curve: number[][], undefinedAreas: UndefinedAreas): void

    /*
     * Applies the Smart Blur filter.
     */
    applySmartBlur(radius: number, threshold: number, blurQuality: SmartBlurQuality, mode: SmartBlurMode): void

    /*
     * Applies the Spherize filter.
     * amount is a percentage value.
     */
    applySpherize(amount: number, mode: SpherizeMode): void

    /*
     * Applies the specified style to the
     * layer. You must use a style from
     * the Styles list in the Layer Styles
     * Palette.
     */
    applyStyle(styleName: string): void

    /*
     * Applies the Texture Fill filter.
     */
    applyTextureFill(textureFile: File): void

    /*
     * Applies the Twirl filter.
     */
    applyTwirl(angle: number): void

    /*
     * Applies the Unsharp Mask filter.
     * (amount is a percentage value.
     */
    applyUnSharpMask(amount: number, radius: number, threshold: number): void

    /*
     * Applies the Wave filter.
     * Scale factors are percentage
     * values.
     */
    applyWave(generatorNumber: number, minimumWavelength: number, maximumWavelength: number, minimumAmplitude: number, maximumAmplitude: number, horizontalScale: number, verticalScale: number, waveType: WaveType, undefinedAreas: UndefinedAreas, randomSeed: number): void

    /*
     * Applies the Zigzag filter.
     */
    applyZigZag(amount: number, ridges: number, style: ZigZagType): void

    /*
     * Adjusts the contrast of the
     * selected channels automatically.
     */
    autoContrast(): void

    /*
     * Adjusts the levels of the
     * selected channels using the
     * auto levels option.
     */
    autoLevels(): void

    /*
     * Cuts the layer without moving it
     * to the clipboard.
     * Method Parameter type Returns What it does (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 60
     */
    clear(): void

    /*
     * Copies the layer to the
     * clipboard. When the optional
     * argument is set to true, a
     * merged copy is performed (that
     * is, all visible layers are copied to
     * the clipboard).
     */
    copy(merge?: boolean): void

    /*
     * Cuts the layer to the clipboard.
     */
    cut(): void

    /*
     * Converts a color image to a
     * grayscale image in the current
     * color mode by assigning equal
     * values of each component color
     * to each pixel.
     */
    desaturate(): void

    /*
     * ArtLayer
     * or
     * LayerSet
     * Creates a duplicate of the object
     * on the screen.
     */
    duplicate(relativeObject?: ArtLayer, insertionLocation?: ElementPlacement): void
    duplicate(relativeObject?: LayerSet, insertionLocation?: ElementPlacement): void

    /*
     * Redistributes the brightness
     * values of pixels in an image to
     * more evenly represent the
     * entire range of brightness levels
     * within the image.
     */
    equalize(): void

    /*
     * Inverts the colors in the layer by
     * converting the brightness value
     * of each pixel in the channels to
     * the inverse value on the
     * 256-step color-values scale.
     */
    invert(): void

    /*
     * Links the layer with the
     * specified layer.
     */
    link(with_: LayerSet): void

    /*
     * Merges the layer down,
     * removing the layer from the
     * document; returns a reference
     * to the art layer that this layer is
     * merged into.
     * Method Parameter type Returns What it does (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 61
     */
    merge(): void

    /*
     * Modifies a targeted (output)
     * color channel using a mix of the
     * existing color channels in the
     * image.
     * The outputChannels
     * parameter is an array of channel
     * specifications. For each
     * component channel, specify a
     * list of adjustment values in the
     * range [-200..200] followed by a
     * 'constant' value [-200..200].)
     * When monochrome = true, the
     * maximum number of channel
     * value specifications is 1.
     * Valid only when docRef.mode =
     * DocumentMode.RGB or CMYK.
     * RGB arrays must include four
     * values. CMYK arrays must
     * include five values.
     */
    mixChannels(outputChannels: number[][], monochrome?: boolean): void

    /*
     * Moves the layer relative to the
     * object specified in parameters.
     * For art layers, only the constant
     * values ElementPlacement.
     * PLACEBEFORE and PLACEAFTER
     * are valid.
     * For layer sets, only the constant
     * values ElementPlacement.
     * PLACEBEFORE and INSIDE are
     * valid.
     */
    move(relativeObject: ArtLayer, insertionLocation: ElementPlacement): void
    move(relativeObject: LayerSet, insertionLocation: ElementPlacement): void

    /*
     * Adjust the layer’s color balance
     * and temperature as if a color
     * filter had been applied.
     * density is a percentage value.
     */
    photoFilter(fillColor?: SolidColor, density?: number, preserveLuminosity?: boolean): void

    /*
     * Specifies the number of tonal
     * levels for each channel and then
     * maps pixels to the closest
     * matching level.
     */
    posterize(levels: number): void

    /*
     * Converts the targeted contents
     * in the layer into a flat, raster
     * image.
     */
    rasterize(target: RasterizeType): void

    /*
     * Deletes the object.
     * Method Parameter type Returns What it does (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 62
     * ArtLayer sample Script
     * The following script opens all the files in the samples folder, creating
     * one multi-layered document. Each
     * layer is pasted into one of four quadrants and given 50% transparency.
     * Finally the layers are sorted by
     * name.
     * ArtLayer.jsx
     */
    remove(): void

    /*
     * Resizes the layer to the specified
     * dimensions (as a percentage of
     * its current size) and places it in
     * the specified position.
     */
    resize(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void

    /*
     * Rotates rotates the layer around
     * the specified anchor point
     * (default: MIDDLECENTER).
     */
    rotate(angle: number, anchor?: AnchorPosition): void

    /*
     * Modifies the amount of a
     * process color in a specified
     * primary color without affecting
     * the other primary colors.
     * Each color array must have four
     * values.
     */
    selectiveColor(selectionMethod: AdjustmentReference, reds?: number[], yellows?: number[], greens?: number[], cyans?: number[], blues?: number[], magentas?: number[], whites?: number[], neutrals?: number[], blacks?: number[]): void

    /*
     * Adjusts the range of tones in the
     * image’s shadows and highlights.
     * Amounts and widths are
     * percentage values. Radius
     * values are in pixels.
     */
    shadowHighlight(shadowAmount?: number, shadowWidth?: number, shadowRadius?: number, highlightAmount?: number, highlightWidth?: number, highlightRadius?: number, colorCorrection?: number, midtoneContrast?: number, blackClip?: number, whiteClip?: number): void

    /*
     * Converts grayscale or color
     * images to high-contrast, B/W
     * images by converting pixels
     * lighter than the specified
     * threshold to white and pixels
     * darker than the threshold to
     * black.
     */
    threshold(level: number): void

    /*
     * Moves the layer the specified
     * amount (in the given unit)
     * relative to its current position.
     */
    translate(deltaX?: UnitValue, deltaY?: UnitValue): void

    /*
     * Unlinks the layer.
     * Method Parameter type Returns What it does (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 63
     * // Save the current preferences
     * var startRulerUnits = app.preferences.rulerUnits
     * var startTypeUnits = app.preferences.typeUnits
     * var startDisplayDialogs = app.displayDialogs
     * // Set Adobe Photoshop CS6 to use pixels and display no dialogs
     * app.preferences.rulerUnits = Units.PIXELS
     * app.preferences.typeUnits = TypeUnits.PIXELS
     * app.displayDialogs = DialogModes.NO
     * //Close all the open documents
     * while (app.documents.length) {
     * app.activeDocument.close()
     * }
     * // Create a new document to merge all the samples into
     * var mergedDoc = app.documents.add(1000, 1000, 72, "Merged Samples",
     * NewDocumentMode.RGB, DocumentFill.TRANSPARENT, 1)
     * // Use the path to the application and append the samples folder
     * var samplesFolder = Folder(app.path + "/Samples/")
     * //Get all the files in the folder
     * var fileList = samplesFolder.getFiles()
     * // open each file
     * for (var i = 0; i < fileList.length; i++) {
     * // The fileList is folders and files so open only files
     * if (fileList[i] instanceof File) {
     * open(fileList[i])
     * // use the document name for the layer name in the merged document
     * var docName = app.activeDocument.name
     * // flatten the document so we get everything and then copy
     * app.activeDocument.flatten()
     * app.activeDocument.selection.selectAll()
     * app.activeDocument.selection.copy()
     * // don’t save anything we did
     * app.activeDocument.close(SaveOptions.DONOTSAVECHANGES)
     * // make a random selection on the document to paste into
     * // by dividing the document up in 4 quadrants and pasting
     * // into one of them by selecting that area
     * var topLeftH = Math.floor(Math.random() * 2)
     * var topLeftV = Math.floor(Math.random() * 2)
     * var docH = app.activeDocument.width.value / 2
     * var docV = app.activeDocument.height.value / 2
     * var selRegion = Array(Array(topLeftH * docH, topLeftV * docV),
     * Array(topLeftH * docH + docH, topLeftV * docV),
     * Array(topLeftH * docH + docH, topLeftV * docV + docV),
     * Array(topLeftH * docH, topLeftV * docV + docV),
     * Array(topLeftH * docH, topLeftV * docV))
     * app.activeDocument.selection.select(selRegion)
     * app.activeDocument.paste()
     * // change the layer name and opacity
     * app.activeDocument.activeLayer.name = docName
     * app.activeDocument.activeLayer.fillOpacity = 50
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 64
     * }
     * }
     * // sort the layers by name
     * for (var x = 0; x < app.activeDocument.layers.length; x++) {
     * for (var y = 0; y < app.activeDocument.layers.length - 1 - x; y++) {
     * // Compare in a non-case sensitive way
     * var doc1 = app.activeDocument.layers[y].name
     * var doc2 = app.activeDocument.layers[y + 1].name
     * if (doc1.toUpperCase() > doc2.toUpperCase()) {
     * app.activeDocument.layers[y].move(app.activeDocument.layers[y+1],
     * ElementPlacement.PLACEAFTER)
     * }
     * }
     * }
     * // Reset the application preferences
     * app.preferences.rulerUnits = startRulerUnits
     * app.preferences.typeUnits = startTypeUnits
     * app.displayDialogs = startDisplayDialogs
     * 
     */
    unlink(): void

}

interface ArtLayers {
    /*
     * The number of elements in the artLayers
     * collection.
     * 
     */
    length: number

    /*
     * The object's container.
     * 
     */
    parent: Document

    /*
     * The class name of the referenced
     * artLayers object.
     * 
     */
    typename: string

    /*
     * Creates a new art layer in the
     * document and adds the new object to
     * this collection.
     */
    add(): void

    /*
     * Get the first element in the artLayers
     * collection with the provided name.
     */
    getByName(name: string): void

    /*
     * Removes all elements from the
     * artLayers collection.
     * 
     */
    removeAll(): void

}

interface BatchOptions {
    /*
     * The type of destination for the
     * processed files (default:
     * BatchDestinationType.NODESTINATION).
     * 
     */
    destination: BatchDestinationType

    /*
     * The folder location for the processed
     * files.
     * Valid only when destination =
     * BatchDestinationType.FOLDER.
     * 
     */
    destinationFolder: Folder

    /*
     * The file in which to log errors
     * encountered.
     * To display errors on the screen (and stop batch
     * processing when errors occur) leave blank.
     * 
     */
    errorFile: File

    /*
     * A list of file naming options
     * (maximum: 6).
     * Valid only when destination =
     * BatchDestinationType.FOLDER.
     * 
     */
    fileNaming: FileNamingType[]

    /*
     * True to make the final file names
     * Macintosh compatible (default: true).
     * Valid only when destination =
     * BatchDestinationType.FOLDER.
     * 
     */
    macintoshCompatible: boolean

    /*
     * True to override action open
     * commands (default: false).
     * 
     */
    overrideOpen: boolean

    /*
     * True to override save as action steps
     * with the specified destination (default: false).
     * Valid only when destination =
     * BatchDestinationType.FOLDER or
     * SAVEANDCLOSE.
     * 
     */
    overrideSave: boolean

    /*
     * The starting serial number to use in
     * naming files (default: 1).
     * Valid only when destination =
     * BatchDestinationType.FOLDER.
     * 
     */
    startingSerial: number

    /*
     * True to suppress the file open options
     * dialogs (default: false).
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 67
     * 
     */
    suppressOpen: boolean

    /*
     * True to suppress the color profile
     * warnings (default: false).
     * 
     */
    suppressProfile: boolean

    /*
     * The class name of the referenced
     * batchOptions object.
     * 
     */
    typename: string

    /*
     * True to make the final file name Unix
     * compatible (default: true).
     * Valid only when destination =
     * BatchDestinationType.FOLDER.
     * 
     */
    unixCompatible: boolean

    /*
     * True to make the final file names
     * Windows compatible (default: true).
     * Valid only when destination =
     * BatchDestinationType.FOLDER.
     * Property Value type What it is (Continued)
     * 
     */
    windowsCompatible: boolean

}

interface BitmapConversionOptions {
    /*
     * The angle (in degrees) at which to
     * orient individual dots. See shape.
     * Valid only when method =
     * BitmapConversionType.HALFTONESCREEN.
     * 
     */
    angle: number

    /*
     * The number of printer dots (per inch) to
     * use.
     * Valid only when method =
     * BitmapConversionType.HALFTONESCREEN.
     * 
     */
    frequency: number

    /*
     * The conversion method to use (default:
     * BitmapConversionType.DIFFUSIONDITHER).
     * 
     */
    method: BitmapConversionType

    /*
     * The name of the pattern to use.
     * For information about pre-installed valid patterns,
     * see Adobe Photoshop CS6 Help on the bitmap
     * conversion command, or view the options availabe
     * in the Custom Color drop down box after choosing
     * the bitmap conversion command.
     * Valid only when method =
     * BitmapConversionType.CUSTOMPATTERN.
     * 
     */
    patternName: string

    /*
     * The output resolution in pixels per inch
     * (default: 72.0).
     * 
     */
    resolution: number

    /*
     * The dot shape to use.
     * Valid only when method =
     * BitmapConversionType.HALFTONESCREEN.
     * 
     */
    shape: BitmapHalfToneType

    /*
     * The class name of the referenced
     * bitmapConversionOptions object.
     * 
     */
    typename: string

}

interface BMPSaveOptions {
    /*
     * True to save the alpha channels.
     * 
     */
    alphaChannels: boolean

    /*
     * The number of bits per channel.
     * 
     */
    depth: BMPDepthType

    /*
     * True to write the image from top
     * to bottom (default: false).
     * Available only when osType =
     * OperatingSystem.WINDOWS.
     * 
     */
    flipRowOrder: boolean

    /*
     * The target OS.
     * (default: OperatingSystem.WINDOWS).
     * 
     */
    osType: OperatingSystem

    /*
     * True to use RLE compression.
     * Available only when osType =
     * OperatingSystem.WINDOWS.
     * 
     */
    rleCompression: boolean

    /*
     * The class name of the referenced
     * BMPSaveOptions object.
     * 
     */
    typename: string

}

interface CameraRAWOpenOptions {
    /*
     * The number of bits per channel.
     * 
     */
    bitsPerChannel: BitsPerChannelType

    /*
     * The blue hue of the shot.
     * 
     */
    blueHue: number

    /*
     * The blue saturation of the shot.
     * 
     */
    blueSaturation: number

    /*
     * The brightness of the shot.
     * 
     */
    brightness: number

    /*
     * The chromatic aberration B/Y of the
     * shot.
     * 
     */
    chromaticAberrationBY: number

    /*
     * The chromatic aberration R/C of the
     * shot
     * 
     */
    chromaticAberrationRC: number

    /*
     * The color noise reduction of the
     * shot.
     * 
     */
    colorNoiseReduction: number

    /*
     * The colorspace for the image.
     * 
     */
    colorSpace: ColorSpaceType

    /*
     * The contrast of the shot.
     * 
     */
    contrast: number

    /*
     * The exposure of the shot.
     * 
     */
    exposure: number

    /*
     * The green hue of the shot.
     * 
     */
    greenHue: number

    /*
     * The green saturation of the shot.
     * 
     */
    greenSaturation: number

    /*
     * The luminance smoothing of the
     * shot.
     * 
     */
    luminanceSmoothing: number

    /*
     * The red hue of the shot.
     * 
     */
    redHue: number

    /*
     * The red saturation of the shot.
     * 
     */
    redSaturation: number

    /*
     * The resolution of the document in
     * pixels per inch.
     * 
     */
    resolution: number

    /*
     * The saturation of the shot.
     * 
     */
    saturation: number

    /*
     * The global settings for all Camera
     * RAW options. Default:
     * CameraRAWSettingsType.CAMERA.
     * 
     */
    settings: CameraRAWSettingsType

    /*
     * The shadows of the shot.
     * 
     */
    shadows: number

    /*
     * The shadow tint of the shot.
     * 
     */
    shadowTint: number

    /*
     * The sharpness of the shot.
     * 
     */
    sharpness: number

    /*
     * The size of the new document.
     * 
     */
    size: CameraRAWSize

    /*
     * The temperature of the shot.
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 71
     * 
     */
    temperature: number

    /*
     * The tint of the shot.
     * 
     */
    tint: number

    /*
     * The class name of the referenced
     * cameraRAWOpenOptions object.
     * 
     */
    typename: string

    /*
     * The vignetting amount of the shot.
     * 
     */
    vignettingAmount: number

    /*
     * The vignetting mid point of the
     * shot.
     * 
     */
    vignettingMidpoint: number

    /*
     * The white balance options for the
     * image. These are lighting conditions that affect
     * color balance.
     * Property Value type What it is (Continued)
     * 
     */
    whiteBalance: WhiteBalanceType

}

interface Channel {
    /*
     * The color of the channel.
     * Not valid when kind = ChannelType.COMPONENT.
     * 
     */
    color: SolidColor

    /*
     * A histogram of the color of the channel. The
     * array contains 256 members.
     * Not valid when kind = ChannelType.COMPONENT. For
     * component channel histogram values, use the histogram
     * property of the Document object instead.
     * 
     */
    histogram: number[]

    /*
     * The type of the channel.
     * 
     */
    kind: ChannelType

    /*
     * The name of the channel.
     * 
     */
    name: string

    /*
     * The opacity to use for alpha channels or the
     * solidity to use for spot channels.
     * Valid only when kind = ChannelType.MASKEDAREA or
     * SELECTEDAREA.
     * 
     */
    opacity: number

    /*
     * The containing document.
     * 
     */
    parent: Document

    /*
     * The class name of the referenced channel
     * object.
     * 
     */
    typename: string

    /*
     * True if the channel is visible.
     * 
     */
    visible: boolean

    /*
     * Duplicates the channel.
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 73
     */
    duplicate(targetDocument?: Document): void

    /*
     * Merges a spot channel into the
     * component channels.
     */
    merge(): void

    /*
     * Deletes the channel.
     * Method Parameter type Returns What it does
     * 
     */
    remove(): void

}

interface Channels {
    /*
     * The number of elements in the channels
     * collection.
     * 
     */
    length: number

    /*
     * The containing document.
     * 
     */
    parent: Document

    /*
     * The class name of the referenced channels
     * object.
     * 
     */
    typename: string

    /*
     * Creates a new channel object and
     * adds it to this collection.
     */
    add(): void

    /*
     * Get the first element in the channels
     * collection with the provided name.
     */
    getByName(name: string): void

    /*
     * Removes all alpha channel objects
     * from the channels collection.
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 75
     * case DocumentMode.GRAYSCALE:
     * case DocumentMode.INDEXEDCOLOR:
     * visibleChannelCount = 1
     * break;
     * case DocumentMode.DUOTONE:
     * visibleChannelCount = 2
     * break;
     * case DocumentMode.RGB:
     * case DocumentMode.LAB:
     * visibleChannelCount = 3
     * break;
     * case DocumentMode.CMYK:
     * visibleChannelCount = 4
     * break;
     * case DocumentMode.MULTICHANNEL:
     * default:
     * visibleChannelCount = inDocument.channels.length + 1
     * break;
     * }
     * // now get the channels to activate into a local array
     * var aChannelArray = new Array()
     * // index for the active channels array
     * var aChannelIndex = 0
     * for(var channelIndex = 0; channelIndex < inDocument.channels.length;
     * channelIndex++) {
     * if (channelIndex < visibleChannelCount) {
     * aChannelArray[aChannelIndex++] = inDocument.channels[channelIndex]
     * }
     * }
     * // now activate them
     * inDocument.activeChannels = aChannelArray
     * }
     * // Save the current preferences
     * var startRulerUnits = app.preferences.rulerUnits
     * var startTypeUnits = app.preferences.typeUnits
     * var startDisplayDialogs = app.displayDialogs
     * // Set Adobe Photoshop CS6 to use pixels and display no dialogs
     * app.preferences.rulerUnits = Units.PIXELS
     * app.preferences.typeUnits = TypeUnits.PIXELS
     * app.displayDialogs = DialogModes.NO
     * // if there are no documents open then try to open a sample file
     * if (app.documents.length == 0) {
     * open(File(app.path + "/Samples/Fish.psd"))
     * }
     * // get a reference to the working document
     * var docRef = app.activeDocument
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 76
     * // create the output file
     * // first figure out which kind of line feeds we need
     * if ($.os.search(/windows/i) != -1) {
     * fileLineFeed = "Windows"
     * } else {
     * fileLineFeed = "Macintosh"
     * }
     * // create the output file accordingly
     * fileOut = new File("~/Desktop/Histogram.log")
     * fileOut.lineFeed = fileLineFeed
     * fileOut.open("w", "TEXT", "????")
     * // write out a header
     * fileOut.write("Histogram report for " + docRef.name)
     * // find out how many pixels I have
     * var totalCount = docRef.width.value * docRef.height.value
     * // more info to the out file
     * fileOut.write(" with a total pixel count of " + totalCount + "\n")
     * // channel indexer
     * var channelIndex = 0
     * // remember which channels are currently active
     * var myActiveChannels = app.activeDocument.activeChannels
     * // document histogram only works in these modes
     * if (docRef.mode == DocumentMode.RGB ||
     * docRef.mode == DocumentMode.INDEXEDCOLOR ||
     * docRef.mode == DocumentMode.CMYK) {
     * // activate the main channels so we can get the documents histogram
     * TurnOnDocumentHistogramChannels(docRef)
     * // Output the documents histogram
     * OutputHistogram(docRef.histogram, "Luminosity", fileOut)
     * }
     * // local reference to work from
     * var myChannels = docRef.channels
     * // loop through each channel and output the histogram
     * for (var channelIndex = 0; channelIndex < myChannels.length;
     * channelIndex++) {
     * // the channel has to be visible to get a histogram
     * myChannels[channelIndex].visible= true
     * // turn off all the other channels
     * for (var secondaryIndex = 0; secondaryIndex < myChannels.length;
     * secondaryIndex++) {
     * if (channelIndex != secondaryIndex) {
     * myChannels[secondaryIndex].visible= false
     * }
     * }
     * // Use the function to dump the histogram
     * OutputHistogram(myChannels[channelIndex].histogram,
     * myChannels[channelIndex].name, fileOut)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 77
     * }
     * // close down the output file
     * fileOut.close()
     * alert("Histogram file saved to: " + fileOut.fsName)
     * // reset the active channels
     * docRef.activeChannels = myActiveChannels
     * // Reset the application preferences
     * app.preferences.rulerUnits = startRulerUnits
     * app.preferences.typeUnits = startTypeUnits
     * app.displayDialogs = startDisplayDialogs
     * // Utility function that takes a histogram and name
     * // and dumps to the output file
     * function OutputHistogram(inHistogram, inHistogramName, inOutFile) {
     * // find ouch which count has the largest number
     * // I scale everything to this number for the output
     * var largestCount = 0
     * // a simple indexer I can reuse
     * var histogramIndex = 0
     * // see how many samples we have total
     * var histogramCount = 0
     * // search through all and find the largest single item
     * for (histogramIndex = 0; histogramIndex < inHistogram.length;
     * histogramIndex++) {
     * histogramCount += inHistogram[histogramIndex]
     * if (inHistogram[histogramIndex] > largestCount)
     * largestCount = inHistogram[histogramIndex]
     * }
     * // These should match
     * if (histogramCount != totalCount) {
     * alert("Something bad is happening!")
     * }
     * // see how much each "X" is going to count as
     * var pixelsPerX = largestCount / 100
     * // output this data to the file
     * inOutFile.write("One X = " + pixelsPerX + " pixels.\n")
     * // output the name of this histogram
     * inOutFile.write(inHistogramName + "\n")
     * // loop through all the items and output in the following format
     * // 001
     * // 002
     * for (histogramIndex = 0; histogramIndex < inHistogram.length;
     * histogramIndex++) {
     * // I need an extra "0" for this line item to keep everything in line
     * if (histogramIndex < 10)
     * inOutFile.write("0")
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 78
     * // I need an extra "0" for this line item to keep everything in line
     * if (histogramIndex < 100)
     * inOutFile.write("0")
     * // output the index to file
     * inOutFile.write(histogramIndex)
     * // some spacing to make it look nice
     * inOutFile.write(" ")
     * // figure out how many X’s I need
     * var outputX = inHistogram[histogramIndex] / largestCount * 100
     * // output the X’s
     * for (var a = 0; a < outputX; a++)
     * inOutFile.write("X")
     * inOutFile.write("\n")
     * }
     * inOutFile.write("\n")
     * }
     * 
     */
    removeAll(): void

}

interface CMYKColor {
    /*
     * The black color value (as percent).
     * 
     */
    black: number

    /*
     * The cyan color value (as percent).
     * 
     */
    cyan: number

    /*
     * The magenta color value (as percent).
     * 
     */
    magenta: number

    /*
     * The class name of the referenced CMYKColor
     * object.
     * 
     */
    typename: string

    /*
     * The yellow color value (as percent).
     * 
     */
    yellow: number

}

interface ColorSampler {
    /*
     * The color of the color sampler.
     * 
     */
    color: SolidColor

    /*
     * The position of the color sampler in the
     * document. The array (x,y) represents the horizontal and
     * vertical location of the count item.
     * 
     */
    position: UnitValue[]

    /*
     * The containing document.
     * 
     */
    parent: Document

    /*
     * The class name of the referenced ColorSampler
     * object.
     * 
     */
    typename: string

    /*
     * Moves the color sampler to a new location
     * in the document.
     * The position parameter (x,y) represents
     * the new horizontal and vertical locations
     * of the moved color sampler.
     */
    move(position: UnitValue[]): void

    /*
     * Deletes the ColorSampler object.
     * 
     */
    remove(): void

}

interface ColorSamplers {
    /*
     * The number of elements in the
     * ColorSamplers collection.
     * 
     */
    length: number

    /*
     * The containing document.
     * 
     */
    parent: Document

    /*
     * The class name of the referenced
     * ColorSamplers object.
     * 
     */
    typename: string

    /*
     * Creates a new color sampler object
     * and adds it to this collection.
     * The position parameter (x,y)
     * represents the new horizontal and
     * vertical locations of the moved color
     * sampler.
     */
    add(position: UnitValue[]): void

    /*
     * Removes all ColorSampler objects
     * from the ColorSamplers collection.
     * 
     */
    removeAll(): void

}

interface ContactSheetOptions {
    /*
     * True to place the images horizontally
     * (left to right, then top to bottom) first (default: true).
     * 
     */
    acrossFirst: boolean

    /*
     * True to rotate images for the best fit
     * (default: false).
     * 
     */
    bestFit: boolean

    /*
     * True to use the filename as a caption for
     * the image (default: true).
     * 
     */
    caption: boolean

    /*
     * The number of columns to include
     * (default: 5).
     * 
     */
    columnCount: number

    /*
     * True to flatten all layers in the final
     * document (default: true).
     * 
     */
    flatten: boolean

    /*
     * The font used for the caption (default:
     * GalleryFontType.ARIAL).
     * 
     */
    font: GalleryFontType

    /*
     * The font size to use for the caption
     * (default: 12).
     * 
     */
    fontSize: number

    /*
     * The height (in pixels) of the resulting
     * document (default: 720).
     * 
     */
    height: number

    /*
     * The horizontal spacing (in pixels)
     * between images (default: 1).
     * 
     */
    horizontal: number

    /*
     * The document color mode (default:
     * NewDocumentMode.RGB).
     * 
     */
    mode: NewDocumentMode

    /*
     * The resolution of the document in pixels
     * per inch (default: 72.0).
     * 
     */
    resolution: number

    /*
     * The number of rows to use (default: 6).
     * 
     */
    rowCount: number

    /*
     * The class name of the referenced
     * contactSheetOptions object.
     * 
     */
    typename: string

    /*
     * True to auto space the images (default:
     * true).
     * 
     */
    useAutoSpacing: boolean

    /*
     * The vertical spacing (in pixels) between
     * images (default: 1).
     * Valid only when useAutoSpacing = false.
     * 
     */
    vertical: number

    /*
     * The width (in pixels) of the resulting
     * document (default: 576).
     * 
     */
    width: number

}

interface CountItem {
    /*
     * The position of the count item in the document.
     * 
     */
    position: UnitValue[]

    /*
     * The containing document.
     * 
     */
    parent: Document

    /*
     * The class name of the referenced CountItem
     * object.
     * 
     */
    typename: string

    /*
     * Deletes the CountItem object.
     * 
     */
    remove(): void

}

interface CountItems {
    /*
     * The number of elements in the CountItems
     * collection.
     * 
     */
    length: number

    /*
     * The containing document.
     * 
     */
    parent: Document

    /*
     * The class name of the referenced CountItems
     * object.
     * 
     */
    typename: string

    /*
     * Creates a new count item object and
     * adds it to this collection.
     * Parameter position (x,y) represents
     * the horizontal and vertical positions,
     * respectively, of the CountItem object.
     */
    add(position: UnitValue[]): void

    /*
     * Get the first element in the
     * CountItems collection with the
     * provided name.
     */
    getByName(name: string): void

    /*
     * Removes all CountItem objects from
     * the CountItems collection.
     * 
     */
    removeAll(): void

}

interface DCS1_SaveOptions {
    /*
     * (default: DCSType.COLORCOMPOSITE).
     * 
     */
    dCS: DCSType

    /*
     * True to embed the color profile in the
     * document
     * 
     */
    embedColorProfile: boolean

    /*
     * The type of encoding to use for document
     * (default: SaveEncoding.BINARY).
     * 
     */
    encoding: SaveEncoding

    /*
     * True to include halftone screen (default:
     * false).
     * 
     */
    halftoneScreen: boolean

    /*
     * True to use image interpolation (default:
     * false)
     * 
     */
    interpolation: boolean

    /*
     * The type of preview (default:
     * Preview.MACOSEIGHTBIT).
     * 
     */
    preview: Preview

    /*
     * True to include the Transfer functions to
     * compensate for dot gain between the image and film
     * (default: false).
     * 
     */
    transferFunction: boolean

    /*
     * The class name of the referenced
     * DCS1_SaveOptions object.
     * 
     */
    typename: string

    /*
     * True to include vector data.
     * Valid only if the document includes vector data
     * (unrasterized text).
     * 
     */
    vectorData: boolean

}

interface DCS2_SaveOptions {
    /*
     * The type of composite file to create
     * (default: DCSType.NOCOMPOSITE).
     * 
     */
    dCS: DCSType

    /*
     * True to embed the color profile in the
     * document.
     * 
     */
    embedColorProfile: boolean

    /*
     * The type of encoding to use (default:
     * SaveEncoding.BINARY).
     * 
     */
    encoding: SaveEncoding

    /*
     * True to include the halftone screen
     * (default: false).
     * 
     */
    halftoneScreen: boolean

    /*
     * True to use image interpolation (default:
     * false).
     * 
     */
    interpolation: boolean

    /*
     * True to save color channels as multiple
     * files or a single file (default: false).
     * 
     */
    multiFileDCS: boolean

    /*
     * The preview type (default:
     * Preview.MACOSEIGHTBIT).
     * 
     */
    preview: Preview

    /*
     * True to save spot colors.
     * 
     */
    spotColors: boolean

    /*
     * True to include the Transfer functions to
     * compensate for dot gain between the image and film
     * (default: false).
     * 
     */
    transferFunction: boolean

    /*
     * The class name of the referenced
     * DCS2_SaveOptions object.
     * 
     */
    typename: string

    /*
     * True to include vector data.
     * Valid only if the document includes vector data
     * (unrasterized text).
     * 
     */
    vectorData: boolean

}

interface DICOMOpenOptions {
    /*
     * True to make the patient
     * information anonymous.
     * 
     */
    anonymize: boolean

    /*
     * Number of columns in n-up
     * configuration.
     * 
     */
    columns: number

    /*
     * True to reverse (invert) the image.
     * 
     */
    reverse: boolean

    /*
     * The number of rows in n-up
     * configuration.
     * 
     */
    rows: number

    /*
     * True to show overlays.
     * 
     */
    showOverlays: boolean

    /*
     * The class name of the referenced
     * DICOMOpenOptions object.
     * 
     */
    typename: string

    /*
     * The contrast of the image in
     * Houndsfield units.
     * 
     */
    windowLevel: number

    /*
     * The brightness of the image in
     * Houndsfield units.
     * 
     */
    windowWidth: number

}

interface Document {
    /*
     * The selected channels.
     * 
     */
    activeChannels: Channel[]

    /*
     * The history state to use with the
     * history brush.
     * 
     */
    activeHistoryBrushSource: Guide

    /*
     * The selected HistoryState object.
     * 
     */
    activeHistoryState: Guide

    /*
     * The selected layer.
     * 
     */
    activeLayer: ArtLayer

    /*
     * The art layers collection.
     * 
     */
    artLayers: ArtLayers

    /*
     * The background layer of the
     * document.
     * 
     */
    backgroundLayer: ArtLayer

    /*
     * The number of bits per channel.
     * 
     */
    bitsPerChannel: BitsPerChannelType

    /*
     * The channels collection.
     * 
     */
    channels: Channels

    /*
     * The name of the color profile.
     * Valid only when colorProfileType =
     * ColorProfile.CUSTOM or WORKING.
     * 
     */
    colorProfileName: string

    /*
     * Whether the document uses the
     * working color profile, a custom profile, or no
     * profile.
     * 
     */
    colorProfileType: ColorProfileType

    /*
     * The current color samplers
     * associated with this document.
     * 
     */
    colorSamplers: ColorSamplers

    /*
     * The color channels that make up
     * the document; for instance, the Red, Green,
     * and Blue channels for an RGB document.
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 89
     * 
     */
    componentChannels: Channel[]

    /*
     * The current count items.
     * Note: For additional information about count
     * items, see Adobe Photoshop CS6 help
     * on the Count Tool.
     * 
     */
    countItems: CountItems

    /*
     * The full path name of the
     * document.
     * 
     */
    fullName: File

    /*
     * The guides collection.
     * 
     */
    guides: Guides

    /*
     * The height of the document (unit
     * value).
     * 
     */
    height: UnitValue

    /*
     * A histogram showing the number
     * of pixels at each color intensity level for the
     * composite channel. The array c ontains 256
     * members.
     * Valid only when mode = DocumentMode.RGB,
     * CMYK; or INDEXEDCOLOR.
     * 
     */
    histogram: number[]

    /*
     * The history states collection.
     * 
     */
    historyStates: HistoryStates

    /*
     * Metadata about the document.
     * 
     */
    info: DocumentInfo

    /*
     * The layer compositions collection.
     * 
     */
    layerComps: LayerComps

    /*
     * The layers collection.
     * 
     */
    layers: Layers

    /*
     * The layer set collection.
     * 
     */
    layerSets: LayerSets

    /*
     * True if the document a is workgroup
     * document.
     * 
     */
    managed: boolean

    /*
     * The measurement scale for the
     * document.
     * Note: The measurement scale feature is
     * available in the Extended version only.
     * 
     */
    measurementScale: MeasurementScale

    /*
     * The color profile.
     * 
     */
    mode: DocumentMode

    /*
     * The document's name.
     * 
     */
    name: string

    /*
     * The application object that contains
     * this document.
     * 
     */
    parent: Application

    /*
     * The path to the document.
     * 
     */
    path: File

    /*
     * The path items collection.
     * 
     */
    pathItems: PathItems

    /*
     * The (custom) pixel aspect ratio to
     * use.
     * 
     */
    pixelAspectRatio: number

    /*
     * The print settings for the document.
     * Property Value type What it is (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 90
     * 
     */
    printSettings: DocumentPrintSettings

    /*
     * True if the document is in Quick
     * Mask mode.
     * 
     */
    quickMaskMode: boolean

    /*
     * The document’s resolution (in pixels
     * per inch).
     * 
     */
    resolution: number

    /*
     * True if the document has been
     * saved since the last change.
     * 
     */
    saved: boolean

    /*
     * The selected area of the document.
     * 
     */
    selection: Selection

    /*
     * The class name of the Document
     * object.
     * 
     */
    typename: string

    /*
     * The width of the document (unit
     * value).
     * 
     */
    width: UnitValue

    /*
     * XMP metadata for the document.
     * Camera RAW settings for the image are stored
     * here for example.
     * Property Value type What it is (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 91
     * Methods
     * 
     */
    xmpMetadata: xmpMetadata

    /*
     * Counts the number of objects in a
     * document. Available in the Extended
     * Version only.
     * Creates a CountItem object for each
     * object counted.
     * For additional information about how to
     * set up objects to count, see the Count Tool
     * in the Adobe Photoshop CS6 Help
     */
    autoCount(channel: Channel, threshold: number): void

    /*
     * Changes the color profile of the
     * document.
     */
    changeMode(destinationMode: ChangeMode, options?: IndexedConversionOptions): void

    /*
     * Closes the document. If any changes have
     * been made, the script presents an alert
     * with three options: save, do not save,
     * prompt to save. The optional parameter
     * specifies a selection in the alert box
     * (default: SaveOptionsType.
     * PROMPTTOSAVECHANGES).
     */
    close(saving?: SaveOptions): void

    /*
     * Changes the color profile.
     * The destinationProfile parameter must
     * be either a string that names the color
     * mode or Working RGB, Working CMYK,
     * Working Gray, Lab Color (meaning one
     * of the working color spaces or Lab color).
     */
    convertProfile(destinationProfile: string, intent: Intent, blackPointCompensation?: boolean, dither?: boolean): void

    /*
     * Crops the document. The bounds
     * parameter is an array of four coordinates
     * for the region remaining after cropping,
     * [left, top, right, bottom].
     */
    crop(bounds: UnitValue[], angle?: number, width?: UnitValue, height?: UnitValue): void

    /*
     * Creates a duplicate of the document
     * object.
     * The optional parameter name provides the
     * name for the duplicated document.
     * The optional parameter
     * mergeLayersOnly indicates whether to
     * only duplicate merged layers.
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 92
     */
    duplicate(name?: string, mergeLayersOnly?: boolean): void

    /*
     * —or—
     * ExportOptionsSaveForWeb
     * Exports the paths in the document to an
     * Illustrator file, or exports the document to
     * a file with Web or device viewing
     * optimizations.
     * This is equivalent to choosing File >
     * Export > Paths To Illustrator, or File >
     * Save For Web and Devices.
     */
    exportDocument(exportIn: File, exportAs?: ExportType, options?: ExportOptionsIllustrator): void

    /*
     * Flattens all layers in the document.
     */
    flatten(): void

    /*
     * Flips the image within the canvas in the
     * specified direction.
     */
    flipCanvas(direction: Direction): void

    /*
     * Imports annotations into the document.
     */
    importAnnotations(file: File): void

    /*
     * Flattens all visible layers in the document.
     */
    mergeVisibleLayers(): void

    /*
     * Pastes the contents of the clipboard into
     * the document. If the optional argument is
     * set to true and a selection is active, the
     * contents are pasted into the selection.
     */
    paste(intoSelection?: boolean): void

    /*
     * Prints the document.
     * printSpace specifies the color space for
     * the printer. Valid values are nothing (that
     * is, the same as the source); or Working
     * RGB, Working CMYK, Working Gray, Lab
     * Color (meaning one of the working color
     * spaces or Lab color); or a string specifying
     * a specific colorspace (default is same as
     * source).
     */
    print(sourceSpace?: SourceSpaceType, printSpace?: string, intent?: Intent, blackPointCompensation?: boolean): void

    /*
     * Print one copy of the document.
     */
    printOneCopy(): void

    /*
     * Rasterizes all layers.
     */
    rasterizeAllLayers(): void

    /*
     * Record measurements of document.
     */
    recordMeasurements(source?: MeasurementSource, dataPoints?: string[]): void

    /*
     * Changes the size of the canvas to display
     * more or less of the image but does not
     * change the image size. See resizeImage.
     */
    resizeCanvas(width?: UnitValue, height?: UnitValue, anchor?: AnchorPosition): void

    /*
     * Changes the size of the image.
     * Method Parameter type Returns What it does (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 93
     */
    resizeImage(width?: UnitValue, height?: UnitValue, resolution?: number, resampleMethod?: ResampleMethod): void

    /*
     * Expands the document to show clipped
     * sections.
     */
    revealAll(): void

    /*
     * Rotates the canvas (including the image)
     * in clockwise direction.
     */
    rotateCanvas(angle: number): void

    /*
     * Saves the document.
     */
    save(): void

    /*
     * Saves the document in a specific format.
     * Specify the save options appropriate to
     * the format by passing one of these
     * objects:
     * BMPSaveOptions
     * DCS1_SaveOptions
     * DCS2_SaveOptions
     * EPSSaveOptions
     * GIFSaveOptions
     * JPEGSaveOptions
     * PDFSaveOptions
     * PhotoshopSaveOptions
     * PICTFileSaveOptions
     * PICTResourceSaveOptions
     * PixarSaveOptions
     * PNGSaveOptions
     * RawSaveOptions
     * SGIRGBSaveOptions
     * TargaSaveOptions
     * TiffSaveOptions
     */
    saveAs(saveIn: File, options?: any, asCopy?: boolean, extensionType?: Extension): void

    /*
     * Splits the document channels into
     * separate images.
     */
    splitChannels(): void

    /*
     * Provides a single entry in history states for
     * the entire script provided by
     * javaScriptString. Allows a single undo
     * for all actions taken in the script.
     * The historyString parameter provides
     * the string to use for the history state.
     * The javaScriptString parameter
     * provides a string of JavaScript code to
     * excute while history is suspended.
     */
    suspendHistory(historyString: string, javaScriptString: string): void

    /*
     * Applies trapping to a CMYK document.
     * Valid only when docRef.mode =
     * DocumentMode.CMYK.
     */
    trap(width: number): void

    /*
     * Trims the transparent area around the
     * image on the specified sides of the canvas.
     * Default is true for all Boolean parameters.
     * Method Parameter type Returns What it does (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 94
     * Document sample script
     * The following script creates a document that contains two images (a
     * sunflower and a duck) obtained from
     * the Adobe Photoshop CS6 Samples folder and employs the following steps:
     * ● Determines which image is larger.
     * ● Resizes the smaller image to match the larger image.
     * ● Creates a merged document twice as high as either image in order to
     * hold both images.
     * ● Selects part of the document and pastes the sunflower into the
     * selection.
     * ● Inverts the selection and pastes the duck into the lower part of the
     * document.
     * ● Positions the sunflower over the duck.
     * Document.jsx
     * // Save the current preferences
     * var startRulerUnits = app.preferences.rulerUnits
     * var startTypeUnits = app.preferences.typeUnits
     * var startDisplayDialogs = app.displayDialogs
     * // Set Adobe Photoshop CS6 to use pixels and display no dialogs
     * app.preferences.rulerUnits = Units.PIXELS
     * app.preferences.typeUnits = TypeUnits.PIXELS
     * app.displayDialogs = DialogModes.NO
     * // first close all the open documents
     * while (app.documents.length) {
     * app.activeDocument.close()
     * }
     * // Open the sunflower and duck files from the samples folder
     * var flowerDoc = open(File(app.path + "/Samples/Sunflower.psd"))
     * var duckDoc = open(File(app.path + "/Samples/Ducky.tif"))
     * // Find out which document is larger
     * // Resize the smaller document the to the larger document’s size
     * // The resize requires the document be the active/front document
     * if ((flowerDoc.width.value * flowerDoc.height.value) >
     * (duckDoc.width.value * duckDoc.height.value)) {
     * app.activeDocument = duckDoc
     * duckDoc.resize(flowerDoc.width, flowerDoc.height)
     * }
     * else {
     * app.activeDocument = flowerDoc
     * flowerDoc.resizeImage(duckDoc.width, duckDoc.height)
     * }
     * // Create a new document twice as high as two files
     * var mergedDoc = app.documents.add(duckDoc.width, duckDoc.height * 2,
     * duckDoc.resolution, "FlowerOverDuck")
     * // Copy the flower to the top; make it the active document so we can
     * manipulate it
     * app.activeDocument = flowerDoc
     * flowerDoc.activeLayer.copy()
     * //Paste the flower to the merged document, making the merged document
     * active
     * app.activeDocument = mergedDoc
     * // Select a square area at the top of the new document
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 95
     * var selRegion = Array(Array(0, 0),
     * Array(mergedDoc.width.value, 0),
     * Array(mergedDoc.width.value, mergedDoc.height.value / 2),
     * Array(0, mergedDoc.height.value / 2),
     * Array(0, 0))
     * // Create the selection
     * mergedDoc.selection.select(selRegion)
     * //Paste in the flower
     * mergedDoc.paste(TRUE)
     * // do the same thing for the duck
     * app.activeDocument = duckDoc
     * duckDoc.activeLayer.copy()
     * app.activeDocument = mergedDoc
     * mergedDoc.selection.select(selRegion)
     * // Inverting the selection so the bottom of the document is now selected
     * mergedDoc.selection.invert()
     * // Paste the duck
     * mergedDoc.paste(TRUE)
     * // get rid of our originals without modifying them
     * duckDoc.close(SaveOptions.DONOTSAVECHANGES)
     * flowerDoc.close(SaveOptions.DONOTSAVECHANGES)
     * // Reset the application preferences
     * app.preferences.rulerUnits = startRulerUnits
     * app.preferences.typeUnits = startTypeUnits
     * app.displayDialogs = startDisplayDialogs
     * 
     */
    trim(type?: TrimType, top?: boolean, left?: boolean, bottom?: boolean, right?: boolean): void

}

interface DocumentPrintSettings {
    /*
     * Background color of page.
     * 
     */
    backgroundColor: SolidColor

    /*
     * Bleed width
     * 
     */
    bleedWidth: UnitValue

    /*
     * Print the caption found in FileInfo.
     * 
     */
    caption: boolean

    /*
     * Print center crop marks.
     * 
     */
    centerCropMarks: boolean

    /*
     * Print color calibration bars.
     * 
     */
    colorBars: boolean

    /*
     * Number of copies to print.
     * 
     */
    copies: number

    /*
     * Print corner crop marks.
     * 
     */
    cornerCropMarks: boolean

    /*
     * Color handling.
     * 
     */
    colorHandling: PrintColorHandling

    /*
     * The currently active printer.
     * 
     */
    activePrinter: string

    /*
     * Flip the image horizontally.
     * 
     */
    flip: boolean

    /*
     * Print a hard proof.
     * 
     */
    hardProof: boolean

    /*
     * 
     * 
     */
    interpolate: boolean

    /*
     * Prints the document title.
     * 
     */
    labels: boolean

    /*
     * Map blacks.
     * 
     */
    mapBlack: boolean

    /*
     * Invert the image colors.
     * 
     */
    negative: boolean

    /*
     * Color conversion intent when print
     * space is different from the source space.
     * 
     */
    renderIntent: Intent

    /*
     * The x position of the image on
     * page.
     * 
     */
    posX: UnitValue

    /*
     * The y position of the image on
     * page.
     * 
     */
    posY: UnitValue

    /*
     * The width of the print border.
     * 
     */
    printBorder: UnitValue

    /*
     * Name of the printer.
     * 
     */
    printerName: string

    /*
     * color space for printer. Can be
     * nothing (meaning same as source); 'Working
     * RGB', 'Working CMYK', 'Working Gray', 'Lab
     * Color' (meaning one of the working spaces or
     * Lab color); or a string specifying a specific
     * colorspace (default is same as source)
     * 
     */
    printSpace: string

    /*
     * Print registration marks.
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 97
     * 
     */
    registrationMarks: boolean

    /*
     * Scale of image on page.
     * 
     */
    scale: number

    /*
     * Include vector data.
     * Property Value type What it is (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 98
     * Methods
     * 
     */
    vectorData: boolean

    /*
     * Set the position of the image on the page.
     * 
     */
    setPagePosition(docPosition: DocPositionStyle, posX: UnitValue, posY: UnitValue, scale: number): void

}

interface DocumentInfo {
    /*
     * 
     * 
     */
    author: string

    /*
     * 
     * 
     */
    authorPosition: string

    /*
     * 
     * 
     */
    caption: string

    /*
     * 
     * 
     */
    captionWriter: string

    /*
     * 
     * 
     */
    category: string

    /*
     * 
     * 
     */
    city: string

    /*
     * The copyrighted status.
     * 
     */
    copyrighted: CopyrightedType

    /*
     * 
     * 
     */
    copyrightNotice: string

    /*
     * 
     * 
     */
    country: string

    /*
     * 
     * 
     */
    creationDate: string

    /*
     * 
     * 
     */
    credit: string

    /*
     * Camera data that includes
     * camera settings used when the image
     * was taken.
     * Each array member is a tag pair, an array
     * of [tag, tag_data]; for example, [
     * "camera" "Cannon"].
     * 
     */
    exif: string[][]

    /*
     * 
     * 
     */
    headline: string

    /*
     * 
     * 
     */
    instructions: string

    /*
     * 
     * 
     */
    jobName: string

    /*
     * A list of keywords that can
     * identify the document or its contents.
     * 
     */
    keywords: string[]

    /*
     * 
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 100
     * DocumentInfo sample Script
     * The following script sets document info (metadata) for all of the files
     * in a specified folder and then saves
     * the modified files as low-quality JPEG images in a new folder without
     * changing the originals.
     * ● Ask the user to specify the folder that contains the original files and
     * the output folder for the JPEG
     * images, and then check that the folders exist.
     * ● Open each file and use the documentInfo object properties to tag it
     * with the following metadata:
     * ● author: Adobe programmer
     * ● caption: Adobe Photo shoot
     * ● captionWriter: Adobe programmer
     * ● city: San Jose
     * ● copyrightNotice: Copyright (c) Adobe programmer Photography
     * ● copyrighted status: Copyrighted Work
     * ● country: USA
     * ● state: CA
     * ● Save the new documents in JPEG format with a low quality setting.
     * DocumentInfo.jsx
     * // Save the current preferences
     * var startDisplayDialogs = app.displayDialogs
     * // Set Adobe Photoshop CS6 to use pixels and display no dialogs
     * app.displayDialogs = DialogModes.NO
     * // ask the user for the input and output folders
     * var inputFolder = Folder.selectDialog("Select a folder to tag")
     * var outputFolder = Folder.selectDialog("Select a folder for the output
     * files")
     * // see if we got something interesting from the dialog
     * if (inputFolder != null && outputFolder != null) {
     * // get all the files found in this folder
     * var fileList = inputFolder.getFiles()
     * 
     */
    ownerUrl: string

    /*
     * The info object's container.
     * 
     */
    parent: Document

    /*
     * 
     * 
     */
    provinceState: string

    /*
     * 
     * 
     */
    source: string

    /*
     * 
     * 
     */
    supplementalCategories: string[]

    /*
     * 
     * 
     */
    title: string

    /*
     * 
     * 
     */
    transmissionReference: string

    /*
     * The class name of the
     * referenced info object.
     * 
     */
    typename: string

    /*
     * 
     * Property Value type What it is (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 101
     * // save the outputs in JPEG
     * var jpegOptions = new JPEGSaveOptions()
     * // set the jpeg quality really low so the files are small
     * jpegOptions.quality = 1
     * // open each one in turn
     * for (var i = 0; i < fileList.length; i++) {
     * // The fileList includes both folders and files so open only files
     * if (fileList[i] instanceof File && fileList[i].hidden == false) {
     * // get a reference to the new document
     * var docRef = open(fileList[i])
     * // tag all of the documents with photo shoot information
     * docRef.info.author = "Adobe programmer"
     * docRef.info.caption = "Adobe Photo shoot"
     * docRef.info.captionWriter = "Adobe programmer"
     * docRef.info.city = "San Jose"
     * docRef.info.copyrightNotice = "Copyright (c) Adobe programmer
     * Photography"
     * docRef.info.copyrighted = CopyrightedType.COPYRIGHTEDWORK
     * docRef.info.country = "USA"
     * docRef.info.provinceState = "CA"
     * // change the date to a Adobe Photoshop CS6 date format
     * // "YYYYMMDD"
     * var theDate = new Date()
     * // the year is from 1900 ????
     * var theYear = (theDate.getYear() + 1900).toString()
     * // convert the month from 0..12 to 00..12
     * var theMonth = theDate.getMonth().toString()
     * if (theDate.getMonth() < 10) {
     * theMonth = "0" + theMonth
     * }
     * // convert the day from 0..31 to 00.31
     * var theDay = theDate.getDate().toString()
     * if (theDate.getDate() < 10) {
     * theDay = "0" + theDay
     * }
     * // stick them all together
     * docRef.info.creationDate = theYear + theMonth + theDay
     * // flatten because we are saving to JPEG
     * docRef.flatten()
     * // go to 8 bit because we are saving to JPEG
     * docRef.bitsPerChannel = BitsPerChannelType.EIGHT
     * // save and close
     * docRef.saveAs(new File(outputFolder + "/Output" + i + ".jpg"),
     * jpegOptions)
     * // don’t modify the original
     * docRef.close(SaveOptions.DONOTSAVECHANGES)
     * }
     * }
     * }
     * // Reset the application preferences
     * app.displayDialogs = startDisplayDialogs
     * 
     */
    urgency: Urgency

}

interface Documents {
    /*
     * The number of elements in the documents
     * collection.
     * 
     */
    length: number

    /*
     * The containing application.
     * 
     */
    parent: Application

    /*
     * The class name of the referenced documents
     * object.
     * 
     */
    typename: string

    /*
     * Creates a new document object and
     * adds it to this collection.
     * pixelAspectRatio: Default is 1.0, a
     * square aspect ratio.
     * bitsPerChannelType: Default is
     * BitsPerChannelType.EIGHT.
     */
    add(width?: UnitValue, height?: UnitValue, resolution?: number, name?: string, mode?: NewDocumentMode, initialFill?: DocumentFill, pixelAspectRatio?: number, bitsPerChannel?: BitsPerChannelType, colorProfileName?: string): void

    /*
     * Gets the first element in the
     * documents collection with the
     * provided name
     * 
     */
    getByName(name: string): void

}

interface EPSOpenOptions {
    /*
     * True to use antialias.
     * 
     */
    antiAlias: boolean

    /*
     * True to constrain the proportions of
     * the image.
     * 
     */
    constrainProportions: boolean

    /*
     * The height of the image (unit
     * value).
     * 
     */
    height: UnitValue

    /*
     * The color profile to use as the
     * document mode.
     * 
     */
    mode: OpenDocumentMode

    /*
     * The resolution of the document in
     * pixels per inch.
     * 
     */
    resolution: number

    /*
     * The class name of the referenced
     * EPSOpenOptions object.
     * 
     */
    typename: string

    /*
     * The width of the image (unit value).
     * 
     */
    width: UnitValue

}

interface EPSSaveOptions {
    /*
     * True to embed the color profile in this
     * document.
     * 
     */
    embedColorProfile: boolean

    /*
     * The type of encoding to use (default:
     * SaveEncoding.BINARY).
     * 
     */
    encoding: SaveEncoding

    /*
     * True to include the halftone screen
     * (default: false).
     * 
     */
    halftoneScreen: boolean

    /*
     * True to use image interpolation (default:
     * false).
     * 
     */
    interpolation: boolean

    /*
     * The preview type.
     * 
     */
    preview: Preview

    /*
     * True to use Postscript color management
     * (default: false).
     * 
     */
    psColorManagement: boolean

    /*
     * True to include the Transfer functions to
     * compensate for dot gain between the image and film
     * (default: false).
     * 
     */
    transferFunction: boolean

    /*
     * True to display white areas as
     * transparent.
     * Valid only when document.mode =
     * DocumentMode.BITMAP. See also changeMode().
     * 
     */
    transparentWhites: boolean

    /*
     * The class name of the referenced
     * EPSSaveOptions object.
     * 
     */
    typename: string

    /*
     * True to include vector data.
     * Valid only if the document includes vector data (text).
     * 
     */
    vectorData: boolean

}

interface ExportOptionsIllustrator {
    /*
     * The type of path to export
     * (default:
     * IllustratorPathType.DOCUMENTBOUNDS).
     * 
     */
    path: IllustratorPathType

    /*
     * The name of the path to export.
     * Valid only when path =
     * IllustratorPathType.NAMEDPATH.
     * 
     */
    pathName: string

    /*
     * The class name of the referenced
     * exportOptionsIllustrator object.
     * 
     */
    typename: string

}

interface ExportOptionsSaveForWeb {
    /*
     * Applies blur to the image to reduce
     * artifacts (default: 0.0).
     * 
     */
    blur: number

    /*
     * The color reduction algorithm (default:
     * ColorReductionType.SELECTIVE).
     * 
     */
    colorReduction: ColorReductionType

    /*
     * The number of colors in the palette
     * (default: 256).
     * 
     */
    colors: number

    /*
     * The type of dither (default:
     * Dither.DIFFUSION).
     * 
     */
    dither: Dither

    /*
     * The amount of dither (default: 100).
     * Valid only when
     * dither = Dither.DIFFUSION.
     * 
     */
    ditherAmount: number

    /*
     * The file format to use (default:
     * SaveDocumentType.COMPUSERVEGIF).
     * Note: For this property, only COMPUSERVEGIF,
     * JPEG, PNG-8, PNG-24, and BMP are
     * supported.
     * 
     */
    format: SaveDocumentType

    /*
     * True to include the document’s
     * embedded color profile (default: false).
     * 
     */
    includeProfile: boolean

    /*
     * True to download in multiple passes;
     * progressive (default: false).
     * 
     */
    interlaced: boolean

    /*
     * The amount of lossiness allowed
     * (default: 0).
     * 
     */
    lossy: number

    /*
     * The colors to blend transparent pixels
     * against.
     * 
     */
    matteColor: RGBColor

    /*
     * True to create smaller but less
     * compatible files (default: true).
     * Valid only when
     * format = SaveDocumentType.JPEG.
     * 
     */
    optimized: boolean

    /*
     * Indicates the number of bits; true = 8,
     * false = 24 (default: true).
     * Valid only when
     * format = SaveDocumentType.PNG.
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 107
     * 
     */
    PNG8: boolean

    /*
     * The quality of the produced image as a
     * percentage; default: 60.
     * 
     */
    quality: number

    /*
     * Indication of transparent areas of the
     * image should be included in the saved
     * image(default: true).
     * 
     */
    transparency: boolean

    /*
     * The amont of transparency dither
     * (default: 100).
     * Valid only if transparency = true.
     * 
     */
    transparencyAmount: number

    /*
     * The transparency dither algorithm
     * (default: transparencyDither = Dither.NONE).
     * 
     */
    transparencyDither: Dither

    /*
     * The class name of the referenced
     * ExportOptionsSaveForWeb object.
     * 
     */
    typename: string

    /*
     * The tolerance amount within which to
     * snap close colors to web palette colors (default: 0).
     * Property Value type What it is (Continued)
     * 
     */
    webSnap: number

}

interface File {
}

interface GalleryBannerOptions {
    /*
     * The web photo gallery
     * contact info.
     * 
     */
    contactInfo: string

    /*
     * The web photo gallery date
     * (default: current date).
     * 
     */
    date: string

    /*
     * The font setting for the
     * banner text (default:
     * GalleryFontType.ARIAL).
     * 
     */
    font: GalleryFontType

    /*
     * The font size for the banner
     * text (default: 3).
     * 
     */
    fontSize: number

    /*
     * The web photo gallery
     * photographer.
     * 
     */
    photographer: string

    /*
     * The web photo gallery site
     * name (default:
     * Adobe Web Photo Gallery).
     * 
     */
    siteName: string

    /*
     * The class name of the
     * referenced galleryBannerOptions
     * object.
     * 
     */
    typename: string

}

interface GalleryCustomColorOptions {
    /*
     * The color to use to indicate
     * an active link.
     * 
     */
    activeLinkColor: RGBColor

    /*
     * The background color.
     * 
     */
    backgroundColor: RGBColor

    /*
     * The banner color.
     * 
     */
    bannerColor: RGBColor

    /*
     * The color to use to indicate a
     * link.
     * 
     */
    linkColor: RGBColor

    /*
     * The text color.
     * 
     */
    textColor: RGBColor

    /*
     * The class name of the
     * referenced
     * galleryCustomColorOptions object.
     * 
     */
    typename: string

    /*
     * The color to use to indicate a
     * visited link.
     * 
     */
    visitedLinkColor: RGBColor

}

interface GalleryImagesOptions {
    /*
     * The size (in pixels) of the border
     * that separates images (default: 0).
     * 
     */
    border: number

    /*
     * True to generate image captions
     * (default: false).
     * 
     */
    caption: boolean

    /*
     * The resized image dimensions in
     * pixels (default: 350).
     * Valid only when resizeImages = true.
     * 
     */
    dimension: number

    /*
     * The font to use for image
     * captions (default: GalleryFontType.ARIAL).
     * 
     */
    font: GalleryFontType

    /*
     * The font size for image captions
     * (default: 3).
     * Valid only when caption = true.
     * 
     */
    fontSize: number

    /*
     * The quality setting for a JPEG
     * image (default: 5).
     * 
     */
    imageQuality: number

    /*
     * True to include copyright
     * information in captions (default: false).
     * Valid only when caption = true.
     * 
     */
    includeCopyright: boolean

    /*
     * True to include the credits in
     * image captions (default: false).
     * Valid only when caption = true.
     * 
     */
    includeCredits: boolean

    /*
     * True to include the file name in
     * image captions (default: true).
     * Valid only when caption = true.
     * 
     */
    includeFilename: boolean

    /*
     * True to include the title in image
     * captions (default: false).
     * Valid only when caption = true.
     * 
     */
    includeTitle: boolean

    /*
     * True to add numeric links
     * (default: true).
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 112
     * 
     */
    numericLinks: boolean

    /*
     * The image dimensions to
     * constrain in the gallery image (default:
     * GalleryConstrainType.CONSTRAINBOTH).
     * Valid only when resizeImages = true.
     * 
     */
    resizeConstraint: GalleryConstrainType

    /*
     * True to automatically resize
     * images for placement on the gallery pages
     * (default: true).
     * 
     */
    resizeImages: boolean

    /*
     * The class name of the referenced
     * galleryImagesOptions object.
     * Property Value type What it is (Continued)
     * 
     */
    typename: string

}

interface GalleryOptions {
    /*
     * True to add width and
     * height attributes for images (default:
     * true).
     * 
     */
    addSizeAttributes: boolean

    /*
     * The options related to
     * banner settings.
     * 
     */
    bannerOptions: GalleryBannerOptions

    /*
     * The options related to
     * custom color settings.
     * 
     */
    customColorOptions: GalleryCustomColorOptions

    /*
     * The email address to show
     * on the web page.
     * 
     */
    emailAddress: string

    /*
     * The options related to
     * images settings.
     * 
     */
    imagesOptions: GalleryImagesOptions

    /*
     * True to include all files
     * found in sub folders of the input
     * folder (default: true).
     * 
     */
    includeSubFolders: boolean

    /*
     * The style to use for laying
     * out the web page (default: Centered
     * Frame 1 - Basic).
     * 
     */
    layoutStyle: string

    /*
     * True to save metadata
     * (default: false).
     * 
     */
    preserveAllMetadata: boolean

    /*
     * The options related to
     * security settings.
     * 
     */
    securityOptions: GallerySecurityOptions

    /*
     * The options related to
     * thumbnail image settings.
     * 
     */
    thumbnailOptions: GalleryThumbnailOptions

    /*
     * The class name of the
     * referenced galleryOptions object.
     * 
     */
    typename: string

    /*
     * True to use the short web
     * page extension .htm. If false, use the
     * web page extension .html (default:
     * true).
     * 
     */
    useShortExtension: boolean

    /*
     * True to use UTF-8
     * encoding for the web page (default:
     * false).
     * 
     */
    useUTF8Encoding: boolean

}

interface GallerySecurityOptions {
    /*
     * The web photo gallery
     * security content (default:
     * GallerySecurityType.NONE).
     * 
     */
    content: GallerySecurityType

    /*
     * The web photo gallery
     * security font (default:
     * GalleryFontType.ARIAL).
     * 
     */
    font: GalleryFontType

    /*
     * The web photo gallery
     * security font size (default: 3).
     * 
     */
    fontSize: number

    /*
     * The web page security
     * opacity as a percent (default: 100).
     * 
     */
    opacity: number

    /*
     * The web photo gallery
     * security custom text.
     * 
     */
    text: string

    /*
     * The web page security text
     * color.
     * 
     */
    textColor: GallerySecurityTextColorType

    /*
     * The web photo gallery
     * security text position (default:
     * GallerySecurityTextPositionType.
     * CENTERED).
     * 
     */
    textPosition: GallerySecurityTextPositionType

    /*
     * The web photo gallery
     * security text orientation to use (default:
     * GallerySecurityTextRotateType.
     * ZERO).
     * 
     */
    textRotate: GallerySecurityTextRotateType

    /*
     * The class name of the
     * referenced gallerySecurityOptions
     * object.
     * 
     */
    typename: string

}

interface GalleryThumbnailOptions {
    /*
     * The amount of border pixels you
     * want around your thumbnail images (default:
     * 0).
     * 
     */
    border: number

    /*
     * True if there is a caption (default:
     * false).
     * 
     */
    caption: boolean

    /*
     * The number of columns on the
     * page (default: 5).
     * 
     */
    columnCount: number

    /*
     * The web photo gallery thumbnail
     * dimension in pixels (default: 75).
     * 
     */
    dimension: number

    /*
     * The web photo gallery font
     * (default: GalleryFontType.ARIAL).
     * 
     */
    font: GalleryFontType

    /*
     * The font size for thumbnail
     * images text (default: 3).
     * 
     */
    fontSize: number

    /*
     * True to include copyright
     * information for thumbnails (default: false).
     * 
     */
    includeCopyright: boolean

    /*
     * True to include credits for
     * thumbnails (default: false).
     * 
     */
    includeCredits: boolean

    /*
     * True to include file names for
     * thumbnails (default: false).
     * 
     */
    includeFilename: boolean

    /*
     * True to include titles for
     * thumbnails (default: false).
     * 
     */
    includeTitle: boolean

    /*
     * The number of rows on the page
     * (default: 3).
     * 
     */
    rowCount: number

    /*
     * The thumbnail image size
     * (default: GalleryThumbSizeType.MEDIUM).
     * 
     */
    size: GalleryThumbSizeType

    /*
     * The class name of the referenced
     * GalleryThumbnailOptions object.
     * 
     */
    typename: string

}

interface GIFSaveOptions {
    /*
     * The number of palette colors.
     * Valid only when palette =
     * Palette.LOCALADAPTIVE, LOCALPERCEPTUAL,
     * LOCALSELECTIVE, MACOSPALETTE, UNIFORM,
     * WEBPALETTE; or WINDOWSPALETTE .
     * 
     */
    colors: number

    /*
     * The dither type.
     * 
     */
    dither: Dither

    /*
     * The amount of dither (default: 75).
     * Valid only when dither = Dither.DIFFUSION.
     * 
     */
    ditherAmount: number

    /*
     * The type of colors to force into the
     * color palette.
     * 
     */
    forced: ForcedColors

    /*
     * True if rows should be interlaced
     * (default: false).
     * 
     */
    interlaced: boolean

    /*
     * The color to use to fill anti-aliased
     * edges adjacent to transparent areas of the image
     * (default: MatteType.WHITE).
     * When transparency = false, the matte color is
     * applied to transparent areas.
     * 
     */
    matte: MatteType

    /*
     * The type of palette to use (default:
     * Palette.LOCALSELECTIVE).
     * 
     */
    palette: PaletteType

    /*
     * True to protect colors in the image
     * that contain entries in the color table from being
     * dithered.
     * Valid only when dither = Dither.DIFFUSION.
     * 
     */
    preserveExactColors: boolean

    /*
     * True to preserve transparent areas of
     * the image during conversion to GIF format.
     * 
     */
    transparency: boolean

    /*
     * The class name of the referenced
     * GIFSaveOptions object.
     * 
     */
    typename: string

}

interface GrayColor {
    /*
     * The gray value (default: 0.0).
     * 
     */
    gray: number

    /*
     * The class name of the referenced grayColor
     * object.
     * 
     */
    typename: string

}

interface Guide {
    /*
     * Indicates whether the guide is
     * vertical or horizontal.
     * 
     */
    direction: Direction

    /*
     * Location of the guide from origin
     * of image.
     * 
     */
    coordinate: UnitValue

}

interface Guides {
    /*
     * The number of elements in the guides
     * collection.
     * 
     */
    length: number

    /*
     * The containing document.
     * 
     */
    parent: Document

    /*
     * The class name of the referenced guides
     * object.
     * 
     */
    typename: string

    /*
     * Creates a new guide object and adds
     * it to this collection.
     */
    add(direction: Direction, coordinate: UnitValue): void

    /*
     * Gets the first element in the guides
     * collection with the provided name
     * 
     */
    getByName(name: string): void

}

interface HistoryState {
    /*
     * The HistoryState object's name.
     * 
     */
    name: string

    /*
     * The containing document.
     * 
     */
    parent: Document

    /*
     * True if the history state is a snapshot.
     * 
     */
    snapshot: boolean

    /*
     * The class name of the referenced HistoryState
     * object.
     * 
     */
    typename: string

}

interface HistoryStates {
    /*
     * The number of elements in the HistoryStates
     * collection.
     * 
     */
    length: number

    /*
     * The containing document.
     * 
     */
    parent: Document

    /*
     * The class name of the referenced
     * HistoryStates object.
     * 
     */
    typename: string

    /*
     * Get the first element in the
     * HistoryStates collection with the
     * provided name.
     * 
     */
    getByName(name: string): void

}

interface HSBColor {
    /*
     * The brightness value.
     * 
     */
    brightness: number

    /*
     * The hue value.
     * 
     */
    hue: number

    /*
     * The saturation value.
     * 
     */
    saturation: number

    /*
     * The class name of the referenced HSBColor
     * object.
     * 
     */
    typename: string

}

interface IndexedConversionOptions {
    /*
     * The number of palette colors.
     * Valid only when palette =
     * Palette.LOCALADAPTIVE, LOCALPERCEPTUAL,
     * LOCALSELECTIVE, MACOSPALETTE, UNIFORM,
     * WEBPALETTE, or WINDOWSPALETTE.
     * 
     */
    colors: number

    /*
     * The dither type.
     * 
     */
    dither: Dither

    /*
     * The amount of dither.
     * Valid only when dither = Dither.diffusion.
     * 
     */
    ditherAmount: number

    /*
     * The type of colors to force into the
     * color palette.
     * 
     */
    forced: ForcedColors

    /*
     * The color to use to fill anti-aliased
     * edges adjacent to transparent areas of the image
     * (default: MatteType.WHITE).
     * When transparency = false, the matte color is
     * applied to transparent areas.
     * 
     */
    matte: MatteType

    /*
     * The palette type (default:
     * Palette.EXACT).
     * 
     */
    palette: PaletteType

    /*
     * True to protect colors in the image
     * that contain entries in the color table from being
     * dithered.
     * Valid only when dither = Dither.DIFFUSION.
     * 
     */
    preserveExactColors: boolean

    /*
     * True to preserve transparent areas of
     * the image during conversion to GIF format.
     * 
     */
    transparency: boolean

    /*
     * The class name of the referenced
     * IndexedConversionOptions object.
     * 
     */
    typename: string

}

interface JPEGSaveOptions {
    /*
     * True to embed the color profile in the
     * document.
     * 
     */
    embedColorProfile: boolean

    /*
     * The download format to use (default:
     * FormatOptions.STANDARDBASELINE).
     * 
     */
    formatOptions: FormatOptions

    /*
     * The color to use to fill anti-aliased edges
     * adjacent to transparent areas of the image (default:
     * MatteType.WHITE).
     * When transparency is turned off for an image, the
     * matte color is applied to transparent areas.
     * 
     */
    matte: MatteType

    /*
     * The image quality setting to use; affects
     * file size and compression (default: 3).
     * 
     */
    quality: number

    /*
     * The number of scans to make to
     * incrementally display the image on the page
     * (default: 3).
     * Valid only for when formatOptions =
     * FormatOptions.PROGRESSIVE.
     * 
     */
    scans: number

    /*
     * The class name of the referenced
     * JPEGSaveOptions object.
     * 
     */
    typename: string

}

interface LabColor {
    /*
     * The a-value.
     * 
     */
    a: number

    /*
     * The b-value.
     * 
     */
    b: number

    /*
     * The L-value.
     * 
     */
    l: number

    /*
     * The class name of the referenced
     * LabColor object.
     * 
     */
    typename: string

}

interface LayerComp {
    /*
     * True to use layer appearance (layer styles) settings.
     * 
     */
    appearance: boolean

    /*
     * A description of the layer comp.
     * 
     */
    comment: string

    /*
     * The name of the layer comp.
     * 
     */
    name: string

    /*
     * The containing document.
     * 
     */
    parent: Document

    /*
     * True to use layer position.
     * 
     */
    position: boolean

    /*
     * True if the layer comp is currently selected.
     * 
     */
    selected: boolean

    /*
     * The class name of the referenced layerComp object.
     * 
     */
    typename: string

    /*
     * True to use layer visibility settings .
     * 
     */
    visibility: boolean

    /*
     * Applies the layer comp to the document.
     */
    apply(): void

    /*
     * Recaptures the current layer state(s) for
     * this layer comp.
     */
    recapture(): void

    /*
     * Deletes the layerComp object.
     */
    remove(): void

    /*
     * Resets the layer comp state to the
     * document state.
     * 
     */
    resetfromComp(): void

}

interface LayerComps {
    /*
     * The number of elements in the layerComps
     * collection.
     * 
     */
    length: number

    /*
     * The containing document.
     * 
     */
    parent: Document

    /*
     * The class name of the referenced
     * layerComps object.
     * 
     */
    typename: string

    /*
     * Creates a new layer composition
     * object and adds it to this collection.
     */
    add(name: string, comment: string, appearance: boolean, position: boolean, visibility: boolean): void

    /*
     * Gets the first element in the
     * collection with the provided name.
     */
    getByName(name: string): void

    /*
     * Removes all member objects from
     * the layerComps collection.
     * 
     */
    removeAll(): void

}

interface Layers {
    /*
     * The number of elements in the layers
     * collection.
     * 
     */
    length: number

    /*
     * The containing document or layer set.
     * 
     */
    parent: Document

    /*
     * The class name of the referenced layers object.
     * 
     */
    typename: string

    /*
     * Gets the first element in the layers
     * collection with the provided name.
     */
    getByName(name: string): void

    /*
     * Removes all layers from the collection.
     * 
     */
    removeAll(): void

}

interface LayerSet {
    /*
     * True if the contents in the layers in this set
     * are not editable.
     * 
     */
    allLocked: boolean

    /*
     * The art layers in this layer set.
     * 
     */
    artLayers: ArtLayers

    /*
     * The blend mode to use for the layer set.
     * 
     */
    blendMode: BlendMode

    /*
     * The bounding rectangle of the layer set.
     * 
     */
    bounds: UnitValue[]

    /*
     * The channels enabled for the layer set; must
     * be a list of component channels. See Channel.kind.
     * 
     */
    enabledChannels: Channel[]

    /*
     * The layers in this layer set.
     * 
     */
    layers: Layers

    /*
     * Nested layer sets contained within this layer
     * set.
     * linkedLayers array of ArtLayer
     * and/
     */
    layerSets: LayerSets

    /*
     * The layers linked to this layerSet object.
     * 
     */
    or: LayerSet

    /*
     * The name of this layer set.
     * 
     */
    name: string

    /*
     * The master opacity of the set.
     * 
     */
    opacity: number

    /*
     * The containing document or layer set.
     * 
     */
    parent: Document

    /*
     * The class name of the referenced LayerSet
     * object.
     * 
     */
    typename: string

    /*
     * True if the set is visible.
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 130
     * Methods
     * 
     */
    visible: boolean

    /*
     * Creates a duplicate of the object.
     */
    duplicate(relativeObject?: ArtLayer, insertionLocation?: ElementPlacement): void
    duplicate(relativeObject?: LayerSet, insertionLocation?: ElementPlacement): void

    /*
     * Links the layer set with another
     * layer.
     */
    link(with_: LayerSet): void

    /*
     * Merges the layerset; returns a
     * reference to the art layer created
     * by this method.
     */
    merge(): void

    /*
     * Moves the object.
     */
    move(relativeObject: ArtLayer, insertionLocation: ElementPlacement): void
    move(relativeObject: LayerSet, insertionLocation: ElementPlacement): void

    /*
     * Deletes the object.
     */
    remove(): void

    /*
     * Resizes all layers in the layer set to
     * to the specified dimensions (as a
     * percentage of its current size) and
     * places the layer set in the
     * specified position.
     */
    resize(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void

    /*
     * Rotates all layers in the layer set
     * around the specified anchor point
     * (default:
     * AnchorPosition.MIDDLECENTER)
     */
    rotate(angle: number, anchor?: AnchorPosition): void

    /*
     * Moves the position relative to its
     * current position.
     */
    translate(deltaX?: UnitValue, deltaY?: UnitValue): void

    /*
     * Unlinks the layer set.
     * 
     */
    unlink(): void

}

interface LayerSets {
    /*
     * The number of elements in the LayerSets
     * collection.
     * 
     */
    length: number

    /*
     * The containing document or layer set.
     * 
     */
    parent: Document

    /*
     * The class name of the referenced layerSets
     * object.
     * 
     */
    typename: string

    /*
     * Creates a new layer set object and adds it to
     * the collection.
     */
    add(): void

    /*
     * Gets the first element in the collection with
     * the provided name.
     */
    getByName(name: string): void

    /*
     * Removes all member layer sets, and any
     * layers or layer sets they contain, from the
     * document.
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 132
     * app.activeDocument.close()
     * }
     * // create a working document
     * var docRef = app.documents.add()
     * // create an array to hold the layer sets
     * var myLayerSets = new Array()
     * // Create an array to hold the text
     * var textArray = Array("First", "Second", "Third")
     * //Create an indexer variable
     * var i = 0
     * // Create three layer sets at the top level
     * for (i = 0; i < 3; i++) {
     * myLayerSets[i] = new Array()
     * myLayerSets[i][0] = docRef.layerSets.add()
     * }
     * // Rearrange the layer sets with the first one on top, second next, etc.
     * myLayerSets[1][0].moveAfter(myLayerSets[0][0])
     * myLayerSets[2][0].moveAfter(myLayerSets[1][0])
     * // Create a layer set inside each layer set
     * for (i = 0; i < 3; i++) {
     * myLayerSets[i][0].name = textArray[i] + " Set"
     * myLayerSets[i][1] = myLayerSets[i][0].layerSets.add()
     * myLayerSets[i][1].name = "Inside " + textArray[i] + " Set"
     * }
     * // Create an array to hold the layers
     * var myLayers = new Array()
     * // Create a text layer with a description inside each layer set
     * for (i = 0; i < 3; i++) {
     * myLayers[i] = myLayerSets[i][1].artLayers.add()
     * myLayers[i].kind = LayerKind.TEXT
     * myLayers[i].textItem.contents = "Layer in " + textArray[i] + " Set Inside
     * "
     * + textArray[i] + " Set"
     * myLayers[i].textItem.position = Array(app.activeDocument.width * i *
     * 0.33,
     * app.activeDocument.height * (i + 1) * 0.25)
     * myLayers[i].textItem.size = 12
     * }
     * 
     */
    removeAll(): void

}

interface MeasurementLog {
    /*
     * Export measurement to a file.
     */
    exportMeasurements(file?: File, range?: MeasurementRange, dataPoints?: string[]): void

    /*
     * Delete measurements from
     * the log.
     * 
     */
    deleteMeasurements(range?: MeasurementRange): void

}

interface MeasurementScale {
    /*
     * The length in pixels this scale equates to.
     * 
     */
    pixelLength: number

    /*
     * The logical length this scale equates to.
     * 
     */
    logicalLength: number

    /*
     * The logical units for this scale.
     * 
     */
    logicalUnits: string

}

interface NoColor {
    /*
     * The class name of the referenced noColor
     * object.
     * 
     */
    typename: string

}

interface Notifier {
    /*
     * The event identifier, a four-character code or a
     * unique string.
     * For a list of four-character codes, see Appendix A: Event ID
     * Codes.
     * 
     */
    event: string

    /*
     * The class identifier, a four-character code or a
     * unique string.
     * When an event applies to multiple types of objects, use this
     * propery to distinguish which object this notifier applies to.
     * For example, the Make event ("Mk ") can apply to
     * documents ("Dcmn"), channels ("Chnl") and other objects.
     * 
     */
    eventClass: string

    /*
     * The path to the file to execute when the event
     * occurs and activates the notifier.
     * 
     */
    eventFile: File

    /*
     * The containing application.
     * 
     */
    parent: Application

    /*
     * The class name of the referenced object.
     * 
     */
    typename: string

    /*
     * Deletes this object.
     * You can also remove a Notifier object
     * from the Script Events Manager
     * drop-down list by deleting the file named
     * Script Events Manager.xml from the
     * Photoshop preferences folder. See Adobe
     * Photoshop CS6 help for more information.
     * 
     */
    remove(): void

}

interface Notifiers {
    /*
     * The number of elements in the notifiers
     * collection.
     * 
     */
    length: number

    /*
     * The notifiers object’s container
     * 
     */
    parent: Application

    /*
     * The class name of the referenced notifiers object.
     * 
     */
    typename: string

    /*
     * Creates a notifier object and adds it to this
     * collection.
     * event defines the class ID of the event: use a
     * 4-characters code or a unique string. See
     * Appendix A: Event ID Codes.
     * eventFile defines the script file that
     * executes when the event occurs.
     * When an event applies to multiple types of
     * objects, use the eventClass (a 4-character ID
     * or unique string) to distinguish which object
     * this Notifier applies to. For example, the
     * Make event ("Mk ") applies to documents
     * ("Dcmn"), channels ("Chnl") and other
     * objects.
     * Tip: When specifying an event or event calss
     * wtih a 4-character ID code, omit the
     * single quotes in your code.
     */
    add(event: string, eventFile: File, eventClass?: string): void

    /*
     * Removes all member objects from the
     * notifiers collection.
     * You can also remove a notifier object from
     * the Script Events Manager drop-down list by
     * deleting the file named Script Events
     * Manager.xml from the Photoshop
     * preferences folder. See Adobe
     * Photoshop CS6 help for more information.
     * 
     */
    removeAll(): void

}

interface PathItem {
    /*
     * The type.
     * 
     */
    kind: PathKind

    /*
     * The name.
     * 
     */
    name: string

    /*
     * The containing document.
     * 
     */
    parent: Document

    /*
     * The contained sub-path objects.
     * 
     */
    subPathItems: SubPathItems

    /*
     * The class name of the referenced
     * pathItem object.
     * 
     */
    typename: string

    /*
     * Deselects this pathItem
     * object.
     */
    deselect(): void

    /*
     * Duplicates this
     * pathItem object with
     * the new name.
     */
    duplicate(name: string): void

    /*
     * Fills the area enclosed by
     * this path.
     * opacity is a percentage.
     * feather is in pixels.
     * If wholePath is true, all
     * subpaths are used when
     * doing the fill (default:
     * true).
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 139
     * PathItem sample script
     * The following creates a path in three segments: two diagonal lines that
     * form a V, and a curved line above
     * the V that makes it look like a 2D ice cream cone.
     * Paths.jsx
     * // Save the current preferences
     * var startRulerUnits = app.preferences.rulerUnits
     * var startTypeUnits = app.preferences.typeUnits
     * var startDisplayDialogs = app.displayDialogs
     * // Set Adobe Photoshop CS6 to use pixels and display no dialogs
     * app.preferences.rulerUnits = Units.PIXELS
     * app.preferences.typeUnits = TypeUnits.PIXELS
     * app.displayDialogs = DialogModes.NO
     * // first close all the open documents
     * while (app.documents.length) {
     * app.activeDocument.close()
     * }
     * // create a document to work with
     * var docRef = app.documents.add(5000, 7000, 72, "Simple Line")
     * //line 1--it’s a straight line so the coordinates for anchor, left, and
     * right
     * //for each point have the same coordinates
     * var lineArray = new Array()
     * lineArray[0] = new PathPointInfo
     * lineArray[0].kind = PointKind.CORNERPOINT
     * lineArray[0].anchor = Array(100, 100)
     */
    fillPath(fillColor?: SolidColor, mode?: ColorBlendMode, opacity?: number, preserveTransparency?: boolean, feather?: number, wholePath?: boolean, antiAlias?: boolean): void

    /*
     * Makes this the clipping
     * path for this document.
     * flatness tells the
     * PostScript printer how to
     * approximate curves in
     * the path.
     */
    makeClippingPath(flatness?: number): void

    /*
     * Makes a Selection object
     * whose border is this
     * path.
     * feather is in pixels.
     */
    makeSelection(feather?: number, antiAlias?: boolean, operation?: SelectionType): void

    /*
     * Deletes this object.
     */
    remove(): void

    /*
     * Makes this the active or
     * selected PathItem
     * object.
     */
    select(): void

    /*
     * Strokes the path with
     * the specified tool.
     * Method Parameter type Returns What it does
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 140
     * lineArray[0].leftDirection = lineArray[0].anchor
     * lineArray[0].rightDirection = lineArray[0].anchor
     * lineArray[1] = new PathPointInfo
     * lineArray[1].kind = PointKind.CORNERPOINT
     * lineArray[1].anchor = Array(150, 200)
     * lineArray[1].leftDirection = lineArray[1].anchor
     * lineArray[1].rightDirection = lineArray[1].anchor
     * var lineSubPathArray = new Array()
     * lineSubPathArray[0] = new SubPathInfo()
     * lineSubPathArray[0].operation = ShapeOperation.SHAPEXOR
     * lineSubPathArray[0].closed = false
     * lineSubPathArray[0].entireSubPath = lineArray
     * // line 2
     * var lineArray2 = new Array()
     * lineArray2[0] = new PathPointInfo
     * lineArray2[0].kind = PointKind.CORNERPOINT
     * lineArray2[0].anchor = Array(150, 200)
     * lineArray2[0].leftDirection = lineArray2[0].anchor
     * lineArray2[0].rightDirection = lineArray2[0].anchor
     * lineArray2[1] = new PathPointInfo
     * lineArray2[1].kind = PointKind.CORNERPOINT
     * lineArray2[1].anchor = Array(200, 100)
     * lineArray2[1].leftDirection = lineArray2[1].anchor
     * lineArray2[1].rightDirection = lineArray2[1].anchor
     * lineSubPathArray[1] = new SubPathInfo()
     * lineSubPathArray[1].operation = ShapeOperation.SHAPEXOR
     * lineSubPathArray[1].closed = false
     * lineSubPathArray[1].entireSubPath = lineArray2
     * //ice cream curve
     * //it’s a curved line, so there are 3 points, not 2
     * //coordinates for the middle point (lineArray3[1]) are different.
     * //The left direction is positioned "above" the anchor on the screen.
     * //The right direction is positioned "below" the anchor
     * //You can change the coordinates for these points to see
     * //how the curve works...
     * var lineArray3 = new Array()
     * lineArray3[0] = new PathPointInfo
     * lineArray3[0].kind = PointKind.CORNERPOINT
     * lineArray3[0].anchor = Array(200, 100)
     * lineArray3[0].leftDirection = lineArray3[0].anchor
     * lineArray3[0].rightDirection = lineArray3[0].anchor
     * lineArray3[1] = new PathPointInfo
     * lineArray3[1].kind = PointKind.CORNERPOINT
     * lineArray3[1].anchor = Array(150, 50)
     * lineArray3[1].leftDirection = Array(100, 50)
     * lineArray3[1].rightDirection = Array(200, 50)
     * lineArray3[2] = new PathPointInfo
     * lineArray3[2].kind = PointKind.CORNERPOINT
     * lineArray3[2].anchor = Array(100, 100)
     * lineArray3[2].leftDirection = lineArray3[2].anchor
     * lineArray3[2].rightDirection = lineArray3[2].anchor
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 141
     * lineSubPathArray[2] = new SubPathInfo()
     * lineSubPathArray[2].operation = ShapeOperation.SHAPEXOR
     * lineSubPathArray[2].closed = false
     * lineSubPathArray[2].entireSubPath = lineArray3
     * //create the path item
     * var myPathItem = docRef.pathItems.add("A Line", lineSubPathArray)
     * // stroke it so we can see something
     * myPathItem.strokePath(ToolType.BRUSH)
     * // Reset the application preferences
     * preferences.rulerUnits = startRulerUnits
     * preferences.typeUnits = startTypeUnits
     * displayDialogs = startDisplayDialogs
     * 
     */
    strokePath(tool?: ToolType, simulatePressure?: boolean): void

}

interface PathItems {
    /*
     * The number of pathItem objects in the
     * pathItems collection.
     * 
     */
    length: number

    /*
     * The pathItems object's container.
     * 
     */
    parent: Document

    /*
     * The class name of the referenced pathItems
     * object.
     * 
     */
    typename: string

    /*
     * Creates a new path item object and adds it
     * to this collection.
     * A new SubPathItem object is created for
     * each SubPathInfo object provided in
     * entirePath, and those SubPathItem
     * objects are added to the subPathItems
     * collection of the returned PathItem.
     */
    add(name: string, entirePath: SubPathInfo[]): void

    /*
     * Get the first element in the pathItems
     * collection with the provided name.
     */
    getByName(name: string): void

    /*
     * Removes all pathItem objects from the
     * pathItems collection.
     * 
     */
    removeAll(): void

}

interface PathPoint {
    /*
     * The X and Y coordinates of the anchor point of the
     * curve.
     * 
     */
    anchor: number[]

    /*
     * The role (corner or smooth) this point plays in the
     * containing path segment.
     * 
     */
    kind: PointKind

    /*
     * The location of the left-direction endpoint (’in’
     * position).
     * 
     */
    leftDirection: number[]

    /*
     * The containing subpath object.
     * 
     */
    parent: SubPathItem

    /*
     * The location of the right-direction endpoint (’out’
     * position).
     * 
     */
    rightDirection: number[]

    /*
     * The class name of the referenced PathPoint
     * object.
     * 
     */
    typename: string

}

interface PathPointInfo {
    /*
     * The X and Y coordinates of the anchor point of
     * the curve.
     * 
     */
    anchor: number[]

    /*
     * The role (corner or smooth) this point plays in the
     * containing path segment.
     * 
     */
    kind: PointKind

    /*
     * The location of the left-direction endpoint (’in’
     * position).
     * 
     */
    leftDirection: number[]

    /*
     * The location of the right-direction endpoint (’out’
     * position).
     * 
     */
    rightDirection: number[]

    /*
     * The class name of the referenced PathPointInfo
     * object.
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 145
     * var spi = new SubPathInfo();
     * spi.closed = false;
     * spi.operation = ShapeOperation.SHAPEXOR;
     * spi.entireSubPath = [startPoint, stopPoint];
     * var line = doc.pathItems.add("Line", [spi]);
     * line.strokePath(ToolType.PENCIL);
     * line.remove();
     * };
     * drawLine(app.activeDocument, [100,100], [200,200]);
     * 
     */
    typename: string

}

interface PathPoints {
    /*
     * The number of elements in the collection.
     * 
     */
    length: number

    /*
     * The containing subpath object.
     * 
     */
    parent: SubPathItem

    /*
     * The class name of the referenced PathPoints
     * object.
     * 
     */
    typename: string

}

interface PDFOpenOptions {
    /*
     * True to use antialias.
     * 
     */
    antiAlias: boolean

    /*
     * The number of bits per channel.
     * constrainProportions boolean DEPRECATED for Adobe Photoshop CS6.
     * 
     */
    bitsPerChannel: BitsPerChannelType

    /*
     * The method of cropping to use.
     * height UnitValue DEPRECATED for Adobe Photoshop CS6.
     * 
     */
    cropPage: CropToType

    /*
     * The color model to use.
     * 
     */
    mode: OpenDocumentMode

    /*
     * The name of the object.
     * 
     */
    name: string

    /*
     * The page or image to which to open
     * the document, depending on the value of
     * usePageNumber.
     * 
     */
    page: number

    /*
     * The resolution of the document (in
     * pixels per inch).
     * 
     */
    resolution: number

    /*
     * True to suppress warnings when
     * opening the document.
     * 
     */
    suppressWarnings: boolean

    /*
     * The class name of the referenced
     * PDFOpenOptions object.
     * 
     */
    typename: string

    /*
     * When true, the page property refers
     * to a page number; when false, it refers to an
     * image number.
     * width UnitValue DEPRECATED for Adobe Photoshop CS6.
     * 
     */
    usePageNumber: boolean

}

interface PDFSaveOptions {
    /*
     * True to save the alpha channels
     * with the file.
     * 
     */
    alphaChannels: boolean

    /*
     * True to save comments with the
     * file.
     * 
     */
    annotations: boolean

    /*
     * True to convert the color profile
     * to a destination profile.
     * 
     */
    colorConversion: boolean

    /*
     * True to convert a 16-bit image
     * to 8-bit for better compatibility with other
     * applications.
     * 
     */
    convertToEightBit: boolean

    /*
     * Description of the save options
     * to use.
     * 
     */
    description: string

    /*
     * Description of the final RGB or
     * CMYK output device, such as a monitor or a
     * press standard.
     * downgradeColorProfile boolean DEPRECATED for Adobe Photoshop CS6.
     * 
     */
    destinationProfile: string

    /*
     * The down sample method to
     * use.
     * 
     */
    downSample: PDFResample

    /*
     * The size to downsample images
     * if they exceed the limit in pixels per inch.
     * 
     */
    downSampleSize: number

    /*
     * Limits downsampling or
     * subsampling to images that exceed this
     * value in pixels per inch.
     * 
     */
    downSampleSizeLimit: number

    /*
     * True to embed the color profile
     * in the document.
     * embedFonts boolean DEPRECATED for Adobe Photoshop CS6.
     * 
     */
    embedColorProfile: boolean

    /*
     * True to include a small preview
     * image in Adobe PDF files.
     * 
     */
    embedThumbnail: boolean

    /*
     * The type of compression to use
     * (default: PDFEncoding.PDFZIP).
     * interpolation boolean DEPRECATED for Adobe Photoshop CS6.
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 149
     * 
     */
    encoding: PDFEncoding

    /*
     * The quality of the produced
     * image, which is inversely proportionate to
     * the compression amount.
     * Valid only when encoding =
     * PDFEncoding.JPEG .
     * 
     */
    jpegQuality: number

    /*
     * True to save the document’s
     * layers.
     * 
     */
    layers: boolean

    /*
     * True to improve performance of
     * PDF files on Web servers.
     * 
     */
    optimizeForWeb: boolean

    /*
     * An optional comment field for
     * inserting descriptions of the output
     * condition. The text is stored in the PDF/X
     * file.
     * 
     */
    outputCondition: string

    /*
     * Indentifier for the output
     * condition.
     * 
     */
    outputConditionID: string

    /*
     * The PDF version to make the
     * document compatible with.
     * 
     */
    PDFCompatibility: PDFCompatibility

    /*
     * The PDF standard to make the
     * document compatible with.
     * 
     */
    PDFStandard: PDFStandard

    /*
     * True to reopen the PDF in
     * Adobe Photoshop CS6 with native
     * Photoshop data intact.
     * 
     */
    preserveEditing: boolean

    /*
     * The preset file to use for
     * settings.
     * Note: This option overrides other settings.
     * 
     */
    presetFile: string

    /*
     * True to show which profiles to
     * include.
     * 
     */
    profileInclusionPolicy: boolean

    /*
     * URL where the output condition
     * is registered.
     * 
     */
    registryName: string

    /*
     * True to save spot colors.
     * 
     */
    spotColors: boolean

    /*
     * Compression option.
     * Valid only when encoding =
     * PDFEncoding.JPEG2000.
     * transparency boolean DEPRECATED for Adobe Photoshop CS6.
     * 
     */
    tileSize: number

    /*
     * The class name of the referenced
     * PDFSaveOptions object.
     * useOutlines boolean DEPRECATED for Adobe Photoshop CS6.
     * Property Value type What it is (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 150
     * vectorData boolean DEPRECATED for Adobe Photoshop CS6.
     * 
     */
    typename: string

    /*
     * True to open the saved PDF in
     * Adobe Acrobat.
     * Property Value type What it is (Continued)
     * 
     */
    view: boolean

}

interface PhotoCDOpenOptions {
    /*
     * The profile to use when reading the
     * image.
     * 
     */
    colorProfileName: string

    /*
     * The colorspace for the image.
     * 
     */
    colorSpace: PhotoCDColorSpace

    /*
     * The image orientation.
     * 
     */
    orientation: Orientation

    /*
     * The image dimensions.
     * 
     */
    pixelSize: PhotoCDSize

    /*
     * The image resolution (in pixels per
     * inch).
     * 
     */
    resolution: number

    /*
     * The class name of the referenced
     * photoCDOpenOptions object.
     * 
     */
    typename: string

}

interface PhotoshopSaveOptions {
    /*
     * True to save the alpha channels.
     * 
     */
    alphaChannels: boolean

    /*
     * True to save the annotations.
     * 
     */
    annotations: boolean

    /*
     * True to embed the color profile in the
     * document.
     * 
     */
    embedColorProfile: boolean

    /*
     * True to preserve the layers.
     * 
     */
    layers: boolean

    /*
     * True to save the spot colors.
     * 
     */
    spotColors: boolean

    /*
     * The class name of the referenced
     * photoshopSaveOptions object.
     * 
     */
    typename: string

}

interface PICTFileSaveOptions {
    /*
     * True to save the alpha channels.
     * 
     */
    alphaChannels: boolean

    /*
     * The type of compression to use
     * (default: PICTCompression.NONE).
     * 
     */
    compression: PICTCompression

    /*
     * True to embed the color profile in the
     * document.
     * 
     */
    embedColorProfile: boolean

    /*
     * The number of bits per pixel.
     * 
     */
    resolution: PICTBitsPerPixels

    /*
     * The class name of the referenced
     * PICTFileSaveOptions object.
     * 
     */
    typename: string

}

interface PICTResourceSaveOptions {
    /*
     * True to save the alpha channels.
     * 
     */
    alphaChannels: boolean

    /*
     * The type of compression to use (default:
     * PICTCompression.NONE).
     * 
     */
    compression: PICTCompression

    /*
     * True to embed the color profile in the
     * document.
     * 
     */
    embedColorProfile: boolean

    /*
     * The name of the PICT resource.
     * 
     */
    name: string

    /*
     * The number of bits per pixel.
     * 
     */
    resolution: PICTBitsPerPixels

    /*
     * The ID of the PICT resource (default:
     * 128).
     * 
     */
    resourceID: number

    /*
     * The class name of the referenced
     * PICTResourceSaveOptions object.
     * 
     */
    typename: string

}

interface PicturePackageOptions {
    /*
     * The content information (default:
     * PicturePackageTextType.NONE).
     * 
     */
    content: PicturePackageTextType

    /*
     * True if all layers in the final
     * document are flattened (default: true).
     * 
     */
    flatten: boolean

    /*
     * The font used for security text
     * (default: GalleryFontType.ARIAL).
     * 
     */
    font: GalleryFontType

    /*
     * The font size used for security
     * text (default: 12).
     * 
     */
    fontSize: number

    /*
     * The layout to use to generate the
     * picture package (default: "(2)5x7").
     * 
     */
    layout: string

    /*
     * Read-write. The color profile to
     * use as the document mode (default:
     * NewDocumentMode.RGB).
     * 
     */
    mode: NewDocumentMode

    /*
     * The web page security opacity as
     * a percent (default: 100).
     * 
     */
    opacity: number

    /*
     * The resolution of the document
     * in pixels per inch (default: 72.0).
     * 
     */
    resolution: number

    /*
     * The picture package custom text.
     * Valid only when content =
     * PicturePackageType.USER.
     * 
     */
    text: string

    /*
     * The color to use for security text.
     * 
     */
    textColor: RGBColor

    /*
     * The security text position
     * (default:
     * GallerySecurityTextPositionType.
     * CENTERED).
     * 
     */
    textPosition: GallerySecurityTextPositionType

    /*
     * The orientation to use for
     * security text (default:
     * GallerySecurityTextRotateType.ZERO).
     * 
     */
    textRotate: GallerySecurityTextRotateType

    /*
     * The class name of the referenced
     * PicturePackageOptions object.
     * 
     */
    typename: string

}

interface PixarSaveOptions {
    /*
     * True to save the alpha
     * channels.
     * 
     */
    alphaChannels: boolean

    /*
     * The class name of the
     * referenced PixarSaveOptions
     * object.
     * 
     */
    typename: string

}

interface PNGSaveOptions {
    /*
     * The compression value (default: 0).
     * 
     */
    compression: number

    /*
     * True to interlace rows (default: false).
     * 
     */
    interlaced: boolean

    /*
     * The class name of the referenced
     * PNGSaveOptions object.
     * 
     */
    typename: string

}

interface Preferences {
    /*
     * The path to an additional
     * plug-in folder.
     * Valid only when
     * useAdditionalPluginFolder = true.
     * 
     */
    additionalPluginFolder: File

    /*
     * The preferred policy for
     * writing file extensions in Windows.
     * 
     */
    appendExtension: SaveBehavior

    /*
     * True to ask the user to verify
     * layer preservation options when saving a
     * file in TIFF format.
     * 
     */
    askBeforeSavingLayeredTIFF: boolean

    /*
     * True to automatically update
     * open documents.
     * 
     */
    autoUpdateOpenDocuments: boolean

    /*
     * True to beep when a process
     * finishes.
     * 
     */
    beepWhenDone: boolean

    /*
     * True to display component
     * channels in the Channels palette in color.
     * 
     */
    colorChannelsInColor: boolean

    /*
     * The preferred color selection
     * tool.
     * 
     */
    colorPicker: ColorPicker

    /*
     * The width of the column
     * gutters (in points).
     * 
     */
    columnGutter: number

    /*
     * Column width (in points)
     * 
     */
    columnWidth: number

    /*
     * True to automatically make
     * the first snapshot when a new document
     * is created.
     * 
     */
    createFirstSnapshot: boolean

    /*
     * True if dynamic color sliders
     * appear in the Color palette.
     * 
     */
    dynamicColorSliders: boolean

    /*
     * The preferred level of detail
     * in the history log. Valid only when
     * useHistoryLog = true.
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 159
     * 
     */
    editLogItems: EditLogItemsType

    /*
     * True to retain Adobe
     * Photoshop CS6 contents on the
     * clipboard after you exit the application.
     * 
     */
    exportClipboard: boolean

    /*
     * The preferred type size to use
     * for font previews in the type tool font
     * menus.
     * 
     */
    fontPreviewSize: FontPreviewType

    /*
     * True to show image preview
     * as a full size image, false to show
     * thumbnail (in Mac OS only).
     * 
     */
    fullSizePreview: boolean

    /*
     * Opacity value as a
     * percentage.
     * 
     */
    gamutWarningOpacity: number

    /*
     * The preferred size to use for
     * squares in the grid.
     * 
     */
    gridSize: GridSize

    /*
     * The preferred formatting
     * style for non-printing grid lines.
     * 
     */
    gridStyle: GridLineStyle

    /*
     * Number of grid subdivisions.
     * 
     */
    gridSubDivisions: number

    /*
     * The preferred formatting
     * style for non-printing guide lines.
     * 
     */
    guideStyle: GuideLineStyle

    /*
     * True to use icon previews (in
     * Mac OS only).
     * 
     */
    iconPreview: boolean

    /*
     * The number of images to
     * hold in the cache.
     * 
     */
    imageCacheLevels: number

    /*
     * The preferred policy for
     * writing image previews in Windows.
     * 
     */
    imagePreviews: SaveBehavior

    /*
     * The method to use to assign
     * color values to any new pixels created
     * when an image is resampled or resized.
     * 
     */
    interpolation: ResampleMethod

    /*
     * True to automatically resize
     * the window when zooming in or out
     * using keyboard shortcuts.
     * 
     */
    keyboardZoomResizesWindows: boolean

    /*
     * True to create a thumbnail
     * when saving the image (in Mac OS only).
     * 
     */
    macOSThumbnail: boolean

    /*
     * The preferred policy for
     * checking whether to maximize
     * compatibility when opening PSD files.
     * 
     */
    maximizeCompatibility: QueryStateType

    /*
     * The maximum percentage of
     * available RAM used by Adobe
     * Photoshop CS6 (5 - 100).
     * 
     */
    maxRAMuse: number

    /*
     * True to allow non-linear
     * history.
     * Property Value type What it is (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 160
     * 
     */
    nonLinearHistory: boolean

    /*
     * The number of history states
     * to preserve.
     * 
     */
    numberofHistoryStates: number

    /*
     * The preferred type of pointer
     * to use with certain tools.
     * 
     */
    otherCursors: OtherPaintingCursors

    /*
     * The preferred type of pointer
     * to use with certain tools.
     * 
     */
    paintingCursors: PaintingCursors

    /*
     * The containing application.
     * 
     */
    parent: Application

    /*
     * True to halve the resolution
     * (double the size of pixels) to make
     * previews display more quickly.
     * 
     */
    pixelDoubling: boolean

    /*
     * The point/pica size.
     * 
     */
    pointSize: PointType

    /*
     * The number of items in the
     * recent file list.
     * 
     */
    recentFileListLength: number

    /*
     * The unit the scripting system
     * will use when receiving and returning
     * values.
     * 
     */
    rulerUnits: Units

    /*
     * Thepreferred location of
     * history log data when saving the history
     * items.
     * 
     */
    saveLogItems: SaveLogItemsType

    /*
     * The path to the history log
     * file, when the preferred location is a file.
     * 
     */
    saveLogItemsFile: File

    /*
     * True to make new palette
     * locations the default location.
     * 
     */
    savePaletteLocations: boolean

    /*
     * True to display Asian text
     * options in the Paragraph palette.
     * 
     */
    showAsianTextOptions: boolean

    /*
     * True to list Asian font names
     * in English.
     * 
     */
    showEnglishFontNames: boolean

    /*
     * True to display slice numbers
     * in the document window when using the
     * Slice tool.
     * 
     */
    showSliceNumber: boolean

    /*
     * True to show pop up
     * definitions on mouse over.
     * 
     */
    showToolTips: boolean

    /*
     * True to use curly, false to use
     * straight quote marks.
     * 
     */
    smartQuotes: boolean

    /*
     * Size of the small font used in
     * panels and dialogs.
     * 
     */
    textFontSize: FontSize

    /*
     * The class name of the
     * referenced preferences object.
     * Property Value type What it is (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 161
     * 
     */
    typename: string

    /*
     * The preferred unit for text
     * character measurements.
     * 
     */
    typeUnits: TypeUnits

    /*
     * True to use an additional
     * folder for compatible plug-ins stored
     * with a different application.
     * 
     */
    useAdditionalPluginFolder: boolean

    /*
     * True to create a log file for
     * history states.
     * 
     */
    useHistoryLog: boolean

    /*
     * True to use lowercase for file
     * extensions.
     * 
     */
    useLowerCaseExtension: boolean

    /*
     * True to enable cycling
     * through a set of hidden tools.
     * 
     */
    useShiftKeyForToolSwitch: boolean

    /*
     * True to enable Adobe
     * Photoshop CS6 to send transparency
     * information to your computer’s video
     * board. (Requires hardware support.)
     * 
     */
    useVideoAlpha: boolean

    /*
     * True to create a thumbnail
     * when saving the image in Windows.
     * (Requires hardware support.)
     * Property Value type What it is (Continued)
     * 
     */
    windowsThumbnail: boolean

}

interface PresentationOptions {
    /*
     * True to auto advance images when when
     * viewing the presentation (default: true).
     * Valid only when presentation = true.
     * 
     */
    autoAdvance: boolean

    /*
     * True to include the file name for the image
     * (default: false).
     * 
     */
    includeFilename: boolean

    /*
     * The time in seconds before the view is auto
     * advanced (default: 5).
     * Valid only when autoAdvance = true.
     * 
     */
    interval: number

    /*
     * True to begin the presentation again after
     * the last page (default: false).
     * Valid only when autoAdvance = true.
     * 
     */
    loop: boolean

    /*
     * The magnification type to use when viewing
     * the image.
     * 
     */
    magnification: MagnificationType

    /*
     * Options to use when creating the PDF file.
     * 
     */
    PDFFileOptions: PDFSaveOptions

    /*
     * True if the output will be a presentation
     * (default: false); when false, the output is a Multi-Page
     * document.
     * 
     */
    presentation: boolean

    /*
     * The method for transition from one image to
     * the next (default: TransitionType.NONE).
     * Valid only when autoAdvance = true. .
     * 
     */
    transition: TransitionType

    /*
     * The class name of the referenced
     * PresentationOptions object.
     * 
     */
    typename: string

}

interface RawFormatOpenOptions {
    /*
     * The number of bits for each channel.
     * The only valid values are BitsPerChannelType.EIGHT
     * or BitsPerChannelType.SIXTEEN.
     * 
     */
    bitsPerChannel: number

    /*
     * The order in which multibyte values are
     * read.
     * Valid only when bitsPerChannel =
     * BitsPerChannelType.SIXTEEN.
     * 
     */
    byteOrder: ByteOrder

    /*
     * The number of channels in the image. The
     * value of cannot exceed the number of channels in the
     * image.
     * When bitsPerChannel =
     * BitsPerChannelType.SIXTEEN, the only valid values
     * are 1, 3, or 4.
     * 
     */
    channelNumber: number

    /*
     * The number of bytes of information that
     * will appear in the file before actual image information
     * begins; that is, the number of zeroes inserted at the
     * beginning of the file as placeholders.
     * 
     */
    headerSize: number

    /*
     * The height of the image (in pixels).
     * 
     */
    height: number

    /*
     * True to store color values sequentially.
     * 
     */
    interleaveChannels: boolean

    /*
     * True to retain the header when saving.
     * Valid only when headerSize is 1 or greater.
     * 
     */
    retainHeader: boolean

    /*
     * The class name of the referenced
     * RawFormatOpenOptions object.
     * 
     */
    typename: string

    /*
     * The image width in pixels.
     * 
     */
    width: number

}

interface RawSaveOptions {
    /*
     * True if alpha channels should be saved.
     * 
     */
    alphaChannels: boolean

    /*
     * True if the spot colors should be saved.
     * 
     */
    spotColors: boolean

    /*
     * The class name of the referenced RawSaveOptions
     * object.
     * 
     */
    typename: string

}

interface RGBColor {
    /*
     * The blue color value (default: 255).
     * 
     */
    blue: number

    /*
     * The green color value (default: 255)
     * 
     */
    green: number

    /*
     * The hexadecimal representation of the color.
     * 
     */
    hexValue: string

    /*
     * The red color value (default: 255)
     * 
     */
    red: number

    /*
     * The class name of the referenced RGBColor object.
     * 
     */
    typename: string

}

interface Selection {
    /*
     * The bounding rectangle of the entire selection.
     * 
     */
    bounds: UnitValue[]

    /*
     * The object's container.
     * 
     */
    parent: Document

    /*
     * True if the bounding rectangle is a solid.
     * 
     */
    solid: boolean

    /*
     * The class name of the referenced selection
     * object.
     * 
     */
    typename: string

    /*
     * Clears the selection and
     * does not copy it to the
     * clipboard.
     */
    clear(): void

    /*
     * (reduces) the
     * selection by the specified
     * amount.
     */
    contract(by: UnitValue): void

    /*
     * Copies the selection to the
     * clipboard. When the
     * optional argument is used
     * and set to true, a merged
     * copy is performed (all visible
     * layers in the selection are
     * copied).
     */
    copy(merge?: boolean): void

    /*
     * Clears the current selection
     * and copies it to the
     * clipboard.
     */
    cut(): void

    /*
     * Deselects the current
     * selection.
     */
    deselect(): void

    /*
     * Expands the selection by the
     * specified amount.
     */
    expand(by: UnitValue): void

    /*
     * Feathers the edges of the
     * selection by the specified
     * amount.
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 167
     */
    feather(by: UnitValue): void

    /*
     * Fills the selection.
     * opacity is a percentage
     * value.
     */
    fill(filltype: SolidColor, mode?: ColorBlendMode, opacity?: number, preserveTransparency?: boolean): void

    /*
     * Grows the selection to
     * include all adjacent pixels
     * falling within the specified
     * tolerance range.
     */
    grow(tolerance: number, antiAlias: boolean): void

    /*
     * Inverts the selection
     * (deselects the selection and
     * selects the rest of the layer
     * or document).
     * Tip: To flip the selection
     * shape, see rotate.
     */
    invert(): void

    /*
     * Loads the selection from the
     * specified channel.
     */
    load(from: Channel, combination?: SelectionType, inverting?: boolean): void

    /*
     * Makes this selection item
     * the work path for this
     * document.
     */
    makeWorkPath(tolerance?: number): void

    /*
     * Resizes the selected area to
     * the specified dimensions
     * and anchor position.
     */
    resize(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void

    /*
     * Changes the size of the
     * selection to the specified
     * dimensions around the
     * specified anchor.
     */
    resizeBoundary(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void

    /*
     * Rotates the selection by the
     * specified amount around
     * the specified anchor point.
     */
    rotate(angle: number, anchor?: AnchorPosition): void

    /*
     * Rotates the boundary of the
     * selection around the
     * specified anchor.
     */
    rotateBoundary(angle: number, anchor?: AnchorPosition): void

    /*
     * Selects the specified region.
     * The region parameter is an
     * array of four coordinates,
     * [left, top, right, bottom].
     */
    select(region: number[], type?: SelectionType, feather?: number, antiAlias?: boolean): void

    /*
     * Selects the entire layer.
     * Method Parameter type Returns What it does (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 168
     * Selection sample script
     * The following script creates a checkerboard using the following steps:
     * ● Create an 800 x 800 pixel document.
     * ● Divide the entire document into 100 x 100 pixel squares.
     * ● Select every other square in the first row, then shift the selection
     * criteria to select the alternate squares
     * in the following row. Repeat until every other square in the document is
     * selected.
     * ● Fill the selected squares with the foreground color from the palette.
     * ● Invert the selection and fill the newly selected squares with the
     * background color from the palette.
     * ● Deselect the squares to remove the selection outlines (the "marching
     * ants").
     * Selection.jsx
     * // Save the current preferences
     * var startRulerUnits = app.preferences.rulerUnits
     */
    selectAll(): void

    /*
     * Selects the selection border
     * only (in the specified width);
     * subsequent actions do not
     * affect the selected area
     * within the borders.
     */
    selectBorder(width: UnitValue): void

    /*
     * Grows the selection to
     * include pixels throughout
     * the image falling within the
     * tolerance range.
     */
    similar(tolerance: number, antiAlias: boolean): void

    /*
     * Cleans up stray pixels left
     * inside or outside a
     * color-based selection
     * (within the radius specified
     * in pixels).
     */
    smooth(radius: number): void

    /*
     * Saves the selection as a
     * channel.
     */
    store(into: Channel, combination?: SelectionType): void

    /*
     * Strokes the selection border.
     * opacity is a percentage
     * value.
     */
    stroke(strokeColor: SolidColor, width: number, location?: StrokeLocation, mode?: ColorBlendMode, opacity?: number, preserveTransparency?: boolean): void

    /*
     * Moves the entire selection
     * relative to its current
     * position.
     */
    translate(deltaX?: UnitValue, deltaY?: UnitValue): void

    /*
     * Moves the selection relative
     * to its current position.
     * Method Parameter type Returns What it does (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 169
     * var startTypeUnits = app.preferences.typeUnits
     * var startDisplayDialogs = app.displayDialogs
     * // Set Adobe Photoshop CS6 to use pixels and display no dialogs
     * app.preferences.rulerUnits = Units.PIXELS
     * app.preferences.typeUnits = TypeUnits.PIXELS
     * app.displayDialogs = DialogModes.NO
     * //Close all the open documents
     * while (app.documents.length) {
     * app.activeDocument.close()
     * }
     * //Create variables for the 800 pixel board divided in even 100 x 100
     * squares
     * var docSize = 800
     * var cells = 8
     * var cellSize = docSize / cells
     * // create a new document
     * var checkersDoc = app.documents.add(docSize, docSize, 72, "Checkers")
     * // Create a variable to use for selecting the checker board
     * // That allows me to shift the selection one square to the right
     * //on every other row, and then shift back for the rows in between.
     * var shiftIt = true
     * // loop through vertically to create the first row
     * for (var v = 0; v < docSize; v += cellSize) {
     * // Switch the shift for a new row
     * shiftIt = !shiftIt
     * // loop through horizontally
     * for (var h = 0; h < docSize; h += (cellSize * 2)) {
     * // push over the cellSize to start with only
     * if (shiftIt && h == 0) {
     * h += cellSize
     * }
     * // Select a square
     * selRegion = Array(Array(h, v),
     * Array(h + cellSize, v),
     * Array(h + cellSize, v + cellSize),
     * Array(h, v + cellSize),
     * Array(h, v))
     * // In the first ineration of the loop, start the selection
     * //In subsequent iterations, use the EXTEND constant value
     * //of the select() method to add to the selection (in the loop’s else
     * clause)
     * if (h == 0 && v == 0) {
     * checkersDoc.selection.select(selRegion)
     * } else {
     * checkersDoc.selection.select(selRegion, SelectionType.EXTEND)
     * }
     * // turn this off for faster execution
     * // turn this on for debugging
     * WaitForRedraw()
     * }
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 170
     * }
     * // Fill the current selection with the foreground color
     * checkersDoc.selection.fill(app.foregroundColor)
     * //Invert the selection
     * checkersDoc.selection.invert()
     * // Fill the new selection with the background color
     * checkersDoc.selection.fill(app.backgroundColor)
     * // Clear the selection to get rid of the non-printing borders
     * checkersDoc.selection.deselect()
     * // Reset the application preferences
     * app.preferences.rulerUnits = startRulerUnits
     * app.preferences.typeUnits = startTypeUnits
     * app.displayDialogs = startDisplayDialogs
     * // A helper function for debugging
     * // It also helps the user see what is going on
     * // if you turn it off for this example you
     * // get a flashing cursor for a number time
     * function WaitForRedraw()
     * {
     * var eventWait = charIDToTypeID("Wait")
     * var enumRedrawComplete = charIDToTypeID("RdCm")
     * var typeState = charIDToTypeID("Stte")
     * var keyState = charIDToTypeID("Stte")
     * var desc = new ActionDescriptor()
     * desc.putEnumerated(keyState, typeState, enumRedrawComplete)
     * executeAction(eventWait, desc, DialogModes.NO)
     * }
     * 
     */
    translateBoundary(deltaX?: UnitValue, deltaY?: UnitValue): void

}

interface SGIRGBSaveOptions {
    /*
     * True to save the alpha
     * channels.
     * 
     */
    alphaChannels: boolean

    /*
     * True to save the spot
     * colors.
     * 
     */
    spotColors: boolean

    /*
     * The class name of the
     * referenced SGIRGBSaveOptions
     * object.
     * 
     */
    typename: string

}

interface SolidColor {
    /*
     * The CMYK color mode.
     * 
     */
    cmyk: CMYKColor

    /*
     * The Grayscale color mode.
     * 
     */
    gray: GrayColor

    /*
     * The HSB color mode.
     * 
     */
    hsb: HSBColor

    /*
     * The LAB color mode.
     * 
     */
    lab: LabColor

    /*
     * The color model.
     * 
     */
    model: ColorModel

    /*
     * The nearest web color to the current color.
     * 
     */
    nearestWebColor: RGBColor

    /*
     * The RGB color mode.
     * 
     */
    rgb: RGBColor

    /*
     * The class name of the referenced SolidColor
     * object.
     * 
     */
    typename: string

    /*
     * True if the SolidColor object is visually
     * equal to the specified color.
     * 
     */
    isEqual(color: SolidColor): void

}

interface SubPathInfo {
    /*
     * True if the path describes an enclosed area.
     * 
     */
    closed: boolean

    /*
     * 
     * 
     */
    entireSubPath: PathPoint[]

    /*
     * The subpath’s operation on other
     * subpaths. Specifies how to combine the shapes if the
     * destination path already has a selection.
     * 
     */
    operation: ShapeOperation

    /*
     * The class name of the referenced
     * SubPathInfo object.
     * 
     */
    typename: string

}

interface SubPathItem {
    /*
     * True if the path is closed.
     * 
     */
    closed: boolean

    /*
     * How this object behaves when it intersects
     * another SubPathItem object. Specifies how to combine the
     * shapes if the destination path already has a selection.
     * 
     */
    operation: ShapeOperation

    /*
     * The object's container.
     * 
     */
    parent: PathItem

    /*
     * The PathPoints collection.
     * 
     */
    pathPoints: PathPoints

    /*
     * The class name of the referenced SubPathItem
     * object.
     * 
     */
    typename: string

}

interface SubPathItems {
    /*
     * The number of elements in the collection.
     * 
     */
    length: number

    /*
     * The containing path item.
     * 
     */
    parent: PathItem

    /*
     * The class name of the referenced SubPathItems
     * object.
     * 
     */
    typename: string

}

interface TargaSaveOptions {
    /*
     * True to save the alpha channels.
     * 
     */
    alphaChannels: boolean

    /*
     * The number of bits per pixel (default:
     * TargaBitsPerPixels.TWENTYFOUR).
     * 
     */
    resolution: TargaBitsPerPixels

    /*
     * True to use RLE compression (default: true).
     * 
     */
    rleCompression: boolean

    /*
     * The class name of the referenced
     * TargaSaveOptions object.
     * 
     */
    typename: string

}

interface TextFont {
    /*
     * The font family.
     * 
     */
    family: string

    /*
     * The name of the font.
     * 
     */
    name: string

    /*
     * The containing application.
     * 
     */
    parent: Application

    /*
     * The PostScript name of the font.
     * 
     */
    postScriptName: string

    /*
     * The font style.
     * 
     */
    style: string

    /*
     * The class name of the referenced TextFont
     * object.
     * 
     */
    typename: string

}

interface TextFonts {
    /*
     * The number of elements in the collection.
     * 
     */
    length: number

    /*
     * The containing application.
     * 
     */
    parent: Application

    /*
     * The class name of the referenced TextFonts object.
     * 
     */
    typename: string

    /*
     * Gets the first element in the TextFonts
     * collection with the provided name.
     * 
     */
    getByName(name: string): void

}

interface TextItem {
    /*
     * True to use alternate ligatures.
     * Note: Alternate ligatures are the same as
     * Discretionary Ligatures. See Adobe
     * Photoshop CS6 Help for more information.
     * 
     */
    alternateLigatures: boolean

    /*
     * The method of anti aliasing to use.
     * 
     */
    antiAliasMethod: AntiAlias

    /*
     * The auto kerning option to use.
     * 
     */
    autoKerning: AutoKernType

    /*
     * The percentage to use for auto (default)
     * leading (in points).
     * Valid only when useAutoLeading = true.
     * 
     */
    autoLeadingAmount: number

    /*
     * The unit value to use in the baseline
     * offset of text.
     * 
     */
    baselineShift: UnitValue

    /*
     * The text case.
     * 
     */
    capitalization: TextCase

    /*
     * The text color.
     * 
     */
    color: SolidColor

    /*
     * The actual text in the layer.
     * 
     */
    contents: string

    /*
     * The desired amount by which to scale the
     * horizontal size of the text letters. A percentage value;
     * at 100, the width of characters is not scaled.
     * Valid only when justification =
     * Justification.CENTERJUSTIFIED,
     * FULLYJUSTIFIED, LEFTJUSTIFIED, or
     * Justification.RIGHTJUSTIFIED.
     * When used, the minimumGlyphScaling and
     * maximumGlyphScaling values are also required.
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 180
     * 
     */
    desiredGlyphScaling: number

    /*
     * The amount of space between letters (at
     * 0, no space is added between letters).
     * Equivalent to Letter Spacing in the Justification
     * dialog (Select Justification on the Paragraphs
     * palette menu).
     * Valid only when justification =
     * Justification.CENTERJUSTIFIED,
     * FULLYJUSTIFIED, LEFTJUSTIFIED, or
     * Justification.RIGHTJUSTIFIED.
     * When used, the minimumLetterScaling and
     * maximumLetterScaling values are also required.
     * 
     */
    desiredLetterScaling: number

    /*
     * The amount (percentage) of space
     * between words (at 100, no additional space is added
     * between words).
     * Equivalent to Word Spacing in the Justification
     * dialog (Select Justification on the Paragraphs
     * palette menu).
     * Valid only when justification =
     * Justification.CENTERJUSTIFIED,
     * FULLYJUSTIFIED, LEFTJUSTIFIED, or
     * Justification.RIGHTJUSTIFIED.
     * When used, the minimumWordScaling and
     * maximumWordScaling values are also required.
     * 
     */
    desiredWordScaling: number

    /*
     * The text orientation.
     * 
     */
    direction: Direction

    /*
     * True to use faux bold (default: false).
     * Setting this to true is equivalent to selecting text and
     * clicking Faux Bold in the Character palette.
     * 
     */
    fauxBold: boolean

    /*
     * True to use faux italic (default: false).
     * Setting this to true is equivalent to selecting text and
     * clicking Faux Italic in the Character palette.
     * 
     */
    fauxItalic: boolean

    /*
     * The amount (unit value) to indent the
     * first line of paragraphs.
     * 
     */
    firstLineIndent: UnitValue

    /*
     * The text face of the character. Use the
     * PostScript Name of the font. See TextFont and use
     * the postScriptName property.
     * 
     */
    font: string

    /*
     * True to use Roman hanging punctuation.
     * 
     */
    hangingPunctuation: boolean

    /*
     * The height of the bounding box (unit
     * value) for paragraph text.
     * Valid only when kind = TextType.PARAGRAPHTEXT.
     * 
     */
    height: UnitValue

    /*
     * Character scaling (horizontal) in
     * proportion to verticalScale (a percentage value).
     * Property Value type What it is (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 181
     * 
     */
    horizontalScale: number

    /*
     * The number of letters after which
     * hyphenation in word wrap is allowed.
     * 
     */
    hyphenateAfterFirst: number

    /*
     * The number of letters before which
     * hyphenation in word wrap is allowed.
     * 
     */
    hyphenateBeforeLast: number

    /*
     * True to allow hyphenation in word wrap
     * of capitalized words.
     * 
     */
    hyphenateCapitalWords: boolean

    /*
     * The minimum number of letters a word
     * must have in order for hyphenation in word wrap to
     * be allowed.
     * 
     */
    hyphenateWordsLongerThan: number

    /*
     * True to use hyphenation in word wrap.
     * hyphenationZone UnitValue
     * [0..720] pica
     * Read-write. The distance at the end of a line that will
     * cause a word to break in unjustified type.
     * 
     */
    hyphenation: boolean

    /*
     * The maximum number of consecutive
     * lines that can end with a hyphenated word.
     * 
     */
    hyphenLimit: number

    /*
     * The paragraph justification.
     * 
     */
    justification: Justification

    /*
     * The text-wrap type.
     * 
     */
    kind: TextType

    /*
     * The language to use.
     * 
     */
    language: Language

    /*
     * The leading amount.
     * 
     */
    leading: UnitValue

    /*
     * The amoun of space to indent text from
     * the left.
     * 
     */
    leftIndent: UnitValue

    /*
     * True to use ligatures.
     * 
     */
    ligatures: boolean

    /*
     * The maximum amount to scale the
     * horizontal size of the text letters (a percentage value;
     * at 100, the width of characters is not scaled).
     * Valid only when justification =
     * Justification.CENTERJUSTIFIED,
     * FULLYJUSTIFIED, LEFTJUSTIFIED, or
     * Justification.RIGHTJUSTIFIED.
     * When used, the minimumGlyphScaling and
     * desiredGlyphScaling values are also required.
     * Property Value type What it is (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 182
     * 
     */
    maximumGlyphScaling: number

    /*
     * The maximum amount of space to allow
     * between letters (at 0, no space is added between
     * letters).
     * Equivalent to Letter Spacing in the Justification
     * dialog (Select Justification on the Paragraphs
     * palette menu).
     * Valid only when justification =
     * Justification.CENTERJUSTIFIED,
     * FULLYJUSTIFIED, LEFTJUSTIFIED, or
     * Justification.RIGHTJUSTIFIED.
     * When used, the minimumLetterScaling and
     * desiredLetterScaling values are also required.
     * 
     */
    maximumLetterScaling: number

    /*
     * The maximum amount of space to allow
     * between words (a percentage value; at 100, no
     * additional space is added between words).
     * Equivalent to Word Spacing in the Justification
     * dialog (Select Justification on the Paragraphs
     * palette menu).
     * Valid only when justification =
     * Justification.CENTERJUSTIFIED,
     * FULLYJUSTIFIED, LEFTJUSTIFIED, or
     * Justification.RIGHTJUSTIFIED.
     * When used, the minimumWordScaling and
     * desiredWordScaling values are also required.
     * 
     */
    maximumWordScaling: number

    /*
     * The minimum amount to scale the
     * horizontal size of the text letters (a percentage value;
     * at 100, the width of characters is not scaled).
     * Valid only when justification =
     * Justification.CENTERJUSTIFIED,
     * FULLYJUSTIFIED, LEFTJUSTIFIED, or
     * Justification.RIGHTJUSTIFIED.
     * When used, the maximumGlyphScaling and
     * desiredGlyphScaling values are also required.
     * Property Value type What it is (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 183
     * 
     */
    minimumGlyphScaling: number

    /*
     * The minimum amount of space to allow
     * between letters (a percentage value; at 0, no space is
     * removed between letters).
     * Equivalent to Letter Spacing in the Justification
     * dialog (Select Justification on the Paragraphs
     * palette menu).
     * Valid only when justification =
     * Justification.CENTERJUSTIFIED,
     * FULLYJUSTIFIED, LEFTJUSTIFIED, or
     * Justification.RIGHTJUSTIFIED.
     * When used, the maximumLetterScaling and
     * desiredLetterScaling values are also required.
     * 
     */
    minimumLetterScaling: number

    /*
     * The minimum amount of space to allow
     * between words (a percentage value; at 100, no
     * additional space is removed between words).
     * Equivalent to Word Spacing in the Justification
     * dialog (Select Justification on the Paragraphs
     * palette menu).
     * Valid only when justification =
     * Justification.CENTERJUSTIFIED,
     * FULLYJUSTIFIED, LEFTJUSTIFIED, or
     * Justification.RIGHTJUSTIFIED.
     * When used, the maximumWordScaling and
     * desiredWordScaling values are also required.
     * 
     */
    minimumWordScaling: number

    /*
     * True to disallow line breaks in this text.
     * Tip: When true for many consecutive characters, can
     * prevent word wrap and thus may prevent some
     * text from appearing on the screen.
     * 
     */
    noBreak: boolean

    /*
     * True to use old style type.
     * 
     */
    oldStyle: boolean

    /*
     * The containing layer.
     * 
     */
    parent: ArtLayer

    /*
     * The position of origin for the text. The
     * array members specify the X and Y coordinates.
     * Equivalent to clicking the text tool at a point in the
     * document to create the point of origin for text.
     * 
     */
    position: UnitValue[]

    /*
     * The amount of space to indent text from
     * the right.
     * 
     */
    rightIndent: UnitValue

    /*
     * The font size in UnitValue . NOTE: Type
     * was points for CS3 and older..
     * 
     */
    size: UnitValue

    /*
     * The amount of space to use after each
     * paragraph.
     * Property Value type What it is (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 184
     * 
     */
    spaceAfter: UnitValue

    /*
     * The amount of space to use before each
     * paragraph.
     * 
     */
    spaceBefore: UnitValue

    /*
     * The text strike-through option to use.
     * 
     */
    strikeThru: StrikeThruType

    /*
     * The composition method to use to
     * evaluate line breaks and optimize the specified
     * hyphenation and justification options.
     * Valid only when kind = TextType.PARAGRAPHTEXT.
     * 
     */
    textComposer: TextComposer

    /*
     * The amount of uniform spacing between
     * multiple characters.
     * Tracking units are 1/1000 of an em space. The width
     * of an em space is relative to the current type size. In a
     * 1-point font, 1 em equals 1 point; in a 10-point font, 1
     * em equals 10 points. So, for example, 100 units in a
     * 10-point font are equivalent to 1 point.
     * 
     */
    tracking: number

    /*
     * The class name of the referenced
     * textItem object.
     * 
     */
    typename: string

    /*
     * The text underlining options.
     * 
     */
    underline: UnderlineType

    /*
     * True to use a font's built-in leading
     * information.
     * 
     */
    useAutoLeading: boolean

    /*
     * Vertical character scaling in proportion to
     * horizontalScale (a percentage value).
     * 
     */
    verticalScale: number

    /*
     * The warp bend percentage.
     * 
     */
    warpBend: number

    /*
     * The warp direction.
     * 
     */
    warpDirection: Direction

    /*
     * The horizontal distortion of the warp (a
     * percentage value).
     * 
     */
    warpHorizontalDistortion: number

    /*
     * The style of warp to use.
     * 
     */
    warpStyle: WarpStyle

    /*
     * The vertical distortion of the warp (a
     * percentage value).
     * 
     */
    warpVerticalDistortion: number

    /*
     * The width of the bounding box for
     * paragraph text.
     * Valid only when kind = TextType.PARAGRAPHTEXT.
     * Property Value type What it is (Continued)
     * Adobe Photoshop CS6
     * JavaScript Scripting Reference JavaScript Object Reference 185
     * Methods
     * 
     */
    width: UnitValue

    /*
     * Converts the text item and its containing layer to
     * a fill layer with the text changed to a clipping
     * path.
     */
    convertToShape(): void

    /*
     * Creates a clipping path from the outlines of the
     * actual text items (such as letters or words).
     * 
     */
    createPath(): void

}

interface TiffSaveOptions {
    /*
     * True to save the alpha channels.
     * 
     */
    alphaChannels: boolean

    /*
     * True to save the annotations.
     * 
     */
    annotations: boolean

    /*
     * The order in which the document’s
     * multibyte values are read (default:
     * ByteOrder.MACOS in Mac OS, ByteOrder.IBM
     * in Windows).
     * 
     */
    byteOrder: ByteOrder

    /*
     * True to embed the color profile in
     * the document.
     * 
     */
    embedColorProfile: boolean

    /*
     * The compression type (default:
     * TIFFEncoding.NONE).
     * 
     */
    imageCompression: TIFFEncoding

    /*
     * True if the channels in the image
     * will be interleaved.
     * 
     */
    interleaveChannels: boolean

    /*
     * The quality of the produced
     * image, which is inversely proportionate to the
     * amount of JPEG compression.
     * Valid only when imageCompression =
     * TIFFEncoding.JPEG.
     * 
     */
    jpegQuality: number

    /*
     * The method of compression to use
     * when saving layers (as opposed to saving
     * composite data).
     * Valid only when layers = true.
     * 
     */
    layerCompression: LayerCompression

    /*
     * True to save the layers.
     * 
     */
    layers: boolean

    /*
     * True to preserve multi-resolution
     * information (default: false).
     * 
     */
    saveImagePyramid: boolean

    /*
     * True to save the spot colors.
     * 
     */
    spotColors: boolean

    /*
     * True to save the transparency as
     * an additional alpha channel when the file is
     * opened in another application.
     * 
     */
    transparency: boolean

    /*
     * The class name of the referenced
     * TiffSaveOptions object.
     * 
     */
    typename: string

}

interface UnitValue {
}

interface xmpMetadata {
    /*
     * The containing document.
     * 
     */
    parent: Document

    /*
     * A string containing the XMP metadata in
     * XML (RDF) format. See the XMP Specification for
     * details of this format.
     * 
     */
    rawData: string

}