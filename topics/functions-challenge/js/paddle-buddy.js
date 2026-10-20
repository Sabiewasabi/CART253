//Paddle Buddy

// SABRINA RATH & ERICA GAVEZ

// Description: 

"use strict";

// Our ball
const ball = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    color: "red",
    velocity: {
        x: 5,
        y: 10
    }
};

const ball2 = {
    x: 100,
    y: 50,
    width: 15,
    height: 15,
    color: "green",
    velocity: {
        x: 3,
        y: 5
    }
}

// Our paddle
const paddle = {
    x: 300,
    y: 280,
    width: 80,
    height: 10
};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);
}


/**
 * Move and display the ball and paddle
*/
function draw() {
    background("#87ceeb");

    movePaddle(paddle);

    moveBall(ball);
    moveBall(ball2);

    handleBounce(ball, paddle);
    handleBounce(ball2, paddle);

    drawPaddle(paddle);
    drawBall(ball);
    drawBall(ball2);
}

/**
 * Moves the paddle
 */
function movePaddle(paddle) {
    //Self explanatory, left arrow key down, move left
    if (keyIsDown(LEFT_ARROW) === true) {
        paddle.x += -2; // Slightly faster than just having it move by 1
    }
    //Self explanatory, right arrow key down, move right
    if (keyIsDown(RIGHT_ARROW) === true) {
        paddle.x += 2;
    }
}

/**
 * Moves the ball passed in as a parameter
 */
function moveBall(ball) {
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;

    //Bounce the ball off the left + right edges
    if (ball.x - ball.width / 2 < 0 ||
        ball.x + ball.width / 2 > width) {
        ball.velocity.x *= -1;
    }

    //Bounce the ball off the top + bottom edges
    if (ball.y - ball.height / 2 < 0 ||
        ball.y + ball.height / 2 > height) {
        ball.velocity.y *= -1;
    }

}

/**
 * Bounces the provided ball off the provided paddle
 */
function handleBounce(ball, paddle) {
    if (checkOverlap(ball, paddle)) {
        ball.velocity.y *= -1;
    }
}

/**
 * Draws the specified paddle on the canvas
 */
function drawPaddle(paddle) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}

/**
 * Draws the specified ball on the canvas
 */
function drawBall(ball) {
    push();
    rectMode(CENTER);
    noStroke();
    fill(ball.color);
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();
}

/**
 * Returns true if rectA and rectB overlap, and false otherwise
 * Assumes rectA and rectB have properties x, y, width and height to describe
 * their rectangles, and that rectA and rectB are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlap(rectA, rectB) {
    return (rectA.x + rectA.width / 2 > rectB.x - rectB.width / 2 &&
        rectA.x - rectA.width / 2 < rectB.x + rectB.width / 2 &&
        rectA.y + rectA.height / 2 > rectB.y - rectB.height / 2 &&
        rectA.y - rectA.height / 2 < rectB.y + rectB.height / 2);
}