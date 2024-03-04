function setup() {
  createCanvas(400, 400);
  background(220);
  
   for(x = 0; x < 3; x ++ )
   plantTree( random(0, width), 200,random(10,50), );

}
function draw(){
  
}

function plantTree(xPos, yPos, trunk,){
  fill(100, 80, 60);
  noStroke();
  rect(xPos, yPos, 35, trunk);
  fill(60, 150, 70);
  triangle(xPos - 30,200, xPos + 20, yPos - 110, xPos + 65, 200);
}

  
  // plantTree(250, 130, 60, color(60, 140, 50));

// noStroke();
//   fill(30, 70, 30);
//   triangle(100, 130, 150, 20, 200, 130);
  
//   noStroke();
//   fill(70, 50, 30)
//   rect(130, 130, 35, 50);