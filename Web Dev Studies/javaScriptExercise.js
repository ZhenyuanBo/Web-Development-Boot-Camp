var firstName = prompt("What is your first name");
var lastName = prompt("What is your last name");
var age = prompt("What is your age");
console.log("Your full name is " + firstName + " " + lastName);
console.log("Your age is "+ age);

var daysAlive = 365*age;

console.log("Number of days you have been alive is " + daysAlive);
alert("You have been living for " + daysAlive + " days!");

if(age < 0){
	console.log("Age cannot be negative!");
} else if(age == 21){
	console.log("happy 21st birthday!");
}else if(Math.sqrt(age)%1 == 0){
	console.log("your age is a perfect square!");
}else if(age % 2!=0){
	console.log("you age is odd!");
}



var referenceNumber = 15;

while(true){
	// convert the input string into a number using Number()
	var guessNumber = Number(prompt("Please enter a number"));
	
	if(guessNumber < referenceNumber){
		alert("Your guess is lower than the secret number!");
	}else if(guessNumber > referenceNumber){
		alert("Your guess is larger than the secret number!");
	}else if(guessNumber === referenceNumber){
		alert("You got it!");
		break;
	}
}


var number=-10;

while(number<20){
	console.log("The current number is: " + number);
	number++;
}

number=10;

while(number < 41){
	if(number%2==0) console.log("The current even number is: " + number);
	number++;
}

number = 300;

while(number < 334){
	if(number % 2 !=0) console.log("The current odd number is: " + number);
	number++;
}
 
number = 5;

while(number<51){
	if(number%5==0 && number%3==0){
		console.log("The current number is: " + number);
	}
	number++;
}

var response = prompt("Are we there yet");

while(!(response == "yes" || response == "yeah" || response.indexOf("yes")!=-1)){
	alert("Sorry, not yet!");
	response = prompt("Are we there yet");
}

alert("Yay, we finally made it!");



console.log("Using For Loop to print!")
for(var number=17; number< 32; number++){
	console.log("The current number is: " + number);
}