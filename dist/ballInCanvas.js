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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Ball.js":
/*!*********************!*\
  !*** ./src/Ball.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var config = __webpack_require__(/*! ./config.js */ "./src/config.js");
/** Class Ball keep data for ball position, ball velocity and color for each ball created in area */
var Ball = /** @class */ (function () {
    function Ball(startX, startY, color) {
        var _this = this;
        /**
         * Get the position object with (x,y) properties.
         * @return {iCoridnates} The position object.
         */
        this.getPosition = function () {
            return _this.position;
        };
        /**
         * Get the velocity object with (x,y) properties.
         * @return {iCoridnates} The velocity object.
         */
        this.getVelocity = function () {
            return _this.velocity;
        };
        /**
         * Get the color value.
         * @return {string} The color value.
         */
        this.getColor = function () {
            return _this.color;
        };
        this.position = { x: startX, y: startY };
        this.velocity = { x: config.initXVelocity, y: config.initYVelocity };
        this.color = color;
    }
    return Ball;
}());
exports["default"] = Ball;


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view__WEBPACK_IMPORTED_MODULE_1__);


/** Class App is application entry point. In this class we get HTML elements from document, add event listeners and call render function ( from View class ) on some defined period*/
class App {
    constructor() {
        /**
         * This function get mouse event object as parametar, call getMousePosition function for mouse cordinate and add new ball in ball array.
         * @param  {MouseEvent} e - Mouse event defined in config.addBallEventType const variable
         */
        this.addBall = (e) => {
            this.view.addBall(this.getMousePosition(e));
        };
        /**
        * This function get mouse event object as parametar, find mouse cordinate in area and return object with (x,y) cordinates.
        * @param  {MouseEvent} e - Mouse event defined in config.addBallEventType const variable
        * @return {object} The mouse cordinate object in area.
        */
        this.getMousePosition = (e) => {
            return { x: e.pageX - this.elem.offsetLeft, y: e.pageY - this.elem.offsetTop };
        };
        /**
         * Change environment  where balls will start bouncing. When we change environment, balls array is set to empty
         */
        this.changeEnvironment = () => {
            this.appContext.environment = this.envElem.options[this.envElem.selectedIndex].value;
            this.appContext.balls = [];
        };
        this.elem = document.getElementById("canvas");
        this.envElem = document.getElementById('env');
        this.elem.addEventListener(_config__WEBPACK_IMPORTED_MODULE_0__["addBallEventType"], this.addBall.bind(this));
        this.envElem.addEventListener("change", this.changeEnvironment.bind(this));
        let environment = this.envElem.options[this.envElem.selectedIndex].value;
        this.appContext = { canvasContext: this.elem.getContext("2d"), environment: environment, balls: [] };
        this.view = new _view__WEBPACK_IMPORTED_MODULE_1___default.a(this.appContext);
        setInterval(this.view.render.bind(this.view), _config__WEBPACK_IMPORTED_MODULE_0__["frameDelay"]);
    }
}
new App();


/***/ }),

/***/ "./src/calculation.js":
/*!****************************!*\
  !*** ./src/calculation.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var config = __webpack_require__(/*! ./config.js */ "./src/config.js");
/**
 * Get the position object with (x,y) properties.
 * @return {object} The position {iCoridnates} and velocity {iCoridnates}  object with current (x,y) cordinates.
 * @param {number} width - Width of area.
 * @param {number} height - Height of area.
 * @param {string} environment  - Environment variable help us to calculate the density parametar  ( denisty for air / denisty for water )
 */
