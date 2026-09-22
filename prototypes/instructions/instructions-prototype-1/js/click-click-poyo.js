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
  // (!) means is NOT
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

  //If on sleepy expression,draw closed eyes instead of wide eyes
  }else{
  //Sleepy eyes expression
    nofill();
    stroke('#503529');
    strokeWeight(5);
    arc(200,220,45,30,0,PI);
    arc(300,220,45,30,0);
  }

//Angry eyebrows
// (===) means it IS
if (expressionIndex === 4){
  nofill();
  stroke('#503529');
  strokeWeight(4);
  line(170,145,225,175);
  line(330,145,275,175);
}

  //Draw mouth differently depending on expression shown

  //Normal mouth
  if (expressionIndex ===0){
  noStroke();
  fill('#FC60A8');
  ellipse(250,300,20,30);

  //Happy smile mouth
  } else if (expressionIndex ===1){
    stroke('#503529');
    strokeWeight(4);
    nofill();
    arc(250,290,40,30,0,PI)

  //Wide "Poyo!" open mouth
  } else if (expressionIndex ===2){
    stroke('#503529');
    atrokeWeight(3);
    fill('#FC60A8');
    ellipse(250,300,12,12);

  //Sleept mouth
  } else if (expressionIndex ===3){
    noStroke();
    fill('#FC60A8');
    ellipse(250,300,12,12);

  //Angry mouth
  } else if (expressionIndex ===4){
    nofill();
    stroke('#503529');
    strokeWeight(4);
    arc(250,320,35,25,PI,0);
  }

  //Draw blush
  noStroke();
  fill('#F490A7');
  ellipse(170,295,60,30);
  ellipse(330,295,60,30);

}