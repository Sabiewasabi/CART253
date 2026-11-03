/**
 * Lines
 * Sabrina Rath & Erica Galvez
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");

    //Replacing old vertical lines
    let x = 0;
    let shade = 0;
    while (x <= width) {
        stroke(shade);
        strokeWeight(5);
        line(x, 0, x, height);
        x += 50;
        shade += 25;
    }

    //Horizontal Lines using a SECOND loop
    let y = 0;
    shade = 0;
    while (y <= height) {
        stroke(shade);
        strokeWeight(3);
        line(0, y, width, y);
        y += 50;
        shade += 25;
    }
}
