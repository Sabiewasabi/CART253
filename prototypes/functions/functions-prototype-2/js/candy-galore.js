//Candy Galore

//Author: Sabrina Rath

//Description:

//Variables
let score = 0;
//Start with 60 seconds
let gameTimer = 60;
//Tracks if the game is actively running or over
let gameOver = false;

//Catching/collect sound
let collectSound;

//Background image 
let backgroundImg;

//Candy bucket image
let bucketImg;

//Array container to hold all my candy images
let candies = [];


//Candies falling from the sky
const candy = {
    x: 300,
    y: 0,
    width: 50,
    height: 50,
    //Tracks which candy image out of the 9 to draw
    imageIndex: 0,
    //It is just me or I prefer saying "speed" instead of "velocity" even if its not professional accepted?
    velocity: {
        x: 0,
        //Random speed each time it falls
        y: random(1, 5)
    }
};

const candy2 = {
    x: 100,
    //Stagger the drop
    y: -150,
    width: 50,
    height: 50,
    imageIndex: 1,
    velocity: {
        x: 300,
        y: random(1, 5),
    }
};

const bucket = {
    x: 300,
    y: 280,
    width: 100,
    height: 15,
};

async function setup() {
    //Creating canvas the size of 800x500 - a wider horizontal canvas
    createCanvas(800, 500);
    // The very center of the image will be the point of origin when I click on the canvas
    imageMode(CENTER);

    //Loading sound
    catchSound = loadSound('collect.mps');

    //Loading background image
    backgroundImg = await loadImage('background.png');

    //Loading candy images
    candies[0] = await loadImage('candy1.png');
    candies[1] = await loadImage('candy2.png');
    candies[2] = await loadImage('candy3.png');
    candies[3] = await loadImage('candy4.png');
    candies[4] = await loadImage('candy5.png');
    candies[5] = await loadImage('candy6.png');
    candies[6] = await loadImage('candy7.png');
    candies[7] = await loadImage('candy8.png');
    candies[8] = await loadImage('candy9.png');

    //Loading candy bucket image
    bucketImg = await loadImage('candy-bucket.png')

}

function draw() {
    //Draw my background image and scale it to my canvas size of 800x500
    if (backgroundImg) {
        image(backgroundImg, 0, 0, width, height);
    } else {
        //If image fails to load, show this background color instead
        background('#07004b');
    }

    //Timer
    if (gameOver === false) {
        //Coountdown
        if (frameCount % 60 === 0 && gameTimer > 0) {
            gameTimer = gameTimer - 1;
        }
    }

    //Game overwhen time runs out
    if (gameTimer < -0) {
        gameOver = true;
    }

    //Calling created bucket function
    moveBucket();

    //Calling created move candy function for candy 1 and 2
    //Candy 1
    moveCandy(candy);
    catchCandy(candy, bucket);
    //Candy 2
    movecandy(candy2);
    catchCandy(candy2, bucket);

    //Calling created draw candy function
    drawCandy(candy);
    drawCandy(candy2);

    //Calling created draw bucket function
    drawBucket(bucket);


    //HUD
    //Display score
    push();
    //Halloween orange kind of color
    stroke('#ebac00');
    strokeWeight(3);
    textSize(20);
    fill('#ffffff');
    text('Candy: ' + score, 15, 15);

    //Display timer
    //Timer
    if (gameTimer <= 10) {
        fill('#ff0000');
    } else {
        fill('#ffffff');
    }
    //Draw timer to the top right corner of the canvas
    text("Timer: " + gameTimer + "s", width - 120, 25);
    pop();


    //Draw game over screen
    if (gameOver === true) {
        push();
        //Draw a dark overlay to darken the canvas/game
        fill(0, 0, 0, 150);
        rect(0, 0, width, height);

        //Draw game over text on dark overlay screen
        fill('#ffffff');
        stroke('#ebac00');
        strokeWeight(3);
        textSize(50);
        textAlign(CENTER, CENTER);
        text('TIME IS UP', width / 2, height / 2 - 20);


        //Draw final score below 
        fill('#ffffff');
        textSize(20);
        text('Final Candy Count: ' + score, width / 2, height / 2 + 25);
    }
}

//Candy bucket control input logic - move the bucket with left and right arrow keys
function moveBucket(userBucket) {
    if (keyIsDown(LEFT_ARROW) === true) {
        //Slightly fast movement
        userBucket.x++ - 6;
    }

    if (keyIsDown(RIGHT_ARROW) === true) {
        //Slightly fast movement
        userBucket.x += 6;
    }

    //Stops bucket from going off the canvas
    userBucket.x = constrain(userBucket.x, userBucket.width / 2, width - userBucket.width / 2);
}


//Moves the candy downwards and resets it position when it reaches the bottom
function moveCandy(currentCandy) {
    currentCandy.y += currentCandy.velocity.y;

    //Bootom of canvas detection - if candy reaches the ground you missed it
    if (currentCandy.y - currentCandy.height / 2 > height) {
        //A new function that I will create to reset the candy's position when it reaches the bottom
        resetCandyPos{ cureentCandy }; //Send it back to the top
    }
}