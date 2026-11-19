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

//Cookie size variable
let cookieSize = 750;

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

//Keeps track of which fortune is currently on screen
let currentFortune = 0;

//Language tracking : English, Chinese, and Japanese
let languages = ['EN', '中文', '日本語'];
let currentLang = 0;

//Variable for my JSON file of fortunes and languages
let fortunes = [];

//Async because I am loading images and sounds
async function setup() {
    //Creating a canvas of 600x600 pixels
    createCanvas(600, 600);

    //Ensure the very center of my images is the point of origin
    imageMode(CENTER);

    //Canter the text
    rectMode(CENTER);

    //Align the text to the center of the canvas
    textAlign(CENTER, CENTER);

    //A font that can easily read Chinese and Japanese characters. I just googled online what would be the best font or a font that can read these characters.
    textFont('Noto Sans JP, Noto Sans SC, sans-serif')

    //Load all images and sound (sounds will be added later)
    fullCookie = await loadImage("./assets/images/full-cookie.png");
    cookieCrack1 = await loadImage("./assets/images/cracked-cookie1.png");
    cookieCrack2 = await loadImage("./assets/images/cracked-cookie2.png");
    cookieCrack3 = await loadImage("./assets/images/cracked-cookie3.png");
    halfLeft = await loadImage("./assets/images/half-left.png");
    halfRight = await loadImage("./assets/images/half-right.png");
    paperImg = await loadImage("./assets/images/paper.png");

    //Load JSON file
    fortunes = await loadJSON("./assets/fortunes.json")
}

function draw() {
    //Placeholder background color
    background("#c3e2ff")

    //Before receiving a click, draw full uncracked fortune cookie at the very center of the canvas
    if (hasStarted === false) {
        image(fullCookie, 300, 300, cookieSize, cookieSize);
        return;
    }

    //Count how many seconds have passed since the last click in milliseconds
    let seconds = (millis() - startTime) / 1000; //1 second

    //Wiggle/shake variable for the fortune cookie
    if (seconds < 2) {
        let shakeX = random(-4, 2);
        let shakeY = random(-2, 1);

        //Wiggle/shake animation  and crack the cookie for a few seconds
        let currentImg = fullCookie;
        if (seconds < 0.5) {
            currentImg = fullCookie;
        } else if (seconds < 1) {
            currentImg = cookieCrack1;
        } else if (seconds < 1.5) {
            currentImg = cookieCrack2;
        } else {
            currentImg = cookieCrack3;
        }

        //Draw images with the random wiggle/shake at the very center of the canvas
        image(currentImg, 300 + shakeX, 300 + shakeY, cookieSize, cookieSize); //Last to parameters is for how wide and tall I want to draw my fortune cookie

        //Split open the fortune cookie and reveal the paper and fortune message after 2 seconds
    } else {
        //Draw paper in the middle and keeping original paper image size
        let paperWidth = 965;
        let paperHeight = paperWidth * (paperImg.height / paperImg.width);
        image(paperImg, 300, 300, paperWidth, paperHeight);


        //Display fortune in currently selected language mode
        let message = fortunes[currentFortune][currentLang] || fortunes[currentFortune] //Reverts back to English if translation for other languages have not been added yet (which I havent gotten to)

        //Draw the fortune text centered on the paper
        //Text color
        fill("#1b191d");
        noStroke();
        textSize(17);
        text(message, 300, 300, 250, 80);

        //Draw the left and right halves of the fortune cookie on each side
        image(halfLeft, 120, 300, cookieSize, cookieSize);
        image(halfRight, 430, 265, cookieSize, cookieSize);
    }
}

function mousePressed() {
    hasStarted = true;
    //Tracks the time since the sketch has begun
    startTime = millis();
}