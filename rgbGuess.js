var colors = [
	"rgb(255, 255, 255)",
	"rgb(255, 0, 255)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(0, 0, 0)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[randomColor()];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

colorDisplay.textContent = pickedColor;


for(var i = 0; i<squares.length; i++){
	//Initial assignment of colors to the squares
	squares[i].style.backgroundColor = colors[i];

	//Adding in click listeners to allow for selection of squares
	squares[i].addEventListener("click", function(){
		console.log("clicked " + this.style.backgroundColor);
		if (this.style.backgroundColor == pickedColor) {
			console.log("Correct");
			messageDisplay.textContent = "Well Done";
			colorChange(pickedColor);
		}else{
			console.log("Wrong");
			this.style.backgroundColor = "grey";
			messageDisplay.textContent = "Try Again!";
		}
	})
}

function randomColor(){
	return Math.floor(Math.random() * colors.length);
}

function colorChange(color){
	console.log("colorchange");
	for(var i=0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}

}