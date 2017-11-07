////////////////////////////////////////////////////////////////////////////////
//
// This file was generated. Do not modify.
//
////////////////////////////////////////////////////////////////////////////////


/**
 * Method to use for interpreting selective color adjustment specifications:
 * ABSOLUTE = % of the whole. RELATIVE = % of the existing color amount. Pass to
 * ArtLayer.selectiveColor().
 */
declare enum AdjustmentReference {
    ABSOLUTE,
    RELATIVE
}

/**
 * The point around which to transform an object. This is the point that does
 * not move when an object is rotated or resized using methods in ArtLayer,
 * LayerSet, and Selection, or when the entire canvas is resized with
 * Document.resizeCanvas().
 */
declare enum AnchorPosition {
    BOTTOMCENTER,
    BOTTOMLEFT,
    BOTTOMRIGHT,
    MIDDLECENTER,
    MIDDLELEFT,
    MIDDLERIGHT,
    TOPCENTER,
    TOPLEFT,
    TOPRIGHT
}

/**
 * Method to use to smooth edges by softening the color transition between edge
 * pixels and background pixels. Used in a TextItem.antiAliasMethod.
 */
declare enum AntiAlias {
    CRISP,
    NONE,
    SHARP,
    SMOOTH,
    STRONG
}

/**
 * The type of kerning to use for characters. Used in TextItem.autoKerning.
 */
declare enum AutoKernType {
    MANUAL,
    METRICS,
    OPTICAL
}

/**
 * The destination, if any, for batch-processed files, specified in the
 * BatchOptions used with the Application.batch() method: FOLDER: Save modified
 * versions of the files to a new location (leaving the originals unchanged).
 * NODESTINATIONTYPE: Leave all files open. SAVEANDCLOSE: Save changes and close
 * the files. Adobe Photoshop CC JavaScript Scripting Reference Scripting
 * Constants 198
 */
declare enum BatchDestinationType {
    FOLDER,
    NODESTINATION,
    SAVEANDCLOSE
}

/**
 * Specifies the quality of an image you are converting to bitmap mode. Used in
 * BitmapConversionOptions.
 */
declare enum BitmapConversionType {
    CUSTOMPATTERN,
    DIFFUSIONDITHER,
    HALFTHRESHOLD,
    HALFTONESCREEN,
    PATTERNDITHER
}

/**
 * Specifies the shape of the dots (ink deposits) in the halftone screen. Used
 * in BitmapConversionOptions.
 */
declare enum BitmapHalfToneType {
    CROSS,
    DIAMOND,
    ELLIPSE,
    LINE,
    ROUND,
    SQUARE
}

/**
 * The number of bits per color channel. Value of Document.bitsPerChannel; pass
 * to Documents.add(). Also used in PDFOpenOptions and CameraRAWOpenOptions.
 */
declare enum BitsPerChannelType {
    EIGHT,
    ONE,
    SIXTEEN,
    THIRTYTWO
}

/**
 * Controls how pixels in an image are blended when a filter is applied. The
 * value of ArtLayer.blendMode and LayerSet.blendMode.
 */
declare enum BlendMode {
    COLORBLEND,
    COLORBURN,
    COLORDODGE,
    DARKEN,
    DIFFERENCE,
    DISSOLVE,
    DIVIDE,
    EXCLUSION,
    HARDLIGHT,
    HARDMIX,
    HUE,
    LIGHTEN,
    LINEARBURN,
    LINEARDODGE,
    LINEARLIGHT,
    LUMINOSITY,
    MULTIPLY,
    NORMAL,
    OVERLAY,
    PASSTHROUGH,
    PINLIGHT,
    SATURATION,
    SCREEN,
    SOFTLIGHT,
    SUBTRACT,
    VIVIDLIGHT
}

/**
 * The number of bits per channel (also called pixel depth or color depth). The
 * number selected indicates the exponent of 2. For example, a pixel with a
 * bit-depth of EIGHT has 28, or 256, possible color values. Used in
 * BMPSaveOptions. Constant type Values What it means Adobe Photoshop CC
 * JavaScript Scripting Reference Scripting Constants 199
 */
declare enum BMPDepthType {
    BMP_A1R5G5B5,
    BMP_A4R4G4B4,
    BMP_A8R8G8B8,
    BMP_R5G6B5,
    BMP_R8G8B8,
    BMP_X1R5G5B5,
    BMP_X4R4G4B4,
    BMP_X8R8G8B8,
    EIGHT,
    FOUR,
    ONE,
    SIXTEEN,
    THIRTYTWO,
    TWENTYFOUR
}

/**
 * The platform-specific order in which multibyte values are read.
 */
declare enum ByteOrder {
    IBM,
    MACOS
}

/**
 * The default CameraRaw settings to use: the camera settings, custom settings,
 * or the settings of the selected image. Set in CameraRAWOpenOptions.
 */
declare enum CameraRAWSettingsType {
    CAMERA,
    CUSTOM,
    SELECTEDIMAGE
}

/**
 * The camera RAW size type options:. EXTRALARGE=5120 x 4096 LARGE=4096 x 2731
 * MAXIMUM=6144 X 4096 MEDIUM=3072 x 2048 MINIMUM=1536 x 1024 SMALL=2048 x 1365
 * Set in CameraRAWOpenOptions.
 */
declare enum CameraRAWSize {
    EXTRALARGE,
    LARGE,
    MAXIMUM,
    MEDIUM,
    MINIMUM,
    SMALL
}

