//Mofusand Party

//Author : Sabrina Rath

//Description: 


//Variables
let stampImages = []; //An array to hold all my images
let currentStamp = 0; // Keeps track of which image we are using currently to stamp
let clickSound; // A vvariable sound to hold the sound effect when we click the mouse


//creating a canvas with the proportions of 600x600
//The async kind of just popped up, I'm not sure why it is there, but it works so I guess I'll keep it
async function setup() {
    createCanvas(600, 600);
    background('#EEF9FF') // Coolors.co as always
    imageMode(CENTER) // The very center of the image will be the point of origin when I click on the canvas

    // Load all the images into the array
    stampImages[0] = await loadImage('assets/images/image1.png');
    stampImages[1] = await loadImage('assets/images/image2.png');
    stampImages[2] = await loadImage('assets/images/image3.png');
    stampImages[3] = await loadImage('assets/images/image4.png');
    stampImages[4] = await loadImage('assets/images/image5.png');


    // Load the sound effect for when we click the mouse
    clickSound = await loadSound('assets/sounds/meow.mp3');
}


function draw() {

    //Keeping this empty because I don't want anything to be drawn on the canvas until I click the mouse

}

function mousePressed() {
    // Check if the sound is loaded and if the images are loaded
    if (clickSound && stampImages.length === 5) {
        //Play the sound effect when the mouse is clicked
        clickSound.play();

        // Draw the current image at the mouse position
        image(stampImages[currentStamp], mouseX, mouseY);

        // This will loop through the images in the array
        currentStamp = (currentStamp + 1) % stampImages.length;
    }
}