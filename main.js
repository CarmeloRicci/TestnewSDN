var ModuleListenerC = require('./services/listener');
var ModuleListenerS = require('./services/listenerS');
var ModuleGetIp = require('./services/GetIp');
var ModuleReadConf = require('./services/readconf');

console.log(ModuleGetIp.ArrayIpOut)
ModuleReadConf.readfile

ModuleListenerC.StartListener("Client Mode",ModuleGetIp.IpClient,2222);
ModuleListenerS.StartListener("Station Mode",ModuleGetIp.IpServer,50007);