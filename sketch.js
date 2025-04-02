let alph = 90;
let factor = 0;
let r1, g1, b1, sF;
let table;

function preload() {
  table = loadTable("colors.csv", "csv", "header");
}

function setup() {
  createCanvas(1920, 1080, SVG); // Create SVG Canvas
  let button = select("#myButton");
  button.mousePressed((x) => save("Perlin_Noise.svg"));
  noLoop(); // we just want to export once
}

function draw() {
  let palette = floor(random(1));
  let rez = 0.001;
  factor += 1000;
  sF = 360 / (2, 40);
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let n1 = noise(i * rez + factor, j * rez + factor);
      let col = map(n1, 0, 1, 0, 360);
      let dec = col / sF - floor(col / sF);
      let col2;
      if (dec < 0.2) {
        col2 = 0;
      } else if (dec < 0.4) {
        col2 = 1;
      } else if (dec < 0.6) {
        col2 = 2;
      } else if (dec < 0.8) {
        col2 = 3;
      } else {
        col2 = 4;
      }

      r1 = table.getNum(palette, col2 * 3);
      g1 = table.getNum(palette, col2 * 3 + 1);
      b1 = table.getNum(palette, col2 * 3 + 2);

      strokeWeight(3);
      stroke(r1, g1, b1, alph);
      point(i, j);
    }
  }

}
