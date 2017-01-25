function setup() {
  createCanvas(400, 400);
}

var h = 0;

function draw() {
  colorMode(HSB);
  // print(h);
  noStroke();
  fill(h, 100, 100);
  ellipse(200, 200, 200, 200);
  h = h + 1;

  if (h > 360) {
    h = 0;
  }
}