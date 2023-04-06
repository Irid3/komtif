function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(0);
    fill(255);
    // rect(50,50,100,50);
    
    // translate(50,50);
    translate(mouseX,mouseY);
    rect(0,0,100,50);
    rect(100,100,50,10);
  }
  