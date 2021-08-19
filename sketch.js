const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;


var particles = [];
var plinkos = [];
var divisions  = [];
var divisionHeight = 300;









function setup() {
  createCanvas(480,800);

   engine = Engine.create();
   world = engine.world;

ground = new Ground(width/2,height,width,20)

for(var k = 0; k <=width; k=k +80){
  divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
}
for(var j = 50; j<= width-10; j=j+50){
  plinkos.push(new Plinko(j,50))
}


for(var j = 75; j<= width; j=j+50){
  plinkos.push(new Plinko(j,100))
}
for(var j = 50; j<= width; j=j+50){
  plinkos.push(new Plinko(j,150))

}

for(var j = 75; j<= width; j=j+50){
  plinkos.push(new Plinko(j,200))
}
for(var j = 50; j<= width; j=j+50){
  plinkos.push(new Plinko(j,250))
}
for(var j = 75; j<= width; j=j+50){
  plinkos.push(new Plinko(j,300));

}
for(var j = 50; j<= width; j=j+50){
  plinkos.push(new Plinko(j,350))
}

for(var j = 75; j<= width; j=j+50){
  plinkos.push(new Plinko(j,400))
}
for(var j = 50; j<= width; j=j+50){
  plinkos.push(new Plinko(j,450))
}


  //createSprite(400, 200, 50, 50);
}

function draw() {

  background(0);  
  Engine.update(engine);

for(var k = 0; k<divisions.length; k++){
  divisions[k].display();
}

for(var j = 0; j<plinkos.length; j++){
  plinkos[j].display();
}

for(var i = 0; i<particles.length; i++){
  particles[i].display();
}
if(frameCount%60 == 0){
  particles.push (new Particle(random(width/2-30,width/2+30),10,10))
}

  ground.display();
}