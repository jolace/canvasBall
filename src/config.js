// Constant for ball gravity and velocity calculation

export const frameRate = 1 / 40; // FrameRate in seconds
export const frameDelay = frameRate * 1000; // frameDelay in ms
export const radius = 15; // Radius for button in canvas  1px = 1cm
export const dragCoefficient  = 0.47;  // a dimensionless coefficient related to the object's geometry 
export const densityAir = 1.22; // density coefficient  (for air  1.22) 
export const densityWater = 40; // density coefficient  (for water  40)
export const area = Math.PI * radius * radius / (10000); //  Area of ball m^2 -
export const gravity = 9.81;  //  Gravity constant   m / s^2 
export const mass = 0.1; //  Mass of ball in kg
export const restitution = -0.7; // The coefficient of restitution is the ratio of the final to initial relative velocity between two objects after they collide.