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
}