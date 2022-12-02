var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg,bombImg,coinImg,energyDrinkImg,powerImg;
var i;
var bomb,coin,energyDrink,power;
var bombG,coinG,energyDrinkG,powerG;
function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bombImg =  loadImage("bomb.png");
  energyDrinkImg =  loadImage("energyDrink.png");
  powerImg =  loadImage("power.png");
  coinImg =  loadImage("coin.png");


}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);


 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;


bombG=new Group();
coinG=new Group();
energyDrinkG=new Group();
 powerG=new Group();






}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  createBomb(); 
  createCoin();
  createEnergyDrink();
  createPower();



 



 
 
if(path.y > 600 ){path.y = height/2;}
  
  drawSprites();
}

function createBomb() {
  if (World.frameCount % 200 == 0) {
    
    var bomb  = createSprite(Math.round(random(50, 350),40, 10, 10));
   bomb.addImage(bombImg);
  bomb.scale=0.12;
  bomb.velocityY = 5;
  bomb.lifetime = 200;
  bombG.add(bomb);
  }
}

function createCoin() {
  if (World.frameCount % 320 == 0) {
       

    var coin= createSprite(Math.round(random(50, 350),40, 10, 10));
    coin.addImage(coinImg);
    coin.scale=0.03;
    coin.velocityY = 5;
    coin.lifetime = 200;
    coinG.add(coin);
}
}

function createEnergyDrink() {
  if (World.frameCount % 410 == 0) {
   

    var energyDrink = createSprite(Math.round(random(50, 350),40, 10, 10));
    energyDrink.addImage(energyDrinkImg);
    energyDrink.scale=0.13;
    energyDrink .velocityY = 5;
    energyDrink.lifetime = 200;
    energyDrinkG.add(energyDrink);
  }
}

function createPower(){
  if (World.frameCount % 530 == 0) {
 
    var power = createSprite(Math.round(random(50, 350),40, 10, 10));
    power .addImage(powerImg);
    power .scale=0.1;
    power .velocityY = 4;
    power .lifetime = 200;
    powerG .add(power);
   
  }
}



if (coin.isTouching(boy)) {
  coinG.destroyEach();
}
else if (energyDrink.isTouching(boy)) {
   energyDrinkG.destroyEach();
}
else if(power.isTouching(boy)) {
powerG.destroyEach();
}

else if (bomb.isTouching(boy)) {
  gameState=END;
  
  boy.addAnimation("SahilRunning",);
  boy.x=width/2;
  boy.y=height/2;
  boy.scale=0.6;
 
 
 
  



}
