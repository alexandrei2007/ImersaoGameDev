let imgCenario;
let imgPersonagem;
let imgInimigo;
let cenario;
let somDoJogo;
let somDoPulo;
let personagem
let inimigo;

const matrizInimigo = [
    [0, 0],
    [104, 0],
    [208, 0],
    [312, 0],
    [0, 104],
    [104, 104],
    [208, 104],
    [312, 104],
    [0, 208],
    [104, 208],
    [208, 208],
    [312, 208],
    [0, 312],
    [104, 312],
    [208, 312],
    [312, 312],
    [0, 418],
    [104, 418],
    [208, 418],
    [312, 418],
    [0, 522],
    [104, 522],
    [208, 522],
    [312, 522],
    [0, 626],
    [104, 626],
    [208, 626],
    [312, 626],
  ];

  const matrizPersonagem = [
    [0, 0],
    [220, 0],
    [440, 0],
    [660, 0],
    [0, 270],
    [220, 270],
    [440, 270],
    [660, 270],
    [0, 540],
    [220, 540],
    [440, 540],
    [660, 540],
    [0, 810],
    [220, 810],
    [440, 810],
    [660, 810],
  ];

  const matrizInimigoGrande = [
    [0,0],
    [400,0],
    [800,0],
    [1200,0],
    [1600,0],
    [0,400],
    [400,400],
    [800,400],
    [1200, 400],
    [1600, 400],
    [0,800],
    [400, 800],
    [800, 800],
    [1200, 800],
    [1600, 800],
    [0, 1200],
    [400, 1200],
    [800, 1200],
    [1200, 1200],
    [1600, 1200], 
    [0, 1600],
    [400, 1600],
    [800, 1600],
    [1200, 1600],
    [1600, 1600],
    [0, 2000],
    [400, 2000],
    [800, 2000],
  ];

  const matrizInimigoVoador = [
    [0,0],
    [200, 0],
    [400, 0],
    [0, 150],
    [200, 150],
    [400, 150],
    [0, 300],
    [200, 300],
    [400, 300],
    [0, 450],
    [200, 450],
    [400, 450],
    [0, 600],
    [200, 600],
    [400, 600],
    [0, 750],
  ];

function preload(){
    imgCenario = loadImage('images/cenario/floresta.png');
    imgPersonagem = loadImage('images/personagem/correndo.png');
    imgInimigo = loadImage('images/inimigos/gotinha.png');
    somDoJogo = loadSound('sounds/trilha_jogo.mp3');
    somDoPulo = loadSound('sounds/somPulo.mp3');
}

function setup() {
    //frameRate(30);

    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imgCenario, 3);
    personagem = new Personagem(matrizPersonagem, imgPersonagem, 0, 110, 135, 220, 270, somDoPulo);
    inimigo = new Inimigo(matrizInimigo, imgInimigo, width - 52, 52, 52, 104, 104);

    //somDoJogo.play();
    //somDoJogo.loop();
}

function keyPressed() {
    if (key === 'ArrowUp') {
        personagem.pula();
    }
  }

function draw() {
    // background(imgCenario);
    // circle(mouseX, mouseY, 50);

    //image(imgCenario, 0, 0, width, height);

    cenario.exibe();
    cenario.move();

    personagem.exibe();
    personagem.aplicaGravidade();

    inimigo.exibe();
    inimigo.move();

    if (personagem.estaColidindo(inimigo)) {
        console.log('colidiu');

        // stop do evento draw: 
        // https://p5js.org/reference/#/p5/noLoop
        noLoop();
    }

}

