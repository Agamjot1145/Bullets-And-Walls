var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(400,200,40,30);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "#505050";
}

function draw() {
  background(0,0,0);  
  drawSprites();
  bullet.velocityX = speed;
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  }
  if(damage > 10){
    wall.shapeColor = color(255,0,0);
  }
  if(damage < 10){
    wall.shapeColor = color(0,255,0);
  }
}

function hasCollided(lbullet,lwall) {
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if(bulletRightEdge>=wallLeftEdge){
return true;
}
return false;
}