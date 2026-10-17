//RNG

//Author: Sabrina Rath

//Description: 

//Variables
let mysteryBox;
let prizes = []; //An array to hold all my prizes
let currentPrize = 0; // Keeps track of which prize we are using currently to display
let isBoxOpen = false; // Keeps track of whether the box is open or closed

function setup() {
    //Creating canvas the size of 600x600
    createCanvas(600, 600);
    // The very center of the image will be the point of origin when I click on the canvas
    imageMode(CENTER);


    //Load all the images
    mysteryBox = loadImage('assets/images/question-block.png');

    prizes[0] = loadImage('assets/images/mug.png');
    prizes[1] = loadImage('assets/images/rubber-ducky.png');
}

function draw() {
    background('#C6B4E8'); // Coolors.co is the absolute best for color palettes, I love it so much

    //Properties for both the texts
    textAlign(CENTER, CENTER);
    fill('#F2F2F2');
    stroke('#37245e');
    strokeWeight(2);


    push();
    textSize(30);
    text('What is your RNG today?', 300, 100);
    pop();

    push();
    textSize(20);
    text('Dev struggles edition', 300, 150);
    pop();

}