/**
 * The new color profile or mode for a document, specified in
 * Document.changeMode(). Note: Color images must be changed to GRAYSCALE mode
 * before you can change them to BITMAP mode.
 */
declare enum ChangeMode {
    BITMAP,
    CMYK,
    GRAYSCALE,
    INDEXEDCOLOR,
    LAB,
    MULTICHANNEL,
    RGB
}

/**
 * The type of a color channel: COMPONENT: related to document color mode.
 * MASKEDAREA: Alpha channel where color indicates masked area. SELECTEDAREA:
 * Alpha channel where color indicates selected are. SPOTCOLOR: Alpha channel to
 * store a spot color. Constant type Values What it means Adobe Photoshop CC
 * JavaScript Scripting Reference Scripting Constants 200
 */
declare enum ChannelType {
    COMPONENT,
    MASKEDAREA,
    SELECTEDAREA,
    SPOTCOLOR
}

/**
 * The way color should be blended in a fill or stroke operation. Pass to
 * PathItem.fillPath(), Selection.fill(), Selection.stroke()
 */
declare enum ColorBlendMode {
    BEHIND,
    CLEAR,
    COLOR,
    COLORBURN,
    COLORDODGE,
    DARKEN,
    DARKERCOLOR,
    DIFFERENCE,
    DISSOLVE,
    EXCLUSION,
    HARDLIGHT,
    HARDMIXBLEND,
    HUE,
    LIGHTEN,
    LIGHTERCOLOR,
    LINEARBURN,
    LINEARDODGE,
    LINEARLIGHT,
    LUMINOSITY,
    MULTIPLY,
    NORMAL,
    OVERLAY,
    PINLIGHT,
    SATURATION,
    SCREEN,
    SOFTLIGHT,
    VIVIDLIGHT
}

/**
 * The color model to use for a SolidColor.
 */
declare enum ColorModel {
    CMYK,
    GRAYSCALE,
    HSB,
    LAB,
    NONE,
    RGB
}

/**
 * The preferred color-selection tool, set in Preferences.
 */
declare enum ColorPicker {
    ADOBE,
    APPLE,
    PLUGIN,
    WINDOWS
}

/**
 * The type of color profile used to manage this document, set in
 * Document.colorProfileType.
 */
declare enum ColorProfileType {
    CUSTOM,
    NONE,
    WORKING
}

/**
 * The color reduction algorithm option for ExportOptionsSaveForWeb.
 */
declare enum ColorReductionType {
    ADAPTIVE,
    BLACKWHITE,
    CUSTOM,
    GRAYSCALE,
    MACINTOSH,
    PERCEPTUAL,
    RESTRICTIVE,
    SELECTIVE,
    WINDOWS
}

/**
 * The type of color space to use in CameraRAWOpenOptions.
 */
declare enum ColorSpaceType {
    ADOBERGB,
    COLORMATCHRGB,
    PROPHOTORGB,
    SRGB
}

/**
 * The copyright status of a document. Used in
 * DocumentPrintSettings.copyrighted. Constant type Values What it means Adobe
 * Photoshop CC JavaScript Scripting Reference Scripting Constants 201
 */
declare enum CopyrightedType {
    COPYRIGHTEDWORK,
    PUBLICDOMAIN,
    UNMARKED
}

/**
 * The method to use for creating fields. Pass to ArtLayer.applyDeInterlace().
 */
declare enum CreateFields {
    DUPLICATION,
    INTERPOLATION
}

/**
 * The style to use when cropping a page in a PDF document. Set in
 * PDFOpenOptions.cropPage.
 */
declare enum CropToType {
    ARTBOX,
    BLEEDBOX,
    BOUNDINGBOX,
    CROPBOX,
    MEDIABOX,
    TRIMBOX
}

/**
 * The type of composite DCS file to create with DCS1_SaveOptions or
 * DCS2_SaveOptions: COLORCOMPOSITE: Creates a color composite file in addition
 * to DCS files. GRAYSCALECOMPOSITE: Creates a grayscale composite file in
 * addition to DCS files. NOCOMPOSITE: Does not create a composite file.
 */
declare enum DCSType {
    COLORCOMPOSITE,
    GRAYSCALECOMPOSITE,
    NOCOMPOSITE
}

/**
 * The source to use for the depth map. Pass to ArtLayer.applyLensBlur().
 */
declare enum DepthMapSource {
    IMAGEHIGHLIGHT,
    LAYERMASK,
    NONE,
    TRANSPARENCYCHANNEL
}

/**
 * The value type of an action key, returned by ActionDescriptor.getType() and
 * ActionList.getType().
 */
declare enum DescValueType {
    ALIASTYPE,
    BOOLEANTYPE,
    CLASSTYPE,
    DOUBLETYPE,
    ENUMERATEDTYPE,
    INTEGERTYPE,
    LARGEINTEGERTYPE,
    LISTTYPE,
    OBJECTTYPE,
    RAWTYPE,
    REFERENCETYPE,
    STRINGTYPE,
    UNITDOUBLE
}

/**
 * Controls the type of dialogs Photoshop displays when running scripts.
 */
declare enum DialogModes {
    ALL,
    ERROR,
    NO
}

/**
 * ● The direction in which to flip the document canvas, passed to
 * Document.flipCanvas(). ● The orientation of text in TextItem.direction. ● The
 * direction of text warping in TextItem.warpDirection. Constant type Values
 * What it means Adobe Photoshop CC JavaScript Scripting Reference Scripting
 * Constants 202
 */
