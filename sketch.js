
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter = 80


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(200,500,40);
	bobObject2 = new Bob(279,500,40);
	bobObject3 = new Bob(359,500,40);
	bobObject4 = new Bob(439,500,40);
	bobObject5 = new Bob(519,500,40);

	roofObject = new Roof(350,100,600,50);

	rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	console.log(rope1);
	rope2 = new Rope(bobObject2.body,roofObject.body,-bobDiameter,0);
	rope3 = new Rope(bobObject3.body,roofObject.body,0,0);
	rope4 = new Rope(bobObject4.body,roofObject.body,bobDiameter,0);
	rope5 = new Rope(bobObject5.body,roofObject.body,bobDiameter*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:100});
	}
}



