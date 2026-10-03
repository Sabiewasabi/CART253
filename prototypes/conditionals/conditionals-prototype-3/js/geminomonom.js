//Title:Geminomonom

//Author:Sabrina Rath


function setup() {
  //Creating canvas the size of 600x600
  createCanvas(600, 600);
}

//Since I want to make a gradient background I cant use my prefered hex codes but rather using RBG to acquire transpanrency
function draw() {
  //Teal color
  background(52, 160, 164);

  //Start by drawing the circle in the size of 580 and decrease the size by 20 until it is 5px small
  for (let size = 580; size > 5; size -= 20) {
    noStroke();
    circle(width / 2, height / 2, size);
    fill(217, 237, 147, 20);
  }

  //Right about here I lack creative inspiration and I randomly thought to myself, why not make something that kin of looks like a barcode.
  //Not a litteral barcode but close enough ???
  let baselineY = height * 0.5;

  //Loop accross the screen grom left to right, leaving spaces
  for (let x = 0; x < width; x += 10) {
    //Calculate how close the mouse is to this specific x line
    let mouseDistance = dist(mouseX, 0, x, 0);

    //When the mouse touches the lines,make them tall
    if (mouseDistance < 80) {
      stroke(22, 138, 173);
      strokeWeight(4);

      //Default short lines
      line(y, baselineY - 150, x, baselineY + 150);

    } else {
      stroke(24, 78, 119);
      strokeWeight(2);

      line(y, baselineY - 20, x, baselineY + 20);
    }
  }

}