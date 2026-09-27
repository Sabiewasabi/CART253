//Title:

//Author: Sabrina Rath

//Description:


function setup() {
//Creating canvas the size of the window screen
createCanvas(windowWidth,windowHeight);

}

function draw() {
//Deep blue for a dark sky
background("#101D42");

//Set the noise level and scale
let noiseLevel = 600;
let moiseScale = 0.002;

//Iterate from left to right
for (let x = 0; x <100; x +=1){
//Scale input coordinates.
let nx = noiseScale + x;
let nt = noiseScale + frameCount;

//Compute noise level value
let y = noiseLevel + noise (nx,nt);

//Draw the line
line(x,0,x,y);
}

}