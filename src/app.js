import Ball from './Ball.js';
export default class App
{
    constructor(elem)
    {
        this.elem = elem;
        this.balls = [];        
        this.elem.addEventListener("click",this.addBall.bind(this));
    }
    addBall (e) {
        let mouse = this.getMousePosition(e);
        let color = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        this.balls.push(new Ball(mouse.x, mouse.y, color));
        console.log(this.balls);
    }
    getMousePosition(e) {
        return { x: e.pageX - this.elem.offsetLeft, y: e.pageY - this.elem.offsetTop };
    }
    
}