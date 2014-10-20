'use strict';

var Zip = function () {};

/*
Replaces spaces in arguments with '\0'
I chose '\0' since it is invisible and never used in js.
*/
var sanitizeInput = function (actualFunction) {
    return function () {
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === "string") {
                arguments[i] = arguments[i].replace(' ', '\0');
            }
        }
        return actualFunction.apply(this, arguments);
    }
};

Zip.prototype.add = sanitizeInput(require('./add'));
Zip.prototype.delete = sanitizeInput(require('./delete'));
Zip.prototype.extract = sanitizeInput(require('./extract'));
Zip.prototype.extractFull = sanitizeInput(require('./extractFull'));
Zip.prototype.list = sanitizeInput(require('./list'));
Zip.prototype.test = sanitizeInput(require('./test'));
Zip.prototype.update = sanitizeInput(require('./update'));

module.exports = Zip;
