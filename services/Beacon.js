const Modulemessage = require('../interfaces/message');
const ModulePackets = require('../interfaces/packets');
const ModuleConf = require('../interfaces/config');

const Broadcast = dgram.createSocket("udp4");

class Beacon {

    static CreateBeaconMessage(Source, Payload) {
        var LengthTemp = 8 + Source.length + Payload.length;
        const p1 = new ModulePackets.Packets('0', '' + LengthTemp, '255', Source, '0', '99', '1', Payload);
        //console.log('CreateBeaconMessage -> ' + ModulePackets.Packets.print_packets(p1))
        //console.log(p1.NetId.length, p1.Length.length, p1.Destination.length, p1.Source.length, p1.Type.length, p1.TTL.length, p1.NextHop.length, p1.Payload.length)
        return p1
    }
    static StartBeaconProcess(message,port,ipaddress) {
        Broadcast.setBroadcast(true);
        Broadcast.send(message, 0, message.length, port, ipaddress);
        console.log('CreateBeaconMessage -> tutto ok!!!')
    }

}

exports.Beacon = Beacon;
