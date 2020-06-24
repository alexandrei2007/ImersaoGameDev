class Cenario {
    constructor (img, velocidade) {
      this.img = img;
      this.velocidade = velocidade;
      this.x1 = 0;
      this.x2 = width;
    }
    
    exibe(){
     image(this.img, this.x1, 0, width, height);
      image(this.img, this.x2, 0, width, height);
    }
    
    move() {
      this.x1 -= this.velocidade;
      this.x2 -= this.velocidade;
      
      if (this.x1 < -width)
        this.x1 = width;
      if (this.x2 < -width)
        this.x2 = width;
    }
    
  }