// Var
var express = require("express");
var app = express();
var bronvermelding = '<p style="text-align: center; margin: 25px; padding: 0;"> <span style="border: solid 1px; margin: 0; padding: 0 5px;">Based on course "The Web Developer Bootcamp | Udemy" from Colt Steele</span></p>'

app.use(express.static("public")); // Mappen beschikbaar maken voor express
app.set("view engine", "ejs"); // Applicatie vertellen dat ejs bestanden gebruikt worden.

// Routing
app.get("/",(req,res) => {
    res.render("home");
});

app.get("/fallinlovewith/:thing",(req,res) => {
    var thing = req.params.thing;

    res.render("love", {thingVar: thing} );
});

app.get("/posts",(req,res) => {
    var posts = [
        {title: "Posts 1", author: "Susy"},
        {title: "Biertje", author: "Arvid"},
        {title: "Dit geloof je niet", author: "Admin"}
    ];
    res.render("posts", {posts: posts});
});

// Listener
app.listen(3000, () => console.log("Express Applicatie gestart op poort 3000"));

// Based on course "The Web Developer Bootcamp | Udemy" from Colt Steele