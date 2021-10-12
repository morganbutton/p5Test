



function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background('pink');
  flower(width/2, height/2);
  
  for(let i = 0; i < 8; i++){
     flower(20*i, 90);
  }
  for(let i = 0; i < 8; i++){
    flower(60*i, 320);
  }
 
}



