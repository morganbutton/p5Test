function pattern(x, y){
    push();
    beginShape();
        //top
       
        translate(x, y);
        strokeWeight(4);
        vertex(224, 295);
        vertex(272, 253);
        //right
        vertex(355, 281);
        vertex(372, 353);
        //bottom
        vertex(334, 402);
        vertex(247, 378);
        //connector
        vertex(224, 295);

   endShape();
   pop();
}