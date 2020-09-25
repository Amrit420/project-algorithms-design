var fixedRect,movingRect

function setup() {

  createCanvas(1200,800);
  fixedRect=createSprite(600,400,50,80);
  fixedRect.shapeColor='green';
  fixedRect.debug=true;
  fixedRect.velocityX=-5
  movingRect=createSprite(400,400,80,30);
  movingRect.shapeColor='green';
  movingRect.debug=true;
  movingRect.velocityX=5
 // console.log(movingRect.x-fixedRect.x);
  }

function draw() {
  background(255,255,255);  
 // console.log(movingRect.x-fixedRect.x);
//movingRect.x=mouseX
//movingRect.y=mouseY
/*
if(movingRect.x-fixedRect.x<movingRect.width/2 +fixedRect.width/2
   && fixedRect.x-movingRect.x<movingRect.width/2 +fixedRect.width/2
   && movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2
   && fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red"
}
else
{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green"
}
*/
if(movingRect.x-fixedRect.x<movingRect.width/2 +fixedRect.width/2
  && fixedRect.x-movingRect.x<movingRect.width/2 +fixedRect.width/2)
  {
    movingRect.velocityX= movingRect.velocityX* (-1);
    fixedRect.velocityX= fixedRect.velocityX* (-1);
    }

if( movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2
  && fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2)
  {
movingRect.velocityY=movingRect.velocityY*(-1);
fixedRect.velocityY=fixedRect.velocityY*(-1);
  }
  drawSprites();
}