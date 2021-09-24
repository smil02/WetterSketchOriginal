function setup() {
    createCanvas(1000, 700);
    background(80, 160, 250);
}

function draw() {
 
  //Gras
  fill("green");
  noStroke();
  rect(0, 600, 1000, 130);
 
  // Wolke 1
  fill("white");
  noStroke();
  circle(800, 250, 100);
  
    fill("white");
    noStroke();
    circle(730, 230, 100);
    
      fill("white");
      noStroke();
      circle(660, 250, 100);
      
  //Wolke 2
  fill("white");
  noStroke();
  circle(390, 380, 65);
  
    fill("white");
    noStroke();
    circle(350, 370, 65);
    
      fill("white");
      noStroke();
      circle(310, 380, 65);
}
