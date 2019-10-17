// www.lomz.net - 2019.
// https://stihilus.github.io/lomz/generated_p5js_portraits.html

// For save image: Right click > Save image as

var video;
var vScale = 2;
var particle;

function setup() {
  frameRate(3);
  createCanvas(640, 480);
  noStroke();
  pixelDensity(3);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  image(video, 0, 0);
  video.hide();
  background(220);
}

function draw() {

  clear();
  background(220);
  var angle = 6.0;
  var offsetX = 320;
  var offsetY = 240;
  var scalar = 3;
  var speed = .01;
  var dotcol = 255;
  let brushSize = 1;
  video.loadPixels();

  for (var i = 0; i < 20000; i++) {
    //koordinate tacke u spirali
    var x = offsetX + cos(angle) * scalar;
    var y = offsetY + sin(angle) * scalar;

    //uzimanje vrednosti sa videa
    var px = floor(x / vScale);
    var py = floor(y / vScale);
    var col = video.get(px, py);

    //sabiranje rgb
    var rgb = col[0] + col[1] + col[2];
    //print(col[0],col[1],col[2]);
    //print(rgb);

    //map(value, start1, stop1, start2, stop2, [withinBounds]) 
    brushSize = map(rgb, 0, 765, 7, 0);
    //print("Size: " + brushSize);

    // crtanje spirale 
    fill(0);
    ellipse(x, y, brushSize, brushSize);

    angle += speed;
    scalar += speed;
  }
}