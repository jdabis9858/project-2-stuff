var express = require("express");
var app = express();
var path = require("path")
var http = require("http");
var fs = require("fs");




var PORT = 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "lambo127",
    database: "store"
});

connection.connect(function (err) {
    if (err) {
        console.log("1", err);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


// // app.get("/", function(req, res) {
// //     res.sendFile(path.join(__dirname, "main.handlears"));
// //   });




app.get("/", function (req, res) {
    // console.log("something")
    // res.send("hi")
    connection.query("SELECT * FROM merchant1;", function (err, data) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }

        res.render("index", {
            merchant1: data
        });
    });
    
});

app.get("/searched", function (req, res) {

    // res.send("hi")
    connection.query("SELECT * FROM merchant1;", [req.body.searched ], function (err, data) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        res.render(
            
        console.log(data),
        console.log(req.body.searched)
        );

        // res.render("index", {merchant1: data});
    });
    
});



// app.get('/la', (req, res) => {
//     res.send("yee")
// })

app.listen(PORT, function () {
    console.log("Server listening on PORT: " + PORT)
});