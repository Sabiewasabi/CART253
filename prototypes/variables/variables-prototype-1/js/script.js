//Aura Dynamics

//Author : Sabrina Rath

//Description: This projects features a gradient background and an ellipse placed at the center of the canvas.
//Each second it changes color at random with a smooth transition using the lerp(); p5.js object. There is no meaning to this project but rather one that simply plays with the endlesss possibility of volors.




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
//every 1 second (60 frames), pick a new target color
if (frameXount % 60 ===1){
    nextTopColor = color(random(255),random(255),random(355));
    nextBottomColor = color(random(255),random(255),random(355));

    Mycircle.nextColor.r = random(255)
    Mycircle.nextColor.g = random(255)
    Mycircle.nextColor.b = random(255)
}

//Smooth color transition every frame
//Background
bgTopColor = lerpColor(bgTopColor, targetTopColor, 0.05);
bgBottomColor = lerpColor(bgBottomColor, targetBottomColor, 0.05);
 
//Circle
Mycircle.fill.r = lerp(Mycircle.fill.r, Mycircle.target.r, 0.05);
Mycircle.fill.g = lerp(Mycircle.fill.g, Mycircle.target.g, 0.05);
Mycircle.fill.b = lerp(Mycircle.fill.b, Mycircle.target.b, 0.05);



}