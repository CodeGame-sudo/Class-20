var fixedRect, movingRect







function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(320,320,90,60)
  movingRect=createSprite(100,100, 60, 90)
}

function draw() {
  background(0);
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  console.log(movingRect.x-fixedRect.x);
  console.log(movingRect.width/2 + fixedRect.width/2);
  if (movingRect.x-fixedRect.x<movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.y-movingRect.y<fixedRect.width/2 + movingRect.width/2) {
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  else {
    movingRect.shapeColor="Red";
    fixedRect.shapeColor="Red";
  }
  drawSprites();
}

