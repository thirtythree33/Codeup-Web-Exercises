var colors = ["red", "blue", "green", "yellow"];
var rand = Math.floor(Math.random() * 10);
console.log(rand);

if(rand < colors.length) {
	console.log(colors[rand]);
} else {
	console.log("That number is not in the array");
}