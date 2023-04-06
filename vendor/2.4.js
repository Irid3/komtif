let angle=0;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  
  translate(200,200);
  rotate(angle);
  stroke(255);
  // line(0,0,50,50);
  ellipse(0,0,50,50);
  fill(255);
  // rect(50,50,100,50);
  ellipse(50,50,100,50);

  angle=angle+1;
}
