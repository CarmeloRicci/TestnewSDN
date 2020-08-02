const Modulemessage = require('../interfaces/message');
const ModulePackets = require('../interfaces/packets');
const ModuleConf = require('../interfaces/config');
const { StringDecoder } = require('string_decoder');
const decode = require('querystring');
const decoder = new StringDecoder('utf8');

const ModuleListenerC = require('./listener');
const ModuleListenerS = require('./listenerS');

class PacketHandler {

    static packet_handler(packet,NodeConf) {
        switch (packet.Type.toString().replace(/\0/g,'')) {
            case '0':
                console.log("Beacon");
                ModuleListenerC.ListenClient.BeaconProcess(NodeConf);
                ModuleListenerS.ListenServer.BeaconProcess(NodeConf);
                break;
            case '1':
                console.log("Report");
                break;
            case '2':
                console.log("OpenPath");
                break;
            case '3':
                console.log("Status");
                break;
            case '4':
                console.log("Data");
                break;
            default:
                console.log("Error Packet Type");
        }



    }

}

exports.PacketHandler = PacketHandler;