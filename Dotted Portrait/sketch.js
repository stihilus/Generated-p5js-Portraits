// www.lomz.net - 2019.
// https://stihilus.github.io/lomz/generated_p5js_portraits.html

// Press R to reload canvas
// For save image: Right click > Save image as

var subX = 0;
var subY = 0;
var dotXstart = 320; // Dot start X postion
var dotYstart = 240; // Dot start Y postion
var rndMin = -10; // random MIN
var rndMax = 10; // random MAX
var nDots = 100; // number of dots
var maxBrushSize = 3; //max brush size
var minBrushSize = 0; // min brush size

var video;
var vScale = 2;

function setup() {
  createCanvas(640, 480);
  pixelDensity(3);
  //frameRate(5);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  background(200);
  noStroke();
  fill(255, 204, 0);
}

function draw() {
  video.loadPixels();

  for (var i = 0; i < nDots; i++) {
     
    var dotXPosition = dotXstart + subX;
    var dotYPosition = dotXstart + subY;
    
    subX += random(rndMin, rndMax);
    subY += random(rndMin, rndMax);

    var col = video.get(dotXPosition / vScale, dotYPosition / vScale);
    //console.log(col);
    
    var rgb = col[0] + col[1] + col[2];
    //console.log(rgb);

    var brushSize = map(rgb, 0, 765, maxBrushSize, minBrushSize);

    // fill(col[0],col[1],col[2]);
    fill(50);
    circle(dotXPosition, dotYPosition, brushSize);
    //console.log(subX);
    
    if (subX > 320) {
      subX = 0;
      subY = 0;
    } 
    
    if (subX < -320) {
      subX = 0;
      subY = 0;
    } 
    
    if (subY > 240) {
      subX = 0;
      subY = 0;
    }
    
    if (subX < -440) {
      subX = 0;
      subY = 0;
    }
  }
}

function keyReleased() {
  if (key == 'r' || key == 'R') background(200);
}

