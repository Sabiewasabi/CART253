/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */
let target = 0;
let checkTarget = 0;
//If there is no collision,stay red
let noCollision = {
  x: puck.x,
  y: puck.y,
  size: puck.size,
  fill: "#ff0000",
}

//If there is a collision tur green
let Collision = {
  x: puck.x,
  y: puck.y,
  size: puck.size,
  fill: "#37DE00",
}

let fills = 0;

const targetCircle = puck

const puck = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#ff0000"
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");

  // Move user circle
  moveUser();

  //Move puck when colliding with user's circle
  movePuck();

  // Draw the user and puck
  drawUser();
  drawPuck();
}

//Calculate distance between the puck and the user to get the puck to change colors
const collision = (d < user.size / 2 + targetCircle.size / 2);
if (collision) {

}


/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

const d = dist(user.x, user.y, targetCircle.x, targetCircle.x);

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}