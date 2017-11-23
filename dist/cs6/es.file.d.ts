declare class File {
    /**
     * @param path string. The absolute or relative path to the file associated with
     * this object, specified in platform-specific or URI format. The value stored
     * in the object is the absolute path.
     * The path need not refer to an existing file. If not supplied, a temporary
     * name is generated.
     */
    constructor(path?: string)

    /**
     * The name of the file system. Read only. One of Windows, Macintosh, or
     * Unix.
     */
    static readonly fs: string

    /**
     * Decodes the specified string as required by RFC 2396.
     *
     * @param uri string The encoded string to decode.
     * All special characters must be encoded in UTF-8 and stored as escaped
     * characters starting with the percent sign followed by two hexadecimal
     * digits.
     *
     * For example, the string "my%20file" is decoded as "my file".
     *
     * Special characters are those with a numeric value greater than 127,
     * except the following:
     *
     * / - _ . ! ~ * ' ( )
     *
     * @return Returns the decoded string.
     */
    static decode(uri: string): string

    /**
     * Encodes the specified string as required by RFC 2396. All special
     * characters are encoded in UTF-8 and stored as escaped characters starting
     * with the percent sign followed by two hexadecimal digits.
     *
     * For example, the string "my file" is encoded as "my%20file".
     *
     * Special characters are those with a numeric value greater than 127,
     * except the following:
     *
     * / - _ . ! ~ * ' ( )
     *
     * @param name string The string to encode.
     *
     * @return the encoded string.
     */
    static encode(name: string): string

    /**
     * Checks whether a given encoding is available.
     *
     * @param name string The encoding name. Typical values are “ASCII,”
     * “binary,” or “UTF-8.”
     *
     * @return true if your system supports the specified encoding, false
     * otherwise.
     */
    static isEncodingAvailable(name: string): boolean

    /**
     *
     * Opens the built-in platform-specific file-browsing dialog in which a user
     * can select an existing file or multiple files, and creates new File
     * objects to represent the selected files.
     *
     * @param prompt string A string containing the prompt text, if the dialog
     * allows a prompt.
     *
     * @param filter string A filter that limits the types of files displayed in
     * the dialog.
     * In Windows, a filter expression, such as "JavaScript:*.jsx;All files:*.*"
     * In Mac OS, a filter function that takes a File instance and returns true
     * if the file
     * should be included in the display, false if it should not.
     *
     * @param multiSelect boolean. When true, the user can select multiple files
     * and the return value is an array. Default is false.
     *
     * @returns a File object for the selected file if the user clicks OK, or an
     * array of objects if multiple files are selected. If the user cancels,
     * returns null.
     *
     * TODO: return `(File|File[])` in TSC 1.4
     */
    static openDialog(prompt_?: string, filter?: string, multiSelect?: boolean): any

    /**
     * Opens the built-in platform-specific file-browsing dialog in which a user
     * can select an existing file location to which to save information, and
     * creates a new File object to represent the selected file location.
     *
     * @param prompt string A string containing the prompt text, if the dialog
     * allows a prompt.
     *
     * @param filter string (Windows only). A filter that limits the types of
     * files displayed in the dialog. A filter expression, such as
     * "JavaScript:*.jsx;All files:*.*".
     *
     * @return a File object for the selected file location if the user clicks
     * OK, or null otherwise.
     */
    static saveDialog (prompt_?: string, filter?: string): File

    /**
     * The full path name for the referenced file in URI notation. Read only.
     */
    readonly absoluteURI: string

    /**
     * When true, the object refers to a file system alias or shortcut. Read
     * only.
     */
    alias: boolean

    /**
     * The creation date of the referenced file, or null if the object does not
     * refer to a file on disk. Read only.
     */
    readonly created: Date

    /**
     * In Mac OS, the file creator as a four-character string. In Windows or
     * UNIX, value is "????". Read only.
     */
    readonly creator: string

    /**
     * The localized name of the referenced file, without the path. Read only.
     */
    readonly displayName: string

    /**
     *
     * Gets or sets the encoding for subsequent read/write operations. If the
     * value is not recognized, uses the system default encoding.
     *
     * A special encoder, BINARY, is used to read binary files. It stores each
     * byte of the file as one Unicode character regardless of any encoding.
     * When writing, the lower byte of each Unicode character is treated as a
     * single byte to write.
     */
    encoding: string

    /**
     * When true, a read attempt caused the current position to be at the end of
     * the file, or the file is not open. Read only.
     */
    readonly eof: boolean

    /**
     * A message describing the last file system error. Typically set by the
     * file system, but a script can set it. Setting this value clears any error
     * message and resets the error bit for opened files. Contains the empty
     * string if there is no error.
     */
    error: string

    /**
     * When true, this object refers to a file or file-system alias that
     * actually exists in the file system. Read only.
     */
    readonly exists: boolean

    /**
     * The platform-specific full path name for the referenced file. Read only.
     */
    readonly fsName: string

    /**
     * The full path name for the referenced file in URI notation. Read only.
     */
    readonly fullName: string

    /**
     * When true, the file is not shown in the platform-specific file browser.
     * Read/write. If the object references a file-system alias or shortcut, the
     * flag is altered on the alias, not on the original file.
     */
    hidden: boolean

    /**
     * The size of the file in bytes. Can be set only for a file that is not
     * open, in which case it truncates or pads the file with 0-bytes to the new
     * length.
     */
    length: number

    /**
     * How line feed characters are written in the file system. One of:
     * Windows — Windows style
     * Macintosh — Mac OS style
     * Unix — UNIX style
     */
    lineFeed: string

    /**
     * A localized version of the file name portion of the absolute URI for the
     * referenced file, without the path specification. Read only.
     */
    readonly localizedName: string

    /**
     * The date of the referenced file’s last modification, or null if the
     * object does not refer to a file on disk. Read only.
     */
    readonly modified: Date

    /**
     * The file name portion of the absolute URI for the referenced file,
     * without the path specification. Read only.
     */
    readonly name: string

    /**
     * The Folder object for the folder that contains this file. Read only.
     */
    readonly parent: Folder

    /**
     * The path portion of the absolute URI for the referenced file, without the
     * file name. Read only.
     */
    readonly path: string

    /**
     * When true, prevents the file from being altered or deleted. If the
     * referenced file is a file-system alias or shortcut, the flag is altered
     * on the alias, not on the original file.
     */
    readonly: boolean

    /**
     * The path name for the referenced file in URI notation, relative to the
     * current folder. Read only.
     */
    readonly relativeURI: string

    /**
     * The file type as a four-character string.
     * In Mac OS, the Mac OS file type.
     * In Windows, "appl" for .EXE files, "shlb" for .DLL files and "TEXT" for
     * any other file.
     * If the file does not exist, the value is "????". Read only.
     */
    readonly type: string

    /**
     * Changes the path specification of the referenced file.
     *
     * @param path string containing the new path, absolute or relative to the
     * current folder.
     *
     * @return true on success.
     */
    changePath(path: string): string

    /**
     * Closes this open file.
     *
     * @return true on success, false if there are I/O errors.
     */
    close(): boolean

    /**
     * Copies this object’s referenced file to the specified target location.
     * Resolves any aliases to find the source file. If a file exists at the
     * target location, it is overwritten.
     *
     * @param target string with the URI path to the target location, or a File
     * object that references the target location.
     *
     * @return true if the copy was successful, false otherwise.
     */
    copy(target: string): boolean

    /**
     * Makes this file a file-system alias or shortcut to the specified file.
     * The referenced file for this object must not yet exist on disk.
     *
     * @param path string containing the path of the target file.
     *
     * @return true if the operation was successful, false otherwise.
     */
    createAlias(path?: string): boolean

    /**
     * Opens this file using the appropriate application, as if it had been
     * double-clicked in a file browser.
     * You can use this method to run scripts, launch applications, and so on.
     *
     * @return true immediately if the application launch was successful.
     */
    execute(): boolean

    /**
     * Retrieves the URI for this file, relative to the specified base path, in
     * URI notation. If no base path is supplied, the URI is relative to the
     * path of the current folder.
     *
     * @param basePath string Default is the current folder.
     *
     * @return a string containing the relative URI.
     */
    getRelativeURI(basePath?: string): string

    /**
     * Opens the referenced file for subsequent read/write operations. The
     * method resolves any aliases to find the file.
     *
     * The method attempts to detect the encoding of the open file. It reads a
     * few bytes at the current location and tries to detect the Byte Order Mark
     * character 0xFFFE. If found, the current position is advanced behind the
     * detected character and the encoding property is set to one of the strings
     * UCS-2BE, UCS-2LE, UCS4-BE, UCS-4LE, or UTF-8. If the marker character is
     * not found, it checks for zero bytes at the current location and makes an
     * assumption about one of the above formats (except UTF-8). If everything
     * fails, the encoding property is set to the system encoding.
     *
     * NOTE: Be careful about opening a file more than once. The operating
     * system usually permits you to do so, but if you start writing to the file
     * using two different File objects, you can destroy your data.
     *
     * @param mode string indicating the read/write mode. One of:
     * r: (read) Opens for reading. If the file does not exist or cannot be
     *    found, the call fails.
     * w: (write) Opens a file for writing. If the file exists, its contents are
     *    destroyed. If the file does not exist, creates a new, empty file.
     * e: (edit) Opens an existing file for reading and writing.
     * a: (append) Opens the file in Append mode, and moves the current position
     *    to the end of the file.
     *
     * @param type string In Mac OS, the type of a newly created file, a
     * 4-character string. Ignored in Windows and UNIX.
     *
     * @param creator string In Mac OS, the creator of a newly created file, a
     * 4-character string. Ignored in Windows and UNIX.
     *
     * @return true if the file has been opened successfully, false otherwise.
     */
    open(mode: string, type?: string, creator?: string): boolean

    /**
     * Opens the built-in platform-specific file-browsing dialog, in which the
     * user can select an existing file or files, and creates new File objects
     * to represent the selected files. Differs from the class method
     * openDialog() in that it presets the current folder to this File object’s
     * parent folder and the current file to this object’s associated file.
     *
     * @param prompt string containing the prompt text, if the dialog allows a
     * prompt.
     *
     * @param filter string A filter that limits the types of files displayed in
     * the dialog.
     *  In Windows, a filter expression, such as "JavaScript:*.jsx;All
     *  files:*.*"
     *  In Mac OS, a filter function that takes a File instance and returns true
     *  if the file should be included in the display, false if it should not.
     *
     * @param multiSelect boolean. When true, the user can select multiple files
     * and the return value is an array. Default is false.
     *
     * @return a File or Folder object for the selected file or folder if the
     * user clicks OK, or an array of objects. If the user cancels, returns
     * null.
     *
     * TODO: return `(File|File[])` in TSC 1.4
     */
    OpenDlg(prompt_?: string, filter?: string, multiSelect?: boolean): any

    /**
     * Reads the contents of the file starting at the current position.
     *
     * @param chars number An integer specifying the number of characters to
     * read. By default, reads from the current position to the end of the file.
     * If the file is encoded, multiple bytes might be read to create single
     * Unicode characters.
     *
     * @return a string that contains up to the specified number of characters.
     */
    read(chars?: number): string

    /**
     * Reads a single text character from the file at the current position. Line
     * feeds are recognized as CR, LF, CRLF, or LFCR pairs. If the file is
     * encoded, multiple bytes might be read to create single Unicode
     * characters.
     *
     * @return a string that contains the character.
     */
    readch(): string

    /**
     * Reads a single line of text from the file at the current position, and
     * returns it in a string. Line feeds are recognized as CR, LF, CRLF, or
     * LFCR pairs. If the file is encoded, multiple bytes might be read to
     * create single Unicode characters.
     *
     * @return a string that contains the text.
     */
    readln(): string

    /**
     * Deletes the file associated with this object from disk, immediately,
     * without moving it to the system trash. Does not resolve aliases; instead,
     * deletes the referenced alias or shortcut file itself.
     *
     * NOTE: Cannot be undone. It is recommended that you prompt the user for
     * permission before deleting.
     *
     * @return true if the file is deleted successfully.
     */
    remove(): boolean

    /**
     * Renames the associated file. Does not resolve aliases, but renames the
     * referenced alias or shortcut file itself.
     *
     * @param newName string The new file name, with no path.
     *
     * @return true on success.
     */
    rename(newName: string): boolean

    /**
     * If this object references an alias or shortcut, this method resolves that
     * alias and returns a new File object that references the file-system
     * element to which the alias resolves.
     *
     * @return the new File object, or null if this object does not reference an
     * alias, or if the alias cannot be resolved.
     */
    resolve(): File

    /**
     * Opens the built-in platform-specific file-browsing dialog, in which the
     * user can select an existing file location to which to save information,
     * and creates a new File object to represent the selected file.  Differs
     * from the class method saveDialog() in that it presets the current folder
     * to this File object’s parent folder and the file to this object’s
     * associated file.
     *
     * @param prompt string containing the prompt text, if the dialog allows a
     * prompt.
     *
     * @param preset string (Windows only). A filter that limits the types of
     * files displayed in the dialog. A filter expression, such as
     * "JavaScript:*.jsx;All files:*.*"
     *
     * @return a File object for the selected file if the user clicks OK. If the
     * user cancels, returns null.
     */
    saveDlg(prompt_?: string, preset?: string): File

    /**
     * Seeks to the specified position in the file. The new position cannot be
     * less than 0 or greater than the current file size.
     *
     * @param pos number The new current position in the file as an offset in
     * bytes from the start, current position, or end, depending on the mode.
     *
     * @param mode number The seek mode, one of:
     * 0: Seek to absolute position, where pos=0 is the first byte of the file.
     *    This is the default.
     * 1: Seek relative to the current position.
     * 2: Seek backward from the end of the file.
     *
     * @return true if the position was changed.
     */
    seek(pos: number, mode?: number): boolean

    /**
     * Retrieves the current position as a byte offset from the start of the
     * file.
     *
     * @return a number, the position index.
     */
    tell(): number

    /**
     * Writes the specified text to the file at the current position. For
     * encoded files, writing a single Unicode character may write multiple
     * bytes.
     *
     * NOTE: Be careful not to write to a file that is open in another
     * application or object, as this can overwrite existing data.
     *
     * @param text string One or more strings to write, which are concatenated
     * to form a single string.
     *
     * @return true on success.
     */
    write(text: string, ...texts: string[]): boolean

    /**
     * Writes the specified text to the file at the current position, and
     * appends a Line Feed sequence in the style specified by the linefeed
     * property.For encoded files, writing a single Unicode character may write
     * multiple bytes.
     *
     * NOTE: Be careful not to write to a file that is open in another
     * application or object, as this can overwrite existing data.
     *
     * @param text string One or more strings to write, which are concatenated
     * to form a single string.
     *
     * @return true on success.
     */
    writeln (text: string, ...texts: string[]): boolean
}

