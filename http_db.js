var http = require('http');
var url = require('url');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var urldb = "mongodb://localhost:27017/";
var PORT_NAME = 8080;
var CODE_SUCCESS = 200;
var CODE_FAIL = 404;
console.log("razmatyvaem kishki 10 minut");

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var pathname = q.pathname;
    console.log(pathname);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    if (pathname === '/items/') {
        MongoClient.connect(urldb, { useNewUrlParser: true }, function(err, database) {
            if (err) throw err;
            var dbo = database.db("database");
            dbo.collection("heroes").find({}).toArray(function (err, data) {
                if (err) throw err;
                res.writeHead(CODE_SUCCESS, {'Content-Type': 'application/json'});
                return res.end(JSON.stringify(data));
                database.close();
            });
        });
    } else {
        res.writeHead(CODE_FAIL, {'Content-Type': 'text/html'});
        return res.end(CODE_FAIL + " Not Found");

    }
}).listen(PORT_NAME);