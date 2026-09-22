/**
 * Mr. Furious
 * Sabrina Rath, Konstantinos Christodoulakis Erica Gavez
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
direction: "left"

}

//Sky
let sky = {
fill: {
r:160,
b:180,
b:200,
    }
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
  background(sky.fill.r,sky.fill.g,sky.fill.b);

//Mr.Furious gets angrier
mrFurious.fill.r = mrFurious.fill.r + 1
mrFurious.fill.g = mrFurious.fill.g - 1
mrFurious.fill.b = mrFurious.fill.b - 1
mrFurious.fill +1,-1,-1;

//Make day turn night overtime
sky.fill.r = sky.fill.r -1
sky.fill.g = sky.fill.g -1
sky.fill.b = sky.fill.b -1
sky.fill -1,-1,-1;

  
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  
  pop();

  //Draw annoying bird to fly back and forth
  push();
  fill(bird.fill);
  stroke(0);
  strokeWeight(2);
  ellipse(bird.x,bird.y,bird.size)

  if (bird.direction === "left"){
    bird.x = bird.x -1}

if (bird.direction === "right"){
bird.x = bird.x +1
  
}

if (bird.x ===400){
    bird.direction = "left"
} else if (bird.x ===0){
    bird.direction = "right"
}
  pop();

  console.log(bird.direction);
  console.log(bird.x);
}