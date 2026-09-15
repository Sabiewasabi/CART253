function setup (){
    createCanvas (640,640);
}

function draw(){
    background('#397367');
    
    //Draw land
    //Back
    fill('#5E5E5E');
    rect(0,350,800,300,20)

    //Middle
    fill('#393D3F ');
    rect(0,400,800,300,20)
    
    //Front
    fill('#333333');
    rect(0,500,800,300,20)


    //Draw moon 
    push();

    fill('#FFF3D1');
    ellipse(320,250,200);
  
    pop();
    //Drawing the mountains
    //Reminders that will be useful:
    //X-axis: 
    // 1.Increasing x moves the point to the right.
    //2.Decreasing x moves it to the left.
    //Y-axis:
    //1. Increasing y moves the point down.
    //2. Decreasing y moves it up.
    
    //Mountains
    push();

    fill(0)
    noStroke();
    triangle(80, 400, 400, 400, 250, 300);
    triangle(200, 400, 600, 400, 400, 270);
    triangle(50, 400, 300, 400, 200, 290);
    triangle(-50, 400, 150, 400, 100, 240);
    triangle(400, 400, 640, 400, 640, 240);

    fill('#DB162F');
    rect (100, 420, 100, 50);
    rect (300, 420, 100, 50);
    rect (500, 420, 100, 50);

    pop();
}




    
