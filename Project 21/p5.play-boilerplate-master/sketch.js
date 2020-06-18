var bullet,wall;
var speed,weight;
var deformation,thickness;
var bulletRightEdge ;
function setup() {
  createCanvas(1600,400);
 bullet= createSprite(50, 200, 50, 25);
 speed = random(223,321) ;
 thickness = random(22,83);
 weight = random(30,52);
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color(80,80,80);
 bullet.velocityX = speed; 
 deformation = ( 0.5*weight*speed*speed)/(thickness*thickness*thickness );
 bullet.shapeColor = color(255);
 
 
}
function draw() {
  background(0); 
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    if(deformation>10){
      wall.shapeColor = "red";}
    if(deformation<= 10){
      wall.shapeColor = "green";
    }
    
  }
  
  drawSprites();
}
function hasCollided(bullet, wall){
   bulletRightEdge=bullet.x +bullet.width; 
   wallLeftEdge=wall.x;
    if (bulletRightEdge>=wallLeftEdge)
    { return true 
     }

     return false; 
    }
 