declare enum Direction {
    HORIZONTAL,
    VERTICAL
}

/**
 * Describes how the displacement map fits the image if the image is not the
 * same size as the map. Pass to ArtLayer.applyDisplace().
 */
declare enum DisplacementMapType {
    STRETCHTOFIT,
    TILE
}

/**
 * The type of dithering to use in GIFSaveOptions, IndexedConversionOptions and
 * ExportOptionsSaveForWeb.
 */
declare enum Dither {
    DIFFUSION,
    NOISE,
    NONE,
    PATTERN
}

/**
 * The type of positioning to use in DocPosition
 */
declare enum DocPositionStyle {
    PRINTCENTERED,
    USERDEFINED
}

/**
 * The fill type of a new document, passed to Documents.add().
 */
declare enum DocumentFill {
    BACKGROUNDCOLOR,
    TRANSPARENT,
    WHITE
}

/**
 * The color mode of a open document, Document.mode. See also
 * Document.changeMode().
 */
declare enum DocumentMode {
    BITMAP,
    CMYK,
    DUOTONE,
    GRAYSCALE,
    INDEXEDCOLOR,
    LAB,
    MULTICHANNEL,
    RGB
}

/**
 * The preferred level of detail in th history log, set in Preferences: CONCISE:
 * Save a concise history log. DETAILED: Save a detailed history log.
 * SESSIONONLY: Save history log only for the session.
 */
declare enum EditLogItemsType {
    CONCISE,
    DETAILED,
    SESSIONONLY
}

/**
 * The object’s position in the Layers palette. Note: Not all values are valid
 * for all object types. See the specific object description to make sure you
 * are using a valid value.
 */
declare enum ElementPlacement {
    INSIDE,
    PLACEATBEGINNING,
    PLACEATEND,
    PLACEBEFORE,
    PLACEAFTER
}

/**
 * The type of fields to eliminate. Pass to ArtLayer.applyDeInterlace().
 */
declare enum EliminateFields {
    EVENFIELDS,
    ODDFIELDS
}

/**
 * The type of export for Document.exportDocument(). This is equivalent to
 * choosing File > Export > Paths To Illustrator, or File > Save For Web and
 * Devices.
 */
declare enum ExportType {
    ILLUSTRATORPATHS,
    SAVEFORWEB
}

/**
 * The policy and format for appending an extension to the filename when saving
 * with Document.saveAs(). Constant type Values What it means Adobe Photoshop CC
 * JavaScript Scripting Reference Scripting Constants 203
 */
declare enum Extension {
    LOWERCASE,
    NONE,
    UPPERCASE
}

/**
 * File naming options for the BatchOptions used with the Application.batch()
 * method.
 */
declare enum FileNamingType {
    DDMM,
    DDMMYY,
    DOCUMENTNAMELOWER,
    DOCUMENTNAMEMIXED,
    DOCUMENTNAMEUPPER,
    EXTENSIONLOWER,
    EXTENSIONUPPER,
    MMDD,
    MMDDYY,
    SERIALLETTERLOWER,
    SERIALLETTERUPPER,
    SERIALNUMBER1,
    SERIALNUMBER2,
    SERIALNUMBER3,
    SERIALNUMBER4,
    YYDDMM,
    YYMMDD,
    YYYYMMDD
}

/**
 * The preferred type size to use for font previews in the type tool font menus
 * , set in Preferences.
 */
declare enum FontPreviewType {
    HUGE,
    EXTRALARGE,
    LARGE,
    MEDIUM,
    NONE,
    SMALL
}

/**
 * The preferred type size to use for panels and dialogs, set in Preferences.
 */
declare enum FontSize {
    LARGE,
    MEDIUM,
    SMALL
}

/**
 * The type of colors to be included the color table regardless of their usage.
 * Used in GIFSaveOptions and IndexedConversionOptions. BLACKWHITE: Pure black
 * and pure white. NONE: None PRIMARIES: Red, green, blue, cyan, magenta,
 * yellow, black, and white. WEB: the 216 web-safe colors.
 */
declare enum ForcedColors {
    BLACKWHITE,
    NONE,
    PRIMARIES,
    WEB
}

/**
 * The option with which to save a JPEG file, in JPEGSaveOptions.
 * OPTIMIZEDBASELINE: Optimized color and a slightly reduced file size.
 * PROGRESSIVE: Displays a series of increasingly detailed scans as the image
 * downloads. STANDARDBASELINE: Format recognized by most web browsers.
 */
declare enum FormatOptions {
    OPTIMIZEDBASELINE,
    PROGRESSIVE,
    STANDARDBASELINE
}

/**
 * The type of proportions to constrain for images. Used in
 * GalleryImagesOptions. Constant type Values What it means Adobe Photoshop CC
 * JavaScript Scripting Reference Scripting Constants 204
 */
declare enum GalleryConstrainType {
    CONSTRAINBOTH,
    CONSTRAINHEIGHT,
    CONSTRAINWIDTH
}

/**
 * The fonts to use for the Web photo gallery captions and other text. Used in
 * GalleryBannerOptions, GalleryImagesOptions, and GalleryThumbnailOptions. Also
 * used in PicturePackageOptions.
 */
declare enum GalleryFontType {
    ARIAL,
    COURIERNEW,
    HELVETICA,
    TIMESNEWROMAN
}

/**
 * The color to use for text displayed over gallery images as an antitheft
 * deterrent. Used in GallerySecurityOptions.
 */
