/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./trains/static/js/src/difficulty.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./trains/static/js/src/bubble.js":
/*!****************************************!*\
  !*** ./trains/static/js/src/bubble.js ***!
  \****************************************/
/*! exports provided: Bubble */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Bubble\", function() { return Bubble; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Bubble =\n/*#__PURE__*/\nfunction () {\n  function Bubble(p, x, y) {\n    _classCallCheck(this, Bubble);\n\n    this.p = p;\n    this.x = x;\n    this.y = y;\n    this.col = this.p.color(255, 100, 76);\n    this.diameter = 30;\n  }\n\n  _createClass(Bubble, [{\n    key: \"display\",\n    value: function display() {\n      this.p.stroke(0);\n      this.p.strokeWeight(1);\n      this.p.fill(this.col); // this.x = centerX + radius * cos(angle);\n      // this.y = centerY + radius * sin(angle);\n\n      this.p.ellipse(this.x, this.y, this.diameter, this.diameter); // angle = angle + speed;\n    } // is_clicked() {\n    //     var d = dist(mouseX, mouseY, this.x, this.y);\n    //     return (d < this.diameter / 2);\n    // }\n    //\n    // clicked() {\n    //     if (this.is_clicked()) {\n    //         console.log('circle clicked');\n    //     }\n    // };\n\n  }]);\n\n  return Bubble;\n}();\n;\n\n//# sourceURL=webpack:///./trains/static/js/src/bubble.js?");

/***/ }),

/***/ "./trains/static/js/src/difficulty.js":
/*!********************************************!*\
  !*** ./trains/static/js/src/difficulty.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./p5 */ \"./trains/static/js/src/p5.js\");\n/* harmony import */ var _p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_p5__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bubble */ \"./trains/static/js/src/bubble.js\");\n//TODO: move bubbles and arcs into sep class and export using require, module.export\n\n\nvar bubble;\n\nvar s = function s(p) {\n  var x = 100;\n  var y = 100;\n\n  p.setup = function () {\n    var canv = p.createCanvas(300, 300);\n    bubble = new _bubble__WEBPACK_IMPORTED_MODULE_1__[\"Bubble\"](p, 100, 100);\n  };\n\n  p.draw = function () {\n    p.background(0);\n    p.fill(255);\n    p.rect(x, y, 50, 50);\n    bubble.display();\n  };\n};\n\nvar myp5 = new _p5__WEBPACK_IMPORTED_MODULE_0___default.a(s, 'p5cont');\n\n//# sourceURL=webpack:///./trains/static/js/src/difficulty.js?");

/***/ }),

/***/ "./trains/static/js/src/p5.js":
/*!************************************!*\
  !*** ./trains/static/js/src/p5.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ })

/******/ });