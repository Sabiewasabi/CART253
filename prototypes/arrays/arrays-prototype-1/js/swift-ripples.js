//Raincheck

//Author : Sabrina Rath

//Description:

//Variables
//List of droplets
let droplets = [];

//creating a canvas with the proportions of 600x600
function setup() {
    createCanvas(600, 600);
    //Fill the array with 100 water droplets / IFY, I say "counter" instead of "i" because it's less confusing. I dont let single lettered varaibles.
    for (let counter = 0; counter < 100; counter++) {
        droplets.push(new Droplet());
    }
}

function draw() {
    //Placeholder color for the background, will change later
    background(0);
    //Draw and update droplet size and position
    for (droplet of droplets) {
        droplet.show();
        droplet.updates();
    }
}

//Building custom droplet class to create a droplet object with properties and methods which is better than creating a variable for droplet size, position, and speed.
//Referenced from past lectures in college and the p5.js reference page.
class droplet {
    constructor() {
        //Random x and y position for the droplets accross the whole canvas.
        this.x = random(width);
        this.y = random(height);
        this.speed = random(1.5);
        this.size = random(2, 6);
    }
}
