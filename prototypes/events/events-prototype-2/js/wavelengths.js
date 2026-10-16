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
    mysteryBox = loadImage('assets/images/mystery-box.png');
}

function draw() {
    background('#C6B4E8'); // Coolors.co is the absolute best for color palettes, I love it so much

    push();
    textSize(30);
    text('What fantastic prize will you get?', 300, 100);
    pop();

    push();
    textSize(20);
    text('Dev struggles edition', 300, 150);
    pop();

    textAlign(CENTER, CENTER);
    fill('#F2F2F2');
    stroke('#37245e');
    strokeWeight(2);

}