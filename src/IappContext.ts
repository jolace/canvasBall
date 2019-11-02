import Ball from './Ball';
export default interface IappContext {
    canvasContext: CanvasRenderingContext2D;
    environment: string;
    balls : Ball[]
}