declare class Folder {

    /**
     * @param path string. The absolute or relative path to the folder
     * associated with this object, specified in URI format. The path need not
     * refer to an existing folder. If not supplied, a temporary name is
     * generated.
     */
    constructor(path?: string)

    /**
     * A Folder object for the folder that contains application data for all
     * users. Read only.
     *
     * In Windows, the value of %APPDATA% (by default, C:\Documents and
     * Settings\All Users\Application Data)
     *
     * In Mac OS, /Library/Application Support
     */
    static readonly appData: Folder

    /**
     * In Mac OS, the Folder object for the folder that contains the bundle of
     * the running application. Read only.
     */
    static readonly appPackage: Folder

    /**
     * A Folder object for the folder that contains application data for the
     * current user. Read only.
     *
     * In Windows, the value of %CommonProgramFiles% (by default,
     * C:\Program Files\Common Files)
     *
     * * In Mac OS,/Library/Application Support
     */
    static readonly commonFiles: Folder

    /**
     * A Folder object for the current folder. Assign either a Folder object or
     * a string containing the new path name to set the current folder.
     */
    static current: Folder

    /**
     * A Folder object for the folder that contains the user’s desktop. Read
     * only.
     *
     * In Windows, C:\Documents and Settings\username\Desktop
     *
     * In Mac OS, ~/Desktop
     */
    static desktop: Folder

