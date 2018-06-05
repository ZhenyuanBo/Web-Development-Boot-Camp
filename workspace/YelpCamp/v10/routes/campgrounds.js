var express= require("express");
var router = express.Router();
var Campground = require("../models/campground");


router.get("/", function(req, res){
    console.log(req);
    // Get all campgrounds from DB
    Campground.find({},function(err, allcampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds/index", {campgrounds: allcampgrounds, currentUser: req.user});
        }
    });
});

router.post("/", isLoggedIn, function(req, res){
    //get data from form and add to the campground array
    //redirect back to campgrounds page
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newCampgrounds = {name: name, image: image, description: desc, author: author};
    // Create a new campground and save it to database
    Campground.create(newCampgrounds, function(err, newcampground){
        if(err){
            console.log(err);
        }else{
          res.redirect("/campgrounds"); 
        }
    });
    // campgrounds.push(newCampgrounds);
});

//new form to create new campgrounds
router.get("/new", isLoggedIn, function(req,res){
    res.render("campgrounds/new");
});

// SHOW - shows more info about one campground
router.get("/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            console.log(foundCampground);
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
    //res.send("THIS WILL BE THE SHOW PAGE ONE DAY!");
})

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;