exports.calculatePhisc = function (position, velocity, width, height, environment) {
    var density = config.densityAir;
    if (environment == 'water')
        density = config.densityWater;
    // Do physics
    // Drag force: Fd = -1/2 * Cd * A * rho * v * v
    var Fx = -0.5 * config.dragCoefficient * config.area * density * velocity.x * velocity.x * velocity.x / Math.abs(velocity.x);
    var Fy = -0.5 * config.dragCoefficient * config.area * density * velocity.y * velocity.y * velocity.y / Math.abs(velocity.y);
    Fx = (isNaN(Fx) ? 0 : Fx);
    Fy = (isNaN(Fy) ? 0 : Fy);
    // Calculate acceleration ( F = ma )
    var ax = Fx / config.mass;
    var ay = config.gravity + (Fy / config.mass);
    // Integrate to get velocity
    velocity.x += ax * config.frameRate;
    velocity.y += ay * config.frameRate;
    // Integrate to get position
    position.x += velocity.x * config.frameRate * 100;
    position.y += velocity.y * config.frameRate * 100;
    // Handle collisions
    if (position.y > height - config.radius) {
        velocity.y *= config.restitution;
        position.y = height - config.radius;
    }
    if (position.x > width - config.radius) {
        velocity.x *= config.restitution;
        position.x = width - config.radius;
    }
    if (position.x < config.radius) {
        velocity.x *= config.restitution;
        position.x = config.radius;
    }
    return { position: position, velocity: velocity };
};


/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Constant for ball gravity and velocity calculation
exports.__esModule = true;
exports.frameRate = 1 / 40; // FrameRate in seconds
exports.frameDelay = exports.frameRate * 1000; // frameDelay in ms
exports.radius = 15; // Radius for button in canvas  1px = 1cm
exports.dragCoefficient = 0.47; // a dimensionless coefficient related to the object's geometry 
exports.densityAir = 1.22; // density coefficient  (for air  1.22) 
exports.densityWater = 40; // density coefficient  (for water  40)
exports.area = Math.PI * exports.radius * exports.radius / (10000); //  Area of ball m^2 -
exports.gravity = 9.81; //  Gravity constant   m / s^2 
exports.mass = 0.1; //  Mass of ball in kg
exports.restitution = -0.7; // The coefficient of restitution is the ratio of the final to initial relative velocity between two objects after they collide.
exports.initXVelocity = 4; // init X velocity cordinate for new created ball
exports.initYVelocity = 0; // init Y velocity cordinate for new created ball
// Constant for Canvas 
exports.canvasWidth = 500; //  Canvas width in HTML document
exports.canvasHeight = 400; //  Canvas height in HTML document
exports.waterCanvasColor = "#0097be"; //  color for water
exports.strokeStyle = '#000000'; //  color for canvas strokeStyle
exports.addBallEventType = 'click'; //  add type of mouse event for add new ball in canvas default click - other values ( mouseover,mouseout )


