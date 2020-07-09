const lineReader = require('line-reader');
const fs = require('fs');
const readline = require('readline');

var confnode = [];

console.log("Start readconf.js\n")

try {
    // read contents of the file
    const data = fs.readFileSync('/home/pi/conf.txt', 'UTF-8');

    // split the contents by new line
    const lines = data.split('/\r?\n/');

    // print all lines
    lines.forEach((line) => {
        var w = line.split("\t");
        confnode.push({
            properties: w[0],
            values: w[1]
        });
    });
} catch (err) {
    console.error(err);
}



// const readInterface =  readline.createInterface({
//     input: fs.createReadStream('/home/pi/conf.txt'),
//     output: process.stdout,
//     console: false
// });

//  readInterface.on('line', function(line) {
//     //console.log(line);
//     var w = line.split("\t");
//     confnode.push({
//             properties : w[0],
//             values: w[1]
//         });
// });

//     lineReader.eachLine('/home/pi/conf.txt', function(line) {
//     //console.log(line);
//         var w = line.split("\t");
//         r.push({
//             properties : w[0],
//             values: w[1]
//         });
// });

exports.confnode = confnode;

