//*** ExtendScript reflection interface ***//

/**
 * ExtendScript provides a reflection interface that allows you to find out
 * everything about an object, including its name, a description, the expected
 * data type for properties, the arguments and return value for methods, and
 * any default values or limitations to the input values.
 * NOTE reg. Typescript: Asks for a reflect property on every Extendscript
 * object declaration. Functionality of reflection can be replaced by
 * Typescript declarations.
 */
interface Reflection {
	/**
	 * Short text describing the reflected object, or undefined if no
	 * description is available.
	 */
	readonly description: string | undefined 
	
	/**
	 * Longer text describing the reflected object more completely, or
	 * undefined if no description is available.
	 */
	readonly help: string | undefined
	
	/**
	 * An Array of ReflectionInfo objects containing all methods of the
	 * reflected object, defined in the class or in the specific instance.
	 */
	readonly methods: ReflectionInfo[]
	
	/**
	 * The class name of the reflected object.
	 */
	readonly name: string
	
	/**
	 * An Array of ReflectionInfo objects containing all properties of the
	 * reflected object, defined in the class or in the specific instance. For
	 * objects with dynamic properties (defined at runtime) the list contains
	 * only those dynamic properties that have already been accessed by
	 * the script. For example, in an object wrapping an HTML tag, the names of
	 * the HTML attributes are determined at run time.
	 */
	readonly properties: ReflectionInfo[]
	
	/**
	 * Returns the ReflectionInfo object for the named property of the
	 * reflected object, or null if no such property exists. Use this method to
	 * get information about dynamic properties that have not yet been accessed,
	 * but that are known to exist.
	 * @param name The property for which to retrieve information.
	 */
	find(name: string): ReflectionInfo | null
}

interface ReflectionInfo {
	/**
	 * For a reflected method, an array of ReflectionInfo objects describing
	 * each method argument.
	 */
	readonly arguments: ReflectionInfo[]
	
	/**
	 * The data type of the reflected element. One of: boolean, number, string,
	 * Classname: The class name of an object. NOTE: Class names start with a
	 * capital letter. Thus, the value string stands for a JavaScript string,
	 * while String is a JavaScript String wrapper object.
	 * *: Any type. This is the default. null, undefined: Return data type for
	 * a function that does not return any value. unknown
	 */
	readonly dataType: string
	
	/**
	 * The default value for a reflected property or method argument, or
	 * undefined if there is no default value, if the property is undefined, or
	 * if the element is a method.
	 */
	readonly defaultValue: any | undefined
	
	/**
	 * Short text describing the reflected object, or undefined if no
	 * description is available.
	 */
	readonly description: string | undefined
	
	/**
	 * Longer text describing the reflected object more completely, or
	 * undefined if no description is available.
	 */
	readonly help: string | undefined
	
	/**
	 * When true, the reflected property or method returns a collection;
	 * otherwise, false.
	 */
	readonly isCollection: boolean
	
	/**
	 * The maximum numeric value for the reflected element, or undefined if
	 * there is no maximum or if the element is a method.
	 */
	readonly max: number | undefined
	
	/**
	 * The minimum numeric value for the reflected element, or undefined if
	 * there is no minimum or if the element is a method.
	 */
	readonly min: number | undefined
	
	/**
	 * The name of the reflected element. A string, or a number for an array
	 * index.
	 */
	readonly name: string | number
	
	/**
	 * The type of the reflected element. One of: 
	 * readonly: A Read only property.
	 * readwrite: A read-write property.
	 * createonly: A property that is valid only during creation of an object.
	 * method: A method.
	 */
	readonly type: string
}


//*** Global localize function ***//

/**
 * The globally available localize function can be used to provide localized
 * strings anywhere a displayed text value is specified. The function takes a
 * specially formatted set of localized versions of a display string, and
 * returns the version appropriate to the current locale.
 */
declare function localize(localization_obj: Object, ...args: any[]): string
declare function localize(ZString: string): string


//*** Global User notification dialogs ***//

/** 
 * Displays a dialog containing a short message and an OK button. 
 * @param message The string for the displayed message.
 * @param title Optional. A string to appear as the title of the dialog, if the
 * platform supports a title. Mac OS does not support titles for alert dialogs.
 * The default title string is "Script Alert."
 * @param errorIcon Optional. When true, the platform-standard alert icon is
 * replaced by the platform-standard error icon in the dialog. Default is false.
 */
