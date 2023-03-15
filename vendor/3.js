function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    strokeWeight(5);
  }
  
  function draw() {
    background("black");
    
    stroke("white");
    fill("steelblue");
    rect(width * 0.25, height * 0.25, 80, 80);
    
    stroke("white");
    fill("steelblue");
    rect(width * 0.75, height * 0.25, 80, 80);
    
    stroke("yellow");
    fill("tomato");
    ellipse(width / 2, height / 2, 100, 100);
    
    stroke("gold");
    point(width * 0.75, height * 0.75);

    stroke("gold");
    point(width * 0.50, height * 0.75);
    
    stroke("gold");
    point(width * 0.25, height * 0.75);
  }
  