const target = {
  x: 350,
  y: 50,
  size: 100,
  fill: "#02A9EA"
};

const puck = {
  x: 200,
  y: 200,
  size: 150,
  fill: "#ff0000"
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: 255
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
  background(0);

  // Move user circle
  moveUser();

  //Move puck
  movePuck();

  //Check target
  checkTarget();

  //Draw target
  drawTarget();

  // Draw the user and puck
  drawUser();
  drawPuck();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
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

function movePuck() {
  const d = dist(user.x, user.y, puck.x, puck.y);
  // Check if that distance is smaller than their two radii, 
  // because if it is, they are overlapping by the amazing
  // power of geometry!
  const overlap = (d < user.size / 2 + puck.size / 2);
  // Set fill based on whether they overlap
  if (overlap) {
    if (user.x <= puck.x) {
      puck.x += 1
    }
    if (user.x >= puck.x) {
      puck.x += -1
    }
  }

  if (overlap) {
    if (user.y <= puck.y) {
      puck.y += 1
    }
    if (user.y >= puck.y) {
      puck.y += -1
    }
  }
}

function drawTarget() {
  push();
  noStroke();
  fill(target.fill);
  ellipse(target.x, target.y, target.size);
  pop();
}


function checkTarget() {

  //const d = dist(user.x, user.y, target.x, target.y);

  //const overlap = (d < user.size / 2 + target.size / 2);

  //if (overlap) {
  //target.fill = target.fill.overlap;
  //}
  //else {
  // target.fill = target.fill.noOverlap;
  //}

}