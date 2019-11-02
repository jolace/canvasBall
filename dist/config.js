// Constant for ball gravity and velocity calculation
export const frameRate = 1 / 40; // FrameRate in seconds
export const frameDelay = frameRate * 1000; // frameDelay in ms
export const radius = 15; // Radius for button in canvas  1px = 1cm
export const dragCoefficient = 0.47; // a dimensionless coefficient related to the object's geometry 
export const densityAir = 1.22; // density coefficient  (for air  1.22) 
export const densityWater = 40; // density coefficient  (for water  40)
export const area = Math.PI * radius * radius / (10000); //  Area of ball m^2 -
export const gravity = 9.81; //  Gravity constant   m / s^2 
export const mass = 0.1; //  Mass of ball in kg
export const restitution = -0.7; // The coefficient of restitution is the ratio of the final to initial relative velocity between two objects after they collide.
export const initXVelocity = 4; // init X velocity cordinate for new created ball
export const initYVelocity = 0; // init Y velocity cordinate for new created ball
// Constant for Canvas 
export const canvasWidth = 500; //  Canvas width in HTML document
export const canvasHeight = 400; //  Canvas height in HTML document
export const waterCanvasColor = "#0097be"; //  color for water
export const strokeStyle = '#000000'; //  color for canvas strokeStyle
export const addBallEventType = 'click'; //  add type of mouse event for add new ball in canvas default click - other values ( mouseover,mouseout )
//# sourceMappingURL=config.js.map