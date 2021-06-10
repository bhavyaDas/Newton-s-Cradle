/////////////////////////Code Started///////////////////////////

//Created a class name: rope inside rope.js file
class rope {

	//Used a constructor to construct the object 	
	constructor(body1, body2, offsetX, offsetY) {

		//Set this.offsetX as offsetX
		this.offsetX = offsetX

		//Set this.offsetY as offsetY
		this.offsetY = offsetY

		//Created variable options and set some properties of object inside it		
		var options = {

			//Set bodyA(movable) as body1
			bodyA: body1,

			//Set bodyB(static) as body2
			bodyB: body2,

			//Created pointB with x value as this.offsetX and y as this.offsetY
			pointB: { x: this.offsetX, y: this.offsetY }

		}

		//Created a constraint of this.rope through options
		this.rope = Constraint.create(options)

		//Added this.rope to world
		World.add(world, this.rope)

	}

	//Started with display function( based on the setup of displaying an object)			
	display() {

		//Set pointA as as rope's bodyA position
		var pointA = this.rope.bodyA.position;

		//Set pointB as as rope's bodyB position
		var pointB = this.rope.bodyB.position;

		//Set outline weight as 5 pixels
		strokeWeight(5);

		//Set Anchor1X as pointA's X position
		var Anchor1X = pointA.x

		//Set Anchor1Y as pointA's Y position
		var Anchor1Y = pointA.y

		//Set Anchor2X as pointB's X position + this.offsetX
		var Anchor2X = pointB.x + this.offsetX

		//Set Anchor2Y as pointB's Y position + this.offsetY
		var Anchor2Y = pointB.y + this.offsetY

		//Created line  as (x1,y1,x2,y2)
		line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);

	}

}

/////////////////////////////Code Ended///////////////////////////