// let angle=0;

//   function setup() {
//   createCanvas(400, 400);
//   angleMode(DEGREES);
// }

// function draw() {
//   background(0);
//   translate(50,50);
//   rotate(angle);
//   //stroke(255);
//   //line(0,0,50,50);
  
//   fill(255);
//   rectMode(CENTER);
//   rect(0,0,100,50);
  
  
//   angle=angle+1;
// }

let angle=0;
let x=50;
let y=50;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(x,y);
  rotate(angle);
  //stroke(255);
  //line(0,0,50,50);
  
  fill(255,100,50);
  rectMode(CENTER);
  rect(0,0,100,50);
  
  x=x+2;
  angle=angle+1;
}
