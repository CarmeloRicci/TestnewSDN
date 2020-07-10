const ModulePackets = require('./packets');
const ModuleConf = require('./config');

class Message {

    static get_packet_for_message (){
        var buf = new Buffer(data);
        var short_name = buf.toString('ascii', 0, 16);
        var name = buf.toString('ascii', 16, 32);
        return ""
    }

    static get_message_for_paket (P){
        var BNetId =  new Buffer.from(ModuleConf.LenNetId,''+[P.NetId],'utf8')
        var BLength =  new Buffer.from(ModuleConf.LenLength,''+[P.Length])
        var BDestination =  new Buffer.from(ModuleConf.LenDestination,''+[P.Destination])
        var BSource =  new Buffer.from(ModuleConf.LenSource,''+[P.Source])
        var BType =  new Buffer.from(ModuleConf.LenType,''+[P.Type])
        var BTTL =  new Buffer.from(ModuleConf.LenTTL,''+[P.TTL])
        var BNextHop =  new Buffer.from(ModuleConf.LenNextHop,''+[P.NextHop])
        var BPayload =  new Buffer.from(ModuleConf.LenPayload,''+[P.Payload])
        //console.log(BNetId.toString(), BLength.toString(), BDestination.toString(), BSource.toString(), BType.toString(), BTTL.toString(), BNextHop.toString(), BPayload.toString())
        //console.log(BNetId.length, BLength.length, BDestination.length , BSource.length , BType.length , BTTL.length ,BNextHop.length , BPayload.length)

        const TotalLength = BNetId.length + BLength.length + BDestination.length + BSource.length + BType.length + BTTL.length + BNextHop.length + BPayload.length

        const BufferMesage =  Buffer.concat([BNetId, BLength,BDestination,BSource,BType,BTTL,BNextHop,BPayload], TotalLength);

        return BufferMesage
    }

}

exports.Message = Message;