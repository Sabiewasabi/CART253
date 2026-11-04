//Neon Gliitch

//Author: Sabrina Rath

//Description: 

//Variables
// Array container to hold current target active circles
let targets = [];

//Score tracker
let score = 0;


function setup() {
    //Creating a canvas of 1000x800 pixels
    createCanvas(1000, 800);
}

function draw() {
    background('#1b0046')

    //Speed level variable to increase the speed of the targets as the score increases
    let speedLevel = floor(score / 10);
}