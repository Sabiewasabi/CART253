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

  if (mouseIsPressed) {
    ambuentLight(40);
    pointLight();
    specularColor();

    eotateAmount += 5;
  }
}
