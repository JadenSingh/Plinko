const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var particle
var particles= []
var divisions= []
var plinkos= []
var line
var gameState = "PLAY"

var count=0
var score=0
function preload(){

}
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1= new Ground(240,770,480,5)

  division1= new Division(0,650,5,240)
  division2= new Division(80,650,5,240)
  division3= new Division(160,650,5,240)
  division4= new Division(240,650,5,240)
  division5= new Division(320,650,5,240)
  division6= new Division(400,650,5,240)
  division7= new Division(480,650,5,240)


for(var j=40;j<= width;j=j+50){

  plinkos.push(new Plinko(j,75))
} 
for(var j=15;j<= width-10;j=j+50){

  plinkos.push(new Plinko(j,175))
} 
for(var j=40;j<= width;j=j+50){

  plinkos.push(new Plinko(j,275))
} 
for(var j=15;j<= width-10;j=j+50){

  plinkos.push(new Plinko(j,375))
} 
}

function draw() {
  background("black");
  Engine.update(engine);
  textSize(35)
  text("Score: "+score,20,40)
  fill(255)
  textSize(35)
  text("500",10,550)
  text("500",90,550)
  text("100",170,550)
  text("100",250,550)
  text("200",330,550)
  text("200",410,550)
  ground1.display()
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
  division6.display()
  division7.display()
  if(gameState == "END"){
    textSize(30)
    text("GAMEOVER",240,400)
  }
  if(particle!=null){

    particle.display()
    if(particle.body.position.y>700){

      if(particle.body.position.x<170){
        score=score++
        particle=null;
        if(count>=5){
          gameState="END"
        }
      }
      else if (particle.body.position.x<340 && particle.body.position.x>170){
       score=score+100
       particle=null
       if(count>=5){
        gameState="END"
      }
      }
      else if(particle.body.position.x<510 && particle.body.position.x>340){

        score=score+200
        particle=null
        if(count>=5){
          gameState="END"
        }
      }
    }
  }
  
  for( var i=0; i<plinkos.length;i++){

    plinkos[i].display();
  }
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  
}

  for( var j=0; j<particles.length;j++){

    particles[j].display();
  }

 
}
function mousePressed(){
if( gameState!== "END"){
  count++
  particle=new Particle(mouseX,10,10,10)
}

}