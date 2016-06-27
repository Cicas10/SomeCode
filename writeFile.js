var fs = require('fs');

fs.open('/home/cicas/Documents/spec.txt', 'a', (err, fd) => {
  // body...
  if (err)
  {
    throw err;
  }

  var writeBuffer = new Buffer('writing string in file');
  var bufferOffset = 0;
  var bufferLength = writeBuffer.length;
  var filePosition = null;

  fs.write(fd, writeBuffer, bufferOffset, bufferLength, filePosition,
    function (err, written)
    {
      if (err)
      {
        throw err;
      }

      console.log('wrote ' + written + ' bytes');
    });
});
