var express= require("express");
//mergeParams - so that the camground id can be passed through correctly
var router = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");

// Comments new
router.get("/new", isLoggedIn, function(req, res){
    //find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err) console.log(err);
        else{
            res.render("comments/new", {campground: campground});
        }
    });
});

// Comments create
router.post("/", isLoggedIn, function(req,res){
    //look up campground using id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
           console.log(err);
           res.redirect("/campgrounds");
       }else{
        Comment.create(req.body.comment, function(err, comment){
           if(err){
               console.log(err);
           } else {
               //add username and id to comments
               //save comment
               comment.author.id = req.user._id;
               comment.author.username = req.user.username;
               comment.save();
               campground.comments.push(comment);
               campground.save();
               res.redirect('/campgrounds/' + campground._id);
           }
        });
       }
    });
});

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;

