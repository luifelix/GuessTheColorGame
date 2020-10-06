var numSquares = 6;
var colors =[];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
resetButton.addEventListener("click", function(){
	reset();
})

colorDisplay.textContent = pickedColor;

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i = 0; i< modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			if(this.textContent == "Easy"){
				numSquares = 3;
			}else{
				numSquares = 6;
			}
			reset();
		});
	}
}

function setUpSquares(){
	for(var i =0; i<squares.length; i++){
		//add click listeners to the squares
		squares[i].addEventListener("click",function(){
			//grab color of clicked square and compared to clicked color
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				header.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		})
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	displayNewSquaresColors(colors);
	header.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";	
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}



function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function changeColors(color){
	//loop through all the squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match the given color
		squares[i].style.backgroundColor = color;
	}
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var colorReturn = "rgb(" + red + ", " + green + ", " + blue + ")";
	return colorReturn;
}

function displayNewSquaresColors(colors){
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
}

// easyBtn.addEventListener("click", function(){
// 	header.style.backgroundColor = "steelblue";
// 	easyBtn.classList.toggle("selected");
// 	hardBtn.classList.toggle("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	resetButton.textContent = "New Colors";
// 	displayNewSquaresColors(colors);
// 	for(var i = 3; i < 6; i++){
// 		squares[i].style.display = "none";
// 	}
// })

// hardBtn.addEventListener("click", function(){
// 	header.style.backgroundColor = "steelblue";
// 	easyBtn.classList.toggle("selected");
// 	hardBtn.classList.toggle("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	resetButton.textContent = "New Colors";
// 	displayNewSquaresColors(colors);
// 	for(var i = 3; i < 6; i++){
// 		squares[i].style.display = "block";
// 	}
// })
