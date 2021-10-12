function flower(xPos, yPos) {
  let centerSize = 20;
  let petalSize = 20;
  let petalNum = 6;
  let angle; 
  push();
  translate(xPos, yPos);
  //scale(this.scaleNum);
  fill('purple');
  circle(0, 0, centerSize);
  for(let i = 0; i < petalNum; i++){
      angle = 60;
      rotate(angle);
      stroke('white');
      fill('orange');
      circle(20, 0, petalSize);
  }
  pop();
  


 }

    

    
      
    
    
  