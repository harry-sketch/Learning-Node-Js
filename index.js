const { x, y, z } = require("./app");
console.log(x);
console.warn(y);
console.error(z());



//  Modules are basically of two types
//  Core & external modules
// Core modules are also of two types
// global :-which we dnot have to import(require) like:console filesystem(fs),buffer,http
// non-global:which we have to import(require) like: npm packages 