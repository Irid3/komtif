
var circle1 =
  {
    x:0,
    y:100,
    diameter:100
  }
let circle2 = {
    x: 0,
    y: 300,
    diameter:100
}

var r=220;
var g=0;
var b=100;

function setup()
{
  createCanvas(600,400);
}

function draw(){
  //background
  background(r,g,b);
  fill(250,200,200);
  ellipse(circle1.x,circle1.y,circle1.diameter);
  ellipse(circle2.x,circle2.y,circle2.diameter);
  circle1.x=circle1.x+1;
  circle2.x = circle2.x+1;
}
