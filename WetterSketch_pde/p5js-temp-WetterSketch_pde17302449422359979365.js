function setup() {
    createCanvas(1000, 700);
    background(80, 160, 250);
    
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
      
   //See
    fill(0, 0, 255);
    noStroke();
    ellipse(700, 620, 300, 65);
    
    fill(80, 160, 250);
    noStroke();
    rect(555, 560, 300, 40);
    
      
   //Sonne
    fill("yellow");
    circle(120, 120, 80);
    noFill();
    
    strokeWeight(10);
    stroke("yellow");
    
    translate(120, 120);
  
    for(let i = 0; i<=8; i++) {
      line(50, 0, 100, 0);
      rotate(2 * PI / 8 * i);
      }
      
      translate(-120, -120);
}

function draw() {
  stroke(100, 100, 255);
  strokeWeight(1.5);
  
  let x = random(300,400);
  let y = random(414, 558);
   line(x,y,x,y + 40);
  stroke(80, 160, 250);
  strokeWeight(4);
  
  let x2 = random(300,400);
  let y2 = random(414,558);
   line(x2,y2,x2,y2 + 40);
}
