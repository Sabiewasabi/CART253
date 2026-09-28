//Interstellar

//Author: Sabrina Rath

//Creation variable that i will then add +1 to for smooth rotation
let rotateAmount = 0;

function setup() {
//Creating a canvas the size of 600x600
createCanvas (600,600);
//Setting angle mode to DEGREES in order for angles to be measured in units of degrees
angleMode(DEGREES);
}

function draw() {
background(0);

//Center spinning square
push();
//The square will be drawn right at the center of my canvas
rectMode(CENTER);
stroke("#8093F1");
noFill();
//New center point of canvas = 300,300
translate(width/2,height/2);
//Rotate the canvas clockwise my center point
rotate(rotateAmount);
//Draw square
rect(0,0,100,100);
//Incrementing the angle by 1 degree per frame to keep it spinning/rotating
rotateAmount +=1;
pop();


//Second bigger spinning square
push();
//The square will be drawn right at the center of my canvas
rectMode(CENTER);
stroke("#B388EB");
noFill();
//New center point of canvas = 300,300
translate(width/2,height/2);
//Rotate the canvas counter-clockwise my center point
rotate(-rotateAmount);
//Draw square
rect(0,0,250,250);
//Incrementing the angle by 1 degree per frame to keep it spinning/rotating
rotateAmount +=1;
pop();


//Rotating 
push();
translate(width/2,height/2);
rotate(-rotateAmount);
fill("#F7AEF8");
ellipse(100,100,70);
pop();






}