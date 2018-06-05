var express = require('express');
var app = express();
var bodyParser = require("body-parser");
// var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/yelp_camp");

var campgrounds = [
        {name: "Salmon Creek", image: "https://static.pexels.com/photos/618848/pexels-photo-618848.jpeg"},
        {name: "Granite Hill", image: "https://static.pexels.com/photos/554609/pexels-photo-554609.jpeg"},
        {name: "Mountain Goat's Rest", image: "https://static.pexels.com/photos/533746/pexels-photo-533746.jpeg"}
    ];
    
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to the campground array
    //redirect back to campgrounds page
    var name = req.body.name;
    var image = req.body.image;
    var newCampgrounds = {name: name, image: image};
    campgrounds.push(newCampgrounds);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res){
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Has Started!");
});