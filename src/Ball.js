export default class Ball {
    constructor(startX, startY, color) {
        this.position = { x: startX, y: startY };
        this.velocity = { x: 4, y: 0 };
        this.color = color;
    }
}