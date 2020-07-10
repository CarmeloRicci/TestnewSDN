const ModuleListenerC = require('./services/listener');
const ModuleListenerS = require('./services/listenerS');
const ModuleGetIp = require('./services/GetIp');
const ModuleReadConf = require('./services/readconf');

async function start() {

var NodeConf = await ModuleReadConf.confnode; // map con tutti i parametri letti dal file

console.log('\n\n\t\t\t Sono il nodo ' + NodeConf.get('MyAddress') +' \n\n')

ModuleListenerC.StartListener("Client Mode",ModuleGetIp.IpClient,2222);
ModuleListenerS.StartListener("Station Mode",ModuleGetIp.IpServer,50007);

}