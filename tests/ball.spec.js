

import Ball from '../src/Ball.js';

describe('Ball class test - create object with constructor parametars and check object and object properties', () => {

    it('should return if variable is object', () => {
        let mouseCordinates = { x: 10, y: 11 };
        // Act
        const b = new Ball(mouseCordinates.x, mouseCordinates.y, 'red');
        // Assert
        expect(typeof b).toBe('object');
    });

    it('should return x and y position', () => {
        let mouseCordinates = { x: 10, y: 11 };
        // Act
        const b = new Ball(mouseCordinates.x, mouseCordinates.y, 'red');
        // Assert
        expect(b.position.x).toEqual(10);
        expect(b.position.y).toEqual(11);

    });

    it('should return color', () => {
        let mouseCordinates = { x: 10, y: 11 };
        // Act
        const b = new Ball(mouseCordinates.x, mouseCordinates.y, 'red');
        // Assert
        expect(b.color).toEqual('red');

    });

    it('should not be equal for wrong color  and  cordinates check', () => {
        let mouseCordinates = { x: 10, y: 11 };
        // Act
        const b = new Ball(mouseCordinates.x, mouseCordinates.y, 'red');
        // Assert
        expect(b.position.x).not.toEqual(50);
        expect(b.position.y).not.toEqual(60);
        expect(b.color).not.toEqual('green');
    });

});

