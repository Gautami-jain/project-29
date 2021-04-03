const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var platform;
var box1; 
var box2; 
var box3; 
var box4; 
var box5; 
var box6; 
var box7; 
var box8; 
var box9; 
var box10; 
var box11; 
var box12; 
var box13; 
var box14; 
var box15; 
var box16; 
  


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(150, 305, 300, 170);

    //level one
    box1 = new Box(120, 275, 30, 40);
    box2 = new Box(150, 275, 30, 40);
    box3 = new Box(180, 275, 30, 40);
    box4 = new Box(210, 275, 30, 40);
    box5 = new Box(240, 275, 30, 40);
    box6 = new Box(270, 275, 30, 40);
    box7 = new Box(300, 275, 30, 40);

    //level two
    box8 = new Box(330, 235, 30, 40);
    box9 = new Box(360, 235, 30, 40);
    box10 = new Box(390, 235, 30, 40);
    box11 = new Box(420, 235, 30, 40);
    box12 = new Box(450, 235, 30, 40);

    //level three
    box13 = new Box(360, 195, 30, 40);
    box14 = new Box(360, 195, 30, 40);
    box15 = new Box(420, 195, 30, 40);

    //top
    box16 = new Box(390, 155, 30, 40);
}



function draw(){
    background("lightBlue");
    Engine.update(engine);

    platform.display();
}