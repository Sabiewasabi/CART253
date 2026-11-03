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

        //Remove bubbles if they go off screen
        if (bubble.y < 0) {
            //Delete (splice) the bubble from the list (array) of bubbles
            bubble.splice(counter, 1);
        }
    }
}
//Pooping buble interaction mechanic
function mousePressed() {
    //When popped, the bubble will be removed from the array
    for (let counter = bubbles.length - 1; counter >= 0; counter--) {
        let bubble = bubbles[counter];

    }
}
