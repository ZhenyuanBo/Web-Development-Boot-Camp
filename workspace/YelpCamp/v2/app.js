// var express = require('express'),
//     app = express(),
//     bodyParser = require("body-parser"),
//     mongoose = require("mongoose"),
//     Campground = require("./models/campground");

// // mongoose.connect("mongodb://localhost/yelp_camp_v3");
// // app.use(bodyParser.urlencoded({extended: true}));
// // app.set("view engine", "ejs");


// // Campground.create(
// //                 {
// //                      name:"Person Holding Black and Orange Typewriter",
// //                      image:"https://images.pexels.com/photos/891674/pexels-photo-891674.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
// //                      description: " a person holding black and orange typewriter"
// //                  }, function(err, campground){
// //                       if(err){
// //                             console.log(err);
// //                         }else{
// //                             console.log("NEWLY CREATED CAMPGROUND: ");
// //                             console.log(campground);
// //                         }
// //                  });
                
// // var campgrounds = [
    
// //         {
// //             name: "Salmon Creek", 
// //             image: "https://static.pexels.com/photos/618848/pexels-photo-618848.jpeg"
            
// //         },
// //         {
// //             name: "Granite Hill", 
// //             image: "https://static.pexels.com/photos/554609/pexels-photo-554609.jpeg"
            
// //         },
// //         {
// //             name: "Mountain Goat's Rest", 
// //             image: "https://static.pexels.com/photos/533746/pexels-photo-533746.jpeg"
            
// //         },
// //         {
// //             name: "White Airplane", 
// //             image: "https://images.pexels.com/photos/728824/pexels-photo-728824.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
            
// //         },
// //         {
// //             name: "Aerial Photo of Buildings and Roads", 
// //             image: "https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
            
// //         },
// //         {
// //             name: "Light Trails on City Street", 
// //             image: "https://images.pexels.com/photos/327345/pexels-photo-327345.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
            
// //         },
// //         {
// //             name: "Macbook Air Beside Notebook and Camera",
// //             image: "https://images.pexels.com/photos/916335/pexels-photo-916335.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
// //         },
// //         {
// //             name: "Basketball Hoop on Court",
// //             image: "https://images.pexels.com/photos/680074/pexels-photo-680074.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
// //         },
// //         {
// //             name: "Assorted-labeled Signage",
// //             image: "https://images.pexels.com/photos/71135/pexels-photo-71135.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
// //         }
        
// //     ];

// // app.get("/", function(req, res){
// //     res.render("landing");
// // });

// // app.get("/campgrounds", function(req, res){
// //     // Get all campgrounds from DB
// //     Campground.find({},function(err, allcampgrounds){
// //         if(err){
// //             console.log(err);
// //         }else{
// //             res.render("index", {campgrounds: allcampgrounds});
// //         }
// //     });
// // });

// // app.post("/campgrounds", function(req, res){
// //     //get data from form and add to the campground array
// //     //redirect back to campgrounds page
// //     var name = req.body.name;
// //     var image = req.body.image;
// //     var desc = req.body.description;
// //     var newCampgrounds = {name: name, image: image, description: desc};
// //     // Create a new campground and save it to database
// //     Campground.create(newCampgrounds, function(err, newcampground){
// //         if(err){
// //             console.log(err);
// //         }else{
// //           res.redirect("/campgrounds"); 
// //         }
// //     })
// //     // campgrounds.push(newCampgrounds);
// // });

// // //new form to create new campgrounds
// // app.get("/campgrounds/new", function(req,res){
// //     res.render("new");
// // });

// // // SHOW - shows more info about one campground
// // app.get("/campgrounds/:id", function(req, res){
// //     //find the campground with provided ID
// //     Campground.findById(req.params.id, function(err, foundCampground){
// //         if(err){
// //             console.log(err);
// //         }else{
// //             res.render("show", {campground: foundCampground});
// //         }
// //     });
// //     //res.send("THIS WILL BE THE SHOW PAGE ONE DAY!");
// // });

// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("YelpCamp Has Started!");
// });

var express = require("express");
var app = express();

console.log("here!");
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp has started!");
});