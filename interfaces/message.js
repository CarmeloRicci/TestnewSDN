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

    get_packet_for_message (){
        var buf = new Buffer(data);
        var short_name = buf.toString('ascii', 0, 16);
        var name = buf.toString('ascii', 16, 32);
        return
    }

    get_message_for_paket (){
        var buf = new Buffer(data);
        var short_name = buf.toString('ascii', 0, 16);
        var name = buf.toString('ascii', 16, 32);
        return
    }

    static print_message(P) {
        return 'NetId: '+P.NetId+' Length: '+P.Length+' Destination: '+P.Destination+ ' Source: ' + P.Source + ' Type: '+ P.Type + ' TTL: '+ P.TTL + ' NextHop: '+ P.NextHop + ' Payload: ' + P.Payload;
    }
}

exports.Message = Message;