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

//Controls how smooth or jagged the lines are
let noiseLevel = 150;
//Controls the height of the waves
let noiseScale = 0.002;

//Center the wave vertically at the screen because the lines wont be noticeable
let yBaseline = height*0.5

//Iterate from left to right
for (let x = 0; x <windowWidth; x +=1){
//Scale input coordinates by multiplying (* means multiply)
let nx = x*noiseScale
//Smoother waves
let nt = frameCount* 0.005;

//Compute noise level value
let y = noiseLevel + noise (nx,nt);

//Smooth noise value and scale it
let yOffset = noise(nx,nt)*waveheight

//



//Draw the line
line(x,windowHeight,x,y);
}

}