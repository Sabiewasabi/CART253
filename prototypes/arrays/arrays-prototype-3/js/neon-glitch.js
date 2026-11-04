//Neon Gliitch

//Author: Sabrina Rath

//Description: 

//Variables
// Array container to hold current target active circles
let targets = [];

//Score tracker
let score = 0;

//Speed level variable
let speedLevel = 1;

//Spawn interval variable - timing of events referenced from p5.js example sketches
// https://editor.p5js.org/enickles/sketches/ZbCusCZtN
let spawnInterval;


function setup() {
    //Creating a canvas of 1000x800 pixels
    createCanvas(1000, 800);

    //Start the target spawning loop immediately when the game loads
    startSpawner(500)
}

function draw() {
    background('#12022c')

    //Draw targets
    stroke("#ff2bdc");
    strokeWeight(3);
    fill("#b9ff15");
    for (let target of targets) {
        circle(target.x, target.y, 50);
    }
    //Remove the oldest target if too many pile up
    if (targets.length > 8) {
        //Remove the oldest target from the array
        targets.shift();
    }
    //UI HUD (Targets and speed level text)
    noStroke();
    fill(255);
    textSize(20);
    text("TARGETS: " + score, 20, 30);
    text("SPEED LEVEL: " + speedLevel, 20, 60);
}

//Interaction mechanic
function mousePressed() {
    //Checks targets backward so I always click the newwest overlapping target first
    for (let counter = targets.length - 1; counter >= 0; counter--) {
        if (dist(mouseX, mouseY, targets[counter].x, targets[counter].y) < 25) {
            score++;
            //Remove clicked target
            targets.splice(counter, 1);
            //Check for level up every 10 points
            checkLevelUp();
            break;
        }
    }
}

function checkLevelUp() {
    //New level every 10 points
    let currentLevel = floor(score / 10 + 1);

    //If player reached a new level, speed up the spawning interval
    if (currentLevel > speedLevel) {
        speedLevel = currentLevel;

        // Calculate a faster spawn time capping at 150ms
        let newSpawnRate = max(150, 500 - (speedLevel * 50));

        //Reset the interval with the faster speed
        clearInterval(spawnInterval);
        startSpawner(newSpawnRate);
    }
}

//Manage interval
function startSpawner(rate) {
    //Set a recurring timer that executes the inner arrow function at a given millisecond rate
    spawnInterval = setInterval(() => {
        //Adds new target to the array
        targets.push({
            //Place new target at a random x and y position away from the edges of the canvas
            x: random(50, width - 50),
            y: random(50, height - 50)
        });
        //Pass the rate parameter to define the timer delay
    }, rate);
}