fs = require('fs')

fs.readFile('/home/pi/conf.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

exports.readfile = fs.readFile;