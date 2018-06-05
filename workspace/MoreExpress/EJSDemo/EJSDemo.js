var express = require('express');
var app = express();

//tell the system that server public as a default folder
app.use(express.static("public"));
//set ejs so that page being rendered doesn't need have ejs at the end
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing.toUpperCase()});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "me"},
        {title: "Can you believe this pomsky?", author: "charlie"},
        ];
    res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});