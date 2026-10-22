//Eye Floaters

//Author: Sabrina Rath

//Description:

//Variables
//For my floaters, I want to have roughly around 100-150.For now I'll go with 150 and test that out.
let totalFloaters = 150;

//Floaters position
const floaters = {
    posX: [],
    posY: [],
    color: 'blue',
}


function setup() {
    //Creating a canvas the same size as the window width and height
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    background('#070038')

    //Calling my new function I created
    moveFloaters();
}

function moveFloaters(x, y) {
    //Add parameters to update their x and y position and return the values.
    x += random(-5, 5);
    y += random(-5, 5);

    //Draw floaters
    //Taking the color from my const 
    fill(floaters.color);
    //I dont need a stroke because it will look so ugly 
    noStroke();
    circle(x, y, 10)

    return { x: x, y: y };
}
