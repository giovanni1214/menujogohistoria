x=150;
y=120;
xq=37;
yq=130;
placar=0;
opcao=1;

tela='menu'

respostas = {"aab1": 4, "aab2": 1, "aab3": 3, "aab4":  4, "aab5": 2,"aab6": 3, "aab7": 2, "aab8": 1, "aab9": 1, "aab10": 4, "aab11": 3, "aab12": 4, "aab13": 2, "aab14": 1, "aab15": 2, "aab16": 3, "aab17": 4, "aab18": 2, "aab19": 1, "aab20": 3};
telaTeste = {
  'menu': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-100
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<3){
      y=y+100
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == 1){
        tela='aab1'
        x = 40;
        y = 190;
      }
      else if(opcao == 2){
        tela='instrucoes'
      }
      else if(opcao == 3){
        tela='creditos'
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'creditos': (key) => {
    if(key == "Escape") tela = 'menu';
  },
  'instrucoes': (key) => {
    if(key == "Escape") tela = 'menu';
  },
  'aab1': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1
      tela='aab2'
        
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab2'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab2': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1 
      tela='aab3'   
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab3'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab3': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1     
      tela='aab4'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab4'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab4': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1    
      tela='aab5'  
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab5'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab5': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
     if(opcao == respostas[tela]){
        placar += 1   
      tela='aab6' 
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab6'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab6': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1    
      tela='aab7'    
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab7'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab7': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1     
      tela='aab8'     
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab8'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab8': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1     
      tela='aab9'    
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab9'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab9': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1    
      tela='aab10'   
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab10'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab10': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
     if(opcao == respostas[tela]){
        placar += 1    
      tela='aab11'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab11'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab11': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1     
      tela='aab12'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab12'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab12': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1     
      tela='aab13'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab13'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab13': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
     if(opcao == respostas[tela]){
        placar += 1    
      tela='aab14'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab14'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab14': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1   
      tela='aab15'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab15'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab15': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1   
      tela='aab16'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab16'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab16': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1    
      tela='aab17'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab17'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab17': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1    
      tela='aab18'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab18'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab18': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1   
      tela='aab19'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab19'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab19': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1    
      tela='aab20'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab20'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab20': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1    
      tela='acertos'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='acertos'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'acertos': (key) => {
    x=150
    y=120
    placar=0
    opcao=1
    tela = 'menu';
  }
}
  

function preload()
{
  placar = 0
  telas = {
  'menu': menu,
  'aab1': fase1,
  'aab2': fase2,
  'aab3': fase3,
  'aab4': fase4,
  'aab5': fase5,
  'aab6': fase6,
  'aab7': fase7,
  'aab8': fase8,
  'aab9': fase9,
  'aab10': fase10,
  'aab11': fase11,
  'aab12': fase12,
  'aab13': fase13,
  'aab14': fase14,
  'aab15': fase15,
  'aab16': fase16,
  'aab17': fase17,
  'aab18': fase18,
  'aab19': fase19,
  'aab20': fase20,
  'creditos': creditos,
  'instrucoes': instrucoes,
  'acertos': acertos
}
  
img=loadImage("preside.jpg");
img1=loadImage("preside.jpg");
img2=loadImage("preside.jpg");
img3=loadImage("preside.jpg")
img4=loadImage("birdbird.jpg")
img5=loadImage("birdbird.jpg")
img6=loadImage("gigio.jpg")

}

function setup(){
  createCanvas(500,500)
}

function draw(){
  background(img4);
  telas[tela]();
}

function drawPlacar(){
  text(`Pontos: ${placar}`, 40, 400, 300, 50)
}

function menu(){
  rect(x,y,185,45)
  textSize(34)
  text("HISTORIANDO", 170, 50)
  textSize(32)
  text("Iniciar", 195, 160)
  text("Instruções", 180, 250)
  text("Créditos", 195, 350)
  textFont(NORMAL)
}

function fase1(){
  
  background(img5);
  rect(xq,yq,220,28)
  textStyle(NORMAL)
    textSize(16);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 1: Em que ano o samba foi elevado a categoria de canção popular nacional:",20,20,460,260);
  textSize(14)
    text("A) 1980."+"\n", 45, 150);
    text("B) 1955."+"\n",45, 175);
    text("C) 1940."+"\n",45, 200);
    text("D) 1930."+"\n",45, 225);
     drawPlacar()
}

function fase2(){
  background(img5);
  rect(xq,yq,290,25)
  textStyle(NORMAL)
    textSize(16);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 2: Em que ano Juscelino Kubitschek realizou a inauguração de Brasília, a capital do Brasil:",20,20,450,260);
  textSize(13)
    text("A) 1960."+"\n", 45, 150);
    text("B) 1968."+"\n",45, 175);
    text("C) 1958."+"\n", 45, 200);
    text("D) 1971."+"\n",45,225);
    drawPlacar()
 
}

function fase3(){
  background(img5);
    rect(xq,yq,450,28)
  textStyle(NORMAL)
    textSize(16);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 3: Quantos anos Getúlio Vargas governou o país.",20,20,480,260);
  textSize(13)
    text("A) 14 anos."+"\n", 40, 150);
    text("B) 20 anos."+"\n",40, 175);
    text("C) 15 anos."+"\n", 40, 200);
    text("D) 10 anos."+"\n",40, 225);
    drawPlacar()
}
function fase4(){
  background(img5);
  rect(xq,yq,460,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text("QUESTÃO 4: Que ano ocorreu a Proclamação da República no Brasil?",20,20,475,260);
  textSize(10)
    text("A) 1888."+"\n", 39, 150);
    text("B) 1945."+"\n",39, 175);
    text("C) 1867."+"\n", 39, 200);
    text("D) 1889."+"\n",39, 225);
    drawPlacar()
}


function fase5(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,220,28)
    textSize(16);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 5: Quem assumiu o governo provisoriamente?",20,20,490,260);
  textSize(13);
    text("A) D. Pedro II."+"\n", 40, 150);
    text("B) Getúlio Vargas. "+"\n",40, 175);
    text("C) Deodoro da Fonseca."+"\n", 40, 200);
    text("D) Juscelino Kubitschek."+"\n",40, 225);
    drawPlacar()
}

function fase6(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq, 200,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 6: Com a Proclamação da República, o Brasil foi dividido em cinco fases. Qual dessas afirmativas, está na linha do tempo corretamente?.",20,20,470,450);
    textSize(13);
    text("A) Primeira República - Governo democrático - Era Vargas - Nova República - Ditadura Civil Militar."+"\n", 40, 150);
    text("B) Era Vargas - Governo democrático - Ditadura Civil Militar - Primeira República - Nova República."+"\n",40, 175);
    text("C) Primeira República - Era Vargas - Governo democrático - Ditadura Civil Militar - Nova República."+"\n", 40, 200);
    text("D) Nova República - Primeira República - Ditadura Civil Militar - Governo democrático - Era Vargas."+"\n",40, 225);
    drawPlacar()
}
function fase7(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,360,28)
    textSize(16);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 7: Quando ocorreu os governos democráticos?",20,20,480,450);
    textSize(13);
    text("A) 1930 a 1945."+"\n", 40, 150);
    text("B) 1945 a 1964. "+"\n",40, 175);
    text("C) 1889 a 1930."+"\n", 40, 200);
    text("D) 1964 a 1985."+"\n",40, 225);
    drawPlacar()
}
function fase8(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,250,28)
    textSize(16);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 8: O fim da República velha ocorreu com:",20,20,450,260);
  textSize(13)
    text("A) Um movimento de oposição a oligarquia cafeeira, conhecido como Revolução de 1930."+"\n", 40, 150);
    text("B) Estudantes e trabalhadores se uniram em um movimento."+"\n",40, 175);
    text("C) O povo se reuniu contra Vargas em 1983."+"\n", 40, 200);
    text("D) O povo se reuniu para eleger outro presidente em 1945."+"\n",40, 225);
    drawPlacar()
}
function fase9(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,419,28)
    textSize(16);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 9: Em que ano ocorreu a Era Vargas?",20,20,350,280);
  textSize(13)
    text("A) 1930 a 1945"+"\n", 40, 150);
    text("B) 1889 a 1930"+"\n",40, 175);
    text("C) 1930 a 1945"+"\n", 40, 200);
    text("D) 1985 até os dias atuais."+"\n",40, 225);
    drawPlacar()
}
function fase10(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,415,28)
    textSize(16);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 10: Em que dia, mês e ano foi proclamado a República do Brasil?",20,20,260,260);
  textSize(13)
    text("A) 16 de dezembro de 1900."+"\n", 40, 150);
    text("B) 13 de setembro de 1887."+"\n",40, 175);
    text("C) 14 de outubro de 1888."+"\n", 40, 200);
    text("D) 15 de novembro de 1889."+"\n",40, 225);
    drawPlacar()
}
function fase11(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,415,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 11: O que foi o Mercantilismo?",20,20,480,260);
  textSize(13)
    text("A) O surgimento das fábricas e as novas relações estabelecidas entre trabalhadores e donos dos meios de produção."+"\n", 40, 150);
    text("B) Teoria política e econômica que defende que alguém deve ter o poder absoluto."+"\n",40, 175);
    text("C) Conjunto de práticas e ideias econômicas desenvolvidas na Europa entre o séc. XV e XVIII."+"\n", 40, 200);
    text("D) Nova filosofia politica e teoria liberal desenvolvidas na Europa entre o séc. XV e XVIII."+"\n",40, 225);
    drawPlacar()
}
function fase12(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,415,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 12: Anita Garibaldi participou da:",20,20,480,260);
  textSize(13)
    text("A) Guerra dos Canudos."+"\n", 40, 150);
    text("B) Guerra dos Mascates."+"\n",40, 175);
    text("C) Inconfidência Mineira."+"\n", 40, 200);
    text("D) Revolução Farroupilha."+"\n",40, 225);
    drawPlacar()
}
function fase13(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,415,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 13: Qual o objetivo de Martinho Lutero ao iniciar a Reforma Protestante?" ,20,20,480,260);
  textSize(13)
    text("A) Reafirmar os discursos católicos."+"\n", 40, 150);
    text("B) Contestar a venda de indulgências, o culto a relíquias e santos."+"\n",40, 175);
    text("C) Iniciar uma nova classe social."+"\n", 40, 200);
    text("D) Permitir o casamento dos sacerdotes."+"\n",40, 225);
    drawPlacar()
}
function fase14(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,415,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 14: Que nome recebe uma sociedade em que os grupos sociais são determinados pelo nascimento e marcado pela desigualdade?",20,20,480,460);
  textSize(13)
    text("A) Mobilidade Social."+"\n", 40, 150);
    text("B) Metalismo."+"\n",40, 175);
    text("C) Hereditária."+"\n", 40, 200);
    text("D) Estamental."+"\n",40, 225);
    drawPlacar()
}
function fase15(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,415,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 15: A frase 'O Estado sou eu' , determina que regime político?",20,20,480,460);
  textSize(13)
    text("A) Democracia."+"\n", 40, 150);
    text("B) Absolutismo."+"\n",40, 175);
    text("C) Imperialismo."+"\n", 40, 200);
    text("D) Parlamentarismo."+"\n",40, 225);
    drawPlacar()
}
function fase16(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,415,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 16: Que grupo social representa o 2º Estado?",20,20,480,260);
  textSize(13)
    text("A) Alto e baixo Clero."+"\n", 40, 150);
    text("B) Alta e baixa burguesia."+"\n",40, 175);
    text("C) Nobreza de Toga e de Espada."+"\n", 40, 200);
    text("D) Rei e 1º ministro."+"\n",40, 225);
    drawPlacar()
}
function fase17(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,415,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 17: Que característica do Mercantilismo determinava que a importação deveria ser menor que a exportação?",20,20,480,460);
  textSize(13)
    text("A) Metalismo. "+"\n", 40, 150);
    text("B) Protecionismo Alfandegário."+"\n",40, 175);
    text("C) Colonialismo."+"\n", 40, 200);
    text("D) Balança Comercial Favorável."+"\n",40, 225);
    drawPlacar()
}
function fase18(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,415,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 18: Que pensador e intelectual do Antigo Regime, ensina uma nova maneira de se fazer política, onde a ética e a moral são 'separadas' da política?",20,20,480,260);
  textSize(12)
    text("A) Rodes."+"\n", 40, 150);
    text("B) Maquiavel."+"\n",40, 175);
    text("C) Morus."+"\n", 40, 200);
    text("D) Leviatã."+"\n",40, 225);
    drawPlacar()
}
function fase19(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,450,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 19: Na Monarquia Absolutista o rei tem em suas mãos os seguintes poderes:",20,20,480,260);
  textSize(11)
    text("A) Judiciário, legislativo e executivo."+"\n", 40, 150);
    text("B) Monárquico, legislativo e Moderador. "+"\n",40, 175);
    text("C) Moderador, parlamentarista e judicial."+"\n", 40, 200);
    text("D) Autoritário, ditador e moderador. "+"\n",40, 225);
    drawPlacar()
}
function fase20(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,415,28)
    textSize(15);
    stroke(1)
    textAlign(LEFT);
    text( "QUESTÃO 20: Complete: A história do Brasil compreende, tradicionalmente, a chegada dos ___",20,20,480,260);
  textSize(13)
    text("A) Italianos. "+"\n", 40, 150);
    text("B) Espanhóis."+"\n",40, 175);
    text("C) Portugueses."+"\n", 40, 200);
    text("D) Alemães."+"\n",40, 225);
    drawPlacar()
}
function acertos(){
    background(img1);
  textSize(24)
    text(`Você conseguiu acertar ${placar} questões!`, 50, 50)
}

function instrucoes(){
  background(img3)
  textStyle()
  textSize(16);
    stroke(1)
    textAlign(LEFT);
    text("Ano: 5º ano fundamental."+"\n"+"Materia: Historia."+"\n"+"Resumo: Um super quiz visando melhoria no aprendizado na matéria de História para alunos do fundamental! Descrever os processos de formação e consolidação das monarquias e suas principais características com vistas à compreensão das razões da centralização política.",20,20,260,260);
 

}
function creditos(){
  background(img3)
  textSize(16);
    stroke(23)
    textAlign(LEFT);
    image(img6, 90,90,140,150);
    text("Aluno: Giovanni Paulo dos Santos."+"\n", 80, 300)
}


function keyPressed(){
  telaTeste[tela](key)

}