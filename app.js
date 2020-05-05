var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var config = require('./config/database')
    // var ejs = require("ejs");

mongoose.connect(config.database);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("connected to db");
});

// initial
var app = express();

// view engine
app.set("view", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// set public folder
app.use(express.static(path.join(__dirname, "public")));

// home
app.get("/", function(req, res) {
    res.send("its work");
});

// set server
var port = 3000;
app.listen(port, function() {
    console.log("server running on port ", +port);
});