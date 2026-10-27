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
}
