//Eye Floaters Frenzy

//Author: Sabrina Rath

//Description: This project is a simulation of the annoying eye floaters you tend to see after you rub your eyes or stand up too quick. 

// The experience has no control

//Variables
//For my floaters, I want to have roughly around 100-150.For now I'll go with 150 and test that out.
let totalFloaters = 150;

//Floaters position
const floaters = {
    posX: [],
    posY: [],

    //Variables to randomly change color and size of floaters
    floatersSize: [],
    floatersColor: [],
}


function setup() {
    //Creating a canvas the same size as the window width and height
    createCanvas(windowWidth, windowHeight);

    //Give each floater a random starting position
    for (let counter = 0; counter < totalFloaters; counter++) {
        floaters.posX[counter] = random(width);
        floaters.posY[counter] = random(height);

        //Floaters get their own unqie size and color
        floaters.floatersSize[counter] = random(5, 30);
        //If I wanted a rainbow color range of floaters - still debating on it
        //floaters.floatersColor[counter] = color(random(255), random(255), random(255))
        floaters.floatersColor[counter] = color(random(10, 255), random(10, 255), 255)

    }

}

function draw() {
    background('#04001f')

    //Starts counting floaters until 149 to check all 150 of them
    for (let counter = 0; counter < totalFloaters; counter++) {
        //Updates the new randomly changed positions inside newPos
        const newPos = moveFloaters(
            floaters.posX[counter],
            floaters.posY[counter],
            floaters.floatersSize[counter],
            floaters.floatersColor[counter],
        );

        //Updates values for position x
        floaters.posX[counter] = newPos.x;

        //Updates values for position y
        floaters.posY[counter] = newPos.y;
    }
}

function moveFloaters(x, y, size, flColor) {
    //Add parameters to update their x and y position and return the values.
    x += random(-5, 5);
    y += random(-5, 5);

    //Draw floaters
    //Grabs a unique color for each floaters
    fill(flColor);
    //I dont need a stroke because it will look so ugly 
    noStroke();
    //Added a "size" parameter for the code to know how big to make the circles
    circle(x, y, size)

    return { x: x, y: y };
}
