const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1, block2, block3;
var ground, crumpledpaper,paperobject;


function setup() {
	createCanvas(1200, 500);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	block1 = new Block(890,420,20,100);
	block2 = new Block(1000,460,200,20);
	block3 = new Block(1110,420,20,100);
	ground = new Ground(width/2,480,width,20);

	paperobject = new Paper(200,450,20);
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  keyPressed();
  //console.log(paperobject.position.x);
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  paperobject.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(paperobject.body,paperobject.body.position,{x:500,y:-500});
	}
}