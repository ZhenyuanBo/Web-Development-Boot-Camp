//click on the text and line-through will take effect

// var liTag = document.querySelectorAll("li");

// for(var i=0; i<liTag.length; i++){

// 	liTag[i].addEventListener("click", function(){
// 		this.classList.add("lineThrough");
// 	});
// }

// click(), on("click", function())
/*
	1. on() listener can only be used when the elements first exist
	2. on() can only be used to apply for future potential elements
	3. click() can only be used to apply for existing elements
*/


$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete Todo
$("ul").on("click","span", function(event){
	//use parent() to retreive the parent element
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
	if(event.which == "13"){
		//grab new todo from input
		var toDoTest = $(this).val();
		$(this).val("");
		//create a new li
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + toDoTest + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});