const ModuleListenerC = require('./services/listener');
const ModuleListenerS = require('./services/listenerS');
const ModuleGetIp = require('./services/GetIp');
const ModuleReadConf = require('./services/readconf');

async function start() {

    var NodeConf = await ModuleReadConf.confnode; // map con tutti i parametri letti dal file

    console.log('\n\n\t\tI am node ' + NodeConf.get('MyAddress') + '\n\t\tMy Client Address is: ' + NodeConf.get('ClientIp') + '\n\t\tMy Server Address is: ' + NodeConf.get('ServerIp') + '\n')

    console.log(NodeConf)

    if (NodeConf.get('SINK') == 'YES') {
        console.log('\n\t\t I am the Sink')
        await ModuleListenerC.StartListener("Client Mode", NodeConf);
    } else {
        console.log('\n\t\t I am a Node')
        await ModuleListenerS.StartListener("Station Mode", NodeConf);
    }




}

start().then