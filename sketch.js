let tela; 
tela = 0


function setup() {
  createCanvas(400, 600);
}

function draw() {
  switch (tela){
    case 0:
    // Background
    background("blue")
      
    // Botões
    rect(-20, -10, 600, 150, 25);
    rect(120, 200, 170, 70, 10);
    rect(120, 300, 170, 70, 10);
      
    // Texto
    textSize(20);
    text(`Bem-vindo ao jogo Esquerda e Direita!`, 30, 90);
    textSize(30);
    textStyle(NORMAL);
    text(`Iniciar`, 164, 245)
    text(`Instruções`, 140, 345)
    break;
    
    case 1:
    // Background
    background("rebeccapurple")
      
    // Botões
    rect(120, 200, 170, 70, 10);
    rect(120, 300, 170, 70, 10);
    
    // Texto
    text(
    `    Jogador 1: 
    escolha o lado que esconderá o 🍪`,
    20, 105
    );
    textStyle(NORMAL);
    textSize(20)
    text(`Esquerda`, 163, 242)
    text(`Direita`, 175, 340)
    
    // Botão voltar
    rect(320, 530, 50, 50, 10);
    textSize(20);
    textStyle(BOLD);
    text("↲", 340, 560);
    break;
    
    case 2:
    // Background
    background("papayawhip");
      
    // Botões
    rect(320, 530, 50, 50, 10);
    rect(0, 140, 400, 180, 10);
    
    // Texto
    textStyle(BOLD);
    textSize(20);
    text("INSTRUÇÕES:", 10, 120)
    textSize(15);
    textStyle(NORMAL);
    textAlign(LEFT)
    text(`
    • O primeiro jogador escolherá a esquerda ou direita para 
    esconder o biscoito. 
    • O segundo jogador tentará adivinhar onde o biscoito está. 
    • Caso o segundo escolha
    corretamente, ele ganha o jogo. 
    • Caso contrário, o primeiro jogador vence.
    `, 20, 140, 400, 250);
    textSize(20);
    textStyle(BOLD);
    text("↲", 340, 560);
    break;
  // Se a tela está na 3, significa que o Jogador 1 escolheu a       Esquerda
    
    case 3:
    // Background
    background("salmon");
      
    // Botões
    rect(-20, -10, 600, 150, 25);
    rect(120, 200, 170, 70, 10);
    rect(120, 300, 170, 70, 10);
    
    // Texto
    textSize(20);
    text(`Jogador 2, escolha um lado:`, 70, 90);
    textStyle(NORMAL);
    textSize(20)
    text(`Esquerda`, 163, 242)
    text(`Direita`, 175, 340)
      
    // Botão voltar
    rect(320, 530, 50, 50, 10);
    textSize(20);
    textStyle(BOLD);
    text("↲", 340, 560);
    break;
  // Se a tela está na 4, significa que o Jogador 1 escolheu a Direita
    case 4:
    background("limegreen")
      
    // Botões
    rect(-20, -10, 600, 150, 25)
    rect(120, 200, 170, 70, 10);
    rect(120, 300, 170, 70, 10);
      
    // Texto
    textSize(20);
    text(`Jogador 2, escolha um lado:`, 70, 90);
    textStyle(NORMAL);
    textSize(20)
    text(`Esquerda`, 163, 242)
    text(`Direita`, 175, 340)
      
    // Botão voltar
    rect(320, 530, 50, 50, 10);
    textSize(20);
    textStyle(BOLD);
    text("↲", 340, 560);
    break;
    
    // Tela de Vitória
    case 5:
    background("gainsboro");
      
    // Botões
    rect(-10, 100, 600, 100, 15);
      
    // Texto
    textStyle(BOLD);
    text("🏆 PARABÉNS! 🏆", 115, 155);
    textStyle(NORMAL);
    textSize(15);
    text("Você venceu o jogo!", 135, 180);
    textSize(150);
    text("🍪", 120, 400);
      
    // Botão voltar
    rect(320, 530, 50, 50, 10);
    textSize(20);
    textStyle(BOLD);
    text("↲", 340, 560);
    break;
    
    case 6:
    // Background
    background("indianred")
      
    // Botões
    rect(-10, 100, 600, 100, 15);
      
    // Texto
    textStyle(BOLD);
    text("❌ PERDEU! ❌", 115, 155);
    textStyle(NORMAL);
    textSize(15);
    text("Você perdeu o jogo!", 135, 180);
    textSize(150);
    text("🍪❌", 10, 400);
      
    // Botão voltar
    rect(320, 530, 50, 50, 10);
    textSize(20);
    textStyle(BOLD);
    text("↲", 340, 560);
    break;
  }
  textSize(20)
  text(`${mouseX}, ${mouseY}`, 20, 20);
}

function mouseClicked(){
  if (mouseX > 120 && mouseX < 290 && mouseY > 200 && mouseY < 270){
    if (tela == 0){
      tela = 1;
    } else if (tela == 1){
      tela = 3;
    } else if (tela == 3){
      tela = 5
    } else if (tela == 4){
      tela = 6
    }
  }
  if (mouseX > 120 && mouseX < 290 && mouseY > 300 && mouseY < 370){
    if (tela == 0){
      tela = 2;
    }
    else if (tela == 1){
      tela = 4;
    } else if (tela == 3){
      tela = 6
    } else if (tela == 4){
      tela = 5
    }
  } 
  if (mouseX > 320 && mouseX < 370 && mouseY > 530 && mouseY < 580){
      tela = 0
    }
}
