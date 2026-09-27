//WAvies

//Author: Sabrina Rath

//Description:


function setup() {
//Creating canvas the size of 600x600
createCanvas(600,600);

}

function draw() {
//Deep blue for a dark sky
background("#101D42");

//Nice light blue wave color to contrast the dark blue sky
stroke("#232ED1")

// Draw the moon
push();
noStroke();
//Eggshell color for the moon
fill("#F7F4EA")
ellipse(100,130,130,130)
pop();


//Mountains
push();
stroke("#161B33")
let mountainScale =0.1;
let mountainHeight = 100;
//Setting my waves a bit higher than my waves
let mountainBaseline = height *0.35 


//Starts from the left of the screen until it reaches the right
for(let m = 0;m < width; m +=1){
    let nm = m * mountainScale;

//NOt adding frameCount to keep the mountain still
    let mOffset = noise(nm)* mountainHeight;
    let mY = mountainBaseline +mOffset;

//Draw from bottom up
line(m,height,m,mY);
}
pop();

//Set the noise level and scale
//Controls the height of the waves
let waveheight = 150;
//Controls how smooth or jagged the lines are
let noiseScale = 0.002;

//Center the wave vertically at the screen because the lines wont be noticeable
let yBaseline = height*0.5;

//Iterate from left to right
for (let x = 0; x <width; x +=1){
//Scale input coordinates by multiplying (* means multiply)
let nx = x * noiseScale;
//Smoother waves
let nt = frameCount* 0.006;

//Smooth noise value and scale it
let yOffset = noise(nx,nt)*waveheight;

//Combine baseline position with the noise offset
let y = yBaseline + yOffset;


//Draw the line
line(x,height,x,y);
}


}