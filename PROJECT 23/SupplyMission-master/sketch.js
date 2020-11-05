var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,invisibleGround,Box,Box1,Box2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
    Box=createSprite(390,650,200,20);
	Box.shapeColor="red";

	Box1=createSprite(480,610,20,100);
	Box1.shapeColor="red";
	
	Box2=createSprite(300,610,20,100);
	Box2.shapeColor="red";
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	invisibleGround=createSprite(width/2, height-35, width,10);
	invisibleGround.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0,friction:0, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
    invisibleGround = Bodies.rectangle(width/2, 630, width, 10 , {isStatic:true} );
 	World.add(world, invisibleGround);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	Matter.Body.setStatic(packageBody, isStatic=false);
    
  }
}



