var express = require('express');
var router = express.Router();
var CODE_SUCCESS = 200;
var CODE_FAIL = 404;
var dbInstance = require("../db/get_from_db.js");

function errorHandler (res) {
    res.writeHead(CODE_FAIL, {'Content-Type': 'text/html'});
    res.end(CODE_FAIL + " Not Found");
}
// Items
router.get("/items", function(req, res) {
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

module.exports = router;