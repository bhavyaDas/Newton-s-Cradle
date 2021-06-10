/////////////////////////////Code Started///////////////////////

//Created a class name: roof inside roof.js file
class roof {

	//Used a constructor to construct the object 	
	constructor(x, y, w, h) {

		//Created variable options and set some properties of object inside it		
		var options = {

			//Made the object static	
			isStatic: true

		}

		//Set this.x as x
		this.x = x;

		//Set this.y as y
		this.y = y;

		//Set this.w as w (width)
		this.w = w

		//Set this.h as h (height)
		this.h = h

		//Set this.body as the rectangular physics objects of Bodies with (x,y,width,height,additional properties)					
		this.body = Bodies.rectangle(x, y, w, h, options);

		//Added this.body to world
		World.add(world, this.body);

	}

	//Started with display function( based on the setup of displaying an object)		
	display() {

		//Created a variable groundPos where set the position of this.body : this.body.position;					
		var groundPos = this.body.position;

		//Started implementation of some properties so used : push()			
		push()

		//Translate the position X and position Y of this.body 
		translate(groundPos.x, groundPos.y);

		//Set rect mode as CENTER	
		rectMode(CENTER)

		//Fill the rect shape
		fill(128, 128, 128)

		//Created rect
		rect(0, 0, this.w, this.h);

		//Ended implementation of some properties so used : pop()	
		pop()

	}

}

/////////////////////////Code Ended//////////////////////