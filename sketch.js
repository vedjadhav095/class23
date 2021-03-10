const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var boll;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

   ground= Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

  
    var ground_options ={
        restitution:1
    }  
boll=Bodies.circle(200,20,50,ground_options)
World.add(world,boll);

 box1=new Box(40,40,50,40)

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(boll.position.x,boll.position.y,50,50)
    box1.display();
}
