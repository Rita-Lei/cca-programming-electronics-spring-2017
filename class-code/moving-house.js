function setup() { 
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  var houseX = mouseX,
      houseY = mouseY,
      houseWidth = 100,
      houseHeight = 100;
  rect(houseX, houseY, houseWidth, houseHeight);
  
  var roofHeight = 35; // or houseHeight/3?
  line(houseX, houseY,
       houseX+houseWidth/2, houseY-roofHeight);
  line(houseX+houseWidth/2, houseY-roofHeight,
       houseX+houseWidth, houseY);
  
  var doorX = houseX + houseWidth*0.65,
      doorY = houseY+houseHeight,
      doorHeight = houseHeight/3,
      doorWidth = houseWidth/8;
  rect(doorX, doorY, doorWidth, -doorHeight);
} 
