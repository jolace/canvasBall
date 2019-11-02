"use strict";
exports.__esModule = true;
var config = require("./config");
var view_1 = require("./view");
/** Class App is application entry point. In this class we get HTML elements from document, add event listeners and call render function ( from View class ) on some defined period*/
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        /**
         * This function get mouse event object as parametar, call getMousePosition function for mouse cordinate and add new ball in ball array.
         * @param  {MouseEvent} e - Mouse event defined in config.addBallEventType const variable
         */
        this.addBall = function (e) {
            _this.view.addBall(_this.getMousePosition(e));
        };
        /**
        * This function get mouse event object as parametar, find mouse cordinate in area and return object with (x,y) cordinates.
        * @param  {MouseEvent} e - Mouse event defined in config.addBallEventType const variable
        * @return {object} The mouse cordinate object in area.
        */
        this.getMousePosition = function (e) {
            return { x: e.pageX - _this.elem.offsetLeft, y: e.pageY - _this.elem.offsetTop };
        };
        /**
         * Change environment  where balls will start bouncing. When we change environment, balls array is set to empty
         */
        this.changeEnvironment = function () {
            _this.appContext.environment = _this.envElem.options[_this.envElem.selectedIndex].value;
            _this.appContext.balls = [];
        };
        this.elem = document.getElementById("canvas");
        this.envElem = document.getElementById('env');
        this.elem.addEventListener(config.addBallEventType, this.addBall.bind(this));
        this.envElem.addEventListener("change", this.changeEnvironment.bind(this));
        var environment = this.envElem.options[this.envElem.selectedIndex].value;
        this.appContext = { canvasContext: this.elem.getContext("2d"), environment: environment, balls: [] };
        this.view = new view_1["default"](this.appContext);
        setInterval(this.view.render.bind(this.view), config.frameDelay);
    }
    return App;
}());
new App();
