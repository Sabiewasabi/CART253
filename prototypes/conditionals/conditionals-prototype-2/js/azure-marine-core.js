//Title:Geminomonom

//Author:Sabrina Rath

let rotateAmount = 0;

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
    ambuentLight(40);
    pointLight(157, 78, 221, 0, 0, 350);
    specularColor('#5A189A');

    //Go back to default state
    eotateAmount += 5; // Fast 
  } else {
    ambientLight(40);
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



}
