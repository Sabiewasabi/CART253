//What's your RNG today? Dev struggles edition

//Author: Sabrina Rath

//Description: This project is a simple interactive experience that allows the user to click on a mystery box to reveal a random prize. The prizes are all related to common struggles that developers face, such as debugging, coding, and staying energized. The project uses p5.js for the graphics and sound effects.
// This experience is controlled via mouse clicks, and the user can click on the box to reveal a prize, and then click again to close the box and try again. The prizes are displayed with a hollow gradient glow behind them, and the name of the prize is displayed below the image. The project also includes a sound effect that plays when a prize is revealed.


//Variables
let mysteryBox;
let prizes = []; //An array to hold all my prizes
let currentPrize = 0; // Keeps track of which prize we are using currently to display
let isBoxOpen = false; // Keeps track of whether the box is open or closed

//An array to hold the names of the prizes, so that I can display them when the box is opened
let prizeNames = ['A mug that is dev appropriate', 'The only way to debug code is to talk to a rubber ducky, right?', 'Because keyboards are essential for coding', 'Because pizza is life', 'Because energy drinks are life too', 'Typical dev attire, a grey hoodie', 'PC UPGRADE!'];
let currentName = 0; // Keeps track of which prize name we are using currently to display

async function setup() {
    //Creating canvas the size of 600x600
    createCanvas(600, 600);
    // The very center of the image will be the point of origin when I click on the canvas
    imageMode(CENTER);


    //Load all the images
    mysteryBox = await loadImage('assets/images/question-block.png');

    prizes[0] = await loadImage('assets/images/mug.png');// A mug that's dev appropriate
    prizes[1] = await loadImage('assets/images/rubber-ducky.png'); // The only way to debug code is to talk to a rubber ducky, right?
    prizes[2] = await loadImage('assets/images/keyboard.png'); // Because keyboards are essential for coding
    prizes[3] = await loadImage('assets/images/pizza.png'); // Because pizza is life
    prizes[4] = await loadImage('assets/images/energy-drink.png'); // Because energy drinks are life too
    prizes[5] = await loadImage('assets/images/grey-hoodie.png'); // TYpical dev attire, a grey hoodie
    prizes[6] = await loadImage('assets/images/pc.png'); // PC UPGRADE!

    //Load prize acquired sound effect
    prizeAcquired = await loadSound('assets/sounds/prize-acquired.mp3');
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
    text('What is your RNG today?', 300, 70);
    pop();

    push();
    textSize(20);
    text('Dev struggles edition', 300, 120);
    pop();

    //Draw box
    if (isBoxOpen === false) {
        image(mysteryBox, 300, 300, 200, 200);
    } else {
        //Hollow gradient glow behind ther prize using a for loop();
        push();
        for (let size = 300; size > 10; size -= 5) {
            noStroke();
            fill(255, 255, 255, 12); // white with low opacity
            ellipse(300, 300, size);
        }

        pop();


        //Display random prize
        image(currentPrize, 300, 300, 200, 200);

        //Draw the matching name of the prize
        push();
        textSize(20);
        text(currentName, 300, 480);
        pop();

        push();
        fill('#190042');
        textSize(20);
        noStroke();
        text('Click anywhere to try again!', 300, 550);
        pop();
    }

}

function mousePressed() {
    //Check if the mouse is pressed within the bounds of the box
    if (prizes.length === 7) {
        if (isBoxOpen === false) {
            let randomIndex = floor(random(0, prizes.length)); // Get a random index from the prizes array
            currentPrize = prizes[randomIndex]; // Set the current prize to the randomly selected prize
            currentName = prizeNames[randomIndex]; // Set the current name to the randomly selected prize name

            isBoxOpen = true; // Set the box to open
            prizeAcquired.play(); // Play the prize acquired sound effect
        } else {
            isBoxOpen = false; // Set the box to closed
        }
    }
}
