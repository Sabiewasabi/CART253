//Title:Geminomonom

//Author:Sabrina Rath

//Variables
//Control rotation speed
let rotateAmount = 0;
//Shake on each axis
let shakeY = 0;
let shakeX = 0;
//Z axis only in 3D
let shakeZ = 0;

function setup() {
  //Create a canvas the same size a the monitor and create a 3D environement.
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  //Allows you to rotate and zoom the caemra with your cursor
  orbitControl();

  //Change colors
  if (mouseIsPressed) {
    ambientLight(25);
    pointLight(157, 78, 221, 0, 0, 350);
    emissiveMaterial('#5A189A');

    //Shake out of control
    shakeY = random(-10, 10);
    shakeX = random(-10, 10);
    shakeZ = random(-10, 10);

    rotateAmount += 5; // Fast 
  } else {
    //Go back to default state
    ambientLight(5);
    pointLight(0, 100, 200, 0, 0, 350);
    specularColor('#007cbe');

    rotateAmount += 1; //Slow and calm
  }

  //Translate shake variables
  translate(shakeY, shakeX, shakeZ),

    //Azure marine core
    push();
  rotateY(rotateAmount * 0.01) //Slow
  rotateX(rotateAmount * 0.01) //Slow

  noStroke();
  //specularmaterial vs specualrcolor / Basecolor and highlight color
  specularMaterial('#17bebb');
  sphere(150);
  pop();

  //Outer disruptive core
  if (mouseIsPressed) {
    push();
    rotateY(-rotateAmount * 0.005);
    rotateX(-rotateAmount * 0.006);
    stroke('#5A189A');
    strokeWeight(2);
    noFill();
    sphere(230, 10, 6)
    pop();
  }

}
