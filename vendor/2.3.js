let angle=0;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  rotate(angle);
  fill(255);
  rect(50,50,100,50);
  
  angle=angle+1;
}
