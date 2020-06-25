class Inimigo extends Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
        this.velocidade = 8;
    }
    
    // o inimigo move da direita para a esquerda
    move() {
      this.x = this.x - this.velocidade;
      
      if(this.x < -this.largura) {
          this.x = width;
      }
    }
  }