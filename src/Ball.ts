import * as config from './config.js';
import iCoridnates from './Icoridnates.js';
/** Class Ball keep data for ball position, ball velocity and color for each ball created in area */
export default class Ball {
    /**
     * Create a ball instance and initializing position, velocity and color variables.
     * @param {number} startX - The x cordinate in area for this ball.
     * @param {number} startY - The y cordinate in area for this ball.
     * @param {string} color  - Color for this ball.
     */
    position : iCoridnates;
    velocity : iCoridnates;
    color    : string;

    constructor(startX : number, startY: number, color: string) {
        this.position = { x: startX, y: startY };
        this.velocity = { x: config.initXVelocity, y: config.initYVelocity };
        this.color = color;
    }
    /**
     * Get the position object with (x,y) properties.
     * @return {iCoridnates} The position object.
     */
    getPosition = () => {
        return this.position;
    }
    /**
     * Get the velocity object with (x,y) properties.
     * @return {iCoridnates} The velocity object.
     */
    getVelocity = () => {
        return this.velocity;
    }
    /**
     * Get the color value.
     * @return {string} The color value.
     */
    getColor = () => {
        return this.color;
    }
}