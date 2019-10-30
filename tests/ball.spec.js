const expect = require('chai').expect;

import Ball from '../src/Ball.js';

describe('Ball class test - create object with constructor parametars and check object and object properties', () => {

    it('should return if variable is object', () => {
        let mouseCordinates = { x: 10, y: 11 };
        // Act
        const b = new Ball(mouseCordinates.x, mouseCordinates.y, 'red');
        // Assert
        expect(b).to.be.an('object');
    });

    it('should return x and y position', () => {
        let mouseCordinates = { x: 10, y: 11 };
        // Act
        const b = new Ball(mouseCordinates.x, mouseCordinates.y, 'red');
        // Assert
        expect(b.position.x).to.equals(10);
        expect(b.position.y).to.equals(11);

    });

    it('should return color', () => {
        let mouseCordinates = { x: 10, y: 11 };
        // Act
        const b = new Ball(mouseCordinates.x, mouseCordinates.y, 'red');
        // Assert
        expect(b.color).to.equals('red');

    });

    it('should false for wrong color  and  cordinates check', () => {
        let mouseCordinates = { x: 10, y: 11 };
        // Act
        const b = new Ball(mouseCordinates.x, mouseCordinates.y, 'red');
        // Assert
        expect(b.position.x).to.not.equals(50);
        expect(b.position.y).to.not.equals(60);
        expect(b.color).to.not.equals('green');
    });

});

