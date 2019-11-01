import View from '../src/view.js';
describe('View class test  ', () => {

    it('should return if variable is object', () => {



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




});


