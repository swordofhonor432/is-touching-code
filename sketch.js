var fixedrect,movingrect;


function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.debug = true;
  movingrect = createSprite(600, 300, 50, 50);
  movingrect.debug = true;
}

function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  console.log(fixedrect.width/2 + movingrect.width/2);
if(isTouching(movingrect,fixedrect) ){
    
fixedrect.shapeColor = "green";
movingrect.shapeColor = "green";
  }else{

  fixedrect.shapeColor = "red";
  movingrect.shapeColor = "red";

}

  drawSprites();
}




function isTouching(object1,object2){
 if(
  object1.x  - object2.x < object2.width/2 + object1.width/2 &&
  object2.x  - object1.x < object2.width/2 + object1.width/2 &&
  object1.y  - object2.y < object2.height/2 + object1.height/2 &&
  object2.y  - object1.y < object2.height/2 + object1.height/2
 ){return true;
}else{
  return false;
}
}