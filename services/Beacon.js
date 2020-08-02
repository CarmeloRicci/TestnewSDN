const Modulemessage = require('../interfaces/message');
const ModulePackets = require('../interfaces/packets');
const ModuleConf = require('../interfaces/config');

class Beacon {

    static CreateBeaconMessage (Source, Payload) {
        const p1 = new ModulePackets.Packets(0, 100, 255, Source, 0, 99, 1, Payload);
        console.log(TypeListener + ': ' + ModulePackets.Packets.print_packets(p1))
        console.log(p1.BNetId.length, p1.BLength.length, p1.BDestination.length, p1.BSource.length, p1.BType.length, p1.BTTL.length, p1.BNextHop.length, p1.BPayload.length)
    
    }
    static StartBeaconProcess() {



    }

}

exports.Beacon = Beacon;
