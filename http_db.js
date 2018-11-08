var express = require('express');
var dbInstance = require("./get_from_db.js");
var router = express();
var PORT_NAME = 8080;
var CODE_SUCCESS = 200;
var CODE_FAIL = 404;
console.log("namatyvaem kishki 10 minut");
var bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

function errorHandler (res) {
    res.writeHead(CODE_FAIL, {'Content-Type': 'text/html'});
    res.end(CODE_FAIL + " Not Found");
};

router.get("/items/", function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    dbInstance.db.collection("heroes").find({}).toArray(function (err, data) {
        if (err) {
            errorHandler(res);
        } else {
            res.writeHead(CODE_SUCCESS, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(data));
        }
    });
});

router.post("/login", function(req, res) {
    console.log(req.body);
    var user = req.body.username;
    var pass = req.body.password;

    dbInstance.db.collection("users").findOne({username: user, password: pass}, function (err, user) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        if (!user) {
            return res.status(404).send();
        }
        res.redirect("http://127.0.0.1:8080/items/");
        return res.status(200).send();
    })
});

router.post("/register", function(req, res) {
    console.log(req.body);
    var user = req.body.username;
    var pass = req.body.password;
    var firstName = req.body.firstname;
    var lastName = req.body.lastname;
    dbInstance.db.collection("users").insertOne({username: user, password: pass, firstname: firstName, lastname: lastName}, function (err, user) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        return res.status(200).send();
        console.log(user);
    })
});

var server = router.listen(PORT_NAME, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Content Provider Service listening at http://%s:%s", host, port);
});