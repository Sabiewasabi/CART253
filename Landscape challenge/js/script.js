function setup (){
    createCanvas (640,640);
}

function draw(){
    background('#CF2913');
    
    //Draw land
    fill('#020122');
    rect(0,500,800,200)

    //Draw moon 
    push();

    fill('#FFF3D1');
    ellipse(320,280,150);
  
    fill('#020122')
    triangle(200,350,158, 100, 20,300);
     fill('#020122')
    triangle(100,500,70, 100, 20,300);

    pop();


}




    
