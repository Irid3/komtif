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

		for(i = this.tail.length - 1; i > 0; i--){
			circle(this.tail[i].x, this.tail[i].y, this.tail[i].r);
			fill(colorScale[i]);
			noStroke();
			
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