//RNG

//Author: Sabrina Rath

//Description: 

//Variables
let mysteryBox;
let prizes = []; //An array to hold all my prizes
let currentPrize = 0; // Keeps track of which prize we are using currently to display
let isBoxOpen = false; // Keeps track of whether the box is open or closed

async function setup() {
    //Creating canvas the size of 600x600
    createCanvas(600, 600);
    // The very center of the image will be the point of origin when I click on the canvas
    imageMode(CENTER);


    //Load all the images
    mysteryBox = await loadImage('assets/images/question-block.png');

    prizes[0] = await loadImage('assets/images/mug.png'); // A mug that's dev appropriate
    prizes[1] = await loadImage('assets/images/rubber-ducky.png'); // The only way to debug code is to talk to a rubber ducky, right?
    prizes[2] = await loadImage('assets/images/keyboard.png'); // Because keyboards are essential for coding
    prizes[3] = await loadImage('assets/images/pizza.png'); // Because pizza is life
    prizes[4] = await loadImage('assets/images/energy-drink.png'); // Because energy drinks are life too
    prizes[5] = await loadImage('assets/images/grey-hoodie.png'); // TYpical dev attire, a grey hoodie
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

    //Draw box
    if (isBoxOpen === false) {
        image(mysteryBox, 300, 300, 200, 200);
    } else {
        //Hollow light behind the prize to make it look like it's glowing
        push();
        fill('#F2F2F2');
        stroke('#37245e');
        strokeWeight(2);
        ellipse(300, 300, 250, 250);
        pop();

        //Display random prize
        image(currentPrize, 300, 300, 200, 200);

        push();
        textSize(20);
        noStroke();
        text('Click the box to try again!', 300, 500);
        pop();
    }

}

function mousePressed() {
    //Check if the mouse is pressed within the bounds of the box
    if (prizes.length === 6) {
        if (isBoxOpen === false) {
            let randomIndex = floor(random(0, prizes.length)); // Get a random index from the prizes array
            currentPrize = prizes[randomIndex]; // Set the current prize to the randomly selected prize

            isBoxOpen = true; // Set the box to open
        } else {
            isBoxOpen = false; // Set the box to closed
        }
    }
}
