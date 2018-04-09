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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/camera.js":
/*!***********************!*\
  !*** ./src/camera.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet di\n\nclass Camera {\n  constructor(ctx, keyboardCtrl) {\n    this.i\n    this.ctx = ctx\n    this.keyboardCtrl = keyboardCtrl\n    this.position = {x : 0, y : 0}\n    this.zf = 0.0001\n    window.cam = (x,y) => {\n      this.position = {x,y}\n    }\n\n    document.onwheel = (e) => {\n      di = Math.pow(2, Math.floor(e.deltaY / 53))\n      this.zf = this.zf * di\n    }\n\n    /* generate starfield */\n    this.stars = (() => {\n      let stars = []\n      for(this.i = 0; this.i < 100; this.i ++) {\n        stars.push({\n          x : Math.random() * screen.width,\n          y : Math.random() * screen.height\n        })\n      }\n      return stars\n    })()\n\n  }\n\n  circle(x,y,diameter, color) {\n    this.ctx.beginPath()\n    if(diameter * this.zf > 10) {\n      this.ctx.arc(c.width/2 +(x + this.position.x) * this.zf, c.height/2 + (y + this.position.y) * this.zf, diameter * this.zf, 0, Math.PI * 2)\n    } else {\n      this.ctx.arc(c.width/2 +(x + this.position.x) * this.zf, c.height/2 + (y + this.position.y) * this.zf, 10, 0, Math.PI * 2)\n    }\n    this.ctx.fillStyle = color\n    this.ctx.fill()\n  }\n\n  rect(x,y,w,h, color) {\n    this.ctx.fillStyle = color\n    if(w * this.zf > 10) {\n      this.ctx.fillRect(c.width/2 +(x + this.position.x) * this.zf, c.height/2 + (y + this.position.y) * this.zf, w * this.zf, h * this.zf)\n    } else {\n      this.ctx.fillRect(c.width/2 +(x + this.position.x) * this.zf, c.height/2 + (y + this.position.y) * this.zf, 10, 10)\n    }\n  }\n\n  background() {\n    this.ctx.fillStyle = '#171921'\n    this.ctx.fillRect(0,0,screen.width, screen.height)\n    this.ctx.fillStyle = \"#d4d5d6\"\n    for(this.i = 0; this.i < this.stars.length; this.i ++) {\n      this.ctx.fillRect(this.stars[this.i].x, this.stars[this.i].y, 1, 1)\n    }\n\n  }\n\n  // old but gold : remember js13k   context.arc(c.width/2+z(this.pos.x - camera.pos.x),c.height/2+z(this.pos.y - camera.pos.y),z(this.diameter),0,7)\n  move() {\n    if(this.keyboardCtrl.keys[90]) {\n      this.position.y += (1/this.zf)\n    }\n    if(this.keyboardCtrl.keys[81]) {\n      this.position.x += (1/this.zf)\n    }\n    if(this.keyboardCtrl.keys[83]) {\n      this.position.y -= (1/this.zf)\n    }\n    if(this.keyboardCtrl.keys[68]) {\n      this.position.x -= (1/this.zf)\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Camera);\n\n\n//# sourceURL=webpack:///./src/camera.js?");

/***/ }),

/***/ "./src/controllers/keyboard_controller.js":
/*!************************************************!*\
  !*** ./src/controllers/keyboard_controller.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass KeyCtrl {\n  constructor() {\n    this.keys = {90 : false,81 : false,83 : false,68 : false} /* ZQSD */\n    document.onkeydown = (e) => {\n      this.keys[e.keyCode] = true\n    }\n    document.onkeyup = (e) => {\n      this.keys[e.keyCode] = false\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (KeyCtrl);\n\n\n//# sourceURL=webpack:///./src/controllers/keyboard_controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system */ \"./src/system.js\");\n/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera */ \"./src/camera.js\");\n/* harmony import */ var _spaceship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spaceship */ \"./src/spaceship.js\");\n/* harmony import */ var _controllers_keyboard_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/keyboard_controller */ \"./src/controllers/keyboard_controller.js\");\n\n\n\n\n\n/* size the screen */\nc.width = window.innerWidth\nc.height = window.innerHeight\n\n/* init 2d context */\nlet ctx = c.getContext('2d')\n\n/* tools */\nlet keyboardCtrl = new _controllers_keyboard_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"]()\nlet cam = new _camera__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, keyboardCtrl)\n\n/* game */\nlet system = new _system__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\nlet spaceship = new _spaceship__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\n/* start */\nlet timeDilatation = 1\n\n/* time managment */\nlet elapsed = Date.now()\nlet dt = 0\n\nconst draw = () => {\n  system.draw(cam)\n  spaceship.draw(cam)\n  /* draw fps */\n  ctx.fillText((1000 / dt).toFixed(1),0,10,10,10)\n}\n\nconst loop = () => {\n  /* reset */\n  c.width += 0\n  /* calc elapsed time */\n  dt = Date.now() - elapsed\n  elapsed = Date.now()\n  /* move */\n  cam.move()\n  /* draw */\n  draw()\n  /* loop */\n  requestAnimationFrame(loop)\n\n\n}\n\nloop()\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/planet.js":
/*!***********************!*\
  !*** ./src/planet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet zf = 0.00001\n\nclass Planet {\n\n  constructor(raw) {\n    this.position = {x : raw.position.x, y : raw.position.y}\n    this.mass = raw.mass\n    this.diameter = raw.diameter\n    this.color = raw.color\n  }\n\n  draw(cam) {\n    cam.circle(this.position.x, this.position.y, this.diameter, this.color)\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Planet);\n\n\n//# sourceURL=webpack:///./src/planet.js?");

/***/ }),

/***/ "./src/spaceship.js":
/*!**************************!*\
  !*** ./src/spaceship.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet acc\nclass Spaceship {\n  constructor() {\n    this.x = 0\n    this.y = 0\n  }\n\n\n  draw(cam) {\n    cam.rect(this.x, this.y, 100, 100)\n  }\n\n  move(dt) {\n\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Spaceship);\n\n\n//# sourceURL=webpack:///./src/spaceship.js?");

/***/ }),

/***/ "./src/system.js":
/*!***********************!*\
  !*** ./src/system.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _planet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planet */ \"./src/planet.js\");\n\nlet i\nconst sun = {\n    name : 'sona',\n    mass : 2*10^30,\n    diameter : Math.pow(10,6), //km\n    position : {x : 0, y : 0},\n    color : '#ffcc00',\n    children : [{\n      name : 'tera',\n      position : {x : 150*Math.pow(10,5), y : 0},\n      mass : 6*Math.pow(10,24),\n      diameter : 1200, //km\n      color : '#018fae'\n  }]\n}\n\nclass System {\n  constructor() {\n    this.sun = new _planet__WEBPACK_IMPORTED_MODULE_0__[\"default\"](sun)\n    this.planets = sun.children.map((planet) => {\n      return new _planet__WEBPACK_IMPORTED_MODULE_0__[\"default\"](planet)\n    })\n  }\n\n  draw(cam) {\n    cam.background()\n    this.sun.draw(cam)\n    for(i = 0; i < this.planets.length; i += 1) {\n      this.planets[i].draw(cam)\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (System);\n\n\n//# sourceURL=webpack:///./src/system.js?");

/***/ })

/******/ });