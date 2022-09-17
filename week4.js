function setup() {
  createCanvas(460, 420);
  background('#D6EAF8');
}
let midx = 175;
let midy = 195;

function draw() {
  strokeWeight(1);
  textFont('American Typewriter');
  fill(0);
  textSize(25);
  textAlign(CENTER);
  text('Beauty & Beyond', midx+60, midy+140);

  strokeWeight(2);
  stroke('#FFFFFF')
  translate( 212, -190);
  rotate(PI/4 );
  fill('#D6D9F8');
  rect(midx, midy, 200, 100, 60);
  rect(midx + 50, midy - 50, 100, 200, 60);      
  fill('#F5D6F8');
  rect(midx+ 20, midy+10 , 160, 80, 60);
  rect(midx +60, midy -30 , 80, 160, 60); 
  fill('#F8D6D9');
  rect(midx+ 40, midy+20 , 120, 60, 60);
  rect(midx +70 , midy -10 , 60, 120, 60);
}


