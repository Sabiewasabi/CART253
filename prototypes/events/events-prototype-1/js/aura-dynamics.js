//Mofusand Party

//Author : Sabrina Rath

//Description: 


//Variables
let stampImages = []; //An array to hold all my images
let currentStamp = 0; // Keeps track of which image we are using currently to stamp
let clickSound; // A vvariable sound to hold the sound effect when we click the mouse


//creating a canvas with the proportions of 600x600
async function setup() {
    createCanvas(600, 600);
    background('#EEF9FF') // Coolors.co as always
    imagemode(CENTER) // The very center of the image will be the point of origin when I click on the canvas

    // Load all the images into the array
    stampImages = await loadImages('assets/images/image1.png');
    stampImages = await loadImages('assets/images/image2.png');
    stampImages = await loadImages('assets/images/image3.png');
    stampImages = await loadImages('assets/images/image4.png');
    stampImages = await loadImages('assets/images/image5.png');


    // Load the sound effect for when we click the mouse
    clickSound = await loadSound('assets/sounds/meow.mp3');
}


function draw() {



}
