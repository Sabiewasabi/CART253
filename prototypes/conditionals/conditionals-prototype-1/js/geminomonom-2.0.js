//Title:Geminomonom 2.0

//Author:Sabrina Rath

//An emerald that rotates on both its X and Y axis that then morphs to another gem shape every 5 seconds.
//Roate the gem by clicking and holding the mouse in any direction


//NEW NEW NEW NEW NEW NEW NEW NEW NEW // Line 11 - 13
//Varibles
let switchTime = 0;
//Keeps track of which shape is active
let gemType = 0;

function setup() {
  //Create a canvas the same size a the monitor and create a 3D environement.
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);

  //Referenced from the p5.js reference page
  pointLight(255, 255, 255, 30, -20, 40);
  ambientLight(20);
  specularColor('#8CFBDE');

  //Enable orbit control with cursor
  orbitControl();

  //NEW NEW NEW NEW NEW NEW NEW NEW NEW // Line 36 -40

  //Timer logic - switch/morph shapes every 5 seconds
  //Consulted the millis (); p5.js reference page to keep track of how long a sketch has been running in milliseconds
  //So 5 seconds = 5000 milliseconds
  if (millis() - switchTime > 5000) {
    //Cycles through 0,1,2
    gemType = (gemType + 1) % 3;
    switchTime = millis();
  }

  push();
  //Rotates gems on both its X and Y axis
  rotateY(frameCount * 0.010);
  rotateX(frameCount * 0.020);

  //Referenced from the p5.js reference page
  noStroke();
  //EmissiveMaterial makes a 3D shape "glow", referenced from the p5.js reference
  emissiveMaterial(145, 242, 145, 100);
  specularMaterial("#17bebb");

  //On the fill(); p5.js reference page it says that the 4th parameter set the transparency level
  fill(145, 242, 145, 80);

  //NEW NEW NEW NEW NEW NEW NEW NEW NEW // 
  //Draw and switch/morph logic - 0 being the first shape,1 being the second and 2 being the last then return
  if (gemType === 0) {
    ellipsoid(100, 100, 60, 4, 3);
  } else if (gemType === 1) {
    cone(80, 150, 4, 5);
  } else if (gemType === 2) {
    cylinder(70, 120, 5);
  }

  pop();
}