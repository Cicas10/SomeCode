var fs = require('fs');
fs.open('/home/cicas/Documents/spec.txt', 'r', function (err, fd) {
  // body...
  if (err)
  {
    throw err;
  }

  var readBuffer = new Buffer(1024);
  var bufferOffset = 0;
  var bufferLength = readBuffer.length;
  var filePosition = 0;

  fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition,
  function (err, readBytes)
  {
    if (err)
    {
      throw err;
    }

    //console.log('just read ' + readBytes + ' bytes');
    if (readBytes > 0) {
      console.log(readBuffer.slice(0, readBytes));
    }
  });
});
