import * as config from './config.js';
import { calculatePhisc } from './calculation.js';
import Ball from './Ball.js';
/** Class View render ball in area from ball position and velocity cordinates */
export default class View {
    constructor(appContext) {
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
                let newCordinates = calculatePhisc(top.getPosition(), top.getVelocity(), config.canvasWidth, config.canvasHeight, this.appContext.environment);
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
            this.appContext.balls.push(new Ball(mouse.x, mouse.y, color));
        };
        this.appContext = appContext;
    }
}
//# sourceMappingURL=view.js.map