/**
 * Title of Project
 * Author : Sabrina Rath
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//Variables
//Variables to get a radial gradient
let colorCenter;
let colorOuter;

//creating a canvas with the proportions of 600x600
function setup() {
createCanvas (600,600);
}


function draw() {
background (255)

//NOt using innerwidth and innerheight for accuracy
let maxRadius = max(widht,height);

//My 2 bases colors. In case you're wondering, I always pick my colors from Coolors.co
baseCenter = color("#8B2635")
baseOuter = color("#DB2955")

//Creating an if statement that every 2 seconds it will pick a random color for both center and
if (frameCount % 120 === 1){
    colorCenter = color(random(255),random (255),random(255));
    colorOuter = color (random (255),random (255),random (255));
}

//If the timer has NOT reached 2 seconds then the colors don't change 
if (frameCount < 120){
    colorCenter = baseColor
    colorOUter = baseColor
}



}