/**
 * Mr. Furious
 * Sabrina Rath and Erica Gavez
 *
 * A guy who becomes visibly furious becuase of a darn annoting bird!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};

//Draw annoying bird botering Mr.Furious
//Using lerp will allow the bird the move back and forth on a linear path
let bird = {
//Colour
fill: '#FAC05E',
//Position and size
size:60,
x:350,
y:100,

}

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(160, 180, 200);
  
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();

  //Draw annoying bird
  push();
  fill(bird.fill);
  stroke(0);
  strokeWeight(2);
  ellipse(mrFurious.x,mrFurious.y,mrFurious.size)


//Mr.Furious gets angrier
mrFurious.fill = mrFurious.fill +1

//Make annoying bird fly back and forth

}