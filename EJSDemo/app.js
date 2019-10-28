// Var
var express = require("express");
var app = express();
var bronvermelding = '<p style="text-align: center; margin: 25px; padding: 0;"> <span style="border: solid 1px; margin: 0; padding: 0 5px;">Based on course "The Web Developer Bootcamp | Udemy" from Colt Steele</span></p>'

// Routing
app.get("/",(req,res) => {
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing",(req,res) => {
    var thing = req.params.thing;

    res.render("love.ejs",{thingVar: thing});
});

// Listener
app.listen(3000, () => console.log("Express Applicatie gestart op poort 3000"));

// Based on course "The Web Developer Bootcamp | Udemy" from Colt Steele