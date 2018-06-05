//mongoose is the tool that we use to enable JS-based file to communicate with MongoDB
var mongoose = require("mongoose");
//connect to the databse, it will look for cat_app and if it won't find it, cat_app will be made
//if it finds the mongodb, it will use the existing cat_app
mongoose.connect("mongodb://localhost/cat_app");

//define schema
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

//compile the schema into model
var Cat = mongoose.model("Cat", catSchema);
//will use Cat.find(), Cat.update()

// //adding a new cat to the DB
// var george = new Cat({
//     name: "Mrs.Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("SOMETHING WENT WRONG!");
//     }else{
//         console.log("WE JUST SAVED A CAT TO THE DB:")
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    }else{
        console.log(cat);
    }
});
//retrieve all cats from the DB and console.log each one


Cat.find({}, function(err, cats){
    if(err){
        console.log("OH NO, ERROR!");
        console.log(err);
    }else{
        console.log("ALL THE CATS......");
        console.log(cats);
    }
});