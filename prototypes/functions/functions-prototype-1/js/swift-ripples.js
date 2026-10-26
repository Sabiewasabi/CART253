//Swift Ripples

//Author : Sabrina Rath

//Description: This project 

//Variables
//List of ripple
const rippleList = [];

//creating a canvas with the proportions of 600x600
async function setup() {
    createCanvas(600, 600);
    background('#ffffff') // Started to use the color picker instead of Coolors
}


function draw() {
    //A loop to draw,move and update ripples
    for (let counter = ripplesList.length - 1; counter >= 0; counter--) {
        //Grab data infor from our array container
        let currentRipple = ripplesList[counter];
        //Make the ripple grow bigger over time with expansionSpeed
        currentRipple.size += currentRipple.expansionSpeed;
    }
}
