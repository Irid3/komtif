// let angle=0;


// function setup() {
//   createCanvas(400, 400);
//   angleMode(DEGREES);
//   rectMode(CENTER);
// }

// function draw() {
//   background(0);
 
//    translate(50,50);
//    rotate(angle);
  
  
//   fill(255,100,50);
//   rect(0,0,100,50);
  
//   fill(50,100,255);
//   rect(100,100,20,20);
  
//   //rectMode(CENTER);
  
//   angle=angle+1;
// }
let angle=0;


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(0);
 
   translate(50,50);
   rotate(angle);
  
  fill(255,100,50);
  rect(0,0,100,50);
  
  rotate(-angle);
  translate(-50,-50);
  fill(50,100,255);
  rect(100,100,20,20);
  
  //rectMode(CENTER);
  
  angle=angle+1;
}
