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

  //Draw silly face on screen

  //Draw left eye (normal eye)
  fill(0);
  ellipse(265,210,25,25);
  //White shine in the eyes
  fill(255);
  ellipse(268,207,8,8);

//Draw right eye (bigger eye for that confused look)
fill(0);
ellipse(335,205,45,45);
//Same white shine in the eyes
fill(255);
ellipse(342,200,12,12)

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
