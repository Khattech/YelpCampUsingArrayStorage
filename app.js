var express = require("express");
var app =express();
var port = 3000;
var bodyparser = require("body-parser");


app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended : true}));

var campgrounds = [

{ title : "Lake View Side", image : "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350"},
{ title : "Hill Top View", image : "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&h=350"},
{ title : "Valley Side View", image : "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350"},
{ title : "Night View Side", image : "https://images.pexels.com/photos/45241/tent-camp-night-star-45241.jpeg?auto=compress&cs=tinysrgb&h=350"},
{ title : "Omega View Side", image : "https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&h=350"},
{ title : "Rainbow View Side", image : "https://pixabay.com/get/57e8d1464d53a514f1dc84609620367d1c3ed9e04e50744073277edc9444c1_340.jpg"},
];

app.get("/", (req,res)=>{

	res.render("index");

});

app.get("/campgrounds",(req,res)=>{


res.render("campgrounds", {campgrounds : campgrounds});

});

app.post("/campgrounds", (req,res)=>{

var name = req.body.title;
var url = req.body.image;
var newcampground = { title : name, image : url};
campgrounds.push(newcampground);

res.redirect("/campgrounds");

});

app.get("/campgrounds/new", (req,res)=>{

res.render("addcampground");

});

app.listen(port, ()=>{

console.log(`Server Running on ${port}`);

});