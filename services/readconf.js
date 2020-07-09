const lineReader = require('line-reader');
var r = [];

lineReader.eachLine('/home/pi/conf.txt', function(line) {
    //console.log(line);
        var w = line.split("\t");
        r.push({
            'properties' : w[0],
            'values': w[1]
        });
});

exports.readconf = r;