declare enum GallerySecurityTextColorType {
    BLACK,
    CUSTOM,
    WHITE
}

/**
 * The position of the text displayed over gallery images as an antitheft
 * deterrent. Used in GallerySecurityOptions. Also used in PicturePackageOptions.
 */
declare enum GallerySecurityTextPositionType {
    CENTERED,
    LOWERLEFT,
    LOWERRIGHT,
    UPPERLEFT,
    UPPERRIGHT
}

/**
 * The orientation of the text displayed over gallery images as an antitheft
 * deterrent. Used in GallerySecurityOptions. Also used in PicturePackageOptions.
 */
declare enum GallerySecurityTextRotateType {
    CLOCKWISE45,
    CLOCKWISE90,
    COUNTERCLOCKWISE45,
    COUNTERCLOCKWISE90,
    ZERO
}

/**
 * The content to use for text displayed over gallery images as an antitheft
 * deterrent. Used in GallerySecurityOptions. Note: All types draw from the
 * image’s file information except CUSTOMTEXT.
 */
declare enum GallerySecurityType {
    CAPTION,
    COPYRIGHT,
    CREDIT,
    CUSTOMTEXT,
    FILENAME,
    NONE,
    TITLE
}

/**
 * The size of thumbnail images in the web photo gallery. Used in
 * GalleryThumbnailOptions.
 */
declare enum GalleryThumbSizeType {
    CUSTOM,
    LARGE,
    MEDIUM,
    SMALL
}

/**
 * Geometric options for shapes, such as the iris shape in the Lens Blur Filter.
 * Pass to ArtLayer.applyLensBlur().
 */
declare enum Geometry {
    HEPTAGON,
    HEXAGON,
    OCTAGON,
    PENTAGON,
    SQUARE,
    TRIANGLE
}

/**
 * The preferred line style for the nonprinting grid displayed over images, set
 * in Preferences.
 */
declare enum GridLineStyle {
    DASHED,
    DOTTED,
    SOLID
}

/**
 * The preferred size of grid line spacing, set in Preferences. Constant type
 * Values What it means Adobe Photoshop CC JavaScript Scripting Reference
 * Scripting Constants 205
 */
declare enum GridSize {
    LARGE,
    MEDIUM,
    NONE,
    SMALL
}

/**
 * The preferred line style for nonprinting guides displayed over images, set in
 * Preferences.
 */
declare enum GuideLineStyle {
    DASHED,
    SOLID
}

/**
 * The paths to export to an Illustrator file using Document.exportDocument().
 */
declare enum IllustratorPathType {
    ALLPATHS,
    DOCUMENTBOUNDS,
    NAMEDPATH
}

/**
 * The rendering intent to use when converting from one color space to another
 * with Document.convertProfile() or Document.print()
 */
declare enum Intent {
    ABSOLUTECOLORIMETRIC,
    PERCEPTUAL,
    RELATIVECOLORIMETRIC,
    SATURATION
}

/**
 * The placement of paragraph text within the bounding box. Used in
 * TextItem.justification.
 */
declare enum Justification {
    CENTER,
    CENTERJUSTIFIED,
    FULLYJUSTIFIED,
    LEFT,
    LEFTJUSTIFIED,
    RIGHT,
    RIGHTJUSTIFIED
}

/**
 * The language to use for text. Used in TextItem.language.
 */
declare enum Language {
    BRAZILLIANPORTUGUESE,
    CANADIANFRENCH,
    DANISH,
    DUTCH,
    ENGLISHUK,
    ENGLISHUSA,
    FINNISH,
    FRENCH,
    GERMAN,
    ITALIAN,
    NORWEGIAN,
    NYNORSKNORWEGIAN,
    OLDGERMAN,
    PORTUGUESE,
    SPANISH,
    SWEDISH,
    SWISSGERMAN
}

/**
 * Compression methods for data for pixels in layers, when saving to TIFF
 * format. Used in TiffSaveOptions. Constant type Values What it means Adobe
 * Photoshop CC JavaScript Scripting Reference Scripting Constants 206
 */
declare enum LayerCompression {
    RLE,
    ZIP
}

/**
 * The type of a layer object, in ArtLayer.kind. Note: You can create a text
 * layer only from an empty art layer.
 */
declare enum LayerKind {
    BLACKANDWHITE,
    BRIGHTNESSCONTRAST,
    CHANNELMIXER,
    COLORBALANCE,
    CURVES,
    EXPOSURE,
    GRADIENTFILL,
    GRADIENTMAP,
    HUESATURATION,
    INVERSION,
    LEVELS,
    NORMAL,
    PATTERNFILL,
    PHOTOFILTER,
    POSTERIZE,
    SELECTIVECOLOR,
    SMARTOBJECT,
    SOLIDFILL,
    TEXT,
    THRESHOLD,
    LAYER3D,
    VIBRANCE,
    VIDEO
}

/**
 * The type of lens to use. Pass to ArtLayer.applyLensFlare().
 */
declare enum LensType {
    MOVIEPRIME,
    PRIME105,
    PRIME35,
    ZOOMLENS
}

/**
 * The type of magnification to use when viewing an image. Used in
 * PresentationOptions.
 */
declare enum MagnificationType {
    ACTUALSIZE,
    FITPAGE
}

/**
 * The color to use to fill anti-aliased edges adjacent to transparent areas of
 * the image. When transparency is turned off for an image, the matte color is
 * applied to transparent areas. Used in GIFSaveOptions,
 * IndexedConversionOptions, and JPEGSaveOptions.
 */
