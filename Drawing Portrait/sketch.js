// www.lomz.net - 2019.
// https://stihilus.github.io/lomz/generated_p5js_portraits.html

// For save image: Right click > Save image as

var video;
var vScale = 8;

function setup() {
  createCanvas(640, 480);
  pixelDensity(3);
  frameRate(15);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  background(220);
  noStroke();
  fill(0);
}

function draw() {
  video.loadPixels();
  
  if (mouseIsPressed) {  
  var col = video.get(mouseX / vScale, mouseY / vScale);
  console.log(col);
  var rgb = col[0] + col[1] + col[2];
    
  //map(value, start1, stop1, start2, stop2, [withinBounds]) 
  brushSize = map(rgb, 0, 765, 20, 0);
    
  circle(mouseX, mouseY, brushSize);
  }
}