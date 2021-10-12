// Jitter class
class Varonoi {
    constructor(verticeOne, verticeTwo, verticeThree, verticeFour, verticeFive, verticeSix, vertice7, vertice8, vertice9, verticeTen, verticeEl, vertice12) {
      this.verticeOne = verticeOne;
      this.verticeTwo = verticeTwo;
      this.verticeThree = verticeThree;
      this.verticeFour = verticeFour;
      this.verticeFive = verticeFive;
      this.verticeSix = verticeSix;
      this.vertice7 = vertice7;
      this.vertice8 = vertice8;
      this.vertice9 = vertice9;
      this.verticeTen = verticeTen;
      this.verticeEl = verticeEl;
      this.vertice12 = vertice12;
    }
  
    
  
    display() {
      line(this.verticeOne, this.verticeTwo, this.verticeThree, this.verticeFour);
      line(this.verticeFive,this.verticeSix, this.vertice7, this.vertice8);
      line(this.vertice9, this.verticeTen, this.verticeEl, this.vertice12);
    }
  }