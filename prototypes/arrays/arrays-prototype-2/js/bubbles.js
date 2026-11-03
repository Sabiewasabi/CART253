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
    for (let counter = bubbles.length - 1; counter >= 0; counter--) {
        let bubble = bubbles[counter];
        bubble.show();
        bubble.update();

        //Remove bubbles if they go off screen
        if (bubble.y < 0) {
            //Delete (splice) the bubble from the list (array) of bubbles
            bubbles.splice(counter, 1);
        }
    }
}
//Popping bubble interaction mechanic
function mousePressed() {
    //When popped, the bubble will be removed from the array
    for (let counter = bubbles.length - 1; counter >= 0; counter--) {
        let bubble = bubbles[counter];

        //Check if the mouse is inside the bubble
        if (bubble.contains(mouseX, mouseY)) {
            bubbles.splice(counter, 1);
            //Stop looking through the array once a bubble is popped so only one bubble can be popped per click
            break;
        }

    }
}

//Creating a bubble class (object)
class Bubble {
    constructor() {
        this.x = random(50, width - 50);
        //Start the bubble off the screen so it can float up
        this.y = height + 30;
        //Random size for the bubbles
        this.size = random(1, 5);
        //Slight drift to the left and right
        this.speedX = random(-1, 1);
        //Random speed for the bubbles
        this.speedY = random(1, 5);

        //Random color for the bubbles
        this.color = color(random(100, 255), random(100, 55), random(100, 55));
    }
    //Function to display the bubbles and update their position
    update() {
        //Drift to the side
        this.x += this.speedX;
        //Subtract from y to make the bubbles float up
        this.y -= this.speedY;

        //Wall bounce mechanic to keep the bubbles on the canvas
        if (this.x < this.size / 2 || this.x > width - this.size / 2) {
            this.speedX += -1;
        }
    }
    //Draw the bubbles
    show() {
        fill(this.color);
        //White bubble border
        stroke(255);
        strokeWeight(1);
        circle(this.x, this.y, this.size);
    }
}
