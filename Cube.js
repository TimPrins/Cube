'use strict'
class Cube {
	constructor(size) {
		this.position = {x:0, y:0};
		this.size = size;
		this.originalSize = size;
		this.velocity = {x:0, y:0}
		this.rateOfGrowth = 1
	}

	isAlive() {
		if(this.size > 2){
			//console.log('The cube is still alive');
			return true;
		}else{
			//console.log('The cube died');
			return false;
		}
	}

	getPosition() {
		//console.log('The position of the cube is', this.position);
		return this.position; 
	}
	
	getSize() {
		console.log('The size of the cube is', this.size);
		return this.size;
	}

	getVolume() {
		let volume =  this.size * this.size * this.size;
		//console.log('The volume of the cube is', volume);
		return volume;
	}

	setPosition(setPositionX, setPositionY) {
		this.position.x = setPositionX
		this.position.y = setPositionY
	}

	setVelocity(velocityX1, velocityY1) {
		this.velocity.x = velocityX1
		this.velocity.y = velocityY1
		//console.log('The new velocity of the cube will be', ' x=', this.velocity.x, 'y=', this.velocity.y);
	}

	setRateOfGrowth(rateOfGrowth) {
		this.rateOfGrowth = rateOfGrowth;
		//console.log('You have set the rate of growth of the cube to', rateOfGrowth)
	}

	getRateOfGrowth() {
		//console.log('The rate of growth of the cube is', this.rateOfGrowth);
		return this.rateOfGrowth;
	}

	tick() {
		//Variables needed to calculate where the cube is now
		this.position.x = this.velocity.x + this.position.x
		this.position.y  = this.velocity.y + this.position.y 
		//Calulates the new size of the cube
		let rateOfGrowthCalculation = this.size * this.rateOfGrowth;
		this.size = rateOfGrowthCalculation;
		if (this.size > this.originalSize * 3)	
			this.size = 3 * this.originalSize
	}
}


//new Cube(size)
let Cube2 = new Cube(23);

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

//Sets the new position of the cube
Cube2.setPosition();

//Sets the rate of the growth of the cube
//Cube2.setRateOfGrowth(rateOfGrowth);
Cube2.setRateOfGrowth(2);

//Prints and returns the rate of growth of the cube
Cube2.getRateOfGrowth();

//Makes the time in which the cube is go 1 tick (second) forward
Cube2.tick()
Cube2.getSize()
Cube2.tick()
Cube2.getSize()
Cube2.tick()
Cube2.getSize()
Cube2.tick()
Cube2.getSize()
Cube2.tick()
Cube2.getSize()
Cube2.setRateOfGrowth(0,5);
Cube2.tick()
Cube2.getSize()
Cube2.tick()
Cube2.getSize()
Cube2.tick()
Cube2.getSize()
Cube2.setRateOfGrowth(2);
Cube2.tick()
Cube2.getSize()
Cube2.tick()
Cube2.getSize()