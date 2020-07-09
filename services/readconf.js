const lineReader = require('line-reader');
const fs = require('fs');
const readline = require('readline');

var confnode = [];

console.log("Start readconf.js\n")


const readInterface = readline.createInterface({
    input: fs.createReadStream('/home/pi/conf.txt'),
    output: process.stdout,
    console: false
});

readInterface.on('line', function(line) {
    //console.log(line);
    var w = line.split("\t");
    confnode.push({
            properties : w[0],
            values: w[1]
        });
});

//     lineReader.eachLine('/home/pi/conf.txt', function(line) {
//     //console.log(line);
//         var w = line.split("\t");
//         r.push({
//             properties : w[0],
//             values: w[1]
//         });
// });

exports.confnode = confnode;

