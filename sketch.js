const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,roof,rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(800,100,400,20);
	bob1 = new Bob(720,700,40);
	bob2 = new Bob(760,700,40);
	bob3 = new Bob(800,700,40);
	bob4 = new Bob(840,700,40);
	bob5 = new Bob(880,700,40);
	rope1 = new Rope(bob1.body,roof.body,{x: -160, y: 0});
	rope2 = new Rope(bob2.body,roof.body,{x: -80, y: 0});
	rope3 = new Rope(bob3.body,roof.body,{x: 0, y: 0});
	rope4 = new Rope(bob4.body,roof.body,{x: 80, y: 0});
	rope5 = new Rope(bob5.body,roof.body,{x: 160, y: 0});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}
function keyPressed(){
if(keyCode === UP_ARROW) {
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-45})
}
}



