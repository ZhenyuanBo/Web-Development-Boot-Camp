function isEven(number){
	if(number % 2==0) return true;
	return false;
}

function factorial(number){
	var result=number;
	while(number > 1){
		result *=(number-1);
		number--;
	}

	return result;
}

function stringModifier(str){
	var newStr = str;
	for(var index=0; index<str.length;index++){
		if(str.charAt(index) == '-'){
			newStr = str.slice(0,index)+'_';
			str = newStr + str.slice(index+1);
		}
		console.log(str);
	}

	return str;
}

var numberInput = prompt("Please enter a number!");

if(isEven(numberInput)) alert("The number you entered is even!");
else alert("The number entered is not even!");

var data = prompt("Please enter a number to find its factorial value");

alert("The factorial value of this number " + data + " is this: " + factorial(data));


var stringVal=prompt("Please enter a random string you like");

stringVal = stringModifier(stringVal);

alert("The modified string is: " + stringVal);