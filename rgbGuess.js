var colors = [
	"rgb(255, 255, 255)",
	"rgb(255, 0, 255)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(0, 0, 0)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;


for(var i = 0; i<squares.length; i++){
	//Initial assignment of colors to the squares
	squares[i].style.backgroundColor = colors[i];

	//Adding in click listeners to allow for selection of squares
	squares[i].addEventListener("click", function(){
		console.log("clicked " + this.style.backgroundColor);
		if (this.style.backgroundColor == pickedColor) {
			console.log("Corrent");
		}else{
			console.log("Wrong");
		}
	})
}

// squares[i].addEventListener("click", function(){
// 	if(this.backgroundColor == pickedColor){
// 		document.getElementById("result").textContent = "Correct";
// 	}else{
// 		document.getElementById("result").textContent = "Incorrect";
// 	}
// })