declare enum MatteType {
    BACKGROUND,
    BLACK,
    FOREGROUND,
    NETSCAPE,
    NONE,
    SEMIGRAY,
    WHITE
}

/**
 * The measurement to act upon. Pass to MeasurementLog methods.
 */
declare enum MeasurementRange {
    ALLMEASUREMENTS,
    ACTIVEMEASUREMENTS
}

/**
 * The source for recording measurements. Pass to Document.recordMeasurements().
 */
declare enum MeasurementSource {
    MEASURESELECTION,
    MEASURECOUNTTOOL,
    MEASURERULERTOOL
}

/**
 * The color profile to use for a new document. Pass to Documents.add(). Also
 * used in ContactSheetOptions and PicturePackageOptions. Constant type Values
 * What it means Adobe Photoshop CC JavaScript Scripting Reference Scripting
 * Constants 207
 */
declare enum NewDocumentMode {
    BITMAP,
    CMYK,
    GRAYSCALE,
    LAB,
    RGB
}

/**
 * Distribution method to use when applying an Add Noise filter. Pass to
 * ArtLayer.applyAddNoise().
 */
declare enum NoiseDistribution {
    GAUSSIAN,
    UNIFORM
}

/**
 * Method to use to fill the empty space left by offsetting a an image or
 * selection. Pass to ArtLayer.applyOffset().
 */
declare enum OffsetUndefinedAreas {
    REPEATEDGEPIXELS,
    SETTOBACKGROUND,
    WRAPAROUND
}

/**
 * The color profile to use when opening an EPS or PDF document. Pass to
 * app.open() in EPSOpenOptions or PDFOpenOptions.
 */
declare enum OpenDocumentMode {
    CMYK,
    GRAYSCALE,
    LAB,
    RGB
}

/**
 * The format in which to open the document, using app.open(). Note: PHOTOCD is
 * deprecated. Kodak PhotoCD is now found in the Goodies folder on the Adobe
 * Photoshop CC Install DVD. Note: The DICOM option is for the Extended version
 * only.
 */
declare enum OpenDocumentType {
    ALIASPIX,
    BMP,
    CAMERARAW,
    COMPUSERVEGIF,
    DICOM,
    ELECTRICIMAGE,
    EPS,
    EPSPICTPREVIEW,
    EPSTIFFPREVIEW,
    FILMSTRIP,
    JPEG,
    PCX,
    PDF,
    PHOTOCD,
    PHOTOSHOP,
    PHOTOSHOPDCS_1,
    PHOTOSHOPDCS_2,
    PHOTOSHOPEPS,
    PHOTOSHOPPDF,
    PICTFILEFORMAT,
    PICTRESOURCEFORMAT,
    PIXAR,
    PNG,
    PORTABLEBITMAP,
    RAW,
    SCITEXCT,
    SGIRGB,
    SOFTIMAGE,
    TARGA,
    TIFF,
    WAVEFRONTRLA,
    WIRELESSBITMAP
}

/**
 * The target operating system in BMPSaveOptions.
 */
declare enum OperatingSystem {
    OS2,
    WINDOWS
}

/**
 * Page orientation for PhotoCDOpenOptions, deprecated in Photoshop CS3. Note:
 * Kodak PhotoCD is now found in the Goodies folder on the Adobe Photoshop CC
 * Install DVD. Constant type Values What it means Adobe Photoshop CC JavaScript
 * Scripting Reference Scripting Constants 208
 */
declare enum Orientation {
    LANDSCAPE,
    PORTRAIT
}

/**
 * The preferred pointer for the following tools: Eraser, Pencil, Paintbrush,
 * Healing Brush, Rubber Stamp, Pattern Stamp, Smudge, Blur, Sharpen, Dodge,
 * Burn, Sponge. Set in Preferences.
 */
declare enum OtherPaintingCursors {
    PRECISEOTHER,
    STANDARDOTHER
}

/**
 * The preferred pointer for the following tools: Marquee, Lasso, Polygonal
 * Lasso, Magic Wand, Crop, Slice, Patch Eyedropper, Pen, Gradient, Line, Paint
 * Bucket, Magnetic Lasso, Magnetic Pen, Freeform Pen, Measure, Color Sampler.
 * Set in Preferences.
 */
declare enum PaintingCursors {
    BRUSHSIZE,
    PRECISE,
    STANDARD
}

/**
 * The palette type to use in GIFSaveOptions and IndexedConversionOptions.
 */
declare enum PaletteType {
    EXACT,
    LOCALADAPTIVE,
    LOCALPERCEPTUAL,
    LOCALSELECTIVE,
    MACOSPALETTE,
    MASTERADAPTIVE,
    MASTERPERCEPTUAL,
    MASTERSELECTIVE,
    PREVIOUSPALETTE,
    UNIFORM,
    WEBPALETTE,
    WINDOWSPALETTE
}

/**
 * The type of a PathItem.
 */
declare enum PathKind {
    CLIPPINGPATH,
    NORMALPATH,
    TEXTMASK,
    VECTORMASK,
    WORKPATH
}

/**
 * The PDF version to make the document compatible with. Used in PDFSaveOptions.
 */
declare enum PDFCompatibility {
    PDF13,
    PDF14,
    PDF15,
    PDF16,
    PDF17
}

/**
 * The type of compression to use when saving a document in PDF format. Used in
 * PDFSaveOptions. Constant type Values What it means Adobe Photoshop CC
 * JavaScript Scripting Reference Scripting Constants 209
 */
