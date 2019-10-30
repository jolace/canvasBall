
import * as config from './config.js';

export function calculatePhisc(position, velocity, width, height, environment) {
    let Fx;
    let Fy;
    let ax;
    let ay;
    let density = config.densityAir;
    if(environment == 'water')
        density = config.densityWater;
    // Do physics
    // Drag force: Fd = -1/2 * Cd * A * rho * v * v
    Fx = -0.5 * config.dragCoefficient * config.area * density * velocity.x * velocity.x * velocity.x / Math.abs(velocity.x);
    Fy = -0.5 * config.dragCoefficient * config.area * density * velocity.y * velocity.y * velocity.y / Math.abs(velocity.y);

    Fx = (isNaN(Fx) ? 0 : Fx);
    Fy = (isNaN(Fy) ? 0 : Fy);

    // Calculate acceleration ( F = ma )
    ax = Fx / config.mass;
    ay = config.gravity + (Fy / config.mass);
    
    // Integrate to get velocity
    velocity.x += ax * config.frameRate;
    velocity.y += ay * config.frameRate;

    // Integrate to get position
    position.x += velocity.x * config.frameRate * 100;
    position.y += velocity.y * config.frameRate * 100;

    // Handle collisions
    if (position.y > height - config.radius) {
        velocity.y *= config.restitution;
        position.y = height - config.radius;
    }
    if (position.x > width - config.radius) {
        velocity.x *= config.restitution;
        position.x = width - config.radius;
    }
    if (position.x < config.radius) {
        velocity.x *= config.restitution;
        position.x = config.radius;
    }

    return { position, velocity };
}