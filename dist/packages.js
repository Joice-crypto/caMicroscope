// DEFAULT PACKAGE BUNDLE IN CASE BUILD FAILS

parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"JNGe":[function(require,module,exports) {
"use strict";function e(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var a=function a(n){e(this,a),console.warn("{sample package}",n)};exports.default=a;
},{}],"TxTK":[function(require,module,exports) {
"use strict";function e(){console.log("this has run"),Store.prototype.findSlideDummy=function(){return new Promise(function(e,o){e({json:function(){return[{_id:{$oid:"5bb6861db8bb11ffeaa05b6d"},name:"CMU1",location:"/images/sample.svs",mpp:.499}]}})})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"qMUh":[function(require,module,exports) {
"use strict";var e=require("./test_package.js"),u=s(e),t=require("./DummyStore.js"),r=s(t);function s(e){return e&&e.__esModule?e:{default:e}}a=new u.default("Buildy"),(0,r.default)();
},{"./test_package.js":"JNGe","./DummyStore.js":"TxTK"}]},{},["qMUh"], null)
//# sourceMappingURL=/packages.map