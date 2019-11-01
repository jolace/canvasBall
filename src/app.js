import * as config from './config.js';
import View from './view.js';
import { frameDelay } from './config.js';
/** Class App is application entry point. In this class we get HTML elements from document, add event listeners and call render function ( from View class ) on some defined period*/
class App {
    /**
     * Get HTML elements from document, add event listeners and pass to View class constructoor
     * Call render function from View class in interval ( defined in frameDelay ) so we can simulate ball moving
     */
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
    /**
     * This function get mouse event object as parametar, call getMousePosition function for mouse cordinate and add new ball in ball array.
     * @param  {document#event} e - Mouse event defined in config.addBallEventType const variable
     */
    addBall = (e) =>
    {
        this.view.addBall(this.getMousePosition(e));
    }
     /**
     * This function get mouse event object as parametar, find mouse cordinate in area and return object with (x,y) cordinates.
     * @param  {document#event} e - Mouse event defined in config.addBallEventType const variable
     * @return {object} The mouse cordinate object in area.
     */
    getMousePosition = (e) => 
    {
        return { x: e.pageX - this.elem.offsetLeft, y: e.pageY - this.elem.offsetTop };
    }
    /**
     * Change environment  where balls will start bouncing. When we change environment, balls array is set to empty 
     */
    changeEnvironment = () => 
    {
        this.appContext.environment = this.envElem.options[this.envElem.selectedIndex].value;
        this.appContext.balls = [];
    }
}

new App();