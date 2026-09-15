//Title:Geminomonom

//Author:Sabrina Rath

//An emerald that rotates on both its X and Y axis that then morphs to another gem shape every 5 seconds.

function setup() {
  //Create a canvas the same size a the monitor and create a 3D environement.
  createCanvas(windowWidth,windowHeight,WEBGL);
}

function draw() {
  background(0);

  //Referenced from the p5.js reference page
  pointLight(255, 255, 255, 30, -20, 40);
  ambientLight(15); 
  specularColor('#8CFBDE'); 

  //Enable orbit control with cursor
  orbitControl();

  push();
  //Rotates gems on both its X and Y axis
  rotateY(frameCount * 0.010);
  rotateX(frameCount * 0.020);

  //Draw diamond shape
  stroke(255);
  strokeWeight(.5);
  fill('#91F291')
  ellipsoid(100, 100, 80, 4, 3);
  pop();

  //Referenced from the p5.js reference page
  noStroke();
  specularMaterial("#17bebb");
  
}