"use strict";
exports.__esModule = true;
var config = require("./config.js");
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
