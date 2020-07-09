const ModuleListenerC = require('./services/listener');
const ModuleListenerS = require('./services/listenerS');
const ModuleGetIp = require('./services/GetIp');
//const ModuleReadConf = require('./services/readconf');

const lineReader = require('line-reader');
var r = [];

lineReader.eachLine('/home/pi/conf.txt', function(line) {
    console.log(line);
        var w = v[i].split("\t");
        var tmp = w[0]
        r.push({
            tmp: w[1]
        });
    
});







console.log(ModuleGetIp.ArrayIpOut)


ModuleListenerC.StartListener("Client Mode",ModuleGetIp.IpClient,2222);
ModuleListenerS.StartListener("Station Mode",ModuleGetIp.IpServer,50007);