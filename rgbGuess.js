var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var computerPickedColor = colors[unifySquareColors()];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.querySelector("#reset");
var colorGameDisplay = document.querySelector("h1");

colorDisplay.textContent = computerPickedColor;

resetButton.addEventListener("click", function(){
	//generate al new colors
	colors = generateRandomColors(6);
	//pick a random color from the array
	computerPickedColor = colors[unifySquareColors()];
	//change colour display to match picked colour
	colorDisplay.textContent = computerPickedColor;
	//change the colors of the squares on page
	for(var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	colorGameDisplay.style.backgroundColor = "grey";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colours";

})


for(var i = 0; i<squares.length; i++){
	//Initial assignment of colors to the squares
	squares[i].style.backgroundColor = colors[i];

	//Adding in click listeners to allow for selection of squares
	squares[i].addEventListener("click", function(){
		userPickedColor = this.style.backgroundColor
		console.log("clicked " + userPickedColor);
		console.log("userPickedColor: " + userPickedColor + 
					" computerPickedColor" + computerPickedColor);
		if (this.style.backgroundColor == computerPickedColor) {
			console.log("Correct");
			messageDisplay.textContent = "Well Done";
			colorChange(computerPickedColor);
			colorGameDisplay.style.backgroundColor 
					= computerPickedColor;
			resetButton.textContent = "Play Again?";
		}else{
			console.log("Wrong");
			this.style.backgroundColor = "grey";
			messageDisplay.textContent = "Try Again!";
		}
	})
}

function generateRandomColors(totalSquares){
	var colorArray = [];
	for(var i = 0; i < totalSquares; i++){
		colorArray.push(randomColor());
	}
	return colorArray;
}

function randomColor(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function unifySquareColors(){
	return Math.floor(Math.random() * colors.length);
}

function colorChange(color){
	console.log("colorchange");
	for(var i=0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}

}