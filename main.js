var ModuleListenerC = require('./services/listener');
var ModuleListenerS = require('./services/listenerS');
var ModuleGetIp = require('./services/GetIp');
//var ModuleReadConf = require('./services/readconf');


fs = require('fs')


const lineReader = require('line-reader');

lineReader.eachLine('/path/to/file', function(line) {
    console.log(line);
});

var text = "";
var r = [];


// var v = text.split("\n");
// for (var i = 0; i < v.length; i++) {
//     var w = v[i].split("\t");
//     var tmp = w[0]
//     r.push({
//         tmp: w[1]
//     });
//   }






console.log(ModuleGetIp.ArrayIpOut)


ModuleListenerC.StartListener("Client Mode",ModuleGetIp.IpClient,2222);
ModuleListenerS.StartListener("Station Mode",ModuleGetIp.IpServer,50007);