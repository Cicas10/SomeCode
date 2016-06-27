var http = require('http');

var s = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello\n');
  setTimeout(function () {
    res.end('World\n');
  }, 2000);
});

s.listen(8000);
