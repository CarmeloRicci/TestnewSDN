const ModuleListenerC = require('./services/listener');
const ModuleListenerS = require('./services/listenerS');
const ModuleGetIp = require('./services/GetIp');
const ModuleReadConf = require('./services/readconf');

async function start() {

    var NodeConf = await ModuleReadConf.confnode; // map con tutti i parametri letti dal file

    console.log('\n\n\t\tI am node ' + NodeConf.get('MyAddress') + '\n\t\tMy Client Address is: ' + NodeConf.get('ClientIp') + '\n\t\tMy Server Address is: ' + NodeConf.get('ServerIp') + '\n')

    if (NodeConf.get('Sink') == '1') {
        console.log('\n\t\t I am the Sink\n\n')
        if (NodeConf.get('ServerIp') != undefined)
            await ModuleListenerS.StartListener("Station Mode", NodeConf, 1);

    } else if ((NodeConf.get('Sink') == '0')) {
        console.log('\n\t\t I am a Node\n\n')
        if (NodeConf.get('ClientIp') != undefined)
            await ModuleListenerC.StartListener("Client Mode", NodeConf, 0);
        console.log('\n\t\t asdasdasdad\n\n')
        if (NodeConf.get('ServerIp') != undefined)
            await ModuleListenerS.StartListener("Station Mode", NodeConf, 0);

    } else {
        console.log('\n\t\t Undefined Node\n\n')
    }

    // if (NodeConf.get('ClientIp') != undefined)
    // await ModuleListenerC.StartListener("Client Mode", NodeConf);
    // if (NodeConf.get('ServerIp') != undefined)
    // await ModuleListenerS.StartListener("Station Mode", NodeConf);

}

start().then