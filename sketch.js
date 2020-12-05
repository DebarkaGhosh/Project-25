
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject;
var world ,  dustbinImage;

function preload()
{
	dustbinimage = loadImage("dustbingreen.png");


}
	


function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,620,width,20);
	dustbin1=new Dustbin(1200,510,18,200);
	dustbin2=new Dustbin(1000,510,18,200);
	dustbin3=new Dustbin(1100,600,200,20);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  
  paperObject.display();
  groundObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  image(dustbinimage,982,400,253,207);
  
  
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{y:-958,x:100});
      }
}


