//Bunbun wants carrots

//Author: Sabrina Rath

//Description:


//Variables

//Variables to hold images
let bunnyImg;
let carrotImg;

//Player dimension (bunny)
let playerSize = 50;

//Player position (bunny)
let playerX;
let playerY;

//Target carrot
let carrotWidth = 40;
let carrotHeight = 40;
let carrotX;
let carrotY;

//Movement speed for the carrot
let xSpeed = 3;
let ySpeed = 3;

//Shockwave variables - when catching a carrot, emite a shoockwave animation
let shockwaveSize = 0;
let shockwaveX = 0;
let shockwaveY = 0;

//Score
let score = 0;
let gameTimer = 30; //Game timer in seconds


async function setup() {
    //Creating a canvas the size of 600x600
    createCanvas(600, 600);
    imageMode(CENTER);

    //Loading images
    bunnyImg = await loadImage("assets/bunny.png");
    carrotImg = await loadImage("assets/carrot.png");
}

function draw() {

}