
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane=new Plane(100,600,1000,30);
	stone=new Stone(300,500,100,50,PI/7);
	rubber=new Rubber(500,100);
	hammer=new Hammer(500,300,20,20);
	sand1=new Sand(200,500);
	sand2=new Sand(200,550);
	sand3=new Sand(200,540);
	sand4=new Sand(200,500);
	sand5=new Sand(200,550);
	sand6=new Sand(200,500);
	dummy=new Dummy(200,200,40,40);
	Engine.run(engine);
  
}


function draw() {
	background("lavender");
	Engine.update(engine);
	dummy.display();
  plane.display();
  hammer.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  
  
 
}



