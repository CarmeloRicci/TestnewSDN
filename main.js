const ModuleListenerC = require('./services/listener');
const ModuleListenerS = require('./services/listenerS');
const ModuleGetIp = require('./services/GetIp');
const ModuleReadConf = require('./services/readconf');



//console.log(ModuleGetIp.ArrayIpOut)
ModuleReadConf.lineReader
console.log(ModuleReadConf.confnode)

//ModuleListenerC.StartListener("Client Mode",ModuleGetIp.IpClient,2222);
//ModuleListenerS.StartListener("Station Mode",ModuleGetIp.IpServer,50007);