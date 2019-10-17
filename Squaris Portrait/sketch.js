// www.lomz.net - 2019.
// https://stihilus.github.io/lomz/generated_p5js_portraits.html

// PRESS on canvas to generate image
// For save image: Right click > Save image as

var tileSize = 6; // Square size in pixels

function setup() {
  createCanvas(640, 480);
  pixelDensity(3);
  background(220);
  frameRate(1);
}

function preload() {
  myImage = loadImage("photo02.jpg");
}

function draw() {
}

function mousePressed() {
  myImage.loadPixels();
  rectMode(CENTER);
  background(220);
  fill(1);
  noStroke();

  for (var y = 0; y < height; y = y + tileSize) {
    for (var x = 0; x < width; x = x + tileSize) {  
      var col = myImage.get(x, y);
      var rgb = col[0] + col[1] + col[2];
      //map(value, start1, stop1, start2, stop2, [withinBounds]) 
      brushSize = map(rgb, 0, 765, tileSize, 0);
      rect(x, y, brushSize, brushSize);
      //circle(x, y, brushSize);
    }
  }
}