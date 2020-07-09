const lineReader = require('line-reader');
const fs = require('fs');
const readline = require('readline');

var confnode = Object.create( {} );
//var confnode = [];

console.log("Start readconf.js\n")

try {
    const data = fs.readFileSync('/home/pi/conf.txt', 'UTF-8');

    const lines = data.split('\n');

    lines.forEach((line) => {
        var w = line.split("\t");
        var obj = ({ [ w[0] ]: w[1] })
        var lunchWithDessert = addToObject(confnode, w[0], w[1]);
    });
} catch (err) {
    console.error(err);
}




var addToObject = function (obj, key, value, index) {

	// Create a temp object and index variable
	var temp = {};
	var i = 0;

	// Loop through the original object
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) {

			// If the indexes match, add the new item
			if (i === index && key && value) {
				temp[key] = value;
			}

			// Add the current item in the loop to the temp obj
			temp[prop] = obj[prop];

			// Increase the count
			i++;

		}
	}

	// If no index, add to the end
	if (!index && key && value) {
		temp[key] = value;
	}

	return temp;

};




exports.confnode = confnode;


// try {
//     const data = fs.readFileSync('/home/pi/conf.txt', 'UTF-8');

//     const lines = data.split('\n');

//     lines.forEach((line) => {
//         var w = line.split("\t");
//         var tmp = JSON.parse('{"'+ w[0] + '" : ' + w[1] + ' }')
//         confnode.push(tmp);
//     });
// } catch (err) {
//     console.error(err);
// }

// exports.confnode = confnode;

