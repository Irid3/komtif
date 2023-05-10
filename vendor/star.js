let star = [];
let starField = [];

function setup() {
	createCanvas(
		window.innerWidth, 
		window.innerHeight
	);
	for(i = 0 ;i < 6;i++){
		star.push(new Star(100,100));
	}
	for(i = 0; i < 80; i++){
		const randX = round(random(0, window.innerWidth));
		const randY = round(random(0, window.innerHeight));
		const randR = random(0.2, 2);
		starField.push(new StarField(randX, randY, randR));
	}
}

function draw() {
	background(15, 3, 75);
	starField.map((starPoint) => starPoint.draw());
	star.map((bintang,index)=>{
		if(bintang.x > window.innerWidth + 100 ||
			bintang.x < -100 || 
			bintang.y > window.innerHeight + 100
		   ){
			star[index] = new Star(100,100);
	   } else {
			bintang.draw();
	   }
	})
}
function mountains(oy, epsilon, startColor, endColor, reductionScaler) {
	for (let y = oy; y < height; y += 1) {
	  const row = [];
	  row.push(createVector(0, y));
	  for (let x = 0; x < width; x += 1) {
		const n = noise(x * epsilon, y * epsilon);
		const reduction = map(y, 0, height, 1, 0) * reductionScaler;
		const off = y + map(n, 0, 1, -reduction, reduction);
		row.push(createVector(x, off));
	  }
	  row.push(createVector(width, height));
	  row.push(createVector(0, height));
	  const ammount = map(y, oy, height, 0, 1);
	  const c = lerpColor(color(startColor), color(endColor), ammount);
	  fill(c);
  
	  beginShape();
	  for (let v of row) {
		vertex(v.x, v.y);
	  }
	  endShape(CLOSE);
	}
  }
function Star(x, y) {
	this.x = round(random(0, window.innerWidth));
	this.y = -10;
	this.xv = round(random([-3,-2,2,3]));
	this.yv = random(0.5, 1.5);
	this.r = round(random(1, 3));
	this.tail = [];
	this.tailLength = 60;
	this.startColor = "#fce1b4";
  this.endColor = [255, 255, 255, 0];
	
	this.draw = function(){
		circle(this.x, this.y, this.r);
		fill(this.startColor);
		noStroke();
		this.move();
		this.history();
		this.drawTail();
	}
	
	//record history of star to use for tail
	this.history = function() {
		if(this.tail.length > this.tailLength) {
			this.tail.shift();
		}
		this.tail.push({x: this.x, y: this.y, r: this.r});
	}
	
	this.drawTail = function(){
		const colorScale = chroma
            .scale([this.endColor, this.startColor])
						.mode("lch")
            .colors(this.tail.length);

		//draw each circle for the tail
		for(i = this.tail.length - 1; i > 0; i--){
			circle(this.tail[i].x, this.tail[i].y, this.tail[i].r);
			fill(colorScale[i]);
			noStroke();
			
			//calculate the proper numer to reduce radius to 0
			const radiusReducer = this.tail[i].r / this.tailLength;
			this.tail[i].r -= radiusReducer;
		}
	}
	
	this.move = function(){
		this.x += this.xv;
		this.y += this.yv;
	}
}

function StarField(x, y, r) {
	this.x = x;
	this.y = y;
	this.r = r;
	
	this.draw = function(){
		circle(this.x, this.y, this.r)
		fill(255);	
	}
}