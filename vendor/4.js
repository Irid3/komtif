var r=0;
var b=225;
let g =0;
function setup()
{
  createCanvas(600,400);
}

function draw()
{
  //background
  r=map(mouseX,0,600,0,196);
  b=map(mouseX,0,600,196,0);
  g= map(mouseY,0,400,196,0);
  
  background(r,g,b);
      }
