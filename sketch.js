const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1,box2,box3


function setup(){
  var creats = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

box1=new Box(200,240)
box2=new Box(100,200)
box3=new Box(300,270)

}

function draw(){
  background(0);
    //Engine.update(engine)
box1.display()
box2.display()
box3.display()
}




