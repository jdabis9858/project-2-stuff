var express = require("express");
var app = express();
var path = require("path")
var http = require("http");
var fs = require("fs");

var PORT = 3080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");
var Handlebars = require("handlebars")
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Root@2019@",
    database:"store"
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
    connection.query("SELECT * FROM merchant3;", function (err, data) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }

        res.render("index", {
            merchant3: data
        });
    });

});

app.get("/new/:searched", function (req, res) {

    
    connection.query("SELECT * FROM merchant3 WHERE product_name = ?", [req.params.searched], function (err, data) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }

        //var hbsObj = {items: data}


        console.log(data),
        console.log("this one " + req.params.searched)

        //res.render("item", {
          //  items: data
        //});

        res.render("item", {
            items: data
        });
    });

});

Handlebars.registerHelper('grouped_each', function(every, context, options) {
    var out = "", subcontext = [], i;
    if (context && context.length > 0) {
        for (i = 0; i < context.length; i++) {
            if (i > 0 && i % every === 0) {
                out += options.fn(subcontext);
                subcontext = [];
            }
            subcontext.push(context[i]);
        }
        out += options.fn(subcontext);
    }
    return out;
});

// app.get('/la', (req, res) => {
//     res.send("yee")
// })

app.listen(PORT, function () {
    console.log("Server listening on PORT: " + PORT)
});