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
