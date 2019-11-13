
# Bouncing balls

Bouncing balls is a simple javascirpit application where users can click on canvas area and add balls. Balls are bouncing around until they stabilize. There are two enviorments - air and water.

Balls in water, because of water density, can not bounce as in air enviorment. Balls in air, because of its lower density, can bounce more time depending of gravity and position in canvas.

## Runing the application

### Prerequirments

- To have Node.js installed on your machine
```
$ npm install -g npx
```
The npx command executes npm package binaries. Executes <command> either from a local node_modules/.bin or from a central cache, installing any packages needed in order for <command> to run.

### Install
```
$ npm install
```
This command will install all dependencies for our application
*  [TypeScript](https://www.typescriptlang.org/) - application is developed in TypeScript
*  [Webpack](https://webpack.js.org/) - To bundle our javascript files in one file and to create Dev server to see the application
*  [jestjs](https://jestjs.io/) - jestjs is used for running tests and check tests result
*  [Babel](https://babeljs.io/) - Testing TypeScript with jestjs is only possible with Babel, so we use it to successfully run jestjs tests on typescript files
 
## Bulding the application
```
$ npx webpack
```
This command will build our TypeScript files in javascript files and create bundle file `ballInCanvas.js`. This bundle file will be created in `dist` folder.
In `index.html` we just use this newly created script ```<script type="module" src="dist/ballInCanvas.js"></script> ```.
So for deploy we just need the script `dist/ballInCanvas.js`.

## Local development

```
$ npm run start
```
This will create development server and will run the application with parametars from `webpack.config.js`. The property `contentBase` is used to set the application root path and the property `port` is used to specify the port in the browser the application will run on ( example : 8080 ). Then, a new tab in browser will be opened automatically with the url `http://localhost:8080`.

## Tests
```
$ npm test
```

This command will run tests and will report if all tests passed or someone will fail with error message.

jestjs is used as testing framework

There are unit tests for:

- View class

  - Test the render function with N added balls for air environment

  - Test the render function with N added balls for water environment

  - Test simulate setInterval function - render function called N times with N added balls for air environment

  - Test simulate setInterval function - render function called N times with N added balls for water environment

- Calculation

  - calling calculatePhisc should return variable as object with position {x,y} and velocity {x,y} as properties

  - calling calculatePhisc should return position and velocity cordinates (test input/result values and test with wrong input/result values)

  - ball should bound of right wall and go left

  - ball should bound of left wall and go right

  - ball should bound of bottom wall and go up

- Ball class

  - check if object is created with right properties

## Deployment

Host `ballInCanvas.js` on your server and add this in your html document ```<script type="module" src="ballInCanvas.js"></script> ```.

## Live Demo

Bounce ball live demo (https://bounceballs.000webhostapp.com/)

## Author

Aleksandar Jolakoski (https://github.com/jolace)