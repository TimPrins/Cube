'use strict'
const CubeDocumentation = require('./Cube.js');

//new Cube(size)
let Cube2 = new Cube();

//Checks if the cube is bigger than 2 if is bigger than 2 it returns true
Cube2.isAlive();

//Prints and returns the current position of the cube 
Cube2.getPosition();

//Prints and returns the current size of the cube
Cube2.getSize();

//Prints and returns the current volume of the cube
Cube2.getVolume();
	
//Cube2.setVelocity(velocityX, velocityY)
Cube2.setVelocity(8, 12);

//Sets the rate of the growth of the cube
//Cube2.setRateOfGrowth(rateOfGrowth);
Cube2.setRateOfGrowth(14);

//Prints and returns the rate of growth of the cube
Cube2.getRateOfGrowth();

//Makes the time in which the cube is go 1 tick (second) forward
Cube2.tick()
