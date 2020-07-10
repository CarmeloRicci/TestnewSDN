const ModulePackets = require('./packets');
const ModuleConf = require('./config');

class Message {

    static get_packet_for_message() {
        var buf = new Buffer(data);
        var short_name = buf.toString('ascii', 0, 16);
        var name = buf.toString('ascii', 16, 32);
        return ""
    }

    static get_message_for_paket(P) {

        var BNetId = Buffer.alloc(ModuleConf.LenNetId)
        var BLength = Buffer.alloc(ModuleConf.LenLength)
        var BDestination = Buffer.alloc(ModuleConf.LenDestination)
        var BSource = Buffer.alloc(ModuleConf.LenSource)
        var BType = Buffer.alloc(ModuleConf.LenType)
        var BTTL = Buffer.alloc(ModuleConf.LenTTL)
        var BNextHop = Buffer.alloc(ModuleConf.LenNextHop)
        var BPayload = Buffer.alloc(ModuleConf.LenPayload)

        BNetId.write('' + [P.NetId])
        BLength.write('' + [P.Length])
        BDestination.write('' + [P.Destination])
        BSource.write('' + [P.Source])
        BType.write('' + [P.Type])
        BTTL.write('' + [P.TTL])
        BNextHop.write('' + [P.NextHop])
        BPayload.write('' + [P.Payload])

        console.log(BNetId.toString(), BLength.toString(), BDestination.toString(), BSource.toString(), BType.toString(), BTTL.toString(), BNextHop.toString(), BPayload.toString())
        console.log(BNetId.length, BLength.length, BDestination.length , BSource.length , BType.length , BTTL.length ,BNextHop.length , BPayload.length)

        const TotalLength = BNetId.length + BLength.length + BDestination.length + BSource.length + BType.length + BTTL.length + BNextHop.length + BPayload.length

        const BufferMesage = Buffer.concat([BNetId, BLength, BDestination, BSource, BType, BTTL, BNextHop, BPayload], TotalLength);

        return BufferMesage
    }

}

exports.Message = Message;