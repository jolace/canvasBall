import { calculatePhisc } from './calculation';

describe('Phisc calculation function', () => {

    let position: any;
    let velocity: any;
    let width: any;
    let height: any;

    beforeEach(() => {
        position = { x: 10, y: 10 };
        velocity = { x: 5, y: 0 };
        width = 400;
        height = 500;
    });

    it('calling calculatePhisc should return variable as object with position {x,y} and velocity {x,y} properties', () => {

        let res = calculatePhisc(position, velocity, width, height, 'air');
        expect(typeof res).toBe('object');
        expect(res).toHaveProperty('position');
        expect(res).toHaveProperty('velocity');
        expect(res.position).toHaveProperty('x');
        expect(res.position).toHaveProperty('y');
        expect(res.velocity).toHaveProperty('x');
        expect(res.velocity).toHaveProperty('y');

    });

    it('calling calculatePhisc should return position and velocity cordinates ( test input/result values and test with wrong input/result values)', () => {

        let res = calculatePhisc(position, velocity, width, height, 'air');
        expect(typeof res.position).toBe('object');
        expect(res.position.x).toBeCloseTo(22.183349549841495);
        expect(res.position.y).toBeCloseTo(10.613125);
        expect(res.position.x).not.toBeCloseTo(23.183349549841495);
        expect(res.position.y).not.toBeCloseTo(20.613125176543344);

    });

    it('ball should bound of right wall and go left', () => {

        position = { x: 485, y: 108.613125 };
        let res = calculatePhisc(position, velocity, width, height, 'air');
        expect(typeof res.position).toBe('object');
        expect(res.position.x).toBeCloseTo(385);
        expect(res.position.y).toBeCloseTo(109.22625);
    });

    it('ball should bound of left wall and go right', () => {

        position = { x: 17.648198676065054, y: 385 };
        velocity = { x: -1.0503617607378606, y: -0.10100657837788327 };
        let res = calculatePhisc(position, velocity, width, height, 'air');
        expect(typeof res.position).toBe('object');
        expect(res.position.x).toBeCloseTo(15.036268183072846);
        expect(res.position.y).toBeCloseTo(385.36073777693656);
    });

    it('ball should bound of bottom wall and go top', () => {

        position = { x: 353.2401448334029, y: 385 };
        velocity = { x: -1.934130932460338, y: -3.785670218682879 };
        let res = calculatePhisc(position, velocity, width, height, 'air');
        expect(typeof res.position).toBe('object');
        expect(res.position.x).toBeCloseTo(348.4521993335791);
        expect(res.position.y).toBeCloseTo(376.3304699445396);
    });
});