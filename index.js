const { x, y, z } = require("./app");
console.log(x);
console.warn(y);
console.error(z());



//  Modules are basically of two types
//  Core & external modules
// Core modules are also of two types
// global :-which we dnot have to import(require) like:console
// non-global:which we have to import(require) like: filesystem(fs),buffer,http 