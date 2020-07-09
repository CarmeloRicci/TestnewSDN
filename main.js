const ModuleListenerC = require('./services/listener');
const ModuleListenerS = require('./services/listenerS');
const ModuleGetIp = require('./services/GetIp');
const ModuleReadConf = require('./services/readconf');



//console.log(ModuleGetIp.ArrayIpOut)
//var NodeConf = ModuleReadConf.confnode;
console.log(ModuleReadConf.confnode)
//console.log('\n\n\t\t\t Sono il nodo ' + NodeConf.properties +' \n\n')

//ModuleListenerC.StartListener("Client Mode",ModuleGetIp.IpClient,2222);
//ModuleListenerS.StartListener("Station Mode",ModuleGetIp.IpServer,50007);