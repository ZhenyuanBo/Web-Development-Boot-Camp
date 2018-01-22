var express = require('express');
var app = express();
var request = require('request');

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("Search");
});

app.get("/results", function(req, res){
    var searchKey = req.query.search;
    request("http://www.omdbapi.com/?s="+searchKey+"&apikey=thewdb", function(error, response, body){
    if(!error && response.statusCode == 200 ){
        //turn body string into JSON object
        var bodyData = JSON.parse(body);
        res.render("results", {bodyData: bodyData});
        }
    })
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie App has started!");
});