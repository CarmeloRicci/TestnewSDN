fs = require('fs')

var text;
var r = [];

fs.readFile('/home/pi/conf.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
  text=data
});
console.log(text)

var v = text.split("\n");
for (var i = 0; i < v.length; i++) {
    var w = v[i].split("\t");
    var tmp = w[0]
    r.push({
        tmp: w[1]
    });
  }

exports.readfile = fs.readFile;
exports.v = v;