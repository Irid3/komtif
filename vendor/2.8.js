let angle=0;
let anglerev = 0;
function setup() {
  createCanvas(1500, 720);
  angleMode(DEGREES);
}

function draw() {
    angle++;
    background(0);
    translate(750,360);
    push();
    fill("yellow")
    ellipse(0,0,150,150)
    pop();
    push();
    planetRev(80,80,28,30,5.5,"red")
    pop();
    push();
    planet(110,110,48,50,4,"brown")
    pop();
    push();
    planetRev(130,130,28,30,1.9,"purple")
    pop();
    push();
    planet(160,160,48,50,3.6,"orange")
    pop();
    push();
    planetRev(190,190,28,30,1.6,"blue")
    pop();
    push();
    planet(220,220,48,50,3.4,"pink")
    pop();
    push();
    planetRev(240,240,28,30,1.4,"green")
    pop();
    push();
    planet(260,260,48,50,1.4,"brown")
    pop();
}
function planetRev(x,y,w,h,s,color){
    rotate(--anglerev*s);
    fill(color);
    ellipse(x,y,w,h);
}
function planet(x,y,w,h,s,color){
    rotate(angle*s);
    fill(color);
    ellipse(x,y,w,h);
}