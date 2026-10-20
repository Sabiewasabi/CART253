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
    velocity: {
        x: 0,
        y: 10
    }
};

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

    handleBounce(ball, paddle);

    drawPaddle(paddle);
    drawBall(ball);
}

/**
 * Moves the paddle
 */
function movePaddle(paddle) {
    //Self explanatory, left arrow key down, move left
    if (keyIsDown(LEFT_ARROW) === true) {
        paddle.x += -3; // Slightly faster than just having it move by 1
    }
    //Self explanatory, right arrow key down, move right
    if (keyIsDown(RIGHT_ARROW) === true) {
        paddle.x += 3;
    }
}

/**
 * Moves the ball passed in as a parameter
 */
function moveBall(ball) {
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;

    //Bounce the ball of the left + right edges
    if (ball.x < ball.width / 2 < 0 ||
        ball.x + ball.width / 2 > width) {
        ball.velocity.x *= -1;
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
    fill("#300097");
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
    fill("#300097");
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();
}

/**
 * Returns true if ball and paddle overlap, and false otherwise
 * Assumes rectA and paddle have properties x, y, width and height to describe
 * their rectangles, and that rectA and paddle are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlap(ball, paddle) {
    return (ball.x + ball.width / 2 > paddle.x - paddle.width / 2 &&
        ball.x - ball.width / 2 < paddle.x + paddle.width / 2 &&
        ball.y + ball.height / 2 > paddle.y - paddle.height / 2 &&
        ball.y - ball.height / 2 < paddle.y + paddle.height / 2);
}