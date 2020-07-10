const ModulePackets = require('./packets');

class Message {
    constructor(message) {
        this.NetId = NetId;
        this.Length = Length;
        this.Destination = Destination;
        this.Source = Source;
        this.Type = Type;
        this.TTL = TTL;
        this.NextHop = NextHop;
        this.Payload = Payload;
    }

    static get_packet_for_message (){
        var buf = new Buffer(data);
        var short_name = buf.toString('ascii', 0, 16);
        var name = buf.toString('ascii', 16, 32);
        return ""
    }

    static get_message_for_paket (P){
        var BNetId =  new Buffer.from(''+[P.NetId])
        var BLength =  new Buffer.from(''+[P.Length])
        var BDestination =  new Buffer.from(''+[P.Destination])
        var BSource =  new Buffer.from(''+[P.Source])
        var BType =  new Buffer.from(''+[P.Type])
        var BTTL =  new Buffer.from(''+[P.TTL])
        var BNextHop =  new Buffer.from(''+[P.NextHop])
        var BPayload =  new Buffer.from(''+[P.Payload])
        //console.log(BNetId.toString(), BLength.toString(), BDestination.toString(), BSource.toString(), BType.toString(), BTTL.toString(), BNextHop.toString(), BPayload.toString())
        //console.log(BNetId.length, BLength.length, BDestination.length , BSource.length , BType.length , BTTL.length ,BNextHop.length , BPayload.length)

        const TotalLength = BNetId.length + BLength.length + BDestination.length + BSource.length + BType.length + BTTL.length + BNextHop.length + BPayload.length

        const BufferMesage =  Buffer.concat([BNetId, BLength,BDestination,BSource,BType,BTTL,BNextHop,BPayload], TotalLength);

        return BufferMesage
    }

    static print_message(P) {
        return 'NetId: '+P.NetId+' Length: '+P.Length+' Destination: '+P.Destination+ ' Source: ' + P.Source + ' Type: '+ P.Type + ' TTL: '+ P.TTL + ' NextHop: '+ P.NextHop + ' Payload: ' + P.Payload;
    }
}

exports.Message = Message;