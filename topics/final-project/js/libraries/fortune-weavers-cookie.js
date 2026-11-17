//Fortunne Weaver's Cookie

//Author: SABRINA RATH

//Description: This project simulats receiving the special message inside a fortune cookie.Instead of the secret message containing the standard generic and boring messages, these cookie will be sure to contain something that will definetely make you smile.

//The experience is controlled via mouse clicks on the fortune cookie to crack it open and receive your special message.Click it again and receive another fortune.

//Would you like another cookie ? Well then, another fortune awaits you.

//Variables

//All my image varaibles to cycle through each fortune cookie state (full cookie to slowly cracking and then splitting into two halves revealing the message on the paper)
let fullCookie;
let cookieCrack1;
let cookieCrack2;
let cookieCrack3;
let halfLeft;
let halfRight;
let paperImg;

//Sound variables

//When cookie cracks, play sound
let crackSound;
//Chime sound when message is revealed
let chimeSound;
//Background music
let bgMusic;

//Variables to track if cookie has been clicked to start animation

//Cookie clicked = start animation
let hasStarted = false;
//Tracks time from when the cookie has been clicked on
let startTime = 0;

//Async because I am loading images and sounds
async function setup() {
    //Creating a canvas of 600x600 pixels
    createCanvas(600, 600);

    //Ensure the very center of my images is the point of origin
    imageMode(CENTER);

    //Load all images and sound (sounds will be added later)
    fullCookie = await loadImage("./assets/images/full-cookie.png");
    cookieCrack1 = await loadImage("./assets/images/cracked-cookie1.png");
    cookieCrack2 = await loadImage("./assets/images/cracked-cookie2.png");
    cookieCrack3 = await loadImage("./assets/images/cracked-cookie3.png");
    halfLeft = await loadImage("./assets/images/half-left.png");
    halfRight = await loadImage("./assets/images/half-right.png");
    paperImg = await loadImage("./assets/images/paper.png");
}

function draw() {
    //Placeholder background color
    background("#c3e2ff")
}

function mousePressed() {
    hasStarted = true;
    //Tracks the time since the sketch has begun
    startTime = millis();
}