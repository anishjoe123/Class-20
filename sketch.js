var a,b;
function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  a.shapeColor="red";
  b = createSprite(455,200,50,50);
  b.shapeColor="blue";
  a.debug=true;
  b.debug=true;
}

function draw() {
  background(0);  
  a.y=mouseY;
  a.x=mouseX;
  if((a.x-b.x<a.width/2+b.width/2) && (a.y-b.y<a.height/2+b.height/2) && (b.x-a.x<a.width/2+b.width/2) && (b.y-a.y<a.height/2+b.height/2))
  {
    a.shapeColor="white";
    b.shapeColor="yellow";
  }
  else
  {
    a.shapeColor="red";
    b.shapeColor="blue";
  }
  drawSprites();
}