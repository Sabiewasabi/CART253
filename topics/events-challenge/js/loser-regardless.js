//Loser Regardless

//Author: Erica Galvez & Sabrina Rath

//Description: Do nothing.....litterally!
//Don't move,dont press any keys but honestly, you'll run out of patience.

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Update the score and display the UI
 */
function draw() {
    background("#3adb3d");

    // Only increase the score if the game is not over
    if (!gameOver) {
        // Score increases relatively slowly
        score += 0.05;
    }
    displayUI();
}

/**
 * Show the game over message if needed, and the current score
 */

function displayUI() {
    if (gameOver) {
        push();
        //On lose change background from green to red
        background(255, 0, 0);
        textSize(28);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        //Changed text to be a little funnier but not too rude
        text("YOU LOSE....BOOHOO", width / 2, height / 3);
        pop();
    }
    displayScore();
}

/**
 * Display the score
 */
function displayScore() {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(floor(score), width / 2, height / 2);
    pop();
}

function lose() {
    gameOver = true;
}

//All mouse events that make you lose
function mouseMoved() {
    lose();
}

function mousePressed() {
    lose();
}

function mouseDragged() {
    lose();
}

function mouseClicked() {
    lose();
}

function mouseWheel() {
    lose();
}