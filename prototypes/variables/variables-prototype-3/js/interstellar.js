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
pop();



//Second bigger spinning square
push();
//The square will be drawn right at the center of my canvas
rectMode(CENTER);
////Outerline color
stroke("#B388EB");
noFill();
//New center point of canvas = 300,300
translate(width/2,height/2);
//Rotate the canvas counter-clockwise my center point
rotate(-rotateAmount);
//Draw square
rect(0,0,250,250);
pop();



//Circle
push();
translate(width/2,height/2);
rotate(-rotateAmount);

////Outerline color
stroke("#F7AEF8");
noFill();
ellipse(0,0,180);
pop();



//Spinning/rotating triangle that rotates around the center and on its itself
push();
//New center point of canvas = 300,300
translate(width/2,height/2);
//Orbit around the center square 1.5x faster
rotate(rotateAmount*1.5);
//Move it onto its own orbit line
translate(20,0);
//Rotating twice as fast
rotate(rotateAmount*2)

noFill();
//Outerline color
stroke(255);
triangle(30,75,58,20,86,75);
pop();

rotateAmount +=1;



//Second bigger spinning square
push();
//The square will be drawn right at the center of my canvas
rectMode(CENTER);
////Outerline color
stroke("#B388EB");
noFill();
//New center point of canvas = 300,300
translate(width/2,height/2);
//Rotate the canvas counter-clockwise my center point
rotate(rotateAmount);
//Draw square
rect(0,0,300,300);
pop();


//Circle
push();
translate(width/2,height/2);
rotate(-rotateAmount);

////Outerline color
stroke("#F7AEF8");
noFill();
ellipse(0,0,350);
pop();

}