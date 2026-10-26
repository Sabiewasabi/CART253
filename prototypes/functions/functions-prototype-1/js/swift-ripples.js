//Swift Ripples

//Author : Sabrina Rath

//Description: This project 

//Variables
//List of ripple
const rippleList = [];

//creating a canvas with the proportions of 600x600
//Removed async because I want the project to boot up qquickly since I am not loading any images or sounds
function setup() {
    createCanvas(600, 600);
}


function draw() {
    //Draw background here so it clears old circle rings every frame whereas in draw the circle rings never vanish
    background(255);
    //A loop to draw,move and update ripples
    for (let counter = rippleList.length - 1; counter >= 0; counter--) {
        //Grab data infor from our array container
        let currentRipple = rippleList[counter];
        //Make the ripple grow bigger over time with expansionSpeed
        currentRipple.size += currentRipple.expansionSpeed;

        //Draw ripple as expanding circle rings
        noFill();
        //OUtline color
        stroke(currentRipple.rippleColor);
        //Line thickness
        strokeWeight(2);
        circle(currentRipple.x, currentRipple.y, currentRipple.size);

        //If the ripple grows past the max size limit, delete it
        if (currentRipple.size > currentRipple.maxSize) { //MAx size which is 300px
            rippleList.splice(counter, 1);
        }
    }
}

function mouseMoved() {
    //Calling my new function I created here - drawRipple
    //Temporary variable to draw a ripple
    const newRipple = drawRipple(mouseX, mouseY);
    //Sending data to our main array storage container ripplesList
    rippleList.push(newRipple);
}

//Function for drawing ripple
function drawRipple(spawnX, spawnY) {
    return {
        x: spawnX,
        y: spawnY,
        size: 5,
        //Sets a random growth rate
        expansionSpeed: random(1, 3),
        //Sets ripple size to randomly be between the min of 30px and max of 300px
        maxSize: random(30, 300),
        //Pick a random color at full RBG range
        rippleColor: color(random(0, 255), random(0, 255), random(0, 255))
    };
}