declare enum PDFEncoding {
    JPEG,
    JPEG2000HIGH,
    JPEG2000LOSSLESS,
    JPEG2000LOW,
    JPEG2000MED,
    JPEG2000MEDHIGH,
    JPEG2000MEDLOW,
    JPEGHIGH,
    JPEGLOW,
    JPEGMED,
    JPEGMEDHIGH,
    JPEGMEDLOW,
    NONE,
    PDFZIP,
    PDFZIP4BIT
}

/**
 * The down sample method to use. Used in PDFSaveOptions.
 */
declare enum PDFResample {
    NONE,
    PDFAVERAGE,
    PDFBICUBIC,
    PDFSUBSAMPLE
}

/**
 * The PDF standard to make the document compatible with. Used in PDFSaveOptions.
 */
declare enum PDFStandard {
    NONE,
    PDFX1A2001,
    PDFX1A2003,
    PDFX32002,
    PDFX32003,
    PDFX42008
}

/**
 * The color space for PhotoCDOpenOptions, deprecated in Photoshop CS3. Note:
 * Kodak PhotoCD is now found in the Goodies folder on the Adobe Photoshop CC
 * Install DVD.
 */
declare enum PhotoCDColorSpace {
    LAB16,
    LAB8,
    RGB16,
    RGB8
}

/**
 * The pixel dimensions of the image in PhotoCDOpenOptions, deprecated in
 * Photoshop CS3. EXTRALARGE = 1024x1536 LARGE = 512x768 MAXIMUM = 2048x3072
 * MEDIUM = 256x384 MINIMUM = 64x96 SMALL = 128x192 Note: Kodak PhotoCD is now
 * found in the Goodies folder on the Adobe Photoshop CC Install DVD.
 */
declare enum PhotoCDSize {
    EXTRALARGE,
    LARGE,
    MAXIMUM,
    MEDIUM,
    MINIMUM,
    SMALL
}

/**
 * The number of bits per pixel to use when compression a PICT file. Used in
 * PICTFileSaveOptions and PICTResourceSaveOptions. Note: Use 16 or 32 for RGB
 * images; use 2, 4, or 8 for bitmap and grayscale images.
 */
declare enum PICTBitsPerPixels {
    EIGHT,
    FOUR,
    SIXTEEN,
    THIRTYTWO,
    TWO
}

/**
 * The type of compression to use when saving an image as a PICT file. Used in
 * PICTFileSaveOptions and PICTResourceSaveOptions.
 */
declare enum PICTCompression {
    JPEGHIGHPICT,
    JPEGLOWPICT,
    JPEGMAXIMUMPICT,
    JPEGMEDIUMPICT,
    NONE
}

/**
 * The function or meaning of text in a Picture Package. Used in
 * PicturePackageOptions. Constant type Values What it means Adobe Photoshop CC
 * JavaScript Scripting Reference Scripting Constants 210
 */
declare enum PicturePackageTextType {
    CAPTION,
    COPYRIGHT,
    CREDIT,
    FILENAME,
    NONE,
    ORIGIN,
    USER
}

/**
 * The role a PathPoint plays in a PathItem.
 */
declare enum PointKind {
    CORNERPOINT,
    SMOOTHPOINT
}

/**
 * The preferred measurement to use for type points, set in
 * Preferences.pointSize: POSTSCRIPT = 72 points/inch. TRADITIONAL = 72.27
 * points/inch.
 */
declare enum PointType {
    POSTSCRIPT,
    TRADITIONAL
}

/**
 * The method of polar distortion to use. Pass to
 * ArtLayer.applyPolarCoordinates().
 */
declare enum PolarConversionType {
    POLARTORECTANGULAR,
    RECTANGULARTOPOLAR
}

/**
 * The type of image to use as a low-resolution preview in the destination
 * application. Used in DCS1_SaveOptions, DCS2_SaveOptions, and EPSSaveOptions.
 */
declare enum Preview {
    EIGHTBITTIFF,
    MACOSEIGHTBIT,
    MACOSJPEG,
    MACOSMONOCHROME,
    MONOCHROMETIFF,
    NONE
}

/**
 * The type of color handling to use for ColorHandling
 */
declare enum PrintColorHandling {
    PRINTERMANAGED,
    PHOTOSHOPMANAGED,
    SEPARATIONS
}

/**
 * Cache to be targeted in an Application.purge() operation.
 */
declare enum PurgeTarget {
    ALLCACHES,
    CLIPBOARDCACHE,
    HISTORYCACHES,
    UNDOCACHES
}

/**
 * The preferred policy for checking whether to maximize compatibility when
 * opening PSD files, set in Preferences.maximizeCompatibility.
 */
declare enum QueryStateType {
    ALWAYS,
    ASK,
    NEVER
}

/**
 * The blur method to use. Pass to ArtLayer.applyRadialBlur().
 */
declare enum RadialBlurMethod {
    SPIN,
    ZOOM
}

/**
 * The smoothness or graininess of the blurred image. Pass to
 * ArtLayer.applyRadialBlur().
 */
declare enum RadialBlurQuality {
    BEST,
    DRAFT,
    GOOD
}

/**
 * The layer element to rasterize, using ArtLayer.rasterize().
 */
declare enum RasterizeType {
    ENTIRELAYER,
    FILLCONTENT,
    LAYERCLIPPINGPATH,
    LINKEDLAYERS,
    SHAPE,
    TEXTCONTENTS
}

