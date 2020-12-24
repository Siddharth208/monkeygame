
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survialTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  FoodGroup=createGroup(); 
  obstacleGroup=createGroup();

}



function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  invisibleground=createSprite(400,350,900,10);
  invisibleground.visible=false;

}


function draw() {
  
  background(255);
  
  ground.x = ground.width /2;
  
  if(keyDown("space")&&monkey.y>100){
  monkey.velocityY=-12;
  } 
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(invisibleground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50)
  
  food();
  obstacle();
  
  drawSprites();
}

function food(){
  if(frameCount%80===0){
    banana=createSprite(300,300,20,20);
    banana.y=Math.round(random(120,320));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-3;
    FoodGroup.add(banana);
    banana.lifeTime=160;
  }
}

function obstacle(){
  if(frameCount%300===0){
    ob=createSprite(400,300,20,20);
    ob.addImage(obstaceImage);
    ob.velocityX=-4;
    ob.scale=0.2;
    ob.lifeTime=15;
    obstacleGroup.add(ob);
  }
}



