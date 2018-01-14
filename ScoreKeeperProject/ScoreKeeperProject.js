alert("Connected!");


var firstPlayerButton = document.getElementById("playerOne");
var secondPlayerButton = document.getElementById("playerTwo");
var resetButton = document.getElementById("Reset");
var numInput = document.querySelector("input");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");

var winningScore = document.querySelector("p span");
var winningScoreVal = 5;
var firstNum = Number(p1Display.textContent);
var secondNum = Number(p2Display.textContent);

function reset(){
	firstNum = 0;
	secondNum = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("green");
	p2Display.classList.remove("green");
}


firstPlayerButton.addEventListener("click", function(){
	if(firstNum<winningScoreVal){
		firstNum++;
		p1Display.textContent = firstNum;
	}else if(firstNum == winningScoreVal){
		p1Display.classList.add("green");
	}
});

secondPlayerButton.addEventListener("click", function(){
	if(secondNum<winningScoreVal){
		secondNum++;
		p2Display.textContent = secondNum;
	}else if(secondNum == winningScoreVal){
		p2Display.classList.add("green");
	}
});

numInput.addEventListener("change", function(){
	winningScore.textContent = this.value;
	winningScoreVal = Number(this.value);
	reset();
});

resetButton.addEventListener("click", function(){
	reset();
});