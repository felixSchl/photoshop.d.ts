/**
* Represents measurement values that contain both the numeric magnitude and 
* the unit of measurement. 
*/
interface UnitValue {
	/**
	* A UnitValue object that defines the size of one pixel, or a total size to 
	 * use as a base for percentage values. This is used as the base conversion 
	 * unit for pixels and percentages; see Converting pixel and percentage values.
	 * Default is 0.013889 inches (1/72 in), which is the base conversion unit for
	 * pixels at 72 dpi. Set to null to restore the default.
	 */
	baseUnit: UnitValue | null;

	/**
	 * The unit type in abbreviated form; for example, "cm" or "in".
	 */
	type: ScaleUnit;

	/**
	 * The numeric measurement value.
	 */
	value: number | string;

	/**
	 * Returns the numeric value of this object in the given unit. If the unit is 
	 * unknown or cannot be computed, generates a run-time error.
	 */
	as(unit: ScaleUnit): number;

	/**
	 * Converts this object to the given unit, resetting the type and value accordingly.
	 * Returns true if the conversion is successful. If the unit is unknown or the 
	 * object cannot be converted, generates a run-time error and returns false.
	 */
	convert(unit: ScaleUnit): boolean;
}

declare const UnitValue: {
	/**
	 * A UnitValue object that defines the size of one pixel, or a total size to 
	 * use as a base for percentage values. This is used as the base conversion 
	 * unit for pixels and percentages; see Converting pixel and percentage values.
	 * Default is 0.013889 inches (1/72 in), which is the base conversion unit for
	 * pixels at 72 dpi. Set to null to restore the default.
	 */
	baseUnit: UnitValue | null;
	
	/**
	 * Represents measurement values that contain both the numeric magnitude and the unit 
	 * of measurement.The UnitValue constructor creates a new UnitValue object.
	 */
	new (value: number | string, unit?: ScaleUnit): UnitValue & number
	
	/**
	 * Represents measurement values that contain both the numeric magnitude and the unit 
	 * of measurement.The UnitValue constructor creates a new UnitValue object. 
	 * The keyword new is optional.
	 */
	(value: number | string, unit?: ScaleUnit): UnitValue & number
}

/**
 * The unit is specified with a string in abbreviated, singular, or plural form.
 */
type ScaleUnit = "in" | "inch" | "inches"
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