/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var config = __webpack_require__(/*! ./config.js */ "./src/config.js");
var calculation_js_1 = __webpack_require__(/*! ./calculation.js */ "./src/calculation.js");
var Ball_js_1 = __webpack_require__(/*! ./Ball.js */ "./src/Ball.js");
/** Class View render ball in area from ball position and velocity cordinates */
var View = /** @class */ (function () {
    function View(appContext) {
        var _this = this;
        /**
         * Render function first clear content from area.
         * Iterate balls array and for each ball call calculatePhisc function that calculate new position and velocity (x,y) cordinates and render ball in area with new cordinates
         */
        this.render = function () {
            var ctx = _this.appContext.canvasContext;
            ctx.clearRect(0, 0, config.canvasWidth, config.canvasHeight);
            if (_this.appContext.environment == 'water') {
                ctx.fillStyle = config.waterCanvasColor;
                ctx.fillRect(0, 0, config.canvasWidth, config.canvasHeight);
            }
            for (var i = 0; i < _this.appContext.balls.length; i++) {
                var top_1 = _this.appContext.balls[i];
                var newCordinates = calculation_js_1.calculatePhisc(top_1.getPosition(), top_1.getVelocity(), config.canvasWidth, config.canvasHeight, _this.appContext.environment);
                top_1.position = newCordinates.position;
                top_1.velocity = newCordinates.velocity;
                _this.appContext.balls[i] = top_1;
                ctx.save();
                ctx.translate(top_1.position.x, top_1.position.y);
                ctx.beginPath();
                ctx.fillStyle = top_1.color;
                ctx.arc(0, 0, config.radius, 0, Math.PI * 2, true);
                ctx.fill();
                ctx.closePath();
                ctx.restore();
            }
        };
        /**
         * addBall function create new ball with mouse object cordinates and generate random color for each new ball. Ball is added to appContext.balls property,
         * so next time when render is called new ball will be render in area
         * @param {iCoridnates} mouse - Object with (x,y) cordinates that we need for start position when we create object from Ball class
         */
        this.addBall = function (mouse) {
            var color = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
            _this.appContext.balls.push(new Ball_js_1["default"](mouse.x, mouse.y, color));
        };
        this.appContext = appContext;
    }
    return View;
}());
exports["default"] = View;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsY3VsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQSxhQUFhLG1CQUFPLENBQUMsb0NBQWE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7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QUNiO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsOENBQThDO0FBQzlDLG9CQUFvQjtBQUNwQiwrQkFBK0I7QUFDL0IsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQixtRUFBbUU7QUFDbkUsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQiwyQkFBMkI7QUFDM0IsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQjtBQUNBLDBCQUEwQjtBQUMxQiwyQkFBMkI7QUFDM0IscUNBQXFDO0FBQ3JDLGdDQUFnQztBQUNoQyxtQ0FBbUM7Ozs7Ozs7Ozs7Ozs7QUNwQnRCO0FBQ2I7QUFDQSxhQUFhLG1CQUFPLENBQUMsb0NBQWE7QUFDbEMsdUJBQXVCLG1CQUFPLENBQUMsOENBQWtCO0FBQ2pELGdCQUFnQixtQkFBTyxDQUFDLGdDQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQ0FBbUM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJiYWxsSW5DYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY29uZmlnID0gcmVxdWlyZShcIi4vY29uZmlnLmpzXCIpO1xuLyoqIENsYXNzIEJhbGwga2VlcCBkYXRhIGZvciBiYWxsIHBvc2l0aW9uLCBiYWxsIHZlbG9jaXR5IGFuZCBjb2xvciBmb3IgZWFjaCBiYWxsIGNyZWF0ZWQgaW4gYXJlYSAqL1xudmFyIEJhbGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmFsbChzdGFydFgsIHN0YXJ0WSwgY29sb3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgcG9zaXRpb24gb2JqZWN0IHdpdGggKHgseSkgcHJvcGVydGllcy5cbiAgICAgICAgICogQHJldHVybiB7aUNvcmlkbmF0ZXN9IFRoZSBwb3NpdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdldFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnBvc2l0aW9uO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSB2ZWxvY2l0eSBvYmplY3Qgd2l0aCAoeCx5KSBwcm9wZXJ0aWVzLlxuICAgICAgICAgKiBAcmV0dXJuIHtpQ29yaWRuYXRlc30gVGhlIHZlbG9jaXR5IG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMudmVsb2NpdHk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIGNvbG9yIHZhbHVlLlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBjb2xvciB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZ2V0Q29sb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuY29sb3I7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7IHg6IHN0YXJ0WCwgeTogc3RhcnRZIH07XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7IHg6IGNvbmZpZy5pbml0WFZlbG9jaXR5LCB5OiBjb25maWcuaW5pdFlWZWxvY2l0eSB9O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxuICAgIHJldHVybiBCYWxsO1xufSgpKTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQmFsbDtcbiIsImltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IElhcHBDb250ZXh0IGZyb20gJy4vSWFwcENvbnRleHQnO1xuLyoqIENsYXNzIEFwcCBpcyBhcHBsaWNhdGlvbiBlbnRyeSBwb2ludC4gSW4gdGhpcyBjbGFzcyB3ZSBnZXQgSFRNTCBlbGVtZW50cyBmcm9tIGRvY3VtZW50LCBhZGQgZXZlbnQgbGlzdGVuZXJzIGFuZCBjYWxsIHJlbmRlciBmdW5jdGlvbiAoIGZyb20gVmlldyBjbGFzcyApIG9uIHNvbWUgZGVmaW5lZCBwZXJpb2QqL1xuY2xhc3MgQXBwIHtcbiAgICAvKipcbiAgICAgKiBHZXQgSFRNTCBlbGVtZW50cyBmcm9tIGRvY3VtZW50LCBhZGQgZXZlbnQgbGlzdGVuZXJzIGFuZCBwYXNzIHRvIFZpZXcgY2xhc3MgY29uc3RydWN0b29yXG4gICAgICogQ2FsbCByZW5kZXIgZnVuY3Rpb24gZnJvbSBWaWV3IGNsYXNzIGluIGludGVydmFsICggZGVmaW5lZCBpbiBmcmFtZURlbGF5ICkgc28gd2UgY2FuIHNpbXVsYXRlIGJhbGwgbW92aW5nXG4gICAgICovXG4gICAgZWxlbTogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgZW52RWxlbTogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgYXBwQ29udGV4dCA6IElhcHBDb250ZXh0O1xuICAgIHZpZXcgOiBWaWV3O1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVsZW0gPSA8SFRNTENhbnZhc0VsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmVudkVsZW0gPSA8SFRNTFNlbGVjdEVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnYnKTtcbiAgICAgICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoY29uZmlnLmFkZEJhbGxFdmVudFR5cGUsIHRoaXMuYWRkQmFsbC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5lbnZFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5jaGFuZ2VFbnZpcm9ubWVudC5iaW5kKHRoaXMpKTtcbiAgICAgICAgbGV0IGVudmlyb25tZW50ID0gdGhpcy5lbnZFbGVtLm9wdGlvbnNbdGhpcy5lbnZFbGVtLnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgICB0aGlzLmFwcENvbnRleHQgPSB7IGNhbnZhc0NvbnRleHQ6IHRoaXMuZWxlbS5nZXRDb250ZXh0KFwiMmRcIiksIGVudmlyb25tZW50IDogZW52aXJvbm1lbnQsIGJhbGxzOiBbXX07XG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBWaWV3KHRoaXMuYXBwQ29udGV4dCk7XG4gICAgICAgIHNldEludGVydmFsKHRoaXMudmlldy5yZW5kZXIuYmluZCh0aGlzLnZpZXcpLCBjb25maWcuZnJhbWVEZWxheSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gZ2V0IG1vdXNlIGV2ZW50IG9iamVjdCBhcyBwYXJhbWV0YXIsIGNhbGwgZ2V0TW91c2VQb3NpdGlvbiBmdW5jdGlvbiBmb3IgbW91c2UgY29yZGluYXRlIGFuZCBhZGQgbmV3IGJhbGwgaW4gYmFsbCBhcnJheS5cbiAgICAgKiBAcGFyYW0gIHtNb3VzZUV2ZW50fSBlIC0gTW91c2UgZXZlbnQgZGVmaW5lZCBpbiBjb25maWcuYWRkQmFsbEV2ZW50VHlwZSBjb25zdCB2YXJpYWJsZVxuICAgICAqL1xuICAgIGFkZEJhbGwgPSAoZTpNb3VzZUV2ZW50KSA9PlxuICAgIHtcbiAgICAgICAgdGhpcy52aWV3LmFkZEJhbGwodGhpcy5nZXRNb3VzZVBvc2l0aW9uKGUpKTtcbiAgICB9XG4gICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gZ2V0IG1vdXNlIGV2ZW50IG9iamVjdCBhcyBwYXJhbWV0YXIsIGZpbmQgbW91c2UgY29yZGluYXRlIGluIGFyZWEgYW5kIHJldHVybiBvYmplY3Qgd2l0aCAoeCx5KSBjb3JkaW5hdGVzLlxuICAgICAqIEBwYXJhbSAge01vdXNlRXZlbnR9IGUgLSBNb3VzZSBldmVudCBkZWZpbmVkIGluIGNvbmZpZy5hZGRCYWxsRXZlbnRUeXBlIGNvbnN0IHZhcmlhYmxlXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgbW91c2UgY29yZGluYXRlIG9iamVjdCBpbiBhcmVhLlxuICAgICAqL1xuICAgIGdldE1vdXNlUG9zaXRpb24gPSAoZTpNb3VzZUV2ZW50KSA9PiBcbiAgICB7XG4gICAgICAgIHJldHVybiB7IHg6IGUucGFnZVggLSB0aGlzLmVsZW0ub2Zmc2V0TGVmdCwgeTogZS5wYWdlWSAtIHRoaXMuZWxlbS5vZmZzZXRUb3AgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hhbmdlIGVudmlyb25tZW50ICB3aGVyZSBiYWxscyB3aWxsIHN0YXJ0IGJvdW5jaW5nLiBXaGVuIHdlIGNoYW5nZSBlbnZpcm9ubWVudCwgYmFsbHMgYXJyYXkgaXMgc2V0IHRvIGVtcHR5IFxuICAgICAqL1xuICAgIGNoYW5nZUVudmlyb25tZW50ID0gKCkgPT4gXG4gICAge1xuICAgICAgICB0aGlzLmFwcENvbnRleHQuZW52aXJvbm1lbnQgPSB0aGlzLmVudkVsZW0ub3B0aW9uc1t0aGlzLmVudkVsZW0uc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIHRoaXMuYXBwQ29udGV4dC5iYWxscyA9IFtdO1xuICAgIH1cbn1cblxubmV3IEFwcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBjb25maWcgPSByZXF1aXJlKFwiLi9jb25maWcuanNcIik7XG4vKipcbiAqIEdldCB0aGUgcG9zaXRpb24gb2JqZWN0IHdpdGggKHgseSkgcHJvcGVydGllcy5cbiAqIEByZXR1cm4ge29iamVjdH0gVGhlIHBvc2l0aW9uIHtpQ29yaWRuYXRlc30gYW5kIHZlbG9jaXR5IHtpQ29yaWRuYXRlc30gIG9iamVjdCB3aXRoIGN1cnJlbnQgKHgseSkgY29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFdpZHRoIG9mIGFyZWEuXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0gSGVpZ2h0IG9mIGFyZWEuXG4gKiBAcGFyYW0ge3N0cmluZ30gZW52aXJvbm1lbnQgIC0gRW52aXJvbm1lbnQgdmFyaWFibGUgaGVscCB1cyB0byBjYWxjdWxhdGUgdGhlIGRlbnNpdHkgcGFyYW1ldGFyICAoIGRlbmlzdHkgZm9yIGFpciAvIGRlbmlzdHkgZm9yIHdhdGVyIClcbiAqL1xuZXhwb3J0cy5jYWxjdWxhdGVQaGlzYyA9IGZ1bmN0aW9uIChwb3NpdGlvbiwgdmVsb2NpdHksIHdpZHRoLCBoZWlnaHQsIGVudmlyb25tZW50KSB7XG4gICAgdmFyIGRlbnNpdHkgPSBjb25maWcuZGVuc2l0eUFpcjtcbiAgICBpZiAoZW52aXJvbm1lbnQgPT0gJ3dhdGVyJylcbiAgICAgICAgZGVuc2l0eSA9IGNvbmZpZy5kZW5zaXR5V2F0ZXI7XG4gICAgLy8gRG8gcGh5c2ljc1xuICAgIC8vIERyYWcgZm9yY2U6IEZkID0gLTEvMiAqIENkICogQSAqIHJobyAqIHYgKiB2XG4gICAgdmFyIEZ4ID0gLTAuNSAqIGNvbmZpZy5kcmFnQ29lZmZpY2llbnQgKiBjb25maWcuYXJlYSAqIGRlbnNpdHkgKiB2ZWxvY2l0eS54ICogdmVsb2NpdHkueCAqIHZlbG9jaXR5LnggLyBNYXRoLmFicyh2ZWxvY2l0eS54KTtcbiAgICB2YXIgRnkgPSAtMC41ICogY29uZmlnLmRyYWdDb2VmZmljaWVudCAqIGNvbmZpZy5hcmVhICogZGVuc2l0eSAqIHZlbG9jaXR5LnkgKiB2ZWxvY2l0eS55ICogdmVsb2NpdHkueSAvIE1hdGguYWJzKHZlbG9jaXR5LnkpO1xuICAgIEZ4ID0gKGlzTmFOKEZ4KSA/IDAgOiBGeCk7XG4gICAgRnkgPSAoaXNOYU4oRnkpID8gMCA6IEZ5KTtcbiAgICAvLyBDYWxjdWxhdGUgYWNjZWxlcmF0aW9uICggRiA9IG1hIClcbiAgICB2YXIgYXggPSBGeCAvIGNvbmZpZy5tYXNzO1xuICAgIHZhciBheSA9IGNvbmZpZy5ncmF2aXR5ICsgKEZ5IC8gY29uZmlnLm1hc3MpO1xuICAgIC8vIEludGVncmF0ZSB0byBnZXQgdmVsb2NpdHlcbiAgICB2ZWxvY2l0eS54ICs9IGF4ICogY29uZmlnLmZyYW1lUmF0ZTtcbiAgICB2ZWxvY2l0eS55ICs9IGF5ICogY29uZmlnLmZyYW1lUmF0ZTtcbiAgICAvLyBJbnRlZ3JhdGUgdG8gZ2V0IHBvc2l0aW9uXG4gICAgcG9zaXRpb24ueCArPSB2ZWxvY2l0eS54ICogY29uZmlnLmZyYW1lUmF0ZSAqIDEwMDtcbiAgICBwb3NpdGlvbi55ICs9IHZlbG9jaXR5LnkgKiBjb25maWcuZnJhbWVSYXRlICogMTAwO1xuICAgIC8vIEhhbmRsZSBjb2xsaXNpb25zXG4gICAgaWYgKHBvc2l0aW9uLnkgPiBoZWlnaHQgLSBjb25maWcucmFkaXVzKSB7XG4gICAgICAgIHZlbG9jaXR5LnkgKj0gY29uZmlnLnJlc3RpdHV0aW9uO1xuICAgICAgICBwb3NpdGlvbi55ID0gaGVpZ2h0IC0gY29uZmlnLnJhZGl1cztcbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uLnggPiB3aWR0aCAtIGNvbmZpZy5yYWRpdXMpIHtcbiAgICAgICAgdmVsb2NpdHkueCAqPSBjb25maWcucmVzdGl0dXRpb247XG4gICAgICAgIHBvc2l0aW9uLnggPSB3aWR0aCAtIGNvbmZpZy5yYWRpdXM7XG4gICAgfVxuICAgIGlmIChwb3NpdGlvbi54IDwgY29uZmlnLnJhZGl1cykge1xuICAgICAgICB2ZWxvY2l0eS54ICo9IGNvbmZpZy5yZXN0aXR1dGlvbjtcbiAgICAgICAgcG9zaXRpb24ueCA9IGNvbmZpZy5yYWRpdXM7XG4gICAgfVxuICAgIHJldHVybiB7IHBvc2l0aW9uOiBwb3NpdGlvbiwgdmVsb2NpdHk6IHZlbG9jaXR5IH07XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb25zdGFudCBmb3IgYmFsbCBncmF2aXR5IGFuZCB2ZWxvY2l0eSBjYWxjdWxhdGlvblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZnJhbWVSYXRlID0gMSAvIDQwOyAvLyBGcmFtZVJhdGUgaW4gc2Vjb25kc1xuZXhwb3J0cy5mcmFtZURlbGF5ID0gZXhwb3J0cy5mcmFtZVJhdGUgKiAxMDAwOyAvLyBmcmFtZURlbGF5IGluIG1zXG5leHBvcnRzLnJhZGl1cyA9IDE1OyAvLyBSYWRpdXMgZm9yIGJ1dHRvbiBpbiBjYW52YXMgIDFweCA9IDFjbVxuZXhwb3J0cy5kcmFnQ29lZmZpY2llbnQgPSAwLjQ3OyAvLyBhIGRpbWVuc2lvbmxlc3MgY29lZmZpY2llbnQgcmVsYXRlZCB0byB0aGUgb2JqZWN0J3MgZ2VvbWV0cnkgXG5leHBvcnRzLmRlbnNpdHlBaXIgPSAxLjIyOyAvLyBkZW5zaXR5IGNvZWZmaWNpZW50ICAoZm9yIGFpciAgMS4yMikgXG5leHBvcnRzLmRlbnNpdHlXYXRlciA9IDQwOyAvLyBkZW5zaXR5IGNvZWZmaWNpZW50ICAoZm9yIHdhdGVyICA0MClcbmV4cG9ydHMuYXJlYSA9IE1hdGguUEkgKiBleHBvcnRzLnJhZGl1cyAqIGV4cG9ydHMucmFkaXVzIC8gKDEwMDAwKTsgLy8gIEFyZWEgb2YgYmFsbCBtXjIgLVxuZXhwb3J0cy5ncmF2aXR5ID0gOS44MTsgLy8gIEdyYXZpdHkgY29uc3RhbnQgICBtIC8gc14yIFxuZXhwb3J0cy5tYXNzID0gMC4xOyAvLyAgTWFzcyBvZiBiYWxsIGluIGtnXG5leHBvcnRzLnJlc3RpdHV0aW9uID0gLTAuNzsgLy8gVGhlIGNvZWZmaWNpZW50IG9mIHJlc3RpdHV0aW9uIGlzIHRoZSByYXRpbyBvZiB0aGUgZmluYWwgdG8gaW5pdGlhbCByZWxhdGl2ZSB2ZWxvY2l0eSBiZXR3ZWVuIHR3byBvYmplY3RzIGFmdGVyIHRoZXkgY29sbGlkZS5cbmV4cG9ydHMuaW5pdFhWZWxvY2l0eSA9IDQ7IC8vIGluaXQgWCB2ZWxvY2l0eSBjb3JkaW5hdGUgZm9yIG5ldyBjcmVhdGVkIGJhbGxcbmV4cG9ydHMuaW5pdFlWZWxvY2l0eSA9IDA7IC8vIGluaXQgWSB2ZWxvY2l0eSBjb3JkaW5hdGUgZm9yIG5ldyBjcmVhdGVkIGJhbGxcbi8vIENvbnN0YW50IGZvciBDYW52YXMgXG5leHBvcnRzLmNhbnZhc1dpZHRoID0gNTAwOyAvLyAgQ2FudmFzIHdpZHRoIGluIEhUTUwgZG9jdW1lbnRcbmV4cG9ydHMuY2FudmFzSGVpZ2h0ID0gNDAwOyAvLyAgQ2FudmFzIGhlaWdodCBpbiBIVE1MIGRvY3VtZW50XG5leHBvcnRzLndhdGVyQ2FudmFzQ29sb3IgPSBcIiMwMDk3YmVcIjsgLy8gIGNvbG9yIGZvciB3YXRlclxuZXhwb3J0cy5zdHJva2VTdHlsZSA9ICcjMDAwMDAwJzsgLy8gIGNvbG9yIGZvciBjYW52YXMgc3Ryb2tlU3R5bGVcbmV4cG9ydHMuYWRkQmFsbEV2ZW50VHlwZSA9ICdjbGljayc7IC8vICBhZGQgdHlwZSBvZiBtb3VzZSBldmVudCBmb3IgYWRkIG5ldyBiYWxsIGluIGNhbnZhcyBkZWZhdWx0IGNsaWNrIC0gb3RoZXIgdmFsdWVzICggbW91c2VvdmVyLG1vdXNlb3V0IClcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBjb25maWcgPSByZXF1aXJlKFwiLi9jb25maWcuanNcIik7XG52YXIgY2FsY3VsYXRpb25fanNfMSA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0aW9uLmpzXCIpO1xudmFyIEJhbGxfanNfMSA9IHJlcXVpcmUoXCIuL0JhbGwuanNcIik7XG4vKiogQ2xhc3MgVmlldyByZW5kZXIgYmFsbCBpbiBhcmVhIGZyb20gYmFsbCBwb3NpdGlvbiBhbmQgdmVsb2NpdHkgY29yZGluYXRlcyAqL1xudmFyIFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVmlldyhhcHBDb250ZXh0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW5kZXIgZnVuY3Rpb24gZmlyc3QgY2xlYXIgY29udGVudCBmcm9tIGFyZWEuXG4gICAgICAgICAqIEl0ZXJhdGUgYmFsbHMgYXJyYXkgYW5kIGZvciBlYWNoIGJhbGwgY2FsbCBjYWxjdWxhdGVQaGlzYyBmdW5jdGlvbiB0aGF0IGNhbGN1bGF0ZSBuZXcgcG9zaXRpb24gYW5kIHZlbG9jaXR5ICh4LHkpIGNvcmRpbmF0ZXMgYW5kIHJlbmRlciBiYWxsIGluIGFyZWEgd2l0aCBuZXcgY29yZGluYXRlc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY3R4ID0gX3RoaXMuYXBwQ29udGV4dC5jYW52YXNDb250ZXh0O1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjb25maWcuY2FudmFzV2lkdGgsIGNvbmZpZy5jYW52YXNIZWlnaHQpO1xuICAgICAgICAgICAgaWYgKF90aGlzLmFwcENvbnRleHQuZW52aXJvbm1lbnQgPT0gJ3dhdGVyJykge1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb25maWcud2F0ZXJDYW52YXNDb2xvcjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY29uZmlnLmNhbnZhc1dpZHRoLCBjb25maWcuY2FudmFzSGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3RoaXMuYXBwQ29udGV4dC5iYWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB0b3BfMSA9IF90aGlzLmFwcENvbnRleHQuYmFsbHNbaV07XG4gICAgICAgICAgICAgICAgdmFyIG5ld0NvcmRpbmF0ZXMgPSBjYWxjdWxhdGlvbl9qc18xLmNhbGN1bGF0ZVBoaXNjKHRvcF8xLmdldFBvc2l0aW9uKCksIHRvcF8xLmdldFZlbG9jaXR5KCksIGNvbmZpZy5jYW52YXNXaWR0aCwgY29uZmlnLmNhbnZhc0hlaWdodCwgX3RoaXMuYXBwQ29udGV4dC5lbnZpcm9ubWVudCk7XG4gICAgICAgICAgICAgICAgdG9wXzEucG9zaXRpb24gPSBuZXdDb3JkaW5hdGVzLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHRvcF8xLnZlbG9jaXR5ID0gbmV3Q29yZGluYXRlcy52ZWxvY2l0eTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hcHBDb250ZXh0LmJhbGxzW2ldID0gdG9wXzE7XG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKHRvcF8xLnBvc2l0aW9uLngsIHRvcF8xLnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdG9wXzEuY29sb3I7XG4gICAgICAgICAgICAgICAgY3R4LmFyYygwLCAwLCBjb25maWcucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFkZEJhbGwgZnVuY3Rpb24gY3JlYXRlIG5ldyBiYWxsIHdpdGggbW91c2Ugb2JqZWN0IGNvcmRpbmF0ZXMgYW5kIGdlbmVyYXRlIHJhbmRvbSBjb2xvciBmb3IgZWFjaCBuZXcgYmFsbC4gQmFsbCBpcyBhZGRlZCB0byBhcHBDb250ZXh0LmJhbGxzIHByb3BlcnR5LFxuICAgICAgICAgKiBzbyBuZXh0IHRpbWUgd2hlbiByZW5kZXIgaXMgY2FsbGVkIG5ldyBiYWxsIHdpbGwgYmUgcmVuZGVyIGluIGFyZWFcbiAgICAgICAgICogQHBhcmFtIHtpQ29yaWRuYXRlc30gbW91c2UgLSBPYmplY3Qgd2l0aCAoeCx5KSBjb3JkaW5hdGVzIHRoYXQgd2UgbmVlZCBmb3Igc3RhcnQgcG9zaXRpb24gd2hlbiB3ZSBjcmVhdGUgb2JqZWN0IGZyb20gQmFsbCBjbGFzc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hZGRCYWxsID0gZnVuY3Rpb24gKG1vdXNlKSB7XG4gICAgICAgICAgICB2YXIgY29sb3IgPSAnIycgKyAoMHgxMDAwMDAwICsgKE1hdGgucmFuZG9tKCkpICogMHhmZmZmZmYpLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSwgNik7XG4gICAgICAgICAgICBfdGhpcy5hcHBDb250ZXh0LmJhbGxzLnB1c2gobmV3IEJhbGxfanNfMVtcImRlZmF1bHRcIl0obW91c2UueCwgbW91c2UueSwgY29sb3IpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hcHBDb250ZXh0ID0gYXBwQ29udGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIFZpZXc7XG59KCkpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBWaWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==