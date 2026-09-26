//Aura Dynamics

//Author : Sabrina Rath

//Description: This projects features a gradient background and an ellipse placed at the center of the canvas.Each second it changes color at random with a smooth transition using the lerp(); p5.js object. There is no meaning to this project but rather one that simply plays with the endlesss possibility of volors.


//Variables
let Mycircle = {
//Drawing my circle to sit at the very center of the canvas
    x:300,
    y:300,
    size:300,
//Current colors. Will update every second in draw
    fill: {
    r: 255,
    g: 255,
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
nextTopColor = bgTopColor;
nextBottomColor = bgBottomColor;

}


function draw() {
//every 1 second (60 frames), pick a new target color
if (frameCount % 60 ===1){
    nextTopColor = color(random(255),random(255),random(255));
    nextBottomColor = color(random(255),random(255),random(255));

    Mycircle.nextColor.r = random(255)
    Mycircle.nextColor.g = random(255)
    Mycircle.nextColor.b = random(255)
}

//Smooth color transition every frame
//Background
bgTopColor = lerpColor(bgTopColor, nextTopColor, 0.05);
bgBottomColor = lerpColor(bgBottomColor, nextBottomColor, 0.05);
 
//Circle
Mycircle.fill.r = lerp(Mycircle.fill.r, Mycircle.nextColor.r, 0.05);
Mycircle.fill.g = lerp(Mycircle.fill.g, Mycircle.nextColor.g, 0.05);
Mycircle.fill.b = lerp(Mycircle.fill.b, Mycircle.nextColor.b, 0.05);

//Draw gradient background and removeing the noticeable lines from the canvas
noFill();
//Putting it in a for loop so the lines never reappear
for (let y = 0; y < height; y++) { 
//Calculate the colorblend for each row (y/height)
stroke(lerpColor(bgTopColor, bgBottomColor, y / height));
    
//Draw the horizontal line across the screen
    line(0, y, width, y);
}

//Draw the circle\
push();
noStroke();
fill(Mycircle.fill.r,Mycircle.fill.g,Mycircle.fill.b);
ellipse(Mycircle.x, Mycircle.y,Mycircle.size);
pop();

}
