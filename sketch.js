let walker1;
function setup() {
  createCanvas(450, 450);
  background(0);
  
  
  walker1= new LineWalker(random(width),random(height),10,"#3BEDB3")
}

function draw() {

  walker1.display();
  walker1.newLife();
  walker1. walkingDirection();
  walker1. keepInCanvas();
  walker1. lifeExpectancy(500);
}






