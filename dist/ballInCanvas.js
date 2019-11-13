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

/***/ "./src/Ball.ts":
/*!*********************!*\
  !*** ./src/Ball.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const config = __importStar(__webpack_require__(/*! ./config */ "./src/config.ts"));
/** Class Ball keep data for ball position, ball velocity and color for each ball created in area */
class Ball {
    /**
     * Create a ball instance and initializing position, velocity and color variables.
     * @param {number} startX - The x cordinate in area for this ball.
     * @param {number} startY - The y cordinate in area for this ball.
     * @param {string} color  - Color for this ball.
     */
    constructor(startX, startY, color) {
        this.color = color;
        this.velocity = { x: config.initXVelocity, y: config.initYVelocity };
        this.position = { x: startX, y: startY };
    }
}
exports.default = Ball;


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config = __importStar(__webpack_require__(/*! ./config */ "./src/config.ts"));
const view_1 = __importDefault(__webpack_require__(/*! ./view */ "./src/view.ts"));
/** Class App is application entry point. In this class we get HTML elements from document, add event listeners and call render function ( from View class ) on some defined period*/
class App {
    /**
    * Get HTML elements from document, add event listeners and pass to View class constructoor
    * Call render function from View class in interval ( defined in frameDelay ) so we can simulate ball moving
    */
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
        this.elem.addEventListener(config.addBallEventType, this.addBall.bind(this));
        this.envElem.addEventListener("change", this.changeEnvironment.bind(this));
        let environment = this.envElem.options[this.envElem.selectedIndex].value;
        this.appContext = { canvasContext: this.elem.getContext("2d"), environment: environment, balls: [] };
        this.view = new view_1.default(this.appContext);
        setInterval(this.view.render.bind(this.view), config.frameDelay);
    }
}
new App();


/***/ }),

/***/ "./src/calculation.ts":
/*!****************************!*\
  !*** ./src/calculation.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const config = __importStar(__webpack_require__(/*! ./config */ "./src/config.ts"));
/**
 * Get the position object with (x,y) properties.
 * @return {object} The position {iCoridnates} and velocity {iCoridnates}  object with current (x,y) cordinates.
 * @param {number} width - Width of area.
 * @param {number} height - Height of area.
 * @param {string} environment  - Environment variable help us to calculate the density parametar  ( denisty for air / denisty for water )
 */
exports.calculatePhisc = (position, velocity, width, height, environment) => {
    let density = config.densityAir;
    if (environment == 'water')
        density = config.densityWater;
    // Do physics
    // Drag force: Fd = -1/2 * Cd * A * rho * v * v
    let Fx = -0.5 * config.dragCoefficient * config.area * density * velocity.x * velocity.x * velocity.x / Math.abs(velocity.x);
    let Fy = -0.5 * config.dragCoefficient * config.area * density * velocity.y * velocity.y * velocity.y / Math.abs(velocity.y);
    Fx = (isNaN(Fx) ? 0 : Fx);
    Fy = (isNaN(Fy) ? 0 : Fy);
    // Calculate acceleration ( F = ma )
    let ax = Fx / config.mass;
    let ay = config.gravity + (Fy / config.mass);
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
    return { position, velocity };
};


/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Constant for ball gravity and velocity calculation
Object.defineProperty(exports, "__esModule", { value: true });
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

/***/ "./src/view.ts":
/*!*********************!*\
  !*** ./src/view.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config = __importStar(__webpack_require__(/*! ./config */ "./src/config.ts"));
