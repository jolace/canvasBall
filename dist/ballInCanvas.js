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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/view.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Ball.js":
/*!*********************!*\
  !*** ./src/Ball.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ball; });\nclass Ball \n{\n    constructor(startX,startY,areaWidth,areaHeight,color)\n    {\n       \n       this.position = {x : startX, y : startY};\n       this.velocity = {x : 10, y : 0};\n       this.color = color;       \n    }    \n}\n\n//# sourceURL=webpack:///./src/Ball.js?");

/***/ }),

/***/ "./src/calculation.js":
/*!****************************!*\
  !*** ./src/calculation.js ***!
  \****************************/
/*! exports provided: calculatePhisc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculatePhisc\", function() { return calculatePhisc; });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n\n\n\nfunction calculatePhisc(position,velocity,width,height)\n{   \n    let Fx ;\n    let Fy ;\n    let ax ;\n    let ay ;\n    \n    // Do physics\n    // Drag force: Fd = -1/2 * Cd * A * rho * v * v\n    Fx = -0.5 * _config_js__WEBPACK_IMPORTED_MODULE_0__[\"Cd\"] * _config_js__WEBPACK_IMPORTED_MODULE_0__[\"A\"] * _config_js__WEBPACK_IMPORTED_MODULE_0__[\"rho\"] * velocity.x * velocity.x * velocity.x / Math.abs(velocity.x);\n    Fy = -0.5 * _config_js__WEBPACK_IMPORTED_MODULE_0__[\"Cd\"] * _config_js__WEBPACK_IMPORTED_MODULE_0__[\"A\"] * _config_js__WEBPACK_IMPORTED_MODULE_0__[\"rho\"] * velocity.y * velocity.y * velocity.y / Math.abs(velocity.y);\n    \n    Fx = (isNaN(Fx) ? 0 : Fx);\n    Fy = (isNaN(Fy) ? 0 : Fy);\n    \n    // Calculate acceleration ( F = ma )\n    ax = Fx / _config_js__WEBPACK_IMPORTED_MODULE_0__[\"mass\"];\n    ay = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"ag\"] + (Fy / _config_js__WEBPACK_IMPORTED_MODULE_0__[\"mass\"]);\n\n    // Integrate to get velocity\n    velocity.x += ax*_config_js__WEBPACK_IMPORTED_MODULE_0__[\"frameRate\"];\n    velocity.y += ay*_config_js__WEBPACK_IMPORTED_MODULE_0__[\"frameRate\"];\n    \n    // Integrate to get position\n    position.x += velocity.x*_config_js__WEBPACK_IMPORTED_MODULE_0__[\"frameRate\"]*100;\n    position.y += velocity.y*_config_js__WEBPACK_IMPORTED_MODULE_0__[\"frameRate\"]*100;\n    \n    // Handle collisions\n    if (position.y > height - _config_js__WEBPACK_IMPORTED_MODULE_0__[\"radius\"]) {\n        velocity.y *= _config_js__WEBPACK_IMPORTED_MODULE_0__[\"restitution\"];\n        position.y = height - _config_js__WEBPACK_IMPORTED_MODULE_0__[\"radius\"];\n    }\n    if (position.x > width - _config_js__WEBPACK_IMPORTED_MODULE_0__[\"radius\"]) {\n        velocity.x *= _config_js__WEBPACK_IMPORTED_MODULE_0__[\"restitution\"];\n        position.x = width - _config_js__WEBPACK_IMPORTED_MODULE_0__[\"radius\"];\n    }\n    if (position.x < _config_js__WEBPACK_IMPORTED_MODULE_0__[\"radius\"]) {\n        velocity.x *= _config_js__WEBPACK_IMPORTED_MODULE_0__[\"restitution\"];\n        position.x = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"radius\"];\n    } \n    return {position,velocity};\n}\n\n//# sourceURL=webpack:///./src/calculation.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: frameRate, frameDelay, radius, Cd, rho, A, ag, mass, restitution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"frameRate\", function() { return frameRate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"frameDelay\", function() { return frameDelay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"radius\", function() { return radius; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cd\", function() { return Cd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rho\", function() { return rho; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"A\", function() { return A; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ag\", function() { return ag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mass\", function() { return mass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restitution\", function() { return restitution; });\n// Constant for ball gravity and velocity calculation\n\nconst frameRate = 1/40; // Seconds\nconst frameDelay = frameRate * 1000; // ms\nconst radius= 15; // 1px = 1cm\nconst Cd = 0.47;  // Dimensionless\nconst rho = 1.22; // kg / m^3\nconst A = Math.PI * radius * radius / (10000); // m^2\nconst ag = 9.81;  // m / s^2\nconst mass= 0.1; //kg        \nconst restitution= -0.7;\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _Ball_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ball.js */ \"./src/Ball.js\");\n/* harmony import */ var _calculation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculation.js */ \"./src/calculation.js\");\n\n    \n    \n    \n\n    var topcina = [];\n    var canvas;\n    var ctx;\n    var loopTimer = false;\n\n    function setup()\n    {   \n\n        canvas = document.getElementsByTagName(\"canvas\");\n        if(canvas.length)\n        {\n            canvas = canvas[0];\n            ctx = canvas.getContext(\"2d\");\n            ctx.strokeStyle = '#000000'; \n            canvas.addEventListener(\"click\", addBall, false);\n            loopTimer = setInterval(render, _config_js__WEBPACK_IMPORTED_MODULE_0__[\"frameDelay\"]);\n        } else {\n            alert(\"There is not canvas element\");\n        }\n    \n    } \n    let render = () => \n    {\n        ctx.clearRect(0,0,canvas.width,canvas.height);\n        \n        for(let i = 0; i < topcina.length; i++)\n        {\n            let top  = topcina[i]; \n            let newCordinates = Object(_calculation_js__WEBPACK_IMPORTED_MODULE_2__[\"calculatePhisc\"])(top.position,top.velocity,canvas.width,canvas.height);\n            top.position.x = newCordinates.position.x;\n            top.position.y = newCordinates.position.y;\n            top.velocity.x = newCordinates.velocity.x;\n            top.velocity.y = newCordinates.velocity.y;\n            topcina[i] = top;\n            \n            ctx.save();\n            ctx.translate(top.position.x, top.position.y);\n            ctx.beginPath();\n            ctx.fillStyle = top.color;\n            \n            ctx.arc(0, 0, _config_js__WEBPACK_IMPORTED_MODULE_0__[\"radius\"], 0, Math.PI*2, true);\n            ctx.fill();\n            ctx.closePath();\n            ctx.restore(); \n        }\n        \n    }\n    \n    var addBall = function(e) {\n        let mouse = getMousePosition(e);\n        let color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);\n        topcina.push(new _Ball_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](mouse.x,mouse.y,canvas.width,canvas.height,color));\n    }\n\n    function getMousePosition(e) {\n        return { x: e.pageX - canvas.offsetLeft , y : e.pageY - canvas.offsetTop};\n    }\n\n    setup();\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });