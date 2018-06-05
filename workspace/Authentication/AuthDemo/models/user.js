var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String
});

//add the methods that come with passportLocalMongoose to the userSchema
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);