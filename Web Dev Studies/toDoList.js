// function removeElement(array, index){
// 	array.splice(index, 1);
// 	return array;
// }

// function printReverse(array){
// 	//var array = [1, 2, 3, 4];
// 	for(var index = array.length; index>=0; index--){
// 		console.log(array[index]);
// 	}
// }

// function isUniform(array){
// 	var firstElement = array[0];

// 	for(var index=1; index<array.length; index++){
// 		if(array[index] != firstElement){
// 			return false;
// 		}
// 	}

// 	return true;
// }

function movieListPrint(movieList){
	movieList.forEach(function(element){
		console.log("This movie has following properties: " + element.title + " " + element.rating + " " + element.hasWatched);
	});
}
// var arrayPrep = [];

// var arrayIndex = 0;

// var userInput = prompt('What would you like to do');

// while(userInput != "quit"){

// 	if(userInput=="new"){
// 		var firstRes = prompt('Enter a new todo');
// 		arrayPrep[arrayIndex] = firstRes;
// 		arrayIndex++;
// 		// arrayPrep.push(firstRes);
// 	}else if(userInput == "list"){
// 		arrayPrep.forEach(function(e){console.log(arrayPrep.indexOf(e) + ":" + e)});
// 	}else if(userInput == "delete"){
// 		var indexToDelete = prompt("Enter the index you want to delete");
// 		arrayPrep = removeElement(arrayPrep, indexToDelete);
// 	}

// 	userInput = prompt('What would you like to do');

// }


// var arrayInput = [1,2,3,4];

// var uniformArray = [1,1,1,1,1,1];

// vary nonUniformArray = ["a", "b", "c"];

// printReverse(arrayInput);

// console.log("The result is: " + isUniform(uniformArray));

// console.log("The result is: " + isUniform(nonUniformArray));

var movieList = [
{
	title: "KZY",
	rating: 5,
	hasWatched: true
},
{
	title: "ZYB",
	rating: 4.5,
	hasWatched: false
},
{
	title: "ZHH",
	rating: 4,
	hasWatched: true
}
];

movieListPrint(movieList);


