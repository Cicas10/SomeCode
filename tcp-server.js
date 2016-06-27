var net = require('net');
var request = require('request');
var server = net.createServer(function (socket) {
  socket.write('Hello\n');
  socket.write('world\n');

  socket.on('data', function (data) {
    socket.write(data);
  });
});

server.listen(8000);

console.log(request);
