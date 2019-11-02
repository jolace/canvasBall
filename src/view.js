"use strict";
exports.__esModule = true;
var config = require("./config.js");
var calculation_js_1 = require("./calculation.js");
var Ball_js_1 = require("./Ball.js");
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
