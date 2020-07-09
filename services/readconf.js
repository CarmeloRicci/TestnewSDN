const lineReader = require('line-reader');
const fs = require('fs');
const readline = require('readline');

var confnode = [];

console.log("Start readconf.js\n")



LineReaderSync = require("line-reader-sync")
lrs = new LineReaderSync("/home/pi/conf.txt")
while(true){
  var line = lrs.readline()
  if(line === null){
    console.log("EOF");
  }else{
    //console.log("line without \n",line)
    var w = line.split("\t");
    confnode.push({
            properties : w[0],
            values: w[1]
        });
  }
  
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

