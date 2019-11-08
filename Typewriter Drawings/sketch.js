// www.lomz.net - 2019.
// https://stihilus.github.io/lomz/generated_p5js_portraits.html

// For save image: Right click > Save image as

var video;
var vScale = 8;

function setup() {
  createCanvas(640, 480);
  pixelDensity(3);
  frameRate(10);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
}

function draw() {
  image(bgd01, 0, 0); //paper bdg
  //background(255);
  video.loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
      if (isNaN(bright)) bright = 0;
      var w = Math.floor(map(bright, 0, 255, 17, 0));
      noStroke();
      fill(255);
      rectMode(CENTER);

      // select image from images array
      var assets_array = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12, img13, img14, img15, img16, img17, img18];
      var asset = assets_array[w];
      var size = w * 2
      image(asset, x * vScale, y * vScale, vScale, vScale); // stampanje slike
      
    }
  }
  image(frame, 0, 0); //paper bdg

}