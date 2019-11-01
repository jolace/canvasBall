
import * as config from './config.js';
import { calculatePhisc } from './calculation.js';
import Ball from './Ball.js';

export default class View {
    constructor(appContext) {
        this.appContext = appContext;
    }
    render = () =>
    {
        let ctx = this.appContext.canvasContext;
        ctx.clearRect(0, 0, config.canvasWidth, config.canvasHeight);
        if(this.appContext.environment == 'water')
        {
            ctx.fillStyle = config.waterCanvasColor;
            ctx.fillRect(0, 0, config.canvasWidth, config.canvasHeight);
        }
        for (let i = 0; i < this.appContext.balls.length; i++) {
            let top = this.appContext.balls[i];
            let newCordinates = calculatePhisc(top.getPosition(), top.getVelocity(), config.canvasWidth, config.canvasHeight,this.appContext.environment);
            top.position.x = newCordinates.position.x;
            top.position.y = newCordinates.position.y;
            top.velocity.x = newCordinates.velocity.x;
            top.velocity.y = newCordinates.velocity.y;
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
    }
    addBall = (mouse) =>
    {
        let color = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        this.appContext.balls.push(new Ball(mouse.x, mouse.y, color));
    }
}




