class Pontuacao {
    constructor (){
        this.pontos = 100;
    }

    exibe() {
        textSize(50);
        textAlign(RIGHT);
        fill("#fff");
        text(this.pontos, width - 50, 50);
    }

    adicionarPonto() {
        this.pontos += 10;
    }
}