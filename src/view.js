
import { frameDelay, radius } from './config.js';
import { calculatePhisc } from './calculation.js';
import App from './app.js';

class View {
    constructor(elem,eventType,environment) {
        console.log(elem);
        var app = new App(elem,eventType,environment);
        setInterval(this.render, frameDelay, app);
    }
    render(app) {
        let ctx = app.elem.getContext("2d");
        ctx.strokeStyle = '#000000';
        ctx.clearRect(0, 0, app.elem.width, app.elem.height);
        for (let i = 0; i < app.balls.length; i++) {
            let top = app.balls[i];
            let newCordinates = calculatePhisc(top.position, top.velocity, app.elem.width, app.elem.height,app.environment);
            top.position.x = newCordinates.position.x;
            top.position.y = newCordinates.position.y;
            top.velocity.x = newCordinates.velocity.x;
            top.velocity.y = newCordinates.velocity.y;
            app.balls[i] = top;
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
}



new View(document.getElementById("canvas"),'click','air');
