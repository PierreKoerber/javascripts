/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _primitives_Array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primitives/Array.js */ \"./src/primitives/Array.js\");\n/* harmony import */ var _primitives_Array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_primitives_Array_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _primitives_String_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./primitives/String.js */ \"./src/primitives/String.js\");\n/* harmony import */ var _primitives_String_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_primitives_String_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\nconsole.log(\"starded\") ;\n\n\n\n//# sourceURL=webpack://pdfUtilities/./src/index.js?");

/***/ }),

/***/ "./src/primitives/Array.js":
/*!*********************************!*\
  !*** ./src/primitives/Array.js ***!
  \*********************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Assigning to rvalue (43:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| \\n| Array.prototype.explode = function(s,sep=\\\",\\\"){\\n>     this = s.split(sep) ;\\n| } ;\\n| \");\n\n//# sourceURL=webpack://pdfUtilities/./src/primitives/Array.js?");

/***/ }),

/***/ "./src/primitives/String.js":
/*!**********************************!*\
  !*** ./src/primitives/String.js ***!
  \**********************************/
/***/ (() => {

eval("// pierre koerber (c) 2020\n\nString.prototype.capitalizeFirstLetter = function() {\n    return this.charAt(0).toUpperCase() + this.slice(1);\n    } ;\n\nString.prototype.startsWith = function(needle) {\n    return (this.indexOf(needle) == 0);\n};\nString.prototype.replaceAll = function(search, replacement) {\n    var target = this;\n    return target.replace(new RegExp(search, 'g'), replacement);\n};    \nString.prototype.slug=function(separator=\"_\")\n    {\n        var str = this.trim();\n        str = str.toLowerCase();\n    \n        // remove accents, swap ñ for n, etc\n        const from = \"åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;\";\n        const to = \"aaaaaaeeeeiiiioooouuuunc------\";\n    \n        for (let i = 0, l = from.length; i < l; i++) {\n            str = str.replace(new RegExp(from.charAt(i), \"g\"), to.charAt(i));\n        }\n    \n        return str\n            .replace(/[^a-z0-9 -]/g, \"\") // remove invalid chars\n            .replace(/\\s+/g, \"-\") // collapse whitespace and replace by -\n            .replace(/-+/g, \"-\") // collapse dashes\n            .replace(/^-+/, \"\") // trim - from start of text\n            .replace(/-+$/, \"\") // trim - from end of text\n            .replace(/-/g, separator);\n    }\n\n\n//# sourceURL=webpack://pdfUtilities/./src/primitives/String.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;