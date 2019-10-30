const expect = require('chai').expect;

import {calculatePhisc} from '../src/calculation';

describe('Phisc calculation function', () => {

    it('should return if variable is object', () => {
        let position = { x: 10, y:10 };
        let velocity = { x: 5,  y:0 };
        let width = 400;
        let height = 500;
        let res = calculatePhisc(position, velocity, width, height);
        // Assert
        expect(res).to.be.an('object');
    });

    it('should return variable as object with position {x,y} and velocity {x,y} properties', () => {
        let position = { x: 10, y:10 };
        let velocity = { x: 5,  y:0 };
        let width = 400;
        let height = 500;
        let res = calculatePhisc(position, velocity, width, height);
        // Assert
        expect(res).to.be.an('object');
        expect(res).to.have.property('position');
        expect(res).to.have.property('velocity');
        expect(res.position).to.have.property('x');
        expect(res.position).to.have.property('y');
        expect(res.velocity).to.have.property('x');
        expect(res.velocity).to.have.property('y');

    });

    it('should return position and velocity cordinates ( test input/result values )', () => {
       
        let position = { x: 10, y:10 };
        let velocity = { x: 5,  y:0 };
        let width = 400;
        let height = 500;
        let res = calculatePhisc(position, velocity, width, height);
        
        expect(res.position).to.be.an.instanceof(Object);
        expect(res.position.x).to.equals(22.183349549841495);
        expect(res.position.y).to.equals(10.613125);
        
    });

    it('should return position and velocity cordinates ( test with wrong input/result values )', () => {
       
        let position = { x: 10, y:10 };
        let velocity = { x: 5,  y:0 };
        let width = 400;
        let height = 500;
        let res = calculatePhisc(position, velocity, width, height);
        
        expect(res.position.x).not.to.equals(23.183349549841495);
        expect(res.position.y).not.to.equals(20.613125176543344);
        
    });

    it('ball should bound of right wall and go left', () => {
       
        let position = { x: 485, y:108.613125 };
        let velocity = { x: 5,  y:0 };
        let width = 400;
        let height = 500;
        let res = calculatePhisc(position, velocity, width, height);
        
        expect(res.position).to.be.an.instanceof(Object);
        expect(res.position.x).to.equals(385);
        expect(res.position.y).to.equals(109.22625);
    });

    it('ball should bound of left wall and go right', () => {
       
        let position = { x: 17.648198676065054, y:385 };
        let velocity = { x: -1.0503617607378606,  y:-0.10100657837788327 };
        let width = 400;
        let height = 500;
        let res = calculatePhisc(position, velocity, width, height);
        
        expect(res.position).to.be.an.instanceof(Object);
        expect(res.position.x).to.equals(15.036268183072846);
        expect(res.position.y).to.equals(385.36073777693656);
    });



    it('ball should bound of bottom wall and go top', () => {
       
        let position = { x: 353.2401448334029, y:385 };
        let velocity = { x: -1.934130932460338,  y:-3.785670218682879 };
        let width = 400;
        let height = 500;
        let res = calculatePhisc(position, velocity, width, height);
        
        expect(res.position).to.be.an.instanceof(Object);
        expect(res.position.x).to.equals(348.4521993335791);
        expect(res.position.y).to.equals(376.3304699445396);
    });


});
 