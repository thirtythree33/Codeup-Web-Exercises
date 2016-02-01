// function sayHello() {
// 	console.log("HELLO");
// 	alert('alert');
// 	console.log("Brian")
// 	console.log("today is really Tuesday")
// }

// function sayHello(name) {
// 	console.log("HELLO");
// 	alert('alert');
// 	console.log(name)
// 	console.log("today is really Tuesday")
// }

// sayHello("George");

// function sayHello(name) {
// 	console.log("HELLO");
// 	alert('alert');
// 	console.log(name)
// 	console.log("today is really Tuesday")
// }

// sayHello("George");


// var name = "Chris";

// function sayHello(name) {
// 	console.log("HELLO");
// 	console.log(name);
// }

// sayHello("George");

// console.log(name)


// function sum(numberOne, numberTwo) {
// 	var result = numberOne + numberTwo;
// 	return result;
// }

// console.log(sum(10, 11));

function toGoldBars(numberOfUSD) {
	return numberOfGoldBars / 500000;
}

function toUSD(numberOfGoldBars) {
	return numberOfGoldBars * 500000;
}

var goldBarCount = prompt("How many gold bars do you have?")
console.log(toUSD(goldBarCount));
// console.log(toUSD(goldBarCount));

function isThisEnoughForATank(value, currency) {
	var costOfTank = 7500000;
	if(currency ==="USD"){
		if(value>=costOfTank){
			return true;
		} else {
			return false;
		}
	} else if (currency === "GOLD") {
		var usd = toUSD(value);
		if(usd>=costOfTank){
			return true;
		} else {
			return false;
		}
	}
}

var kevinHasEnough = isThisEnoughForATank(3.5,"GOLD")
console.log(kevinHasEnough);