const calculation_1 = __webpack_require__(/*! ./calculation */ "./src/calculation.ts");
const Ball_1 = __importDefault(__webpack_require__(/*! ./Ball */ "./src/Ball.ts"));
/** Class View render ball in area from ball position and velocity cordinates */
class View {
    /**
     * Create a view instance and initializing appContext object.
     * @param {IappContext} appContext - The appContext object. Object has element context property, balls array property and environment property
     */
    constructor(appContext) {
        this.appContext = appContext;
        /**
         * Render function first clear content from area.
         * Iterate balls array and for each ball call calculatePhisc function that calculate new position and velocity (x,y) cordinates and render ball in area with new cordinates
         */
        this.render = () => {
            let ctx = this.appContext.canvasContext;
            ctx.clearRect(0, 0, config.canvasWidth, config.canvasHeight);
            if (this.appContext.environment == 'water') {
                ctx.fillStyle = config.waterCanvasColor;
                ctx.fillRect(0, 0, config.canvasWidth, config.canvasHeight);
            }
            for (let i = 0; i < this.appContext.balls.length; i++) {
                let top = this.appContext.balls[i];
                let newCordinates = calculation_1.calculatePhisc(top.position, top.velocity, config.canvasWidth, config.canvasHeight, this.appContext.environment);
                top.position = newCordinates.position;
                top.velocity = newCordinates.velocity;
                this.appContext.balls[i] = top;
                ctx.save();
                ctx.translate(top.position.x, top.position.y);
                ctx.beginPath();
                ctx.fillStyle = top.color;
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
        this.addBall = (mouse) => {
            let color = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
            this.appContext.balls.push(new Ball_1.default(mouse.x, mouse.y, color));
        };
    }
}
exports.default = View;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JhbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsY3VsYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw0QkFBNEIsbUJBQU8sQ0FBQyxpQ0FBVTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDRCQUE0QixtQkFBTyxDQUFDLGlDQUFVO0FBQzlDLCtCQUErQixtQkFBTyxDQUFDLDZCQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixXQUFXO0FBQzlCLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JEYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsNEJBQTRCLG1CQUFPLENBQUMsaUNBQVU7QUFDOUM7QUFDQTtBQUNBLFlBQVksT0FBTyxlQUFlLFlBQVksZUFBZSxZQUFZO0FBQ3pFLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7Ozs7Ozs7Ozs7OztBQ2xEYTtBQUNiO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5QyxvQkFBb0I7QUFDcEIsK0JBQStCO0FBQy9CLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUIsbUVBQW1FO0FBQ25FLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsMkJBQTJCO0FBQzNCLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUI7QUFDQSwwQkFBMEI7QUFDMUIsMkJBQTJCO0FBQzNCLHFDQUFxQztBQUNyQyxnQ0FBZ0M7QUFDaEMsbUNBQW1DOzs7Ozs7Ozs7Ozs7O0FDcEJ0QjtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw0QkFBNEIsbUJBQU8sQ0FBQyxpQ0FBVTtBQUM5QyxzQkFBc0IsbUJBQU8sQ0FBQywyQ0FBZTtBQUM3QywrQkFBK0IsbUJBQU8sQ0FBQyw2QkFBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtDQUFrQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJhbGxJbkNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY29uZmlnID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2NvbmZpZ1wiKSk7XG4vKiogQ2xhc3MgQmFsbCBrZWVwIGRhdGEgZm9yIGJhbGwgcG9zaXRpb24sIGJhbGwgdmVsb2NpdHkgYW5kIGNvbG9yIGZvciBlYWNoIGJhbGwgY3JlYXRlZCBpbiBhcmVhICovXG5jbGFzcyBCYWxsIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBiYWxsIGluc3RhbmNlIGFuZCBpbml0aWFsaXppbmcgcG9zaXRpb24sIHZlbG9jaXR5IGFuZCBjb2xvciB2YXJpYWJsZXMuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0WCAtIFRoZSB4IGNvcmRpbmF0ZSBpbiBhcmVhIGZvciB0aGlzIGJhbGwuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0WSAtIFRoZSB5IGNvcmRpbmF0ZSBpbiBhcmVhIGZvciB0aGlzIGJhbGwuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yICAtIENvbG9yIGZvciB0aGlzIGJhbGwuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc3RhcnRYLCBzdGFydFksIGNvbG9yKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHsgeDogY29uZmlnLmluaXRYVmVsb2NpdHksIHk6IGNvbmZpZy5pbml0WVZlbG9jaXR5IH07XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7IHg6IHN0YXJ0WCwgeTogc3RhcnRZIH07XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQmFsbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY29uZmlnID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2NvbmZpZ1wiKSk7XG5jb25zdCB2aWV3XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vdmlld1wiKSk7XG4vKiogQ2xhc3MgQXBwIGlzIGFwcGxpY2F0aW9uIGVudHJ5IHBvaW50LiBJbiB0aGlzIGNsYXNzIHdlIGdldCBIVE1MIGVsZW1lbnRzIGZyb20gZG9jdW1lbnQsIGFkZCBldmVudCBsaXN0ZW5lcnMgYW5kIGNhbGwgcmVuZGVyIGZ1bmN0aW9uICggZnJvbSBWaWV3IGNsYXNzICkgb24gc29tZSBkZWZpbmVkIHBlcmlvZCovXG5jbGFzcyBBcHAge1xuICAgIC8qKlxuICAgICogR2V0IEhUTUwgZWxlbWVudHMgZnJvbSBkb2N1bWVudCwgYWRkIGV2ZW50IGxpc3RlbmVycyBhbmQgcGFzcyB0byBWaWV3IGNsYXNzIGNvbnN0cnVjdG9vclxuICAgICogQ2FsbCByZW5kZXIgZnVuY3Rpb24gZnJvbSBWaWV3IGNsYXNzIGluIGludGVydmFsICggZGVmaW5lZCBpbiBmcmFtZURlbGF5ICkgc28gd2UgY2FuIHNpbXVsYXRlIGJhbGwgbW92aW5nXG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZnVuY3Rpb24gZ2V0IG1vdXNlIGV2ZW50IG9iamVjdCBhcyBwYXJhbWV0YXIsIGNhbGwgZ2V0TW91c2VQb3NpdGlvbiBmdW5jdGlvbiBmb3IgbW91c2UgY29yZGluYXRlIGFuZCBhZGQgbmV3IGJhbGwgaW4gYmFsbCBhcnJheS5cbiAgICAgICAgICogQHBhcmFtICB7TW91c2VFdmVudH0gZSAtIE1vdXNlIGV2ZW50IGRlZmluZWQgaW4gY29uZmlnLmFkZEJhbGxFdmVudFR5cGUgY29uc3QgdmFyaWFibGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWRkQmFsbCA9IChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuYWRkQmFsbCh0aGlzLmdldE1vdXNlUG9zaXRpb24oZSkpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgKiBUaGlzIGZ1bmN0aW9uIGdldCBtb3VzZSBldmVudCBvYmplY3QgYXMgcGFyYW1ldGFyLCBmaW5kIG1vdXNlIGNvcmRpbmF0ZSBpbiBhcmVhIGFuZCByZXR1cm4gb2JqZWN0IHdpdGggKHgseSkgY29yZGluYXRlcy5cbiAgICAgICAgKiBAcGFyYW0gIHtNb3VzZUV2ZW50fSBlIC0gTW91c2UgZXZlbnQgZGVmaW5lZCBpbiBjb25maWcuYWRkQmFsbEV2ZW50VHlwZSBjb25zdCB2YXJpYWJsZVxuICAgICAgICAqIEByZXR1cm4ge29iamVjdH0gVGhlIG1vdXNlIGNvcmRpbmF0ZSBvYmplY3QgaW4gYXJlYS5cbiAgICAgICAgKi9cbiAgICAgICAgdGhpcy5nZXRNb3VzZVBvc2l0aW9uID0gKGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHg6IGUucGFnZVggLSB0aGlzLmVsZW0ub2Zmc2V0TGVmdCwgeTogZS5wYWdlWSAtIHRoaXMuZWxlbS5vZmZzZXRUb3AgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoYW5nZSBlbnZpcm9ubWVudCAgd2hlcmUgYmFsbHMgd2lsbCBzdGFydCBib3VuY2luZy4gV2hlbiB3ZSBjaGFuZ2UgZW52aXJvbm1lbnQsIGJhbGxzIGFycmF5IGlzIHNldCB0byBlbXB0eVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jaGFuZ2VFbnZpcm9ubWVudCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwQ29udGV4dC5lbnZpcm9ubWVudCA9IHRoaXMuZW52RWxlbS5vcHRpb25zW3RoaXMuZW52RWxlbS5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuYXBwQ29udGV4dC5iYWxscyA9IFtdO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5lbnZFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudicpO1xuICAgICAgICB0aGlzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcihjb25maWcuYWRkQmFsbEV2ZW50VHlwZSwgdGhpcy5hZGRCYWxsLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmVudkVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLmNoYW5nZUVudmlyb25tZW50LmJpbmQodGhpcykpO1xuICAgICAgICBsZXQgZW52aXJvbm1lbnQgPSB0aGlzLmVudkVsZW0ub3B0aW9uc1t0aGlzLmVudkVsZW0uc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIHRoaXMuYXBwQ29udGV4dCA9IHsgY2FudmFzQ29udGV4dDogdGhpcy5lbGVtLmdldENvbnRleHQoXCIyZFwiKSwgZW52aXJvbm1lbnQ6IGVudmlyb25tZW50LCBiYWxsczogW10gfTtcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IHZpZXdfMS5kZWZhdWx0KHRoaXMuYXBwQ29udGV4dCk7XG4gICAgICAgIHNldEludGVydmFsKHRoaXMudmlldy5yZW5kZXIuYmluZCh0aGlzLnZpZXcpLCBjb25maWcuZnJhbWVEZWxheSk7XG4gICAgfVxufVxubmV3IEFwcCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjb25maWcgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vY29uZmlnXCIpKTtcbi8qKlxuICogR2V0IHRoZSBwb3NpdGlvbiBvYmplY3Qgd2l0aCAoeCx5KSBwcm9wZXJ0aWVzLlxuICogQHJldHVybiB7b2JqZWN0fSBUaGUgcG9zaXRpb24ge2lDb3JpZG5hdGVzfSBhbmQgdmVsb2NpdHkge2lDb3JpZG5hdGVzfSAgb2JqZWN0IHdpdGggY3VycmVudCAoeCx5KSBjb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gV2lkdGggb2YgYXJlYS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBIZWlnaHQgb2YgYXJlYS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBlbnZpcm9ubWVudCAgLSBFbnZpcm9ubWVudCB2YXJpYWJsZSBoZWxwIHVzIHRvIGNhbGN1bGF0ZSB0aGUgZGVuc2l0eSBwYXJhbWV0YXIgICggZGVuaXN0eSBmb3IgYWlyIC8gZGVuaXN0eSBmb3Igd2F0ZXIgKVxuICovXG5leHBvcnRzLmNhbGN1bGF0ZVBoaXNjID0gKHBvc2l0aW9uLCB2ZWxvY2l0eSwgd2lkdGgsIGhlaWdodCwgZW52aXJvbm1lbnQpID0+IHtcbiAgICBsZXQgZGVuc2l0eSA9IGNvbmZpZy5kZW5zaXR5QWlyO1xuICAgIGlmIChlbnZpcm9ubWVudCA9PSAnd2F0ZXInKVxuICAgICAgICBkZW5zaXR5ID0gY29uZmlnLmRlbnNpdHlXYXRlcjtcbiAgICAvLyBEbyBwaHlzaWNzXG4gICAgLy8gRHJhZyBmb3JjZTogRmQgPSAtMS8yICogQ2QgKiBBICogcmhvICogdiAqIHZcbiAgICBsZXQgRnggPSAtMC41ICogY29uZmlnLmRyYWdDb2VmZmljaWVudCAqIGNvbmZpZy5hcmVhICogZGVuc2l0eSAqIHZlbG9jaXR5LnggKiB2ZWxvY2l0eS54ICogdmVsb2NpdHkueCAvIE1hdGguYWJzKHZlbG9jaXR5LngpO1xuICAgIGxldCBGeSA9IC0wLjUgKiBjb25maWcuZHJhZ0NvZWZmaWNpZW50ICogY29uZmlnLmFyZWEgKiBkZW5zaXR5ICogdmVsb2NpdHkueSAqIHZlbG9jaXR5LnkgKiB2ZWxvY2l0eS55IC8gTWF0aC5hYnModmVsb2NpdHkueSk7XG4gICAgRnggPSAoaXNOYU4oRngpID8gMCA6IEZ4KTtcbiAgICBGeSA9IChpc05hTihGeSkgPyAwIDogRnkpO1xuICAgIC8vIENhbGN1bGF0ZSBhY2NlbGVyYXRpb24gKCBGID0gbWEgKVxuICAgIGxldCBheCA9IEZ4IC8gY29uZmlnLm1hc3M7XG4gICAgbGV0IGF5ID0gY29uZmlnLmdyYXZpdHkgKyAoRnkgLyBjb25maWcubWFzcyk7XG4gICAgLy8gSW50ZWdyYXRlIHRvIGdldCB2ZWxvY2l0eVxuICAgIHZlbG9jaXR5LnggKz0gYXggKiBjb25maWcuZnJhbWVSYXRlO1xuICAgIHZlbG9jaXR5LnkgKz0gYXkgKiBjb25maWcuZnJhbWVSYXRlO1xuICAgIC8vIEludGVncmF0ZSB0byBnZXQgcG9zaXRpb25cbiAgICBwb3NpdGlvbi54ICs9IHZlbG9jaXR5LnggKiBjb25maWcuZnJhbWVSYXRlICogMTAwO1xuICAgIHBvc2l0aW9uLnkgKz0gdmVsb2NpdHkueSAqIGNvbmZpZy5mcmFtZVJhdGUgKiAxMDA7XG4gICAgLy8gSGFuZGxlIGNvbGxpc2lvbnNcbiAgICBpZiAocG9zaXRpb24ueSA+IGhlaWdodCAtIGNvbmZpZy5yYWRpdXMpIHtcbiAgICAgICAgdmVsb2NpdHkueSAqPSBjb25maWcucmVzdGl0dXRpb247XG4gICAgICAgIHBvc2l0aW9uLnkgPSBoZWlnaHQgLSBjb25maWcucmFkaXVzO1xuICAgIH1cbiAgICBpZiAocG9zaXRpb24ueCA+IHdpZHRoIC0gY29uZmlnLnJhZGl1cykge1xuICAgICAgICB2ZWxvY2l0eS54ICo9IGNvbmZpZy5yZXN0aXR1dGlvbjtcbiAgICAgICAgcG9zaXRpb24ueCA9IHdpZHRoIC0gY29uZmlnLnJhZGl1cztcbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uLnggPCBjb25maWcucmFkaXVzKSB7XG4gICAgICAgIHZlbG9jaXR5LnggKj0gY29uZmlnLnJlc3RpdHV0aW9uO1xuICAgICAgICBwb3NpdGlvbi54ID0gY29uZmlnLnJhZGl1cztcbiAgICB9XG4gICAgcmV0dXJuIHsgcG9zaXRpb24sIHZlbG9jaXR5IH07XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb25zdGFudCBmb3IgYmFsbCBncmF2aXR5IGFuZCB2ZWxvY2l0eSBjYWxjdWxhdGlvblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mcmFtZVJhdGUgPSAxIC8gNDA7IC8vIEZyYW1lUmF0ZSBpbiBzZWNvbmRzXG5leHBvcnRzLmZyYW1lRGVsYXkgPSBleHBvcnRzLmZyYW1lUmF0ZSAqIDEwMDA7IC8vIGZyYW1lRGVsYXkgaW4gbXNcbmV4cG9ydHMucmFkaXVzID0gMTU7IC8vIFJhZGl1cyBmb3IgYnV0dG9uIGluIGNhbnZhcyAgMXB4ID0gMWNtXG5leHBvcnRzLmRyYWdDb2VmZmljaWVudCA9IDAuNDc7IC8vIGEgZGltZW5zaW9ubGVzcyBjb2VmZmljaWVudCByZWxhdGVkIHRvIHRoZSBvYmplY3QncyBnZW9tZXRyeSBcbmV4cG9ydHMuZGVuc2l0eUFpciA9IDEuMjI7IC8vIGRlbnNpdHkgY29lZmZpY2llbnQgIChmb3IgYWlyICAxLjIyKSBcbmV4cG9ydHMuZGVuc2l0eVdhdGVyID0gNDA7IC8vIGRlbnNpdHkgY29lZmZpY2llbnQgIChmb3Igd2F0ZXIgIDQwKVxuZXhwb3J0cy5hcmVhID0gTWF0aC5QSSAqIGV4cG9ydHMucmFkaXVzICogZXhwb3J0cy5yYWRpdXMgLyAoMTAwMDApOyAvLyAgQXJlYSBvZiBiYWxsIG1eMiAtXG5leHBvcnRzLmdyYXZpdHkgPSA5LjgxOyAvLyAgR3Jhdml0eSBjb25zdGFudCAgIG0gLyBzXjIgXG5leHBvcnRzLm1hc3MgPSAwLjE7IC8vICBNYXNzIG9mIGJhbGwgaW4ga2dcbmV4cG9ydHMucmVzdGl0dXRpb24gPSAtMC43OyAvLyBUaGUgY29lZmZpY2llbnQgb2YgcmVzdGl0dXRpb24gaXMgdGhlIHJhdGlvIG9mIHRoZSBmaW5hbCB0byBpbml0aWFsIHJlbGF0aXZlIHZlbG9jaXR5IGJldHdlZW4gdHdvIG9iamVjdHMgYWZ0ZXIgdGhleSBjb2xsaWRlLlxuZXhwb3J0cy5pbml0WFZlbG9jaXR5ID0gNDsgLy8gaW5pdCBYIHZlbG9jaXR5IGNvcmRpbmF0ZSBmb3IgbmV3IGNyZWF0ZWQgYmFsbFxuZXhwb3J0cy5pbml0WVZlbG9jaXR5ID0gMDsgLy8gaW5pdCBZIHZlbG9jaXR5IGNvcmRpbmF0ZSBmb3IgbmV3IGNyZWF0ZWQgYmFsbFxuLy8gQ29uc3RhbnQgZm9yIENhbnZhcyBcbmV4cG9ydHMuY2FudmFzV2lkdGggPSA1MDA7IC8vICBDYW52YXMgd2lkdGggaW4gSFRNTCBkb2N1bWVudFxuZXhwb3J0cy5jYW52YXNIZWlnaHQgPSA0MDA7IC8vICBDYW52YXMgaGVpZ2h0IGluIEhUTUwgZG9jdW1lbnRcbmV4cG9ydHMud2F0ZXJDYW52YXNDb2xvciA9IFwiIzAwOTdiZVwiOyAvLyAgY29sb3IgZm9yIHdhdGVyXG5leHBvcnRzLnN0cm9rZVN0eWxlID0gJyMwMDAwMDAnOyAvLyAgY29sb3IgZm9yIGNhbnZhcyBzdHJva2VTdHlsZVxuZXhwb3J0cy5hZGRCYWxsRXZlbnRUeXBlID0gJ2NsaWNrJzsgLy8gIGFkZCB0eXBlIG9mIG1vdXNlIGV2ZW50IGZvciBhZGQgbmV3IGJhbGwgaW4gY2FudmFzIGRlZmF1bHQgY2xpY2sgLSBvdGhlciB2YWx1ZXMgKCBtb3VzZW92ZXIsbW91c2VvdXQgKVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjb25maWcgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vY29uZmlnXCIpKTtcbmNvbnN0IGNhbGN1bGF0aW9uXzEgPSByZXF1aXJlKFwiLi9jYWxjdWxhdGlvblwiKTtcbmNvbnN0IEJhbGxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9CYWxsXCIpKTtcbi8qKiBDbGFzcyBWaWV3IHJlbmRlciBiYWxsIGluIGFyZWEgZnJvbSBiYWxsIHBvc2l0aW9uIGFuZCB2ZWxvY2l0eSBjb3JkaW5hdGVzICovXG5jbGFzcyBWaWV3IHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSB2aWV3IGluc3RhbmNlIGFuZCBpbml0aWFsaXppbmcgYXBwQ29udGV4dCBvYmplY3QuXG4gICAgICogQHBhcmFtIHtJYXBwQ29udGV4dH0gYXBwQ29udGV4dCAtIFRoZSBhcHBDb250ZXh0IG9iamVjdC4gT2JqZWN0IGhhcyBlbGVtZW50IGNvbnRleHQgcHJvcGVydHksIGJhbGxzIGFycmF5IHByb3BlcnR5IGFuZCBlbnZpcm9ubWVudCBwcm9wZXJ0eVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGFwcENvbnRleHQpIHtcbiAgICAgICAgdGhpcy5hcHBDb250ZXh0ID0gYXBwQ29udGV4dDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbmRlciBmdW5jdGlvbiBmaXJzdCBjbGVhciBjb250ZW50IGZyb20gYXJlYS5cbiAgICAgICAgICogSXRlcmF0ZSBiYWxscyBhcnJheSBhbmQgZm9yIGVhY2ggYmFsbCBjYWxsIGNhbGN1bGF0ZVBoaXNjIGZ1bmN0aW9uIHRoYXQgY2FsY3VsYXRlIG5ldyBwb3NpdGlvbiBhbmQgdmVsb2NpdHkgKHgseSkgY29yZGluYXRlcyBhbmQgcmVuZGVyIGJhbGwgaW4gYXJlYSB3aXRoIG5ldyBjb3JkaW5hdGVzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBjdHggPSB0aGlzLmFwcENvbnRleHQuY2FudmFzQ29udGV4dDtcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY29uZmlnLmNhbnZhc1dpZHRoLCBjb25maWcuY2FudmFzSGVpZ2h0KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcENvbnRleHQuZW52aXJvbm1lbnQgPT0gJ3dhdGVyJykge1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb25maWcud2F0ZXJDYW52YXNDb2xvcjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY29uZmlnLmNhbnZhc1dpZHRoLCBjb25maWcuY2FudmFzSGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcHBDb250ZXh0LmJhbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvcCA9IHRoaXMuYXBwQ29udGV4dC5iYWxsc1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3Q29yZGluYXRlcyA9IGNhbGN1bGF0aW9uXzEuY2FsY3VsYXRlUGhpc2ModG9wLnBvc2l0aW9uLCB0b3AudmVsb2NpdHksIGNvbmZpZy5jYW52YXNXaWR0aCwgY29uZmlnLmNhbnZhc0hlaWdodCwgdGhpcy5hcHBDb250ZXh0LmVudmlyb25tZW50KTtcbiAgICAgICAgICAgICAgICB0b3AucG9zaXRpb24gPSBuZXdDb3JkaW5hdGVzLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHRvcC52ZWxvY2l0eSA9IG5ld0NvcmRpbmF0ZXMudmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBDb250ZXh0LmJhbGxzW2ldID0gdG9wO1xuICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0b3AucG9zaXRpb24ueCwgdG9wLnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdG9wLmNvbG9yO1xuICAgICAgICAgICAgICAgIGN0eC5hcmMoMCwgMCwgY29uZmlnLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhZGRCYWxsIGZ1bmN0aW9uIGNyZWF0ZSBuZXcgYmFsbCB3aXRoIG1vdXNlIG9iamVjdCBjb3JkaW5hdGVzIGFuZCBnZW5lcmF0ZSByYW5kb20gY29sb3IgZm9yIGVhY2ggbmV3IGJhbGwuIEJhbGwgaXMgYWRkZWQgdG8gYXBwQ29udGV4dC5iYWxscyBwcm9wZXJ0eSxcbiAgICAgICAgICogc28gbmV4dCB0aW1lIHdoZW4gcmVuZGVyIGlzIGNhbGxlZCBuZXcgYmFsbCB3aWxsIGJlIHJlbmRlciBpbiBhcmVhXG4gICAgICAgICAqIEBwYXJhbSB7aUNvcmlkbmF0ZXN9IG1vdXNlIC0gT2JqZWN0IHdpdGggKHgseSkgY29yZGluYXRlcyB0aGF0IHdlIG5lZWQgZm9yIHN0YXJ0IHBvc2l0aW9uIHdoZW4gd2UgY3JlYXRlIG9iamVjdCBmcm9tIEJhbGwgY2xhc3NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWRkQmFsbCA9IChtb3VzZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gJyMnICsgKDB4MTAwMDAwMCArIChNYXRoLnJhbmRvbSgpKSAqIDB4ZmZmZmZmKS50b1N0cmluZygxNikuc3Vic3RyKDEsIDYpO1xuICAgICAgICAgICAgdGhpcy5hcHBDb250ZXh0LmJhbGxzLnB1c2gobmV3IEJhbGxfMS5kZWZhdWx0KG1vdXNlLngsIG1vdXNlLnksIGNvbG9yKSk7XG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gVmlldztcbiJdLCJzb3VyY2VSb290IjoiIn0=