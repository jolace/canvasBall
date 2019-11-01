

import {calculatePhisc} from '../src/calculation';

describe('Phisc calculation function', () => {

    it('should return if variable is object', () => {
        let position = { x: 10, y:10 };
        let velocity = { x: 5,  y:0 };
        let width = 400;
        let height = 500;
        let res = calculatePhisc(position, velocity, width, height);
        // Assert
        expect(typeof res).toBe('object');
    });

    it('should return variable as object with position {x,y} and velocity {x,y} properties', () => {
        let position = { x: 10, y:10 };
        let velocity = { x: 5,  y:0 };
        let width = 400;
        let height = 500;
        let res = calculatePhisc(position, velocity, width, height);
        // Assert
        expect(typeof res).toBe('object');
        expect(res).toHaveProperty('position');
        expect(res).toHaveProperty('velocity');
        expect(res.position).toHaveProperty('x');
        expect(res.position).toHaveProperty('y');
        expect(res.velocity).toHaveProperty('x');
        expect(res.velocity).toHaveProperty('y');

    });

    it('should return position and velocity cordinates ( test input/result values )', () => {
       
        let position = { x: 10, y:10 };
        let velocity = { x: 5,  y:0 };
        let width = 400;
        let height = 500;
        let res = calculatePhisc(position, velocity, width, height);
        
        expect(typeof res.position).toBe('object');
        expect(res.position.x).toBeCloseTo(22.183349549841495);
        expect(res.position.y).toBeCloseTo(10.613125);
        
    });

    it('should return position and velocity cordinates ( test with wrong input/result values )', () => {
       
        let position = { x: 10, y:10 };
        let velocity = { x: 5,  y:0 };
        let width = 400;
        let height = 500;
        let res = calculatePhisc(position, velocity, width, height);
        
        expect(res.position.x).not.toBeCloseTo(23.183349549841495);
        expect(res.position.y).not.toBeCloseTo(20.613125176543344);
        
    });

    it('ball should bound of right wall and go left', () => {
       
        let position = { x: 485, y:108.613125 };
        let velocity = { x: 5,  y:0 };
        let width = 400;
        let height = 500;
        let res = calculatePhisc(position, velocity, width, height);
        
        expect(typeof res.position).toBe('object');
        expect(res.position.x).toBeCloseTo(385);
        expect(res.position.y).toBeCloseTo(109.22625);
    });

    it('ball should bound of left wall and go right', () => {
       
        let position = { x: 17.648198676065054, y:385 };
        let velocity = { x: -1.0503617607378606,  y:-0.10100657837788327 };
        let width = 400;
        let height = 500;
        let res = calculatePhisc(position, velocity, width, height);
        
        expect(typeof  res.position).toBe('object');
        expect(res.position.x).toBeCloseTo(15.036268183072846);
        expect(res.position.y).toBeCloseTo(385.36073777693656);
    });



    it('ball should bound of bottom wall and go top', () => {
       
        let position = { x: 353.2401448334029, y:385 };
        let velocity = { x: -1.934130932460338,  y:-3.785670218682879 };
        let width = 400;
        let height = 500;
        let res = calculatePhisc(position, velocity, width, height);
        
        expect(typeof  res.position).toBe('object');
        expect(res.position.x).toBeCloseTo(348.4521993335791);
        expect(res.position.y).toBeCloseTo(376.3304699445396);
    });


});
 