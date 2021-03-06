node-7z
=======

[![Dependencies Status][david-image]][david-url] [![Build Status][travis-image]][travis-url] [![Code coverage][coveralls-image]][coveralls-url] [![Code quality][codeclimate-image]][codeclimate-url] [![Release][npm-image]][npm-url]

> A Node.js wrapper for 7-Zip

Usage
-----

I chose to use *Promises* in this library. API is consistent with standard use:

```js
var Zip = require('node-7z'); // Name the class as you want!
var myTask = new Zip();
myTask.extractFull('myArchive.7z', 'destination', { p: 'myPassword' })

// Equivalent to `on('data', function (files) { // ... });`
.progress(function (files) {
  console.log('Some files are extracted: %s', files);
});

// When all is done
.then(function () {
  console.log('Extracting done!');
});

// On error
.catch(function (err) {
  console.error(err);
});
```

Installation
------------

You must have the `7za` executable available in your PATH or in the same 
directory of your `package.json` file.

> On Debian an Ubuntu install the `p7zip-full` package.

> On Windows use the `7za.exe` ([link here](http://netcologne.dl.sourceforge.net/project/sevenzip/7-Zip/9.20/7za920.zip))
> binary.

```
npm install --save node-7z
```

API
---

> See the [7-Zip documentation](http://sevenzip.sourceforge.jp/chm/cmdline/index.htm)
> for the full list of usages and options (switches).

### Add: `Zip.add`

**Arguments**
 * `archive` Path to the archive you want to create.
 * `files` The file list to add.
 * `options` An object of options (7-Zip switches).

**Progress**
 * `files` A array of all the extracted files *AND* directories. The `/`
   character is used as a path separator on every platform.

**Error**
 * `err` An Error object.


### Delete: `Zip.delete`

**Arguments**
 * `archive` Path to the archive you want to delete files from.
 * `files` The file list to delete.
 * `options` An object of options (7-Zip switches).

**Error**
 * `err` An Error object.


### Extract: `Zip.extract`

**Arguments**
 * `archive` The path to the archive you want to extract.
 * `dest` Where to extract the archive.
 * `options` An object of options.

**Progress**
 * `files` A array of all the extracted files *AND* directories. The `/`
   character is used as a path separator on every platform.

**Error**
 * `err` An Error object.


### Extract with full paths: `Zip.extractFull`

**Arguments**
 * `archive` The path to the archive you want to extract.
 * `dest` Where to extract the archive (creates folders for you).
 * `options` An object of options.

**Progress**
 * `files` A array of all the extracted files *AND* directories. The `/`
   character is used as a path separator on every platform.

**Error**
 * `err` An Error object.


### List contents of archive: `Zip.list`

**Arguments**
 * `archive` The path to the archive you want to analyse.
 * `options` An object of options.

**Progress**
 * `files` A array of objects of all the extracted files *AND* directories. 
   The `/` character is used as a path separator on every platform. Object's
   properties are: `date`, `attr`, `size` and `name`.

**Fulfill**
 * `spec` An object of tech spec about the archive. Properties are: `path`, 
   `type`, `method`, `physicalSize` and `headersSize` (Some of them may be 
   missing with non-7z archives).

**Error**
 * `err` An Error object.


### Test integrity of archive: `Zip.test`

**Arguments**
 * `archive` The path to the archive you want to analyse.
 * `options` An object of options.

**Progress**
 * `files` A array of all the extracted files *AND* directories. The `/`
   character is used as a path separator on every platform.

**Error**
 * `err` An Error object.


### Update: `Zip.update`

**Arguments**
 * `archive` Path to the archive you want to update.
 * `files` The file list to update.
 * `options` An object of options (7-Zip switches).

**Progress**
 * `files` A array of all the extracted files *AND* directories. The `/`
   character is used as a path separator on every platform.

**Error**
 * `err` An Error object.


***
With :heart: from [quentinrossetti](https://github.com/quentinrossetti)

[david-url]: https://david-dm.org/quentinrossetti/node-7z
[david-image]: http://img.shields.io/david/quentinrossetti/node-7z.svg
[travis-url]: https://travis-ci.org/quentinrossetti/node-7z
[travis-image]: http://img.shields.io/travis/quentinrossetti/node-7z.svg
[codeclimate-url]: https://codeclimate.com/github/quentinrossetti/node-7z
[codeclimate-image]: http://img.shields.io/codeclimate/github/quentinrossetti/node-7z.svg
[coveralls-url]: https://coveralls.io/r/quentinrossetti/node-7z
[coveralls-image]: http://img.shields.io/coveralls/quentinrossetti/node-7z.svg
[npm-url]: https://www.npmjs.org/package/node-7z
[npm-image]: http://img.shields.io/npm/v/node-7z.svg
