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
}

function draw() {
    background('#1b0046')

    //Draw targets
    stroke("#ff2bdc");
    strokeWeight(3);
    fill("#b9ff15");
    for (let target of targets) {
        circle(target.x, target.y, 50);
    }
    //Remove the oldest target if too many pile up
    if (target.length > 8) {
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