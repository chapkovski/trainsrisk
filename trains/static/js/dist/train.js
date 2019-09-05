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
/******/ 	return __webpack_require__(__webpack_require__.s = "./trains/static/js/src/train.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./trains/static/js/src/train.js":
/*!***************************************!*\
  !*** ./trains/static/js/src/train.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar width = 30,\n    radius = 100,\n    diameter = radius * 2,\n    angle = 0,\n    speed = 0.05,\n    centerX = 200,\n    centerY = 200,\n    start_angle = 0,\n    bubble_size = 30;\n\nvar Bubble =\n/*#__PURE__*/\nfunction () {\n  function Bubble(x, y) {\n    _classCallCheck(this, Bubble);\n\n    this.x = x;\n    this.y = y;\n    this.col = color(255, 100, 76);\n    this.diameter = bubble_size;\n  }\n\n  _createClass(Bubble, [{\n    key: \"display\",\n    value: function display() {\n      stroke(0);\n      strokeWeight(1);\n      fill(this.col);\n      this.x = centerX + radius * cos(angle);\n      this.y = centerY + radius * sin(angle);\n      ellipse(this.x, this.y, this.diameter, this.diameter);\n      angle = angle + speed;\n    }\n  }, {\n    key: \"is_clicked\",\n    value: function is_clicked() {\n      var d = dist(mouseX, mouseY, this.x, this.y);\n      return d < this.diameter / 2;\n    }\n  }, {\n    key: \"clicked\",\n    value: function clicked() {\n      if (this.is_clicked()) {\n        console.log('circle clicked');\n      }\n    }\n  }]);\n\n  return Bubble;\n}();\n\n;\n\nvar Arc =\n/*#__PURE__*/\nfunction () {\n  function Arc(angle0, angle1) {\n    var col = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : color(100, 100, 100);\n\n    _classCallCheck(this, Arc);\n\n    this.centerX = centerX;\n    this.centerY = centerY;\n    this.start_angle = angle0;\n    this.end_angle = angle1;\n    this.col = col;\n    this.width = width;\n    this.radius = radius;\n  }\n\n  _createClass(Arc, [{\n    key: \"display\",\n    value: function display() {\n      stroke(this.col);\n      strokeWeight(this.width);\n      strokeCap(SQUARE);\n      noFill();\n      arc(this.centerX, this.centerY, this.radius * 2, this.radius * 2, this.start_angle, this.end_angle, OPEN);\n    }\n  }, {\n    key: \"is_clicked\",\n    value: function is_clicked() {\n      return this._is_within_width() && this._is_within_angles();\n    }\n  }, {\n    key: \"_is_within_width\",\n    value: function _is_within_width() {\n      var d = dist(mouseX, mouseY, this.centerX, this.centerY);\n      var lb = this.radius - this.width / 2;\n      var ub = this.radius + this.width / 2;\n      return d >= lb && d <= ub;\n    }\n  }, {\n    key: \"_is_within_angles\",\n    value: function _is_within_angles() {\n      var innerangle = atan2(mouseY - this.centerY, mouseX - this.centerX);\n\n      if (innerangle < 0) {\n        innerangle = 2 * PI - abs(innerangle);\n      }\n\n      return innerangle >= this.start_angle && innerangle <= this.end_angle;\n    }\n  }, {\n    key: \"do_if_clicked\",\n    value: function do_if_clicked() {\n      console.log('ARC CLICKED');\n    }\n  }, {\n    key: \"clicked\",\n    value: function clicked() {\n      if (this.is_clicked()) {\n        this.do_if_clicked();\n      }\n    }\n  }]);\n\n  return Arc;\n}();\n\n;\n\nfunction setup() {\n  var canv = createCanvas(400, 400);\n  canv.parent('p5cont');\n  myarc = new Arc(start_angle, end_angle);\n  bubble = new Bubble(200, 200);\n}\n\nfunction draw() {\n  background(255);\n  myarc.display();\n  stroke(1);\n  strokeWeight(1);\n  noFill();\n  ellipse(centerX, centerY, diameter);\n  bubble.display();\n}\n\nfunction mousePressed() {\n  if (myarc.is_clicked() && bubble.is_clicked()) {\n    var val;\n\n    if (myarc.is_clicked() && bubble.is_clicked()) {\n      val = 'True';\n    } else {\n      val = 'False';\n    }\n\n    $('#id_task').val(val);\n    $('#form').submit();\n  }\n}\n\n//# sourceURL=webpack:///./trains/static/js/src/train.js?");

/***/ })

/******/ });