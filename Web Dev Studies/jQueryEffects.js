alert("connected!");

$("button").on("click", function(){
	// $("div").fadeOut(1000);
	//take 1000s to fade out
	// console.log("Fade out Complete!");
	//this output will be generated befor the div fades out

	//to print the output right after the fadeout takes place, we can do this:
	// $("div").fadeOut(1000, function(){
	// 	console.log("Fade Out Complete!");
	// });
	// $("div").fadeToggle(1000, function(){
	// 	console.log("Fade In completes!");
	// })
	$("div").slideToggle(1000, function(){
		console.log("slide down completes!");
	});
});