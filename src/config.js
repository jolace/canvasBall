// Constant for ball gravity and velocity calculation

export const frameRate = 1/40; // Seconds
export const frameDelay = frameRate * 1000; // ms
export const radius= 15; // 1px = 1cm
export const Cd = 0.47;  // Dimensionless
export const rho = 1.22; // kg / m^3
export const A = Math.PI * radius * radius / (10000); // m^2
export const ag = 9.81;  // m / s^2
export const mass= 0.1; //kg        
export const restitution= -0.7;