/**
 * The type of an ActionReference object, returned by getForm(). Constant type
 * Values What it means Adobe Photoshop CC JavaScript Scripting Reference
 * Scripting Constants 211
 */
declare enum ReferenceFormType {
    CLASSTYPE,
    ENUMERATED,
    IDENTIFIER,
    INDEX,
    NAME,
    OFFSET,
    PROPERTY
}

/**
 * The method to use for image interpolation. Passed to Document.resizeImage(),
 * and used as the value of Preferences.interpolation.
 */
declare enum ResampleMethod {
    AUTOMATIC,
    BICUBIC,
    BICUBICAUTOMATIC,
    BICUBICSHARPER,
    BICUBICSMOOTHER,
    BILINEAR,
    NEARESTNEIGHBOR,
    NONE,
    PRESERVEDETAILS
}

/**
 * The size of undulations to use. Pass to ArtLayer.applyRipple().
 */
declare enum RippleSize {
    LARGE,
    MEDIUM,
    SMALL
}

/**
 * The application’s preferred behavior when saving a document. See
 * Preferences.appendExtension and imagePreviews
 */
declare enum SaveBehavior {
    ALWAYSSAVE,
    ASKWHENSAVING,
    NEVERSAVE
}

/**
 * The format in which to save a document when exporting with
 * Document.exportDocument(). Pass in ExportOptionsSaveForWeb.format, to to
 * specify the type of file to write. Only the following are supported for
 * export: COMPUSERVEGIF, JPEG, PNG-8, PNG-24, and BMP.
 */
declare enum SaveDocumentType {
    ALIASPIX,
    BMP,
    COMPUSERVEGIF,
    ELECTRICIMAGE,
    JPEG,
    PCX,
    PHOTOSHOP,
    PHOTOSHOPDCS_1,
    PHOTOSHOPDCS_2,
    PHOTOSHOPEPS,
    PHOTOSHOPPDF,
    PICTFILEFORMAT,
    PICTRESOURCEFORMAT,
    PIXAR,
    PNG,
    PORTABLEBITMAP,
    RAW,
    SCITEXCT,
    SGIRGB,
    SOFTIMAGE,
    TARGA,
    TIFF,
    WAVEFRONTRLA,
    WIRELESSBITMAP
}

/**
 * The type of encoding to use when saving a file to DCS or EPS with
 * Document.saveAs().
 */
declare enum SaveEncoding {
    ASCII,
    BINARY,
    JPEGHIGH,
    JPEGLOW,
    JPEGMAXIMUM,
    JPEGMEDIUM
}

/**
 * The preferred location of history log data, set in Preferences.saveLogItems.
 */
declare enum SaveLogItemsType {
    LOGFILE,
    LOGFILEANDMETADATA,
    METADATA
}

/**
 * The policy for closing a document with Document.close(). Constant type Values
 * What it means Adobe Photoshop CC JavaScript Scripting Reference Scripting
 * Constants 212
 */
declare enum SaveOptions {
    DONOTSAVECHANGES,
    PROMPTTOSAVECHANGES,
    SAVECHANGES
}

/**
 * The selection behavior when a selection already exists: DIMINISH: Remove the
 * selection from the already selected area. EXTEND: Add the selection to an
 * already selected area. INTERSECT: Make the selection only the area where the
 * new selection intersects the already selected area. REPLACE: Replace the
 * selected area. Used in PathItem.makeSelection(), Selection.load(),
 * Selection.select(), and Selection.store().
 */
declare enum SelectionType {
    DIMINISH,
    EXTEND,
    INTERSECT,
    REPLACE
}

/**
 * How to combine the shapes if the destination path already has a selection.
 * Set for SubPathInfo.operation, stored in the resulting SubPathItem.
 */
declare enum ShapeOperation {
    SHAPEADD,
    SHAPEINTERSECT,
    SHAPESUBTRACT,
    SHAPEXOR
}

/**
 * The method to use for smart blurring: EDGEONLY, OVERLAYEDGES: Apply blur only
 * to edges of color transitions. NORMAL: Apply blur to entire image. Pass to
 * ArtLayer.applySmartBlur().
 */
declare enum SmartBlurMode {
    EDGEONLY,
    NORMAL,
    OVERLAYEDGE
}

/**
 * The blur quality to use. Pass to ArtLayer.applySmartBlur().
 */
declare enum SmartBlurQuality {
    HIGH,
    LOW,
    MEDIUM
}

/**
 * The color space for source when printing with Document.print().
 */
declare enum SourceSpaceType {
    DOCUMENT,
    PROOF
}

/**
 * The curve (or stretch shape) to use for the distortion. Pass to
 * ArtLayer.applySpherize().
 */
declare enum SpherizeMode {
    HORIZONTAL,
    NORMAL,
    VERTICAL
}

/**
 * The style of strikethrough to use in text. Used in TextItem.strikeThru.
 */
declare enum StrikeThruType {
    STRIKEBOX,
    STRIKEHEIGHT,
    STRIKEOFF
}

/**
 * The placement of path or selection boundary strokes. Pass to
 * Selection.stroke().
 */
declare enum StrokeLocation {
    CENTER,
    INSIDE,
    OUTSIDE
}

/**
 * The resolution to use when saving an image in Targa format. Used in
 * TargaSaveOptions. Constant type Values What it means Adobe Photoshop CC
 * JavaScript Scripting Reference Scripting Constants 213
 */
