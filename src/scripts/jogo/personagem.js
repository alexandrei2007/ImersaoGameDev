class Personagem extends Animacao {
    constructor (matriz, imagem, x, largura, altura, larguraSprite, alturaSprite, somDoPulo) {
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
        this.yInicial = height - this.altura; // bottom da tela
        this.y = this.yInicial;        
        this.velocidadeDoPulo = 0;
        this.gravidade = 3;
        this.jumpCount = 0;
        this.maxJumps = 3;
        this.somDoPulo = somDoPulo;
    }

    pula() {
        
        if (this.jumpCount >= this.maxJumps)
            return;
        
        this.velocidadeDoPulo = -30;        
        this.jumpCount++;
        this.somDoPulo.play();
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadeDoPulo
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade
        
        if (this.y > this.yInicial)
        {
            this.y = this.yInicial;
            this.jumpCount = 0;
        }
    }
    
    estaColidindo(inimigo) {
        const precisao = .7;
        const colisao = collideRectRect(
          this.x, 
          this.y, 
          this.largura * precisao, 
          this.altura * precisao,
          inimigo.x,
          inimigo.y,
          inimigo.largura * precisao,
          inimigo.altura * precisao
        );
        
        return colisao;
      }

  }