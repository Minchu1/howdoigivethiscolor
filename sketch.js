const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint

var engine, world;
var car, wall;
var speed, weight;
var deformation;
function preload() {


}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  speed = random(55,90);
  weight = random(400,1500);
  car= createSprite(50,200,50,50);
  push();
  fill(80,80,80)
  wall=createSprite(700,200,60,displayHeight/2);
  pop();
  car.velocityX = speed;
  deformation= 0.5*weight*speed*speed/22500;
}

function draw() {
  background(255,255,255); 
  if(car.isTouching(wall)){
    car.velocityX=0;
    console.log(deformation)
  }
  if(deformation<150){
    fill("orange")
  }
   
  
  drawSprites();
}