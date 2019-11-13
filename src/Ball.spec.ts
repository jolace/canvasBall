import Ball from './Ball';

describe('Ball class test - create object with constructor parametars and check object and object properties', () => {

    let mouseCordinates: any;
    beforeEach(() => {
        mouseCordinates = { x: 10, y: 11 };
    });

    it('check if object is created with right properties', () => {
        const b = new Ball(mouseCordinates.x, mouseCordinates.y, 'red');
        expect(typeof b).toBe('object');
        expect(b.position.x).toEqual(10);
        expect(b.position.y).toEqual(11);
        expect(b.color).toEqual('red');
        expect(b.position.x).not.toEqual(50);
        expect(b.position.y).not.toEqual(60);
        expect(b.color).not.toEqual('green');
    });
});

