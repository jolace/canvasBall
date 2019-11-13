
import * as config from './config';
import iCoridnates from './Icoridnates';
/**
 * Get the position object with (x,y) properties.
 * @return {object} The position {iCoridnates} and velocity {iCoridnates}  object with current (x,y) cordinates.
 * @param {number} width - Width of area.
 * @param {number} height - Height of area.
 * @param {string} environment  - Environment variable help us to calculate the density parametar  ( denisty for air / denisty for water )
 */
export const calculatePhisc = (position: iCoridnates, velocity: iCoridnates, width: number, height: number, environment: string) => {

    let density = environment == 'water' ? config.densityWater : config.densityAir;

    // Do physics
    // Drag force: Fd = -1/2 * Cd * A * rho * v * v
    let Fx = -0.5 * config.dragCoefficient * config.area * density * velocity.x * velocity.x * velocity.x / Math.abs(velocity.x);
    let Fy = -0.5 * config.dragCoefficient * config.area * density * velocity.y * velocity.y * velocity.y / Math.abs(velocity.y);

    Fx = (isNaN(Fx) ? 0 : Fx);
    Fy = (isNaN(Fy) ? 0 : Fy);

    // Calculate acceleration ( F = ma )
    let ax = Fx / config.mass;
    let ay = config.gravity + (Fy / config.mass);

    // Integrate to get velocity
    velocity.x += ax * config.frameRate;
    velocity.y += ay * config.frameRate;

    // Integrate to get position
    position.x += velocity.x * config.frameRate * 100;
    position.y += velocity.y * config.frameRate * 100;

    // Handle collisions
    // bottom
    if (position.y > height - config.radius) {
        velocity.y *= config.restitution;
        velocity.x *= Math.abs(config.restitution);
        position.y = height - config.radius;
    }
    // right wall
    if (position.x > width - config.radius) {
        velocity.x *= config.restitution;
        position.x = width - config.radius;
    }
    // left wall
    if (position.x < config.radius) {
        velocity.x *= config.restitution;
        position.x = config.radius;
    }

    return { position, velocity };
}