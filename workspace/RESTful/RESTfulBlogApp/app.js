var express = require("express"),
    app = express(),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

//APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "Scenic View of Lake Against Dramatic Sky at Sunset",
//     image: "https://images.pexels.com/photos/247372/pexels-photo-247372.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
//     body: "HELLO THIS IS A BLOG POST!"
    
// });

//RESTFUL ROUTES

//INDEX ROUTE
app.get("/", function(req,res){
    
     Blog.find({}, function(err, allBlogs){
         if(err){
             console.log("ERROR!");
         } else{
             console.log(allBlogs);
             res.render("index",{blogs: allBlogs});
         }
     });
});

//NEW ROUTE
app.get("/blogs/new", function(req,res){
    res.render("new");
});


app.get("/blogs", function(req, res){
    res.redirect("/");
});

//CREATE ROUTE
app.post("/blogs", function(req, res){
    //create blog
    console.log(req.body);
    req.body.blog.body = req.sanitize(req.body.blog.body);
    console.log("====================");
    console.log(req.body);
    //then, redirect to index page
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        }else{
            //then redirect to the index
            console.log(newBlog);
            res.redirect("/blogs");
        }
    });
});

//SHOW ROUTE
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
       if(err){
           res.redirect("/blogs");
       } else{
           res.render("show", {blog: foundBlog});
       }
    });
});

app.get("/blogs/:id/edit", function(req,res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else{
            res.render("edit", {blog: foundBlog});
        }
    });
});

//UPDATE ROUTE
app.put("/blogs/:id", function(req, res){
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err,updatedBlog){
        if(err){
            res.redirect("/blogs");
        }else{
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

// DELETE ROUTE
app.delete("/blogs/:id", function(req,res){
    //destroy blog
    //redirect somewhere
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/blogs");
        }else{
            res.redirect("/blogs");
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!")
});

