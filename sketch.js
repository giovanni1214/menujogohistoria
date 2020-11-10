//https://www.youtube.com/watch?v=IfEhdS87JeA

var x = 80;
var y = 100;
var opcao = 1;
var tela = 0;

	function preload()
{
img=loadImage("livrohistoryparaq.jpg");
}

	function setup() {
	createCanvas(400, 400)

}
	function draw() {
	background(img)
	if (tela==0)
	menu();
	if (tela==1)
	fase1();
	if (tela==2)
	instrucoes();
	if (tela==3)
	creditos();
}

	function menu() {
	rect(x, y, 170, 45)

	textSize(35);
	text("HISTORIANDO", 100, 50)
	textSize(24)
	text("JOGAR", 90, 130);
	text("INSTRUÇÕES", 90, 230);
	text("CRÉDITOS", 90, 330);
}

	function fase1 (){
	background(img);
	textSize(14);
	stroke(1)
	textAlign(LEFT);
	text( "QUESTÃO 1: O primeiro presidente do Brasil, após o fim da Monarquia, foi:", 20, 20, 260, 260);
	text("a) Campos Salles"+"\n", 40, 175);
	text("b) Hermes da Fonseca"+"\n", 40, 200);
	text("c) Afonso Penna"+"\n", 40, 225);
	text("d) Deodoro Da Fonseca"+"\n", 40, 250);
	text("e) Nilo Peçanha"+"\n", 40, 275);

}

	function instrucoes () {
	textStyle(BOLD);
	textSize(14);
	stroke(45);
	textAlign(LEFT);
	text("Ano: 7° ano fundamental "+"\n"+"Matéria: História, Responder aos fatos/acontecimentos historicos para aprimorar a habilidade na matéria de maneira divertida respondendo a um super quiz"+"\n"+" O game é caracterizado de forma interpretativa para os alunos estudarem de forma mais prática.", 20, 20, 260, 260);

}

	function creditos () {
	textSize(18);
	stroke(45);
	textAlign(LEFT);
	text("ALUNO DESENVOLVEDOR: "+"\n"+"Giovanni Paulo dos Santos", 20, 20, 260, 260);

}
	function keyPressed() {
	if(key == "ArrowUp" && y>130) {
	y=y-100;
	opcao=opcao-1;
	console.log(opcao)
}
	if(key=="ArrowDown" && y<300) {
	y=y+100;
	opcao=opcao+1;
	console.log(opcao)
}
	if(key=="Enter") {
	tela=opcao;
}
	if(key=="Escape") {
	tela=0
}

}