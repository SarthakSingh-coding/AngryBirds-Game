var ground;
var engine;
const B = Matter.Bodies;
const W = Matter.World;
const E = Matter.Engine;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird1;

function setup() {
  createCanvas(1200, 700);
  rectMode(CENTER);
  imageMode(CENTER);

  engine = E.create();
  world = engine.world;

  var groundHolder = { isStatic: true};
  
  ground = B.rectangle(600, height-35, 1200, 20, groundHolder);
  box1 = new Box(900, 610, 70, 70);
  
  box2 = new Box(700, 610, 70, 70);

  box3 = new Box(700, 570, 70, 70);

  box4 = new Box(900, 570, 70, 70);

  box5 = new Box(800, 530, 70, 70);

  pig1 = new Pig(800, 610, 50, 50);

  pig2 = new Pig(800, 570, 50, 50);

  log1 = new Log(800, 570, 270, 20, PI);

  log2 = new Log(800, 530, 270, 20, PI);

  log3 = new Log(800, 500, 150, 20, PI/5);

  log4 = new Log(800, 500, 150, 20, -PI/5);

  bird1 = new Bird(50, 100, 50, 50);
 
  W.add(world, ground);
  console.log(box1, ground);

}

function draw() {
  background("lightBlue");
  Matter.Engine.update(engine);

  // rect(400, 100, 50, 50);
  rect(ground.position.x, ground.position.y, 1200, 20);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  bird1.displayBird();
  

 //drawSprites();
}