let img;
function setup(){
    createCanvas(800, 800);
    img = loadImage('cell.png');
}
function draw(){
   image(img, 224, 295,img.width/2, img.height/2);
   pattern(0, 0);
   pattern(27, -130);
   pattern(140, -10);
   pattern(110, 125);
   pattern(-30, 140);
   pattern(-135,20);
   pattern(-115,-120);

}