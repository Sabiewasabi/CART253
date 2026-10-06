//The Only Move Is Not To Play

//Author: Erica Galvez & Sabrina Rath

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
        textSize(28);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
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