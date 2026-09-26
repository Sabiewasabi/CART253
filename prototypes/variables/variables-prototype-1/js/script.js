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
    x:300,
    y:300,
    size:300,
//Color
    fill: {
    r: 0,
    g: 0,
    b: 0,

    }

}

//creating a canvas with the proportions of 600x600
function setup() {
createCanvas (600,600);
}


function draw() {
background (255)

push(); 
noStroke();
fill(Mycircle.r,Mycircle.b,Mycircle.b);
ellipse(Mycircle.x,Mycircle.y,Mycircle.size);
pop();

}