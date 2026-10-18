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


//Carrot direction variables
let carrotDirectionX = 'right';
let carrotDirectionY = 'down';

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

    //Carrot start at a random position
    carrotX = random(50, 550);
    carrotY = random(50, 550);
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

        //Soft glow following the bunny
        push();
        for (let size = 90; size > 5; size -= 10) {
            noStroke();
            fill(255, 255, 255, 12); // Set a low opacity for the glow effect
            circle(mouseX, mouseY, size); // Draw a circle at the mouse position with decreasing size and opacity
        }
        pop();

        //Draw the shockwave effect when a carrot is caught
        //Only draw and expand the shockwave if its smaller than 120
        if (shockwaveSize > 0 && shockwaveSize < 120) {
            push();
            noFill();
            stroke(255, 255, 255, 250);
            strokeWeight(3);
            circle(shockwaveX, shockwaveY, shockwaveSize);
            pop();

            shockwaveSize += 6; // Inccrease the size of the shockwave
        }

        //Switch carrot direction (LEFT AND RIGHT)
        if (carrotDirectionX === 'left') {
            carrotX = carrotX - 3; // Move left by 3 pixels
        }

        if (carrotDirectionX === 'right') {
            carrotX = carrotX + 3; // Move right by 3 pixels
        }

        //Switch carrot direction (TOP AND BOTTOM)
        if (carrotDirectionY === 'up') {
            carrotY = carrotY - 2; // Move up by 3 pixels
        }

        if (carrotDirectionY === 'down') {
            carrotY = carrotY + 2; // Move down by 3 pixels
        }


        //Check walls/edges of canvas for the carrot and change direction if it hits an edge
        if (carrotX >= 575) {
            carrotDirectionX = 'left';
        }

        if (carrotX <= 25) {
            carrotDirectionX = 'right';
        }

        if (carrotY >= 575) {
            carrotDirectionY = 'up';
        }

        if (carrotY <= 25) {
            carrotDirectionY = 'down';
        }

        //Check collision between the bunny and the carrot
        checkCollision();

        //Draw UI
        drawUI();

        //Draw carrot
        image(carrotImg, carrotX, carrotY, carrotWidth, carrotHeight);

        //Draw player (bunny)
        image(bunnyImg, mouseX, mouseY, playerSize, playerSize);
    }
    else {
        cursor();// Bring back the normal cursor 
        gameOver(); // Show the final score
    }


}


function checkCollision() {
    //Calculate the distance between the bunny and the carrot
    let distance = dist(mouseX, mouseY, carrotX, carrotY);

    //If the distance is less than the sum of their radii, they are colliding
    if (distance < 35) {
        //Increase the score
        score++;

        //Reset the carrot position
        carrotX = random(50, width - 50);
        carrotY = random(50, height - 50);

        //Emit a shockwave effect
        shockwaveSize = 1;
        shockwaveX = carrotX;
        shockwaveY = carrotY;
    }
}

function drawUI() {
    push();
    textAlign(CENTER, CENTER);
    textStyle(BOLD);

    textSize(25);
    fill('#1A2D42')
    text("CARROT: " + score, width / 4, 20); //Collected carrot counter


    //Timer
    if (gameTimer <= 5) {
        fill(255, 0, 0);
        text("TIME: " + gameTimer + "s", (width / 4 * 3, 20));
    }
    pop();
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
