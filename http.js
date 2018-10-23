var http = require('http');
var url = require('url');
var fs = require('fs');
console.log("razmatyvaem kishki 10 minut")

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = q.pathname;
    console.log(filename)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    if (filename === '/items/') {
        fs.readFile("items/id.json", function (err, data) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            return res.end(data);
        })
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
    }
}).listen(8080);