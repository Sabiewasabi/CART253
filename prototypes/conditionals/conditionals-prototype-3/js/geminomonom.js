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


}