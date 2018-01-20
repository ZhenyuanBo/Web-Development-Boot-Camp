$("h1").click(function(){
	alert("h1 clicked!");
});

$("h1").css({
	border: "2px solid red",
	width: "500px"
})


// $("button").click(function(){
// 	$(this).css("background", "green");
// })

$("button").click(function(){
	var btnText = $(this).text();
	console.log("You clicked this: " + btnText);
})

// $("input").keypress(function(){
// 	alert("something has been typed!");
// })

