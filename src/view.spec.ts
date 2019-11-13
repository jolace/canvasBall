import View from './view';
import IappContext from './IappContext';

describe('View class test  ', () => {

    let mockContext: any;
    let mouse: any;
    let appContextAir: IappContext;
    let appContextWater: IappContext;
    beforeEach(() => {
        mouse = { x: 10.55, y: 12.99 };
        mockContext = {
            beginPath: jest.fn(() => { }),
            arc: jest.fn(() => { }),
            fill: jest.fn(() => { }),
            clearRect: jest.fn(() => { }),
            fillRect: jest.fn(() => { }),
            save: jest.fn(() => { }),
            translate: jest.fn(() => { }),
            closePath: jest.fn(() => { }),
            restore: jest.fn(() => { }),
            getTransform: jest.fn(() => { return <DOMMatrix>{} }),
            resetTransform: jest.fn(() => { }),
            setTransform: jest.fn(() => { }),
            fillStyle: "",
            canvas: <HTMLCanvasElement>null,
            rotate: jest.fn(() => { }),
            scale: jest.fn(() => { }),
            transform: jest.fn(() => { }),
            globalAlpha: 0.0,
            globalCompositeOperation: "",
            imageSmoothingEnabled: false,
            imageSmoothingQuality: <ImageSmoothingQuality>"high",
            strokeStyle: "",
            createLinearGradient: jest.fn(() => { return <CanvasGradient>{} }),
            createPattern: jest.fn(() => { return <CanvasPattern>{} }),
            createRadialGradient: jest.fn(() => { return <CanvasGradient>{} }),
            shadowBlur: 1,
            shadowColor: "",
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            filter: "",
            strokeRect: jest.fn(() => { }),
            clip: jest.fn(() => { }),
            isPointInPath: jest.fn(() => { return true }),
            isPointInStroke: jest.fn(() => { return true }),
            stroke: jest.fn(() => { }),
            drawFocusIfNeeded: jest.fn(() => { }),
            scrollPathIntoView: jest.fn(() => { }),
            fillText: jest.fn(() => { }),
            measureText: jest.fn(() => { return <TextMetrics>{} }),
            strokeText: jest.fn(() => { }),
            drawImage: jest.fn(() => { }),
            createImageData: jest.fn(() => { return <ImageData>{} }),
            getImageData: jest.fn(() => { return <ImageData>{} }),
            putImageData: jest.fn(() => { }),
            lineCap: <CanvasLineCap>"butt",
            lineDashOffset: 0,
            lineJoin: <CanvasLineJoin>"round",
            lineWidth: 1,
            miterLimit: 1,
            getLineDash: jest.fn(() => { return [] }),
            setLineDash: jest.fn(() => { return [] }),
            direction: <CanvasDirection>"inherit",
            font: "",
            textAlign: <CanvasTextAlign>"start",
            textBaseline: <CanvasTextBaseline>"alphabetic",
            arcTo: jest.fn(() => { }),
            bezierCurveTo: jest.fn(() => { }),
            ellipse: jest.fn(() => { }),
            lineTo: jest.fn(() => { }),
            moveTo: jest.fn(() => { }),
            quadraticCurveTo: jest.fn(() => { }),
            rect: jest.fn(() => { }),

        };
        appContextAir = { canvasContext: mockContext, environment: 'air', balls: [] };
        appContextWater = { canvasContext: mockContext, environment: 'water', balls: [] };
    });

    it('Test render function with N added ball to array in air environment', () => {

        const numberAddedBalls = Math.floor((Math.random() * 10) + 1);
        let v = new View(appContextAir);
        for (let i = 0; i < numberAddedBalls; i++) {
            v.addBall(mouse);
        }
        v.render();
        expect(mockContext.clearRect).toHaveBeenCalledTimes(1);
        expect(mockContext.arc).toHaveBeenCalledTimes(numberAddedBalls);
        expect(mockContext.fill).toHaveBeenCalledTimes(numberAddedBalls);
        expect(mockContext.beginPath).toHaveBeenCalledTimes(numberAddedBalls);
        expect(mockContext.save).toHaveBeenCalledTimes(numberAddedBalls);
        expect(mockContext.translate).toHaveBeenCalledTimes(numberAddedBalls);
        expect(mockContext.closePath).toHaveBeenCalledTimes(numberAddedBalls);
        expect(mockContext.restore).toHaveBeenCalledTimes(numberAddedBalls);

    });

    it('Test render function with N added ball to array in water environment', () => {

        const numberAddedBalls = Math.floor((Math.random() * 10) + 1);
        let v = new View(appContextWater);
        for (let i = 0; i < numberAddedBalls; i++) {
            v.addBall(mouse);
        }
        v.render();
        expect(mockContext.clearRect).toHaveBeenCalledTimes(1);
        expect(mockContext.fillRect).toHaveBeenCalledTimes(1);
        expect(mockContext.arc).toHaveBeenCalledTimes(numberAddedBalls);
        expect(mockContext.fill).toHaveBeenCalledTimes(numberAddedBalls);
        expect(mockContext.beginPath).toHaveBeenCalledTimes(numberAddedBalls);
        expect(mockContext.save).toHaveBeenCalledTimes(numberAddedBalls);
        expect(mockContext.translate).toHaveBeenCalledTimes(numberAddedBalls);
        expect(mockContext.closePath).toHaveBeenCalledTimes(numberAddedBalls);
        expect(mockContext.restore).toHaveBeenCalledTimes(numberAddedBalls);

    });

    it('Test  simulate setInterval function - render function called N times  with N added ball to array in air environment', () => {

        const numberAddedBalls = Math.floor((Math.random() * 10) + 1);
        const numberCalledRender = Math.floor((Math.random() * 100) + 1);
        let v = new View(appContextAir);
        for (let i = 0; i < numberAddedBalls; i++) {
            v.addBall(mouse);
        }
        for (let i = 0; i < numberCalledRender; i++) {
            v.render();
        }
        expect(mockContext.clearRect).toHaveBeenCalledTimes(numberCalledRender);
        expect(mockContext.arc).toHaveBeenCalledTimes(numberAddedBalls * numberCalledRender);
        expect(mockContext.fill).toHaveBeenCalledTimes(numberAddedBalls * numberCalledRender);
        expect(mockContext.beginPath).toHaveBeenCalledTimes(numberAddedBalls * numberCalledRender);
        expect(mockContext.save).toHaveBeenCalledTimes(numberAddedBalls * numberCalledRender);
        expect(mockContext.translate).toHaveBeenCalledTimes(numberAddedBalls * numberCalledRender);
        expect(mockContext.closePath).toHaveBeenCalledTimes(numberAddedBalls * numberCalledRender);
        expect(mockContext.restore).toHaveBeenCalledTimes(numberAddedBalls * numberCalledRender);

    });

    it('Test   simulate setInterval function -  render function called N times with N added ball to array in water environment', () => {

        const numberAddedBalls = Math.floor((Math.random() * 10) + 1);
        const numberCalledRender = Math.floor((Math.random() * 100) + 1);
        let v = new View(appContextWater);
        for (let i = 0; i < numberAddedBalls; i++) {
            v.addBall(mouse);
        }
        for (let i = 0; i < numberCalledRender; i++) {
            v.render();
        }
        expect(mockContext.clearRect).toHaveBeenCalledTimes(numberCalledRender);
        expect(mockContext.fillRect).toHaveBeenCalledTimes(numberCalledRender);
        expect(mockContext.arc).toHaveBeenCalledTimes(numberAddedBalls * numberCalledRender);
        expect(mockContext.fill).toHaveBeenCalledTimes(numberAddedBalls * numberCalledRender);
        expect(mockContext.beginPath).toHaveBeenCalledTimes(numberAddedBalls * numberCalledRender);
        expect(mockContext.save).toHaveBeenCalledTimes(numberAddedBalls * numberCalledRender);
        expect(mockContext.translate).toHaveBeenCalledTimes(numberAddedBalls * numberCalledRender);
        expect(mockContext.closePath).toHaveBeenCalledTimes(numberAddedBalls * numberCalledRender);
        expect(mockContext.restore).toHaveBeenCalledTimes(numberAddedBalls * numberCalledRender);
    });
});