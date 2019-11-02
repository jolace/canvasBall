import * as config from './config.js';
/** Class Ball keep data for ball position, ball velocity and color for each ball created in area */
export default class Ball {
    constructor(startX, startY, color) {
        /**
         * Get the position object with (x,y) properties.
         * @return {iCoridnates} The position object.
         */
        this.getPosition = () => {
            return this.position;
        };
        /**
         * Get the velocity object with (x,y) properties.
         * @return {iCoridnates} The velocity object.
         */
        this.getVelocity = () => {
            return this.velocity;
        };
        /**
         * Get the color value.
         * @return {string} The color value.
         */
        this.getColor = () => {
            return this.color;
        };
        this.position = { x: startX, y: startY };
        this.velocity = { x: config.initXVelocity, y: config.initYVelocity };
        this.color = color;
    }
}
//# sourceMappingURL=Ball.js.map