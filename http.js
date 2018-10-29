var http = require('http');
var url = require('url');
var fs = require('fs');
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
        fs.readFile("items/id.json", function (err, data) {
            res.writeHead(CODE_SUCCESS, {'Content-Type': 'application/json'});
            return res.end(data);
        })
    } else {
    }
