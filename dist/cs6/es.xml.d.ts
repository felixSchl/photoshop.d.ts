/*** XML object ***/

/**
 * The XML object provides both static properties and functions, available
 * through the XML class, and dynamic properties and functions available
 * through each instance.
 */
declare var XML: any


/*** Global XML functions ***/

/**
 * Reports whether a string contains a name that conforms to valid XML syntax.
 * NOTE: This implementation uses the same rules as for a JavaScript name,
 * except for the '$' character, which is disallowed, and the '-' character,
 * which as added. It does not follow the W3C definition of an XML name, which
 * adds more Unicode characters to the valid set of characters. Returns true if
 * the name is a valid XML name, false otherwise.
 */
declare function isXMLName(name: string): boolean

/** Sets the default namespace for XML objects. You can also set the default
 * namespace using this syntax: 
 * default xml namespace = Namespace object
 * default xml namespace = URL_string 
 */
declare function setDefaultXMLNamespace(ns: Namespace): void


/*** QName object ***/

/**
 * This object encapsulates a fully qualified XML name, the combination of a
 * local XML name and its namespace URI.
 */
interface QName {
	/**
	 * The local element name portion of the XML element’s fully qualified XML
     * name.
	 */
    name: string

	/**
	 * The namespace prefix of the XML element’s fully qualified XML name.
	 */
    uri: string

    /**
	 * When no arguments are supplies, creates a QName object with an empty
     * local name and no URI.
	 */
    new(): QName

    /**
	 * Creates a copy of an existing QName object.
	 */
    new(name: string): QName

    /**
	 * Creates a QName object with an empty local name and the URI of the
     * Namespace object.
	 */
    new(ns: Namespace): QName

    /**
	 * Creates a QName object with the given local name and the URI of the
     * default namespace. Can be the wildcard character, "*".
	 */
    new(uri: string, name: string): QName

}

declare const QName: QName


/*** Namespace object ***/

/**
 * This object encapsulates the definition of an XML namespace. A namespace
 * associates an XML-name prefix with a complete URI. The prefix is a string
 * that precedes the local name of an XML element or attribute and identifies
 * the namespace, while the URI points to the actual location where the
 * definition of the namespace is found.
 * For example, this XML definition contains a namespace declaration:
 * <?xml xmlns:adobe=http://www.adobe.com/test?>
 * In the corresponding namespace, the prefix is adobe, and the URI is
 * http://www.adobe.com/test.
 */
interface Namespace {
	/**
	 * The element-name prefix associated with the namespace URI. The prefix
     * value can be undefined, as when a specified prefix is not a valid XML
     * name. Namespaces with an undefined prefix are completely ignored; they
     * are not added to an XML namespace declaration.
	 */
    prefix: string

	/**
	 * The location of the namespace definition, a URI.
	 */
    uri: string

    /**
	 * When no argument is supplied, creates a namespace with an empty prefix
     * and URI.
	 */
    new(): Namespace

    /**
	 * Creates a Namespace object with an empty prefix and the given URI.
	 */
    new(uri: string): Namespace

    /**
	 * Creates a namespace with an empty prefix and the URI set to the URI of
     * the QName object (if the QName object contains a URI).
	 */
    new(preix: QName): Namespace

    /**
	 * Creates a copy of the given Namespace object. If the Namespace()
     * function is called without the new operator, and the only argument is a
     * Namespace object, the function simply returns that object, rather than
     * creating a copy.
	 */
    new(ns: Namespace): Namespace

    /**
	 * Creates a Namespace object with the given prefix and the given URI.
	 */
    new(prefix: string, ns: Namespace): Namespace
}

declare const Namespace: Namespace 
