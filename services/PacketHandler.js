const Modulemessage = require('../interfaces/message');
const ModulePackets = require('../interfaces/packets');
const ModuleConf = require('../interfaces/config');
const { StringDecoder } = require('string_decoder');
const decode = require('querystring');
const decoder = new StringDecoder('utf8');










class PacketHandler {

    static packet_handler(packet) {
        console.log(packet.Type,packet.Type.length)

        let json = JSON.stringify(packet.Type);
        console.log(json);

        var type = JSON.parse(json)
        

        //var type = decoder.write(packet.Type);

        console.log(type,type.length)

        if (type == 0) {
            console.log("Beacon");
        }

        switch (packet.Type) {
            case ModuleConf.TypeBeacon.toString():
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