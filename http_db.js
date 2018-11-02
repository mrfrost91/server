var http = require('http');
var url = require('url');
var get = require("./get_from_db.js");
var PORT_NAME = 8080;
var CODE_SUCCESS = 200;
var CODE_FAIL = 404;
console.log("namatyvaem kishki 10 minut");

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var pathname = q.pathname;
    console.log(pathname);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    if (pathname === '/items/') {
        res.writeHead(CODE_SUCCESS, {'Content-Type': 'application/json'});
        return res.end(JSON.stringify(get.data));
    } else {
        res.writeHead(CODE_FAIL, {'Content-Type': 'text/html'});
        return res.end(CODE_FAIL + " Not Found");
    }
}).listen(PORT_NAME);