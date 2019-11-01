import * as config from './config.js';
import View from './view.js';
import { frameDelay } from './config.js';

class App {
    constructor() {
        this.elem = document.getElementById("canvas");
        this.envElem = document.getElementById('env');
        this.elem.addEventListener(config.addBallEventType, this.addBall.bind(this));
        this.envElem.addEventListener("change", this.changeEnvironment.bind(this));
        let environment = this.envElem.options[this.envElem.selectedIndex].value;
        this.appContext = { canvasContext: this.elem.getContext("2d"), environment: environment, balls: [] };
        this.view = new View(this.appContext);
        setInterval(this.view.render.bind(this.view), frameDelay);
    }
    addBall(e) {
        this.view.addBall(this.getMousePosition(e));
    }
    getMousePosition(e) {
        return { x: e.pageX - this.elem.offsetLeft, y: e.pageY - this.elem.offsetTop };
    }
    changeEnvironment() {
        this.appContext.environment = this.envElem.options[this.envElem.selectedIndex].value;
        this.appContext.balls = [];
    }
}

new App();