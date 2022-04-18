var bloco
function setup() {
  createCanvas(400,400);
  bloco=createSprite(200,200,25,25)
}

function draw() 
{
  background(200);
  background("yellow")
  if(keyDown("right_arrow")){
    background("red")
    }
    
drawSprites()
}




