let imgCenario;
let imgPersonagem;
let cenario;
let som;
let personagem

function preload(){
  imgCenario = loadImage('images/cenario/floresta.png');
  imgPersonagem = loadImage('images/personagem/correndo.png');
  som = loadSound('sounds/trilha_jogo.mp3');
}

function setup() {
  frameRate(30);
  
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imgCenario, 3);
  personagem = new Personagem(imgPersonagem);
  //som.play();
  //som.loop();
}

function draw() {
  //background(imgCenario);
  // circle(mouseX, mouseY, 50);
  
  //image(imgCenario, 0, 0, width, height);
  
  cenario.exibe();
  cenario.move();
  personagem.exibe();
  
  //image(imgPersonagem, 0, height - 150, 110, 135, 0, 0, 220, 270);
}

