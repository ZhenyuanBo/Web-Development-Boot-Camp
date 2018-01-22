var express = require('express');
var app = express();

// "/" ==> "Hi there!"
// "/bye" ==> "Goodbye!"
// "/dog" ==> "MEOW!"

// ROUTES
//req & res are objects
app.get("/", function(req, res){
    res.send("Hi there!");
});

app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

app.get("/dog", function(req, res){
    res.send("MEOW!");
});

app.get("/r/:subredditName", function(req,res){
    var subredditName = req.params.subredditName;
    res.send("Welcome to the " + subredditName.toUpperCase() + " subreddit page!");
});

app.get("*", function(req, res){
    res.send("You are a star!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});