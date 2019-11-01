import View from '../src/view.js';
describe('View class test  ', () => {

    it('check if variable is object', () => {

        const mockContext = {
            beginPath: jest.fn(() => { }),
            arc: jest.fn(() => { }),
            fill: jest.fn(() => { }),
            clearRect: jest.fn(() => { }),
            fillRect: jest.fn(() => { }),
            save: jest.fn(() => { }),
            translate: jest.fn(() => { }),
            arc: jest.fn(() => { }),
            closePath: jest.fn(() => { }),
            fill: jest.fn(() => { }),
            restore: jest.fn(() => { }),
            fillStyle: ""
        };
        const appContext = { canvasContext: mockContext, environment: 'air', balls: [] };
        let v = new View(appContext);
        expect(typeof v.appContext).toBe('object');
    });

    it('check if constructor set all variables', () => {

        const mockContext = {
            beginPath: jest.fn(() => { }),
            arc: jest.fn(() => { }),
            fill: jest.fn(() => { }),
            clearRect: jest.fn(() => { }),
            fillRect: jest.fn(() => { }),
            save: jest.fn(() => { }),
            translate: jest.fn(() => { }),
            arc: jest.fn(() => { }),
            closePath: jest.fn(() => { }),
            fill: jest.fn(() => { }),
            restore: jest.fn(() => { }),
            fillStyle: ""
        };
        const appContext = { canvasContext: mockContext, environment: 'air', balls: [] };
        let v = new View(appContext);
        expect(typeof v.appContext).toBe('object');
        expect(v.appContext).toHaveProperty('environment');
        expect(v.appContext).toHaveProperty('balls');
        expect(v.appContext).toHaveProperty('canvasContext');

    });

    it('addBall function should add ball in array', () => {

        const mockContext = {
            beginPath: jest.fn(() => { }),
            arc: jest.fn(() => { }),
            fill: jest.fn(() => { }),
            clearRect: jest.fn(() => { }),
            fillRect: jest.fn(() => { }),
            save: jest.fn(() => { }),
            translate: jest.fn(() => { }),
            arc: jest.fn(() => { }),
            closePath: jest.fn(() => { }),
            fill: jest.fn(() => { }),
            restore: jest.fn(() => { }),
            fillStyle: ""
        };
        const appContext = { canvasContext: mockContext, environment: 'air', balls: [] };
        const mouse = { x: 10.55, y: 12.99 };
        let v = new View(appContext);
        v.addBall(mouse);
        expect(typeof v.appContext).toBe('object');
        expect(v.appContext.balls.length).toBe(1);

    });

    it('addBall function should add N ball in array', () => {

        const numberAddedBalls = Math.floor((Math.random() * 10) + 1);
        const mockContext = {
            beginPath: jest.fn(() => { }),
            arc: jest.fn(() => { }),
            fill: jest.fn(() => { }),
            clearRect: jest.fn(() => { }),
            fillRect: jest.fn(() => { }),
            save: jest.fn(() => { }),
            translate: jest.fn(() => { }),
            arc: jest.fn(() => { }),
            closePath: jest.fn(() => { }),
            fill: jest.fn(() => { }),
            restore: jest.fn(() => { }),
            fillStyle: ""
        };
        const appContext = { canvasContext: mockContext, environment: 'air', balls: [] };
        const mouse = { x: 10.55, y: 12.99 };
        let v = new View(appContext);
        for(let i =0; i< numberAddedBalls; i++)
        {
            v.addBall(mouse);
        }
        expect(typeof v.appContext).toBe('object');
        expect(v.appContext.balls.length).toBe(numberAddedBalls);
    });

    it('Test render function with N added ball to array in air environment', () => {

        const numberAddedBalls = Math.floor((Math.random() * 10) + 1);
        const mockContext = {
            beginPath: jest.fn(() => { }),
            arc: jest.fn(() => { }),
            fill: jest.fn(() => { }),
            clearRect: jest.fn(() => { }),
            fillRect: jest.fn(() => { }),
            save: jest.fn(() => { }),
            translate: jest.fn(() => { }),
            closePath: jest.fn(() => { }),
            restore: jest.fn(() => { }),
            fillStyle: ""
        };
        const appContext = { canvasContext: mockContext, environment: 'air', balls: [] };
        const mouse = { x: 10.55, y: 12.99 };
        let v = new View(appContext);
        for(let i =0; i< numberAddedBalls; i++)
        {
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
        const mockContext = {
            beginPath: jest.fn(() => { }),
            arc: jest.fn(() => { }),
            fill: jest.fn(() => { }),
            clearRect: jest.fn(() => { }),
            fillRect: jest.fn(() => { }),
            save: jest.fn(() => { }),
            translate: jest.fn(() => { }),
            closePath: jest.fn(() => { }),
            restore: jest.fn(() => { }),
            fillStyle: ""
        };
        const appContext = { canvasContext: mockContext, environment: 'water', balls: [] };
        const mouse = { x: 10.55, y: 12.99 };
        let v = new View(appContext);
        for(let i =0; i< numberAddedBalls; i++)
        {
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

    it('Test render function called N times ( simulate setInterval function ) with N added ball to array in air environment', () => {

        const numberAddedBalls = Math.floor((Math.random() * 10) + 1);
        const numberCalledRender = Math.floor((Math.random() * 100) + 1);
        const mockContext = {
            beginPath: jest.fn(() => { }),
            arc: jest.fn(() => { }),
            fill: jest.fn(() => { }),
            clearRect: jest.fn(() => { }),
            fillRect: jest.fn(() => { }),
            save: jest.fn(() => { }),
            translate: jest.fn(() => { }),
            closePath: jest.fn(() => { }),
            restore: jest.fn(() => { }),
            fillStyle: ""
        };
        const appContext = { canvasContext: mockContext, environment: 'air', balls: [] };
        const mouse = { x: 10.55, y: 12.99 };
        let v = new View(appContext);
        for(let i =0; i< numberAddedBalls; i++)
        {
            v.addBall(mouse);
        }
        for(let i =0; i< numberCalledRender; i++)
        {
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

    it('Test render function called N times ( simulate setInterval function ) with N added ball to array in water environment', () => {

        const numberAddedBalls = Math.floor((Math.random() * 10) + 1);
        const numberCalledRender = Math.floor((Math.random() * 100) + 1);
        const mockContext = {
            beginPath: jest.fn(() => { }),
            arc: jest.fn(() => { }),
            fill: jest.fn(() => { }),
            clearRect: jest.fn(() => { }),
            fillRect: jest.fn(() => { }),
            save: jest.fn(() => { }),
            translate: jest.fn(() => { }),
            closePath: jest.fn(() => { }),
            restore: jest.fn(() => { }),
            fillStyle: ""
        };
        const appContext = { canvasContext: mockContext, environment: 'water', balls: [] };
        const mouse = { x: 10.55, y: 12.99 };
        let v = new View(appContext);
        for(let i =0; i< numberAddedBalls; i++)
        {
            v.addBall(mouse);
        }
        for(let i =0; i< numberCalledRender; i++)
        {
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