    /**
     * The name of the file system. Read only. One of Windows, Macintosh, or
     * Unix.
     */
    static readonly fs: string

    /**
     * A Folder object for the user’s default document folder. Read only.
     *
     * In Windows, C:\Documents and Settings\username\My Documents
     *
     * In Mac OS, ~/Documents
     */
    static readonly myDocuments: Folder

    /**
     * A Folder object for the folder containing the executable image of the
     * running application. Read only.
     */
    static readonly startup: Folder

    /**
     * A Folder object for the folder containing the operating system files.
     * Read only.
     *
     * In Windows, the value of %windir% (by default, C:\Windows)
     *
     * In Mac OS, /System
     */
    static readonly system: Folder

    /**
     * A Folder object for the default folder for temporary files. Read only.
     */
    static readonly temp: Folder

    /**
     * In Mac OS, a Folder object for the folder containing deleted items.
     *
     * In Windows, where the Recycle Bin is a database rather than a folder,
     * value is null.
     *
     * Read only.
     */
    static readonly trash: Folder

    /**
     * In Mac OS, a Folder object for the folder containing deleted items.
     *
     * In Windows, where the Recycle Bin is a database rather than a folder,
     * value is null.
     */
    static userData: Folder

    /**
     * Decodes the specified string as required by RFC 2396.
     *
     * All special characters must be encoded in UTF-8 and stored as escaped
     * characters starting with the percent sign followed by two hexadecimal
     * digits. For example, the string "my%20file" is decoded as "my file".
     *
     * Special characters are those with a numeric value greater than 127,
     * except the following:
     *
     *  / - _ . ! ~ * ' ( )
     *
     * @param string uri The encoded string to decode.
     *
     * @return string the decoded string.
     */
    static decode(uri: string): string

