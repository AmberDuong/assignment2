var yPink = 45;
var xPink = 600;
var yBlue = 45;
var xBlue = 350;
let mxPink = 1;
let myPink = 1;
let mxBlue = 1;
let myBlue = 1;
let radius = 10;

function setup() {
  createCanvas(1000, 420);
  noStroke();
  ellipseMode(RADIUS);
}

function draw() {
  background(230);

  fill(100);
  fill ('#96C3EB');
  rect (xBlue+5, yBlue+87, 10, 17,5);
  rect (xBlue+35, yBlue+87, 10, 17,5);
  rect(xBlue,yBlue,50, 100, 25);
  fill ('red');
  rect (xBlue+15, yBlue+60, 20, 5,90);

  if (keyIsDown(65)) {
    xBlue -= 5;
  }
  if (keyIsDown(68)) {
    xBlue += 5;
  }
  if (keyIsDown(87)) {
    yBlue -= 5;
  }
  if (keyIsDown(83)) {
    yBlue += 5;
  }
  
  fill(256);
  circle (xBlue+25, yBlue+30, 20);

  if (abs(mouseX - mxPink) > 0.1) {
    mxPink = mxPink + (mouseX - mxPink) ;
  }
  if (abs(mouseY - myPink) > 0.1) {
    myPink = myPink + (mouseY - myPink) ;
  }
  if (abs(mouseX - mxBlue) > 0.1) {
    mxBlue = mxBlue + (mouseX - mxBlue) ;
  }
  if (abs(mouseY - myBlue) > 0.1) {
    myBlue = myBlue + (mouseY - myBlue) ;
  }
  
  mxBlue = constrain(mxBlue, xBlue+20, xBlue+30);
  myBlue = constrain(myBlue, yBlue+25, yBlue+35);
  fill(0);
  ellipse(mxBlue, myBlue, radius, radius); 
  
  fill ('pink');
  rect (xPink+5, yPink+87, 10, 17,5);
  rect (xPink+35, yPink+87, 10, 17,5);
  rect(xPink,yPink,50, 100, 25);
  fill ('red');
  rect (xPink+15, yPink+60, 20, 5,90);

  if (keyIsDown(LEFT_ARROW)) {
    xPink -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xPink += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    yPink -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yPink += 5;
  }
  
  mxPink = constrain(mxPink, xPink+20, xPink+30);
  myPink = constrain(myPink, yPink+25, yPink+35);
  fill(256);
  circle (xPink+25, yPink+30, 20);  
  fill(0);
  ellipse(mxPink, myPink, radius, radius);
  fill('#FFCE30')
  rect(210,150,590,120);
  fill('orange');
  rect(210,150,5,120);
  rect(800,150,5,120);

  if(xPink==805 && yPink >=150 && yPink<170) {
    xPink -=640;
  } else if(xPink==185 && yPink >=150 && yPink<170) {
    xPink +=630;
  } else if (yPink==50  && xPink > 155 && xPink <800) {
    yPink -=5;
  } else if (yPink==265  && xPink > 155 && xPink <800) {
    yPink +=5;
  } else if(xPink==805 && yPink >=170 && yPink <270) {
    xPink +=5;
  } else if(xPink==805 && yPink >=46 && yPink <150 ) {
    xPink +=5;
  } else if(xPink==160  && yPink >=170 && yPink <270 ) {
    xPink -=5;
  } else if(xPink==160 && yPink >=46 && yPink <150 ) {
    xPink -=5;
  }
 
  if(xBlue==805 && yBlue >=150 && yBlue<170) {
    xBlue -=640;
  } else if(xBlue==185 && yBlue >=150 && yBlue<170) {
    xBlue +=630;
  } else if (yBlue==50  && xBlue > 155 && xBlue <800) {
    yBlue -=5;
  } else if (yBlue==265  && xBlue > 155 && xBlue <800) {
    yBlue +=5;
  } else if(xBlue==805  && yBlue >=170 && yBlue <270) {
    xBlue +=5;
  } else if(xBlue==805 && yBlue >=46 && yBlue <150 ) {
    xBlue +=5;
  } else if(xBlue==160  && yBlue >=170 && yBlue <270 ) {
    xBlue -=5;
  } else if(xBlue==160 && yBlue >=46 && yBlue <150 ) {
    xBlue -=5;
  }
  
  if (xPink>1000) {
    xPink = 0;
  } else if (xPink<0) {
    xPink = 1000;
  } else if (yPink>400) {
    yPink = 0;
  } else if (yPink<0) {
    yPink = 400;
  }
  
    if (xBlue>1000) {
    xBlue = 0;
  } else if (xBlue<0) {
    xBlue = 1000;
  } else if (yBlue>400) {
    yBlue = 0;
  } else if (yBlue<0) {
    yBlue = 400;
  }

  fill(1);
  text('BLUE', xBlue +8, yBlue - 5);  
  text('PINK', xPink +9, yPink - 5);  
}
