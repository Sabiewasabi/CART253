//TOOK THIS CODE FROM THE OVERLAPPING CIRCLE EXAMPLE

let targetCircle = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#ff0000", // red to start
  fills: {
    noOverlap: "#ff0000", // red for no overlap
    overlap: "#00ff00" // green for overlap
  }
};

let userCircle = {
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
  userCircle.x = mouseX;
  userCircle.y = mouseY;

  // Check overlap

  // Calculate distance between circles' centres
  let d = dist(userCircle.x, userCircle.y, targetCircle.x, targetCircle.y);
  // Check if that distance is smaller than their two radii, 
  // because if it is, they are overlapping by the amazing
  // power of geometry!
  let overlap = (d < userCircle.size / 2 + targetCircle.size / 2);
  // Set fill based on whether they overlap
  if (overlap) {
    targetCircle.fill = targetCircle.fills.overlap;
  }
  else {
    targetCircle.fill = targetCircle.fills.noOverlap;
  }

  // Draw the two circles
  push();
  noStroke();
  fill(targetCircle.fill);
  ellipse(targetCircle.x, targetCircle.y, targetCircle.size);
  pop();

  push();
  noStroke();
  fill(userCircle.fill);
  ellipse(userCircle.x, userCircle.y, userCircle.size);
  pop();
}