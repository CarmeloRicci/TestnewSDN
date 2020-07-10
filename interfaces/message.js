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

    async static get_message_for_paket (P){
        const BNetId = await new Buffer.from(P.NetId)
        const BLength = await new Buffer.from(P.Length)
        const BDestination = await new Buffer.from(P.Destination)
        const BSource = await new Buffer.from(P.Source)
        const BType = await new Buffer.from(P.Type)
        const BTTL = await new Buffer.from(P.TTL)
        const BNextHop = await new Buffer.from(P.NextHop)
        const BPayload = await new Buffer.from(P.Payload)

        const TotalLength = BNetId.length + BLength.length + BDestination.length + BSource.length + BType.length + BTTL.length + BNextHop.length + BPayload.length

        const BufferMesage = await Buffer.concat([BNetId, BLength,BDestination,BSource,BType,BTTL,BNextHop,BPayload], TotalLength);

        return BufferMesage
    }

    static print_message(P) {
        return 'NetId: '+P.NetId+' Length: '+P.Length+' Destination: '+P.Destination+ ' Source: ' + P.Source + ' Type: '+ P.Type + ' TTL: '+ P.TTL + ' NextHop: '+ P.NextHop + ' Payload: ' + P.Payload;
    }
}

exports.Message = Message;