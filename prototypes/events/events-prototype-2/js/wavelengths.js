//RNG

//Author: Sabrina Rath

//Description: 

//Variables
let mysteryBox;
let currentPrizer = 0; // Keeps track of which prize we are using currently to display
let isBoxOpen = false; // Keeps track of whether the box is open or closed

function setup() {
    //Creating canvas the size of 600x600
    createCanvas(600, 600);
    background('#C6B4E8')


    //Load all the images
    mysteryBox = loadImage('assets/images/mystery-box.png');
}

function draw() {
    textSize(30);
    textAlign(CENTER, CENTER);
    fill('#F2F2F2');
    stroke('#6140a1');
    strokeWeight(1.5);
    text('What prize fantastic prize will you get?', 300, 100);
}