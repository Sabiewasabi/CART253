//Title: Poyo

//Authour:Sabrina Rath

//A static drawing of Kirby (known as Poyo in Japanese) mostly made from calling different shape and sizes of elipses.

//Variable
// This variable holds the information for each different expressions 0 = Neutral 1 = Happy, 2 = Poyo!. 3 =Sleepy, 4 = Angry

let expressionIndex = 0

function setup() {
  createCanvas(500, 500);
}

function draw() {
  //Colour for background
  background('#9BF3F0');

  //Draw circle body
  noStroke();
  fill('#FFC0DB');
  ellipse(250,250,300);

  //Draw normal eyes for all expressions EXCEPT Sleepy

  if (expressionIndex !== 3) {

  //Draw the left eye
  stroke('#503529');
  strokeWeight(3);
  fill('#3170CF');
  ellipse(200,220,50,120);

  //Pupils
  stroke('#503529');
  strokeWeight(2);
  fill('#503529');
  ellipse (200,210,45,100);
  
  stroke('#503529');
  strokeWeight(3);
  fill(255);
  ellipse(200,200,40,75);

  //Draw the right eye
  stroke('#503529');
  strokeWeight(2)
  fill('#3170CF');
  ellipse(300,220,50,120);

  //Pupils
  stroke('#503529');
  strokeWeight(2);
  fill('#503529');
  ellipse (300,210,45,100);
  
  stroke('#503529');
  strokeWeight(2);
  fill(255);
  ellipse(300,200,40,75);
  }else{
    

  }

  //Draw mouth
  noStroke();
  fill('#FC60A8');
  ellipse(250,300,20,30);

  //Draw blush
  noStroke();
  fill('#F490A7')
  ellipse(170,295,60,30);

  noStroke();
  fill('#F490A7');
  ellipse(330,295,60,30);

}