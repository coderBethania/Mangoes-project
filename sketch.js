
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var tree,mango;
var boy,stone;
function preload()
{
	boy = loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(1050,310,450,600)
	ground = new Ground(750,600,1300,20)
	stone = new Stone(125,420,25)
	mango1 = new Mango(700, 400, 50, 70);
	mango2 = new Mango(650, 250, 50, 70);
	mango3 = new Mango(650, 350, 50, 70);
	mango4 = new Mango(550, 300, 50, 70);
	mango5 = new Mango(500, 350, 50, 70);
	
  
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  detectCollision(stoneObj,mango1)
  detectCollision(stoneObj,mango2)
  detectCollision(stoneObj,mango3)
  detectCollision(stoneObj,mango4)
  detectCollision(stoneObj,mango5)
  image(boy,200,510,200,300)
  drawSprites();
 
 
}

function  detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.ex,mangoBodyPosition.y)
		if(distance<-lmango.r+lstone.r)
		{
			Matter.Body.setStatic(lmango.body,false);
		}
}



		



function keyPressed(){
	if (keyCode===0){
		matterBody.setPosition(stoneObj.body,{x:235,y:420})
		launcherObject.attch(stoneObj.body);
		
	
}

}

