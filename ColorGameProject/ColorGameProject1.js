alert("Connected!");

var gameFunctionObj={

	init: function(){

		gameFunctionObj.setUpModeButtonListener();

		gameFunctionObj.squareColorChangeAnimation();

		gameFunctionObj.resetButtonListener();

		colorDisplay.textContent = pickedColor;
	},

	resetButtonListener: function(){

		resetButton.addEventListener("click", function(){
		if(this.textContent == "Play Again?"){
			this.textContent = "New Colors";
		}
		gameFunctionObj.buttonAction(numberColors, display);
		});
	},

	squareColorChangeAnimation: function(){

		for(var i=0; i<squares.length; i++){
			//add initial color
			gameFunctionObj.squareColorAssignment(colors, numberColors);
			//add click listeners
			squares[i].addEventListener("click", function(){
				if(this.style.backgroundColor != pickedColor){
					this.style.backgroundColor = "#232323";
					messageDisplay.textContent = "Try Again!";
				}else{
					messageDisplay.textContent = "Correct!";
					gameFunctionObj.changeColorsAll(pickedColor, numberColors);
					h1.style.backgroundColor = pickedColor;
					resetButton.textContent = "Play Again?";
				}
			});
		}
	},

	setUpModeButtonListener: function(){
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

				gameFunctionObj.buttonAction(numberColors, display);

			});
		}
	},

	buttonAction: function(numColors, displayMode){
		colors = gameFunctionObj.generateRandomColors(numColors);
		pickedColor = gameFunctionObj.pickColor();
		colorDisplay.textContent = pickedColor;
		gameFunctionObj.squareColorAssignment(colors, numColors, displayMode);
		messageDisplay.textContent = "";
		h1.style.backgroundColor = "steelblue";
	},

	squareColorAssignment: function(colors, numColors, displayMode){
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
	},

	randomColor: function(){
		var redNum = Math.floor(Math.random() * 256);
		var greenNum = Math.floor(Math.random() * 256);
		var blueNum = Math.floor(Math.random()*256);
		var finalColor = "rgb("+ redNum + ", " + greenNum + ", " + blueNum + ")";
		return finalColor;
	},

	generateRandomColors: function(num){
		//make an array; add num random colors to arr and return;
		var arr=[];
		for(var i=0; i<num; i++){
			arr.push(gameFunctionObj.randomColor());
		}

		return arr;
	},

	pickColor: function(){
		var colorArrayIndex = Math.floor(Math.random() * colors.length);
		return colors[colorArrayIndex];
	},

	changeColorsAll: function(color, numberColors){
		for(var i=0; i<numberColors;i++){
			squares[i].style.background = color;
		}
	}
}

var numberColors=6;
var colors = gameFunctionObj.generateRandomColors(numberColors);
var squares = document.querySelectorAll(".square");
var pickedColor = gameFunctionObj.pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");
var display = "block";

gameFunctionObj.init();