    /**
     * Encodes the specified string as required by RFC 2396. All special
     * characters are encoded in UTF-8 and stored as escaped characters starting
     * with the percent sign followed by two hexadecimal digits.  For example,
     * the string "my file" is encoded as "my%20file".
     *
     * Special characters are those with a numeric value greater than 127,
     * except the following:
     *
     * / - _ . ! ~ * ' ( )
     *
     * @param string the string to encode.
     *
     * @return string the encoded string.
     */
    static encode(name: string): string


    /**
     * Checks whether a given encoding is available.
     *
     * @param string name  The encoding name. Typical values are “ASCII,”
     * “binary,” or “UTF-8.
     *
     * @return boolean Returns true if your system supports the specified
     * encoding, false otherwise.
     */
    static isEncodingAvailable(name: string): boolean

    /**
     * Opens the built-in platform-specific file-browsing dialog, and creates a
     * new File or Folder object for the selected file or folder. Differs from
     * the object method selectDlg() in that it does not preselect a folder.
     *
     * @param [string] prompt A string containing the prompt text, if the
     * dialog allows a prompt.
     *
     * @return If the user clicks OK, returns a File or Folder object for the
     * selected file or folder. If the user cancels, returns null.
     *
     * TODO: return `(File|Folder)` in TSC 1.4
     */
    static selectDialog(prompt?: string): any

