import * as config from './config';
import iCoridnates from './Icoridnates';

/** Class Ball keep data for ball position, ball velocity and color for each ball created in area */
export default class Ball {

    position: iCoridnates;
    velocity: iCoridnates = { x: this.getRandom(), y: this.getRandom() };

    /**
     * Create a ball instance and initializing position, velocity and color variables.
     * @param {number} startX - The x cordinate in area for this ball.
     * @param {number} startY - The y cordinate in area for this ball.
     * @param {string} color  - Color for this ball.
     */
    constructor(startX: number, startY: number, public color: string) {
        this.position = { x: startX, y: startY };
    }

    // Gets a random number given on configuration values for initial velocity.
    getRandom() {
        return Math.random() * (config.maxInitVelocity - config.minInitVelocity) + config.minInitVelocity;
    }
}