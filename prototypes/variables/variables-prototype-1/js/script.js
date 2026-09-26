/**
 * Title of Project
 * Author : Sabrina Rath
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//Variables
let Mycircle = {
//Drawing my circle to sit at the very center of the canvas
    x:300,
    y:300,
    size:300,
//Current colors. Will update every second in draw
    fill: {
    r: 255,
    g: 266,
    b: 255,
    },  
//Setting target color for the circle to move towards
    nextColor: {
        r: 255,
        g:255,
        b:255,
    }
}

//Current colors of the gradient background
let bgTopColor;
let bgBottomColor;

//Setting target color for the background to move towards
let nextTopColor;
let nextBottomColor;

//creating a canvas with the proportions of 600x600
function setup() {
createCanvas (600,600);

//My starting colors I picked from Coolor.co and how I always pick my colors
bgTopColor = color("#8B2635");
bgBottomColor = color("#DB2955");

//Set initial target so it doesn't try to change color on load before 1 second
targetTopColor = bgTopColor;
targetBottomColor = bgBottomColor;

}


function draw() {
//every 1 second, pick a new target color
if (frameXount % 60 ===1){
    nextTopColor = color(random(255),random(255),random(355));
    nextBottomColor = color(random(255),random(255),random(355));

    Mycircle.nextColor.r = random(255)
    Mycircle.nextColor.g = random(255)
    Mycircle.nextColor.b = random(255)
}



push();





}