    /**
     * The full path name for the referenced folder in URI notation. Read only.
     */
    readonly absoluteURI: String

    /**
     * When true, the object refers to a file system alias or shortcut. Read
     * only.
     */
    alias: boolean

    /**
     * The creation date of the referenced folder, or null if the object does
     * not refer to a folder on disk. Read only.
     */
    readonly created: Date

    /**
     * The localized name of the referenced folder, without the path. Read only.
     */
    readonly displayName: string

    /**
     * A message describing the most recent file system error Typically set by
     * the file system, but a script can set it. Setting this value clears any
     * error message and resets the error bit for opened files. Contains the
     * empty string if there is no error.
     */
    error: string

    /**
     * When true, this object refers to a folder that currently exists in the
     * file system. Read only.
     */
    readonly exists: boolean

    /**
     * The platform-specific name of the referenced folder as a full path name.
     * Read only.
     */
    readonly fsName: string

    /**
     * The full path name for the referenced folder in URI notation. Read only.
     */
    readonly fullName: string

    /**
     * A localized version of the folder name portion of the absolute URI for
     * the referenced file, without the path specification. Read only.
     */
    readonly localizedName: string

    /**
     * The date of the referenced folder’s last modification, or null if the
     * object does not refer to a folder on disk. Read only.
     */
    readonly modified: Date

