/////////////////////////////Code Started///////////////////////////////

//Created a class name: bob inside bob.js file
class bob {

	//Used a constructor to construct the object 
	constructor(x, y, r, image) {

		//Created variable options and set some properties of object inside it   
		var options = {

			//Made the object  not static
			isStatic: false,

			//Set restitution(bounciness) of object as 1
			restitution: 1,

			//Set friction(slippriness) of object as 0
			friction: 0,

			//Set density(heaviness) of object as 0.8
			density: 0.8

		}

		//Set this.x as x
		this.x = x;

		//Set this.y as y
		this.y = y;

		//Set this.r as r
		this.r = r

		//Set this.body as the circular physics objects of Bodies with (x,y,radius,additional properties)			
		this.body = Bodies.circle(this.x, this.y, (this.r) / 2, options)

		//Loaded an image inside this.image
		this.image = loadImage(image)

		//Added this.body to world
		World.add(world, this.body);

	}

	//Started with display function( based on the setup of displaying an object)	
	display() {

		//Created a variable paperpos where set the position of this.body : this.body.position;			
		var paperpos = this.body.position;

		//Started implementation of some properties so used : push()	
		push()

		//Translate the position X and position Y of this.body 	
		translate(paperpos.x, paperpos.y);

		//Set outline weight of text as 4 pixels
		strokeWeight(4);

		//Set the filling of the text color through rgb
		fill(255, 0, 255)

		//Set image mode as CENTER
		imageMode(CENTER);

		//Created the image 
		image(this.image, 0, 0, this.r, this.r)

		//Ended implementation of some properties so used : pop()
		pop()

	}

}

/////////////////////////////Code Ended/////////////////////////////

