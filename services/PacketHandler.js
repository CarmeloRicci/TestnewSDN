const Modulemessage = require('../interfaces/message');
const ModulePackets = require('../interfaces/packets');
const ModuleConf = require('../interfaces/config');

class PacketHandler {

    static packet_handler(packet) {
        console.log(packet.Type,packet.Type.length)
        switch (packet.Type) {
            case buffer(3,'0','utf8'):
                //console.log("Beacon");
                break;
            case 1:
                //console.log("Report");
                break;
            case 2:
                //console.log("OpenPath");
                break;
            case 3:
                //console.log("Status");
                break;
            case 4:
                //console.log("Data");
                break;
            default:
                console.log("Error Packet Type");
        }



    }

}

exports.PacketHandler = PacketHandler;