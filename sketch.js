
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var ground;
var divisonHeight = 300;
var particles = [];
var plinkos = [];
var divisons = [];

function preload(){
	
}

function setup() {
	createCanvas(480, 800);

	engine = Engine.create();
	world = engine.world;

  for(var k = 0; k <= width; k += 80){
    divisons.push(new Division(k, height-divisonHeight/2, 10, divisonHeight));
  }

  for(var j = 40;j <= width;j+=50){
    plinkos.push(new Plinko(j, 75))
  }
  for(var j = 15;j <= width-10;j+=50){
    plinkos.push(new Plinko(j, 175))
  }
  for(var j = 40;j <= width;j+=50){
    plinkos.push(new Plinko(j, 275))
  }
  for(var j = 15;j <= width-10;j+=50){
    plinkos.push(new Plinko(j, 375))
  }

  ground = new Ground(240,780,480,20);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  for(var d = 0;d < divisons.length;d++){
    divisons[d].display();
  }
  for(var p = 0;p < plinkos.length;p++){
    plinkos[p].display();
  }
  for(var i = 0;i < particles.length;i++){
    particles[i].display();
  }

  drawSprites();
}

