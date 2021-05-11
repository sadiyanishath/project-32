const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box11,box12,box13,box14,box15,box16,box17
var box21,box22,box23,box24,box25,box26
var box31,box32,box33,box34,box35,box36
var box41,box42,box43,box44,box45,box46
var hexa,ground,grou1,grou2
var slingshot,backgroundImg

function preload() {

  gettime();
 
 }


function setup(){
  var canvas = createCanvas(1200,500);
  engine = Engine.create();
  world = engine.world;


  hexa = new Hexa(200,250,60,50)
  grou1 = new Ground(625,390,350,15)
  grou2 = new Ground(1000,240,280,15)
  ground = new Ground(450,490,1500,30)
  
  box11 = new Box1(500,350,40,60)
  box12 = new Box1(540,350,40,60)
  box13 = new Box1(580,350,40,60)
  box14 = new Box1(620,350,40,60)
  box15 = new Box1(660,350,40,60)
  box16 = new Box1(700,350,40,60)
  box17 = new Box1(740,350,40,60)

  box21 = new Box2(540,300,40,60)
  box22 = new Box2(580,300,40,60)
  box23 = new Box2(620,300,40,60)
  box24 = new Box2(660,300,40,60)
  box25 = new Box2(700,300,40,60)

  box31 = new Box3(580,250,40,60)
  box32 = new Box3(620,250,40,60)
  box33 = new Box3(660,250,40,60)

  box41 = new Box4(620,200,40,60)

  box42 = new Box4(920,235,40,60)
  box43 = new Box4(960,230,40,60)
  box44 = new Box4(1000,230,40,60)
  box45 = new Box4(1040,230,40,60)
  box46 = new Box4(1080,230,40,60)

  box34 = new Box3(960,110,40,60)
  box35 = new Box3(1000,110,40,60)
  box36 = new Box3(1040,110,40,60)

  box26 = new Box2(1000,70,40,60)

  Slingshot= new Slingshot(hexa.body,{x:200,y:250});

}


function draw(){
  if(backgroundImg){
    background(backgroundImg);}
  Engine.update(engine);


  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  box31.display();
  box32.display();
  box33.display();

  box41.display();

  box42.display();
  box43.display();
  box44.display();
  box45.display();
  box46.display();

  box34.display();
  box35.display();
  box36.display();

  box26.display();

  hexa.display();
  grou1.display();
  grou2.display();
  ground.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(hexa.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  Slingshot.fly(hexa.body)
}

function keyPressed(){
  if(keyCode===32)
  Slingshot.attach(hexa.body);
  Matter.Body.setPosition(hexa.body,{x:200,y:250})
}

async function gettime(){

  var responce = await fetch("http://www.worldtimeapi.org/api/timezone/Asia/Kolkata")    
  
  var responcetype = await responce.json() 
  console.log(responcetype)
  
  var dt = responcetype.datetime 
  console.log(dt)
  
  var hr = dt.slice(11,13)
  console.log(hr)
  
  if(hr>=06 && hr <= 19){
    bg="bg2.jpg" 
  }
    else{
   bg="bg1.jpg"
     }
  
     backgroundImg = loadImage(bg)
  
  }