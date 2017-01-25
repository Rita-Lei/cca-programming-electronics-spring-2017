function setup() { 
  createCanvas(400, 400);
  colorMode(HSB);
} 

function draw() { 
  var x = random(width);
  var y = random(height);
  var d = random(20, 50);
  
  var h = random(360);
  
  noStroke();
  fill(h, 100, 100);
  ellipse(x, y, d, d);
}