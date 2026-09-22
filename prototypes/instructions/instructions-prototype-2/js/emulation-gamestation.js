//Title:Emulation gamestation

// Author:Sabrina Rath

// This prototype intends to be able to play a game (maybe pong or a maze game) through the screen of a Gameboy.

function setup() {
  createCanvas(600,600);

  background('#EE92C2');

  //Turn on HSB color mode: Hue,Saturation and Brightness
  colorMode(HSB,360,100,100);

}

  function draw(){
  //Draw gameboy body
  rectMode (CENTER);
  fill ('#46237A');
  rect (300, 300, 300, 400);
  
  //Draw gameboy screen
  fill (0);
  rect (300,220,250,200);
  fill ('#C4E0F9');
  rect (300,220,200,150);

  
  //Text
  fill (0);
  //Setting variable for text size
  let s = 'PLAY A GAME';
  textSize (20)
  text(s, 330, 300, 200, 160);
  

  // Buttons
  fill(0);
  ellipse (400,370,35);
  ellipse (350,400,35);
  
  // D pad button
  //top
  rect(210,400,40,55);
  //left
  rect(180,420,40);
  //right
  rect(240,420,40);
  //bottom
  rect(210,440,40,55);
  
}
