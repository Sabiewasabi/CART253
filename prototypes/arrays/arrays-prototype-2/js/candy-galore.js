//Bubbles!

//Author: Sabrina Rath

//Description:

//Variables

//Bubbles container
let bubbles = [];

function setup() {
    //Creating canvas the size of 600x600
    createCanvas(600, 600);
}

function draw() {
    background(0);

    //Sapwning bubbles
    If(frameCount % 20 === 0) {
        bubbles.push(new Bubble());
    }
}