
import { frameDelay, radius } from './config.js';
import Ball from './Ball.js';
import { calculatePhisc } from './calculation.js';

var topcina = [];
var canvas;
var ctx;
var loopTimer = false;

function setup() {

    canvas = document.getElementsByTagName("canvas");
    if (canvas.length) {
        canvas = canvas[0];
        ctx = canvas.getContext("2d");
        ctx.strokeStyle = '#000000';
        canvas.addEventListener("click", addBall, false);
        loopTimer = setInterval(render, frameDelay);
    } else {
        alert("There is not canvas element");
    }

}
let render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < topcina.length; i++) {
        let top = topcina[i];
        let newCordinates = calculatePhisc(top.position, top.velocity, canvas.width, canvas.height);
        top.position.x = newCordinates.position.x;
        top.position.y = newCordinates.position.y;
        top.velocity.x = newCordinates.velocity.x;
        top.velocity.y = newCordinates.velocity.y;
        topcina[i] = top;

        ctx.save();
        ctx.translate(top.position.x, top.position.y);
        ctx.beginPath();
        ctx.fillStyle = top.color;

        ctx.arc(0, 0, radius, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }

}

var addBall = function (e) {
    let mouse = getMousePosition(e);
    let color = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    topcina.push(new Ball(mouse.x, mouse.y, color));
}

function getMousePosition(e) {
    return { x: e.pageX - canvas.offsetLeft, y: e.pageY - canvas.offsetTop };
}

setup();