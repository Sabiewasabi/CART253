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
    if (frameCount % 20 === 0) {
        bubbles.push(new Bubble());
    }

    //Backward loop to remove bubbles that are off the screen
    for (counter = bubbles.length - 1; counter >= 0; counter--) {
        let bubble = bubbles[counter];
        bubble.show();
        bubble.update();
    }
}
