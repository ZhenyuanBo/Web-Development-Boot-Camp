var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    User = require("./models/user"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

//connect to the database
mongoose.connect("mongodb://localhost/auth_demo_app");

app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false
}));

app.set('view engine', 'ejs');
//we need these two lines anytime when we use passport
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));

passport.use(new LocalStrategy(User.authenticate()));

//take the data from the session and encode it
passport.serializeUser(User.serializeUser());
//decode it
//serializeUser() and deserializeUser() function have been defined in the passportLocalMongoose func.
passport.deserializeUser(User.deserializeUser());

// ==============
// ROUTES
// ==============


app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req,res){
    res.render("secret");
});

// Auth Routes
// show sign up form
app.get("/register", function(req, res){
    res.render("register");
});

//handling user sign up
app.post("/register", function(req, res){
    req.body.username
    req.body.password
    //we don't save the password to the database and register() will hash the password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        //using passport-local
        passport.authenticate("local")(req,res, function(){
            //once registered, we can go to the secret page
            res.redirect("/secret");
        });
    });
});

// Login routes
// render login form
app.get("/login", function(req, res){
    res.render("login");
});

// login logic
// middleware - passport.authenticate, run before the final call back
// can have multiple middleware
app.post("/login", passport.authenticate("local",{
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res){
});

// log out route
app.get("/logout", function(req, res){
    //destroy the session
    req.logout(); 
    res.redirect("/");
});

//custom middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER started!");
});