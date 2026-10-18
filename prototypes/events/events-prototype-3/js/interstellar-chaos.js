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
    background('#abd2fa')
    noCursor(); // Hide the cursor


    //Gameplay state
    if (gameTimer > 0) {
        //Copunting down the game timer
        if (frameCount % 60 == 0) {
            gameTimer--; // Decrease the game timer every second
        }
    }

    //Soft glow following the bunny
    push();
    for (let size = 90; size > 5; size -= 10) {
        noStroke();
        fill(255, 255, 255, 12); // Set a low opacity for the glow effect
        circle(mousex, mouseY, size); // Draw a circle at the mouse position with decreasing size and opacity
    }
    pop();

    //Draw the shockwave effect when a carrot is caught
    if (shockwaveSize > 0) {
        push();
        noFill();
        circle(shockwaveX, shockwaveY, shockwaveSize);
        pop();

        shockwaveSize -= 5; // Decrease the size of the shockwave
    }


    //Move the target carrot around the screen
    carrotX += xSpeed;
    carrotY += ySpeed;

    //Bounce the carrot off the edges of the canvas
    if (carrotX > width - carrotWidth / 2 || carrotX < carrotWidth / 2) {
        xSpeed *= -1; // Reverse the x direction
    }

    if (carrotY > height - carrotHeight / 2 || carrotY < carrotHeight / 2) {
        ySpeed *= -1; // Reverse the y direction
    }
}

function gameOver() {
    textAlign(CENTER, CENTER);
    textStyle(BOLD);

    push();
    fill('#1A2D42')
    textSize(40);
    text("TIME\'S UP!", width / 2, height / 2 - 40);
    pop();

    push();
    textSize(20);
    text("Total carrots Eaten: " + score, width / 2, height / 2 + 15);
    pop();


}
