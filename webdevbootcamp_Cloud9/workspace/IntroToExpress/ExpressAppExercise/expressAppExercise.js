var express = require('express');
var app = express();

//ROUTES
app.get("/", function(req,res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req,res){
    var animalType = req.params.animal;
    if(animalType == "pig"){
        res.send("The pig says 'Oink'");
    }else if(animalType == "cow"){
        res.send("The cow says 'Moo'");
    }else if(animalType == 'dog'){
        res.send("THe dog says 'Woof Woof!'");
    }
});

app.get("/repeat/hello/:num", function(req, res){
    var number = req.params.num;
    var helloStr = "";
    for(var i=0; i<number; i++){
        helloStr += "hello ";
    }
    res.send(helloStr);
});

app.get("/repeat/blah/:blahNum", function(req,res){
    var number = req.params.blahNum;
    var blahStr = "";
    for(var i=0; i<number;i++){
        blahStr += "blah ";
    }
    res.send(blahStr);
});

app.get("*", function(req,res){
   res.send("Sorry, page not found!"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});

