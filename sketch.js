////////////////////////////Code Started/////////////////////////////

//Created variable and set the value
const Engine = Matter.Engine;

//Created variable and set the value
const World = Matter.World;

//Created variable and set the value
const Bodies = Matter.Bodies;

//Created variable and set the value
const Body = Matter.Body;

//Created variable and set the value
const Render = Matter.Render;

//Created variable and set the value
const Constraint = Matter.Constraint;

//Created variables
var bob1, bob2, bob3, bob4, bob5, roofObject

//Created variables
var rope1, rope2, rope3, rope4, rope5;

//Created variables
var world;

//Created variables
var newton, newton1

//Image storage function (pre-defined)
function preload() {

	//Loaded an image under variable
	newton = loadImage("newton.jpg")

}

//Pre-defined function - setup function
function setup() {

	//Created canvas
	createCanvas(windowWidth, windowHeight);

	//Set rect mode as CENTER
	rectMode(CENTER);

	//Created Engine inside engine
	engine = Engine.create();

	//Added world to engine
	world = engine.world;

	//Made an object using the  class inside of js file
	roofObject = new roof(200, 250, 800, 20);

	//Made an object using the  class inside of js file
	bob1 = new bob(320, 575, 40, "mercury.png")

	//Made an object using the  class inside of js file
	bob2 = new bob(360, 575, 40, "venus.png")

	//Made an object using the  class inside of js file
	bob3 = new bob(400, 575, 40, "earth.png")

	//Made an object using the  class inside of js file
	bob4 = new bob(440, 575, 40, "mars.png")

	//Made an object using the  class inside of js file
	bob5 = new bob(480, 575, 40, "jupiter.png")

	//Made an object using the  class inside of js file
	bob6 = new bob(520, 575, 45, "saturn.png")

	//Made an object using the  class inside of js file
	bob7 = new bob(560, 575, 40, "uranus.png")

	//Made an object using the  class inside of js file
	bob8 = new bob(600, 575, 40, "neptune.png")

	//Made an object using the  class inside of js file
	rope1 = new rope(bob1.body, roofObject.body, -5, 0)

	//Made an object using the  class inside of js file
	rope2 = new rope(bob2.body, roofObject.body, 35, 0)

	//Made an object using the  class inside of js file
	rope3 = new rope(bob3.body, roofObject.body, 75, 0)

	//Made an object using the  class inside of js file
	rope4 = new rope(bob4.body, roofObject.body, 115, 0)

	//Made an object using the  class inside of js file
	rope5 = new rope(bob5.body, roofObject.body, 155, 0)

	//Made an object using the  class inside of js file
	rope6 = new rope(bob6.body, roofObject.body, 195, 0)

	//Made an object using the  class inside of js file
	rope7 = new rope(bob7.body, roofObject.body, 235, 0)

	//Made an object using the  class inside of js file
	rope8 = new rope(bob8.body, roofObject.body, 275, 0)

	//Running the Engine(engine)
	Engine.run(engine);

	//Created a sprite with  some coordinates (X-position,Y-position,width,height)
	newton1 = createSprite(width / 2 + 500, height / 2)

	//Added the image to newton1
	newton1.addImage("newtonImage", newton)

}

//Pre-defined function:draw function (repeatation)
function draw() {

	//Set rect mode as CENTER
	rectMode(CENTER);

	//Set background color of canvas as "pink"
	background("pink");

	//Set text size as 100 pixels
	textSize(100)

	//Set the filling of text color as "purple"
	fill("purple")

	//Set outline of text as "black"
	stroke("black")

	//Set outline weight of text as 4 pixels
	strokeWeight(4)

	//Set the text with (`text`,X-position,Y-position) coordinates
	text(`Newton's Cradle`, width / 2 - 500, height / 2 - 200)

	//Drawn the sprites (repeatedly)
	drawSprites()

	//Displayed the object in canvas
	rope1.display();

	//Displayed the object in canvas
	rope2.display();

	//Displayed the object in canvas
	rope3.display()

	//Displayed the object in canvas
	rope4.display()

	//Displayed the object in canvas
	rope5.display()

	//Displayed the object in canvas
	rope6.display()

	//Displayed the object in canvas
	rope7.display()

	//Displayed the object in canvas
	rope8.display()

	//Displayed the object in canvas
	bob1.display();

	//Displayed the object in canvas
	bob2.display();

	//Displayed the object in canvas
	bob3.display()

	//Displayed the object in canvas
	bob4.display()

	//Displayed the object in canvas
	bob5.display()

	//Displayed the object in canvas
	bob6.display()

	//Displayed the object in canvas
	bob7.display()

	//Displayed the object in canvas
	bob8.display()

	//Displayed the object in canvas
	roofObject.display();

}

//Pre-defined function:keyPressed function 
function keyPressed() {

	//Condition set as if keyCode is equal to  LEFT_ARROW
	if (keyCode == LEFT_ARROW) {

		//Applied the force to bob1 in top-left direction
		Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -50, y: -45 })

	}

	//Condition set as if keyCode is equal to  RIGHT_ARROW
	if (keyCode == RIGHT_ARROW) {

		//Applied the force to bob1 in top-right direction
		Matter.Body.applyForce(bob2.body, bob2.body.position, { x: 50, y: -45 })

	}

}

/////////////////////////////Code Ended//////////////////////////

