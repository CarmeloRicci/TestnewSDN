const ModulePackets = require('./packets');
const ModuleConf = require('./config');

class Message {

    static get_packet_for_message(message) {
        console.log(message.length)
        var index = 0;

        var packet = new ModulePackets.Packets();
        
        packet.NetId = message.subarray(0,ModuleConf.LenNetId).toString('utf8')
        index = index + ModuleConf.LenNetId

        packet.Length = message.subarray(index,index+ModuleConf.LenLength).toString('utf8')
        index = index + ModuleConf.LenLength

        packet.Destination = message.subarray(index,index+ModuleConf.LenDestination).toString('utf8')
        index = index + ModuleConf.LenDestination

        packet.Source = message.subarray(index,index+ModuleConf.LenSource).toString('utf8')
        index = index + ModuleConf.LenSource

        packet.Type = message.subarray(index,index+ModuleConf.LenType).toString('utf8')
        index = index + ModuleConf.LenType

        packet.TTL = message.subarray(index,index+ModuleConf.LenTTL).toString('utf8')
        index = index + ModuleConf.LenTTL

        packet.NextHop = message.subarray(index,index+ModuleConf.LenNextHop).toString('utf8')
        index = index + ModuleConf.LenNextHop

        packet.Payload = message.subarray(index,index+ModuleConf.LenPayload).toString('utf8')

        console.log(packet.NetId.length, packet.Length.length, packet.Destination.length , packet.Source.length , packet.Type.length , packet.TTL.length ,packet.NextHop.length , packet.Payload.length)
        return packet

    }

    static get_message_for_paket(P) {

        var BNetId = Buffer.allocUnsafeSlow(ModuleConf.LenNetId)
        var BLength = Buffer.allocUnsafeSlow(ModuleConf.LenLength)
        var BDestination = Buffer.allocUnsafeSlow(ModuleConf.LenDestination)
        var BSource = Buffer.allocUnsafeSlow(ModuleConf.LenSource)
        var BType = Buffer.allocUnsafeSlow(ModuleConf.LenType)
        var BTTL = Buffer.allocUnsafeSlow(ModuleConf.LenTTL)
        var BNextHop = Buffer.allocUnsafeSlow(ModuleConf.LenNextHop)
        var BPayload = Buffer.allocUnsafeSlow(ModuleConf.LenPayload)

        BNetId.write('' + [P.NetId])
        BLength.write('' + [P.Length])
        BDestination.write('' + [P.Destination])
        BSource.write('' + [P.Source])
        BType.write('' + [P.Type])
        BTTL.write('' + [P.TTL])
        BNextHop.write('' + [P.NextHop])
        BPayload.write('' + [P.Payload])

        //console.log(BNetId.toString(), BLength.toString(), BDestination.toString(), BSource.toString(), BType.toString(), BTTL.toString(), BNextHop.toString(), BPayload.toString())
        console.log(BNetId.length, BLength.length, BDestination.length , BSource.length , BType.length , BTTL.length ,BNextHop.length , BPayload.length)

        const TotalLength = BNetId.length + BLength.length + BDestination.length + BSource.length + BType.length + BTTL.length + BNextHop.length + BPayload.length
        const BufferMesage = Buffer.concat([BNetId, BLength, BDestination, BSource, BType, BTTL, BNextHop, BPayload], TotalLength);

        return BufferMesage
    }

}

exports.Message = Message;