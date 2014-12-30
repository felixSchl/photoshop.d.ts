Photoshop.d.ts
==============

> Type-safe Photoshop scripting

## Getting Started

> npm install photoshop.d.ts

Add a reference to `./node_modules/photoshop.d.ts/dist/cs6/ps.d.ts`

The other references will automatically resolve.

## Usage

```typescript

///<reference path="./ps.d.ts"/>

var document = app.activeDocument; // Access global `app`
var layers   = document.artLayers; // OK
var bogus    = document.bogus;     // Type Error
```

## Building

The typescript declarations are generated from the official javascript reference
PDFs. The text is copied and pasted into local files. The **parser** will parse
the raw text file and extract meaningful information from the respective
chapters of the documentation. Once the **parser** has delivered a in-memory
representation of the types and constants, the **emitter** will render types and
constants as typescript files.

Building **requires a TypeScript compiler**.

```
> npm install
> npm run make
```

## Caveats

The project is up to a point where the parser does a pretty good job, altough
some manual fix ups need to be made to the raw text document before parsing
(remove typos, inconsistent array notations etc) that would be awkward and
long-winded to write parsers for. The full list of these is currently to be
found in `parsers/types.ts`.

Finally, the compiler creates a file with some 8500 lines of interfaces (inc.
comments) and some 2000 lines of enums (inc. comments) - so I can only verify
with a quick scan of the eye and a error-free compiling of the declaration files
that the compile covers 100% of the docs and is accurate. I expect there be
a need for fix ups.
