
# Bouncing balls

Bouncing balls is a simple javascirpit application where users can click on canvas area and add balls. Balls bouncing around until they stabilize. There are two enviorment - air and water.

Balls in water, because of water density can not bounce as in air enviorment. Balls in air, because of it lower density can bounce more time depend of gravity and position in canvas.

## Runing the application

### Prerequirments

- To have Node.js instaled on your machine
```
$ npm install -g npx
```
npx - execute npm package binaries. Executes <command> either from a local node_modules/.bin, or from a central cache, installing any packages needed in order for <command> to run.

### Install
```
$ npm install
```
This command will install all dependencies for our application
*  [TypeScript](https://www.typescriptlang.org/) - application is developed in TypeScript
*  [Webpack](https://webpack.js.org/) - For bundle our javascript files in one file and creating Dev server to see application
*  [jestjs](https://jestjs.io/) - jestjs is used for running test and check tests result
*  [Babel](https://babeljs.io/) - Testing TypeScript with jestjs is only possible with Babel, so we use to run successfully jestjs tests on typescript files
 
## Bulding the application
```
$ npx webpack
```
This command will build our TypeScript files in javascript files and create bundle file `ballInCanvas.js`. This bundle file will be created in `dist` folder.
In `index.html` we just use this new created script ```<script type="module" src="dist/ballInCanvas.js"></script> ```
So for deploy we need just `dist/ballInCanvas.js`

## Local development

```
$ npm run start
```
This will create development server and will run application with parametars from `webpack.config.js`. Property `contentBase` for application root folder and `port` for port in browser that application will run ( example : 8080 ). It will auto open new tab in browser with url `http://localhost:8080`

## Tests
```
$ npm test
```

This command will run tests and will report if all tests passed or will fail with error message

jestjs is used to as testing framework

There are unit tests for

- View class

  - Test render function with N added ball to array in air environment

  - Test render function with N added ball to array in water environment

  - Test simulate setInterval function - render function called N times with N added ball to array in air environment

  - Test simulate setInterval function - render function called N times with N added ball to array in water environment

- Calculation

  - calling calculatePhisc should return variable as object with position {x,y} and velocity {x,y} properties

  - calling calculatePhisc should return position and velocity cordinates ( test input/result values and test with wrong input/result values)

  - ball should bound of right wall and go left

  - ball should bound of left wall and go right

  - ball should bound of bottom wall and go top

- Ball class

  - check if object is created with right properties

## Deployment

Host `ballInCanvas.js` on your server and add in html document ```<script type="module" src="ballInCanvas.js"></script> ```

## Live Demo

Bounce ball live demo (https://jolace.github.io/canvasBall/)

## Author

Aleksandar Jolakoski (https://github.com/jolace)