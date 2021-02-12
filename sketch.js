
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, mango, stone, tree
var boyImage// mangoImage, stoneImage, treeImage

function preload()
{
	boyImage = loadImage("boy.png");
	boyImage = scaleImage(0.25);
	//mangoImage = loadImage("images/mango.png");
	//stoneImage = loadImage("images/stone.png");
	//treeImage = loadImage("images/tree.png");
}

function setup() {
	createCanvas(800, 700);
	boy = createSprite(100,200);
    boy.addImage("boy", boyImage);
    //mango = createSprite(300,200);
    //mango.addImage("mango", mangoImage);
    //stone = createSprite(500,200);
    //stone.addImage("stone", stoneImage);
    //tree = createSprite(700,200);
    //tree.addImage("tree", carImage);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  loadImage
  drawSprites();
 loadImage(boy);
}

//function detectCollision() {

//}


