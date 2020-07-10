const lineReader = require('line-reader');
const fs = require('fs');
const readline = require('readline');

var confnode = new Map();

console.log("Start readconf.js\n")

try {
    const data = fs.readFileSync('/home/pi/conf.txt', 'UTF-8');

    const lines = data.split('\n');
    lines.forEach((line) => {
        var w = line.split("\t");
        confnode.set(w[0], w[1])
    });
} catch (err) {
    console.error(err);
}

exports.confnode = confnode;
