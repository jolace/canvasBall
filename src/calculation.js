
import {Cd,A,rho,radius,mass,frameRate,restitution,ag} from './config.js';

export function calculatePhisc(position,velocity,width,height)
{   
    let Fx ;
    let Fy ;
    let ax ;
    let ay ;

    // Do physics
    // Drag force: Fd = -1/2 * Cd * A * rho * v * v
    Fx = -0.5 * Cd * A * rho * velocity.x * velocity.x * velocity.x / Math.abs(velocity.x);
    Fy = -0.5 * Cd * A * rho * velocity.y * velocity.y * velocity.y / Math.abs(velocity.y);

    Fx = (isNaN(Fx) ? 0 : Fx);
    Fy = (isNaN(Fy) ? 0 : Fy);

    // Calculate acceleration ( F = ma )
    ax = Fx / mass;
    ay = ag + (Fy / mass);

    // Integrate to get velocity
    velocity.x += ax*frameRate;
    velocity.y += ay*frameRate;

    // Integrate to get position
    position.x += velocity.x*frameRate*100;
    position.y += velocity.y*frameRate*100;

    // Handle collisions
    if (position.y > height - radius) {
        velocity.y *= restitution;
        position.y = height - radius;
    }
    if (position.x > width - radius) {
        velocity.x *= restitution;
        position.x = width - radius;
    }
    if (position.x < radius) {
        velocity.x *= restitution;
        position.x = radius;
    } 
    return {position,velocity};
}