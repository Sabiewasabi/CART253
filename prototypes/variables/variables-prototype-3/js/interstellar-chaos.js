//Interstellar Chaos

//Author: Sabrina Rath

//Description: This project represents an interactive interstellar space simulation made of spinning shapes.
//This experience is controlled by clicking and holding the mouse to have the shapes spin faster.When you release, the speed of the rotating shapes return to normal.
//This project is inspired by a simple idea - bringing order back to chaos 


//Creating variable that i will then add +1 to for smooth rotation
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
stroke("#72DDF7");
noFill();
ellipse(0,0,180);
pop();



//Second bigger spinning square
push();
//The square will be drawn right at the center of my canvas
rectMode(CENTER);
////Outerline color
stroke("#8093F1");
noFill();
//New center point of canvas = 300,300
translate(width/2,height/2);
//Rotate the canvas counter-clockwise my center point
rotate(rotateAmount);
//Draw square
rect(0,0,300,300);
pop();


//Second circle
push();
translate(width/2,height/2);
rotate(-rotateAmount);

////Outerline color
stroke("#72DDF7");
noFill();
ellipse(0,0,350);
pop();



//Third bigger spinning square
push();
//The square will be drawn right at the center of my canvas
rectMode(CENTER);
////Outerline color
stroke("#B388EB");
noFill();
//New center point of canvas = 300,300
translate(width/2,height/2);
//Rotate the canvas counter-clockwise my center point
rotate(rotateAmount*2.5);
//Draw square
rect(0,0,450,450);
pop();


//Small center circle
push();
translate(width/2,height/2);
rotate(-rotateAmount);

////Outerline color
fill("#72DDF7");
ellipse(0,0,50);
pop();

//Interactive mouse click
//Click the mouse to make the interstellar move 3x faster for true CHAOS! Release to bring back order of balance.
if (mouseIsPressed){
    rotateAmount +=4.5;
} else {rotateAmount +=1;
}

}