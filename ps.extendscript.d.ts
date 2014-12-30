declare class Folder {

    /*
     * @param path string. The absolute or relative path to the folder
     * associated with this object, specified in URI format. The path need not
     * refer to an existing folder. If not supplied, a temporary name is
     * generated.
     */
    new (path?: string)

    /*
     * A Folder object for the folder that contains application data for all
     * users. Read only.
     *
     * In Windows, the value of %APPDATA% (by default, C:\Documents and
     * Settings\All Users\Application Data)
     *
     * In Mac OS, /Library/Application Support
     */
    static appData: Folder

    /*
     * In Mac OS, the Folder object for the folder that contains the bundle of
     * the running application. Read only.
     */
    static appPackage

    /*
     * A Folder object for the folder that contains application data for the
     * current user. Read only.
     *
     * In Windows, the value of %CommonProgramFiles% (by default,
     * C:\Program Files\Common Files)
     *
     * * In Mac OS,/Library/Application Support
     */
    static commonFiles: Folder

    /*
     * A Folder object for the current folder. Assign either a Folder object or
     * a string containing the new path name to set the current folder.
     */
    static current: Folder

    /*
     * A Folder object for the folder that contains the user’s desktop. Read
     * only.
     *
     * In Windows, C:\Documents and Settings\username\Desktop
     *
     * In Mac OS, ~/Desktop
     */
    static desktop: Folder

    /*
     * The name of the file system. Read only. One of Windows, Macintosh, or
     * Unix.
     */
    static fs: string

    /*
     * A Folder object for the user’s default document folder. Read only.
     *
     * In Windows, C:\Documents and Settings\username\My Documents
     *
     * In Mac OS, ~/Documents
     */
    static myDocuments: Folder

    /*
     * A Folder object for the folder containing the executable image of the
     * running application. Read only.
     */
    static startup: Folder

    /*
     * A Folder object for the folder containing the operating system files.
     * Read only.
     *
     * In Windows, the value of %windir% (by default, C:\Windows)
     *
     * In Mac OS, /System
     */
    static system: Folder

    /*
     * A Folder object for the default folder for temporary files. Read only.
     */
    static temp: Folder

    /*
     * In Mac OS, a Folder object for the folder containing deleted items.
     *
     * In Windows, where the Recycle Bin is a database rather than a folder,
     * value is null.
     *
     * Read only.
     */
    static trash: Folder

    /*
     * In Mac OS, a Folder object for the folder containing deleted items.
     *
     * In Windows, where the Recycle Bin is a database rather than a folder,
     * value is null.
     */
    static userData: Folder

    /*
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

    /*
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


    /*
     * Checks whether a given encoding is available.
     *
     * @param string name  The encoding name. Typical values are “ASCII,”
     * “binary,” or “UTF-8.
     *
     * @return boolean Returns true if your system supports the specified
     * encoding, false otherwise.
     */
    static isEncodingAvailable(name: string): boolean

    /*
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

    /*
     * The full path name for the referenced folder in URI notation. Read only.
     */
    absoluteURI: String

    /*
     * When true, the object refers to a file system alias or shortcut. Read
     * only.
     */
    alias: boolean

    /*
     * The creation date of the referenced folder, or null if the object does
     * not refer to a folder on disk. Read only.
     */
    created: Date

    /*
     * The localized name of the referenced folder, without the path. Read only.
     */
    displayName: string

    /*
     * A message describing the most recent file system error Typically set by
     * the file system, but a script can set it. Setting this value clears any
     * error message and resets the error bit for opened files. Contains the
     * empty string if there is no error.
     */
    error: string

    /*
     * When true, this object refers to a folder that currently exists in the
     * file system. Read only.
     */
    exists: boolean

    /*
     * The platform-specific name of the referenced folder as a full path name.
     * Read only.
     */
    fsName: string

    /*
     * The full path name for the referenced folder in URI notation. Read only.
     */
    fullName: string

    /*
     * A localized version of the folder name portion of the absolute URI for
     * the referenced file, without the path specification. Read only.
     */
    localizedName: string

    /*
     * The date of the referenced folder’s last modification, or null if the
     * object does not refer to a folder on disk. Read only.
     */
    modified: Date

    /*
     * The folder name portion of the absolute URI for the referenced file,
     * without the path specification. Read only.
     */
    name: string

    /*
     * The Folder object for the folder that contains this folder, or null if
     * this object refers to the root folder of a volume. Read only.
     */
    parent: Folder

    /*
     * The path portion of the absolute URI for the referenced folder, without
     * the folder name. Read only.
     */
    path: string

    /*
     * The path name for the referenced folder in URI notation, relative to the
     * current folder. Read only.
     */
    relativeURI: string

    /*
     * Changes the path specification of the referenced folder.
     *
     * @param path string containing the new path, absolute or relative to the
     * current parent folder.
     *
     * @return true on success.
     */
    changePath(path: string): boolean

    /*
     * Creates a folder at the location given by this object’s path property.
     * @return true if the folder was created successfully.
     */
    create(): boolean

    /*
     * Opens this folder in the platform-specific file browser (as if it had
     * been double-clicked in the file browser).
     *
     * @return true immediately if the folder was opened successfully.
     */
    execute(): boolean

    /*
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

    /*
     * Retrieves the path for this folder relative to the specified base path or
     * the current folder, in URI notation.
     *
     * @param basePath string. A string containing the base path for the
     * relative URI. Default is the current folder.
     *
     * @reutrn a string containing the relative URI.
     */
    getRelativeURI(basePath?: string): string

    /*
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

    /*
     * Renames the associated folder. Does not resolve aliases; instead,
     * renames the referenced alias or shortcut file itself.
     *
     * @param newName string The new folder name, with no path.
     *
     * @return true on success.
     */
    rename(newName: string): boolean

    /*
     * If this object references an alias or shortcut, this method resolves that
     * alias.
     *
     * @return a new Folder object that references the file-system element
     * to which the alias resolves, or null if this object does not reference an
     * alias, or if the alias cannot be resolved.
     */
    resolve(): Folder

    /*
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
