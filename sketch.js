var fixedRect,movingRect;

function setup(){
  createCanvas(1200,800);
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";

}

function draw(){

  background("black");
  movingRect.x = mouseX;
movingRect.y = mouseY;

if(movingRect.x - fixedRect.x < movingRect.width/2+ fixedRect.width/2 
  && fixedRect.x - movingRect.x < movingRect.width/2+ fixedRect.width/2 
  &&  movingRect.y - fixedRect.y< movingRect.width/2 + fixedRect.width/2
  && fixedRect.y - movingRect.y< movingRect.width/2 + fixedRect.width/2)
{
  fixedRect.shapeColor = "orange";
  movingRect.shapeColor = "yellow";
}
else{
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "blue";
}
drawSprites();
}
