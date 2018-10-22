var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
    console.log(q)
  var filename = q.pathname;
  fs.readFile("items/id.json", function (err, data) {
    if (filename === '/items/') {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(data)
      return res.end();
    }  
    res.writeHead(404, {'Content-Type': 'text/html'});
    return res.end("404 Not Found");
  });
}).listen(8080);