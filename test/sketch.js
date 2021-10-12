let pattern; // Declare object

function setup() {
  createCanvas(710, 400);
  // Create object
  pattern = new Varonoi(136, 253, 186, 236, 230, 263, 230, 317, 165, 345, 129, 301);
}

function draw() {
 
  pattern.display();
}

