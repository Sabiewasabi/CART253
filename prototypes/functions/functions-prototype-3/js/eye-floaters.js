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

    //Leaving this here for now because I plan to have each floaters randmly have different size and colors
    //floatersSize:[],
    //floatersColor:[],
}


function setup() {
    //Creating a canvas the same size as the window width and height
    createCanvas(windowWidth, windowHeight);

    //Give each floater a random starting position
    for (let counter = 0; counter < totalFloaters; counter++) {
        floaters.posX[counter] = random(width);
        floaters.posY[counter] = random(height);
    }

}

function draw() {
    background('#04001f')

    //Starts counting floaters until 149 to check all 150 of them
    for (let counter = 0; counter < totalFloaters; counter++) {
        //Updates the new randomly changed positions inside newPos
        const newPos = moveFloaters(floaters.posX[counter], floaters.posY[counter]);

        //Updates values for position x
        floaters.posX[counter] = newPos.x;

        //Updates values for position y
        floaters.posY[counter] = newPos.y;
    }
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
