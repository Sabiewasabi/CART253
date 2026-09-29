/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const targetCircle = {
  x: puck.x,
  y: puck.y,
  size: puck, size
fills: {
    noCollision: "#ff0000",
    onCollision: "#37DE00"
  }
};


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

//Calculte distance between both circle centres
const d = dist(user.x, user.y, targetCircle.x, targetCircle.x);

const onCollision = (d < user.size / 2 + targetCircle.size / 2);

//Check if the distance is smaller than their two radial

//Set fil depending if they are colliding or not
if (onCollision) {
  targetCircle.fill = targetCircle.fills, onCollision;
} else {
  targetCircle.fill = targetCircle.fills.noCollision;
}

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