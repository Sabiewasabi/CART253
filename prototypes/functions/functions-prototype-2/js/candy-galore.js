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
let catchSound;

//Background image 
let backgroundImg;

//Candy bucket image
let bucketImg;

//Array container to hold all my candy images
let candyImages = [];


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
}

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
}

const bucket = {
    x: 300,
    y: 280,
    width: 100,
    height: 15,
}

async function setup() {
    //Creating canvas the size of 600x600
    createCanvas(600, 600);
    // The very center of the image will be the point of origin when I click on the canvas
    imageMode(CENTER);

}

function draw() {
    background('#07004b'); // Coolors.co is the absolute best for color palettes, I love it so much

}
