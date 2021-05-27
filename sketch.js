
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player,snake,playerImage;

function preload()
{
	playerImage=loadImage("player.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	player = new Character(400,400,40,40);
	player.addImage(playerImage);

	snake = new Character(600,400,30,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



