Photoshop.d.ts
==============

[![npm version](https://badge.fury.io/js/photoshop.d.ts.svg)](http://badge.fury.io/js/photoshop.d.ts)
[![Build Status](https://travis-ci.org/felixSchl/photoshop.d.ts.svg)](https://travis-ci.org/felixSchl/photoshop.d.ts)
![dependencies status](https://david-dm.org/felixschl/photoshop.d.ts.svg)

> Type-safe Photoshop scripting

## Getting Started

> npm install photoshop.d.ts

Add a reference to your target version, e.g.:

```typescript
///<reference path="./node_modules/photoshop.d.ts/dist/cc/ps.d.ts"/>
```

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

```
> npm install
> grunt && node app.js
```

## What's new?

### v0.3.0

* Add typings for Adobe Photoshop CC
* Remove sample scripts from docs
* Sanitize docs

## Caveats

The project is up to a point where [the parsers][parsers] do a pretty good job,
although some manual fix ups need to be made to the raw text documents before
parsing (remove typos, inconsistent array notations etc) that would be awkward
and long-winded to write parsers for. The full list of these is currently to be
found in `parsers/types.ts`. Since the source docs rarely change, they are
committed to this project and maintained here.

[parsers]: https://github.com/felixSchl/photoshop.d.ts/tree/master/parsers
