let xspacing = 50; 
let w; 
let theta = 0.0;
let amplitude = 70; 
let period = 100.0; 
let dx; 
let yvalues;

function setup() {
  createCanvas(800, 400);
  w = width + 35;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var randomColor=generateRandomColor();

function draw() { 
  background(220);
  calcWave();
  renderWave();
}

function calcWave() {
  theta += 0.03;
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  for (let x = 1; x < yvalues.length; x++) {
     if (yvalues[x]>=-15 && yvalues[x] <= 15) {
    fill(randomColor);
    ellipse(x*xspacing, height/2  + yvalues[x], 50, 50);
      }  else { 
    fill(250);
    ellipse(x*xspacing,height/2 + yvalues[x], 50,50);
      }
  }   
}


