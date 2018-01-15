alert("Connected!");

function changeColorsAll(color, numberColors){
	for(var i=0; i<numberColors;i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var colorArrayIndex = Math.floor(Math.random() * colors.length);
	return colors[colorArrayIndex];
}

function generateRandomColors(num){
	//make an array; add num random colors to arr and return;
	var arr=[];
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var redNum = Math.floor(Math.random() * 256);
	var greenNum = Math.floor(Math.random() * 256);
	var blueNum = Math.floor(Math.random()*256);
	var finalColor = "rgb("+ redNum + ", " + greenNum + ", " + blueNum + ")";
	return finalColor;
}

function squareColorAssignment(colors, numColors, displayMode){
	for(var i=0; i<squares.length; i++){
		if(numColors == 3 && i>=3){
			squares[i].style.display = displayMode;
		}
		else{
			if(squares[i].style.display == "none")
				squares[i].style.display = displayMode;
			squares[i].style.backgroundColor = colors[i];
		}
	}
}

function buttonAction(numColors, displayMode){
	colors = generateRandomColors(numColors);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	squareColorAssignment(colors, numColors, displayMode);
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
}

function setUpModeButtonListener(){
	for(var i=0; i<modeButton.length; i++){

		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");

			this.classList.add("selected");

			if(this.textContent == "Easy"){
				numberColors = 3;
				display = "none";
			}else if(this.textContent == "Hard"){
				numberColors = 6;
				display = "block";
			}

			buttonAction(numberColors, display);

		});
	}
}

function squareColorChangeAnimation(){

	for(var i=0; i<squares.length; i++){
		//add initial color
		squareColorAssignment(colors, numberColors);
		//add click listeners
		squares[i].addEventListener("click", function(){
			if(this.style.backgroundColor != pickedColor){
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}else{
				messageDisplay.textContent = "Correct!";
				changeColorsAll(pickedColor, numberColors);
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play Again?";
			}
		});
	}
}

function resetButtonListener(){

	resetButton.addEventListener("click", function(){
		if(this.textContent == "Play Again?"){
			this.textContent = "New Colors";
		}
		buttonAction(numberColors, display);
	});
}

function init(){

	setUpModeButtonListener();

	squareColorChangeAnimation();

	resetButtonListener();

	colorDisplay.textContent = pickedColor;

}


var numberColors=6;
var colors = generateRandomColors(numberColors);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");
var display = "block";

init();


