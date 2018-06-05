var express = require('express'),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    seedDB = require("./seeds");

seedDB();

mongoose.connect("mongodb://localhost/yelp_camp_v3");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({},function(err, allcampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("index", {campgrounds: allcampgrounds});
        }
    });
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to the campground array
    //redirect back to campgrounds page
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampgrounds = {name: name, image: image, description: desc};
    // Create a new campground and save it to database
    Campground.create(newCampgrounds, function(err, newcampground){
        if(err){
            console.log(err);
        }else{
          res.redirect("/campgrounds"); 
        }
    })
    // campgrounds.push(newCampgrounds);
});

//new form to create new campgrounds
app.get("/campgrounds/new", function(req,res){
    res.render("new");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            console.log(foundCampground);
            res.render("show", {campground: foundCampground});
        }
    });
    //res.send("THIS WILL BE THE SHOW PAGE ONE DAY!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Has Started!");
});

