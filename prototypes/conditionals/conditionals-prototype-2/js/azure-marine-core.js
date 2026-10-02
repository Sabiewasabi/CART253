//Title:Geminomonom

//Author:Sabrina Rath

//Variables
//Control rotation speed
let rotateAmount = 0;
//Shake on each axis
let shakeY = 0;
let shakeX = 0;
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

    //Go back to default state
    rotateAmount += 5; // Fast 
  } else {
    ambientLight(5);
    pointLight(0, 100, 200, 0, 0, 350);
    specularColor('#007cbe');

    rotateAmount += 1; //Slow and calm
  }

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
