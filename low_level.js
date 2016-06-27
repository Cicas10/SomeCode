var fs = require('fs');
fs.stat('/home/cicas/Documents/spec.txt', function (err, stats)
{
  if (err)
  {
    console.log(err.message);
    return;
  }

  // console.log(stats.size);

  console.log('this file is ' + stats.size + ' bytes long.');
});