declare enum TargaBitsPerPixels {
    SIXTEEN,
    THIRTYTWO,
    TWENTYFOUR
}

/**
 * The capitalization style to use in text. Used in TextItem.capitalization.
 */
declare enum TextCase {
    ALLCAPS,
    NORMAL,
    SMALLCAPS
}

/**
 * The composition method to use to optimize the specified hyphenation and
 * justification options. Used in TextItem.textComposer.
 */
declare enum TextComposer {
    ADOBEEVERYLINE,
    ADOBESINGLELINE
}

/**
 * The type of text, used in TextItem.kind. PARAGRAPHTEXT: Text that wraps
 * within a bounding box. POINTTEXT: Text that does not wrap.
 */
declare enum TextType {
    PARAGRAPHTEXT,
    POINTTEXT
}

/**
 * The type of texture or glass surface image to load for a texturizer or glass
 * filter. Pass to ArtLayer.applyGlassEffect().
 */
declare enum TextureType {
    BLOCKS,
    CANVAS,
    FILE,
    FROSTED,
    TINYLENS
}

/**
 * The type of compression to use for TIFF files. Used in TiffSaveOptions.
 */
declare enum TIFFEncoding {
    JPEG,
    NONE,
    TIFFLZW,
    TIFFZIP
}

/**
 * The tool to use with PathItem.strokePath().
 */
declare enum ToolType {
    ARTHISTORYBRUSH,
    BACKGROUNDERASER,
    BLUR,
    BRUSH,
    BURN,
    CLONESTAMP,
    COLORREPLACEMENTTOOL,
    DODGE,
    ERASER,
    HEALINGBRUSH,
    HISTORYBRUSH,
    PATTERNSTAMP,
    PENCIL,
    SHARPEN,
    SMUDGE,
    SPONGE
}

/**
 * The method to use for transition from one image to the next in a PDF
 * presentation. Used in PresentationOptions. Constant type Values What it means
 * Adobe Photoshop CC JavaScript Scripting Reference Scripting Constants 214
 */
declare enum TransitionType {
    BLINDSHORIZONTAL,
    BLINDSVERTICAL,
    BOXIN,
    BOXOUT,
    DISSOLVE,
    GLITTERDOWN,
    GLITTERRIGHT,
    GLITTERRIGHTDOWN,
    NONE,
    RANDOM,
    SPLITHORIZONTALIN,
    SPLITHORIZONTALOUT,
    SPLITVERTICALIN,
    SPLITVERTICALOUT,
    WIPEDOWN,
    WIPELEFT,
    WIPERIGHT,
    WIPEUP
}

/**
 * Type of pixels to trim around an image, passed to Document.trim().:
 * BOTTOMRIGHT = bottom right pixel color. TOPLEFT = top left pixel color.
 */
declare enum TrimType {
    BOTTOMRIGHT,
    TOPLEFT,
    TRANSPARENT
}

/**
 * The preferred unit for text character measurements, set in Preferences.
 */
declare enum TypeUnits {
    MM,
    PIXELS,
    POINTS
}

/**
 * The method to use to treat undistorted areas or areas left blank in an image
 * to which the a filter in the Distort category has been applied. Pass to
 * ArtLayer.applyDisplace(), applyShear(), applyWave().
 */
declare enum UndefinedAreas {
    REPEATEDGEPIXELS,
    WRAPAROUND
}

/**
 * The placement of text underlining. Used in TextItem.underline. Note:
 * UNDERLINELEFT and UNDELINERIGHT are valid only when direction =
 * Direction.VERTICAL.
 */
declare enum UnderlineType {
    UNDERLINELEFT,
    UNDERLINEOFF,
    UNDERLINERIGHT
}

/**
 * The preferred measurement unit for type and ruler increments, set in
 * Preferences.rulerUnits.
 */
declare enum Units {
    CM,
    INCHES,
    MM,
    PERCENT,
    PICAS,
    PIXELS,
    POINTS
}

/**
 * The editorial urgency status of a document, set in
 * DocumentPrintSettings.urgency.
 */
declare enum Urgency {
    FOUR,
    HIGH,
    LOW,
    NONE,
    NORMAL,
    SEVEN,
    SIX,
    THREE,
    TWO
}

/**
 * The warp style to use for text. Used in TextItem.warpStyle. Constant type
 * Values What it means Adobe Photoshop CC JavaScript Scripting Reference
 * Scripting Constants 215
 */
declare enum WarpStyle {
    ARC,
    ARCH,
    ARCLOWER,
    ARCUPPER,
    BULGE,
    FISH,
    FISHEYE,
    FLAG,
    INFLATE,
    NONE,
    RISE,
    SHELLLOWER,
    SHELLUPPER,
    SQUEEZE,
    TWIST,
    WAVE
}

/**
 * The type of wave to use. Pass to ArtLayer.applyWave().
 */
declare enum WaveType {
    SINE,
    SQUARE,
    TRIANGULAR
}

/**
 * Lighting conditions that affect color balance. Set in CameraRAWOpenOptions.
 */
declare enum WhiteBalanceType {
    ASSHOT,
    AUTO,
    CLOUDY,
    CUSTOM,
    DAYLIGHT,
    FLASH,
    FLUORESCENT,
    SHADE,
    TUNGSTEN
}

/**
 * The method of zigzagging to use. Pass to ArtLayer.applyZigZag().
 */
declare enum ZigZagType {
    AROUNDCENTER,
    OUTFROMCENTER,
    PONDRIPPLES
}