declare function alert(message: string, title?: string, errorIcon?: boolean): void

/** 
 * Displays a dialog containing a short message and two buttons labeled
 * Yes and No. Returns true if the user clicked Yes, false if the user clicked
 * No.
 * @param message The string for the displayed message.
 * @param noAsDflt Optional. When true, the No button is the default choice,
 * selected when the user types ENTER. Default is false, meaning that Yes is
 * the default choice.
 * @param title Optional. A string to appear as the title of the dialog, if the
 * platform supports a title. Mac OS does not support titles for confirmation
 * dialogs. The default title string is "Script Alert."
 */
declare function confirm(message: string, noAsDflt?: boolean, title?: string): boolean

/**
 * Displays a dialog containing a short message, a text edit field, and two
 * buttons labeled OK and Cancel.
 * @param message The string for the displayed message.
 * @param preset The initial value to be displayed in the text edit field.
 * @param title Optional. A string to appear as the title of the dialog. On
 * Windows, this appears in the window’s frame, while on Mac OS it appears
 * above the message. The default title string is "Script Prompt."
 */
declare function prompt(message: string, preset: string, title?: string): boolean


//*** UnitValue ***//

/**
* Represents measurement values that contain both the numeric magnitude and 
* the unit of measurement. 
*/
interface UnitValue {
	/**
	 * A UnitValue object that defines the size of one pixel, or a total size
	 * to use as a base for percentage values. This is used as the base
	 * conversion unit for pixels and percentages; see Converting pixel and
	 * percentage values.
	 * Default is 0.013889 inches (1/72 in), which is the base conversion unit
	 * for pixels at 72 dpi. Set to null to restore the default.
	 */
    baseUnit: UnitValue | null

	/**
	 * The unit type in abbreviated form; for example, "cm" or "in".
	 */
    type: _ScaleUnit

	/**
	 * The numeric measurement value.
	 */
    value: number

	/**
	 * Returns the numeric value of this object in the given unit. If the unit
	 * is unknown or cannot be computed, generates a run-time error.
	 */
    as(unit: _ScaleUnit): number

	/**
	 * Converts this object to the given unit, resetting the type and value
	 * accordingly. Returns true if the conversion is successful. If the unit
	 * is unknown or the object cannot be converted, generates a run-time error
	 * and returns false.
	 */
    convert(unit: _ScaleUnit): boolean
}

declare const UnitValue: {
	/**
	 * A UnitValue object that defines the size of one pixel, or a total size
	 * to use as a base for percentage values. This is used as the base
	 * conversion unit for pixels and percentages; see Converting pixel and
	 * percentage values.
	 * Default is 0.013889 inches (1/72 in), which is the base conversion unit
	 * for pixels at 72 dpi. Set to null to restore the default.
	 */
    baseUnit: UnitValue | null

	/**
	 * Represents measurement values that contain both the numeric magnitude
	 * and the unit of measurement.The UnitValue constructor creates a new
	 * UnitValue object.
	 */
    new(value: number | string, unit?: _ScaleUnit): UnitValue & number

	/**
	 * Represents measurement values that contain both the numeric magnitude
	 * and the unit of measurement.The UnitValue constructor creates a new
	 * UnitValue object. 
	 * The keyword new is optional.
	 */
    (value: number | string, unit?: _ScaleUnit): UnitValue & number
}

/**
 * The unit is specified with a string in abbreviated, singular, or plural form.
 */
type _ScaleUnit = "in" | "inch" | "inches"
    | "ft" | "foot" | "feet"
    | "yd" | "yard" | "yards"
    | "mi" | "mile" | "miles"
    | "mm" | "millimeter" | "millimeters"
    | "cm" | "centimeter" | "centimeters"
    | "m" | "meter" | "meters"
    | "km" | "kilometer" | "kilometers"
    | "pt" | "point" | "points"
    | "pc" | "pica" | "picas"
    | "tpt" | "traditional point" | "traditional points"
    | "tpc" | "traditional pica" | "traditional picas"
    | "ci" | "cicero" | "ciceros"
    | "px" | "pixel" | "pixels"
    | "%" | "percent" | "percent"