    /**
     * The folder name portion of the absolute URI for the referenced file,
     * without the path specification. Read only.
     */
    readonly name: string

    /**
     * The Folder object for the folder that contains this folder, or null if
     * this object refers to the root folder of a volume. Read only.
     */
    readonly parent: Folder

    /**
     * The path portion of the absolute URI for the referenced folder, without
     * the folder name. Read only.
     */
    readonly path: string

    /**
     * The path name for the referenced folder in URI notation, relative to the
     * current folder. Read only.
     */
    readonly relativeURI: string

    /**
     * Changes the path specification of the referenced folder.
     *
     * @param path string containing the new path, absolute or relative to the
     * current parent folder.
     *
     * @return true on success.
     */
    changePath(path: string): boolean

    /**
     * Creates a folder at the location given by this object’s path property.
     * @return true if the folder was created successfully.
     */
    create(): boolean

    /**
     * Opens this folder in the platform-specific file browser (as if it had
     * been double-clicked in the file browser).
     *
     * @return true immediately if the folder was opened successfully.
     */
    execute(): boolean

    /**
     * param mask string. A search mask for file names. A string that can
     * contain question mark (?) and asterisk (*) wild cards. Default is "*",
     * which matches all file names.  Can also be the name of a function that
     * takes a File or Folder object as its argument.
     *
     * It is called for each file or folder found in the search; if it returns
     * true, the object is added to the return array.  NOTE: In Windows, all
     * aliases end with the extension .lnk; ExtendScript strips this from the
     * file name when found, in order to preserve compatibility with other
     * operating systems. You can search for all aliases by supplying the search
     * mask "*.lnk", but note that such code is not portable.  Retrieves the
     * contents of this folder, filtered by the supplied mask.
     *
     * @return Returns an array of File and Folder objects, or null if this
     * object's referenced folder does not exist.
     *
     * TODO: return `(File|Folder)[]` in TSC 1.4
     */
    getFiles(mask?: string): any[]

    /**
     * Retrieves the path for this folder relative to the specified base path or
     * the current folder, in URI notation.
     *
     * @param basePath string. A string containing the base path for the
     * relative URI. Default is the current folder.
     *
     * @reutrn a string containing the relative URI.
     */
    getRelativeURI(basePath?: string): string

    /**
     *
     * Deletes the empty folder associated with this object from disk,
     * immediately, without moving it to the system trash. Folders must be empty
     * before they can be deleted. Does not resolve aliases; instead, deletes
     * the referenced alias or shortcut file itself.
     *
     * NOTE: Cannot be undone. It is recommended that you prompt the user for
     * permission before deleting.
     *
     * @return true if the folder is deleted successfully.
     */
    remove(): boolean

    /**
     * Renames the associated folder. Does not resolve aliases; instead,
     * renames the referenced alias or shortcut file itself.
     *
     * @param newName string The new folder name, with no path.
     *
     * @return true on success.
     */
    rename(newName: string): boolean

    /**
     * If this object references an alias or shortcut, this method resolves that
     * alias.
     *
     * @return a new Folder object that references the file-system element
     * to which the alias resolves, or null if this object does not reference an
     * alias, or if the alias cannot be resolved.
     */
    resolve(): Folder

    /**
     * Opens the built-in platform-specific file-browsing dialog, and creates
     * a new File or Folder object for the selected file or folder. Differs
     * from the class method selectDialog() in that it preselects
     *
     * @param prompt A string containing the prompt text, if the dialog allows a
     * prompt.
     *
     * @return a File or Folder object for the selected file or folder if the
     * user clicks OK. If the user cancels, returns null.
     *
     * TODO: return `(File|Folder)` in TSC 1.4
     */
    selectDlg(prompt_: string): any
}
