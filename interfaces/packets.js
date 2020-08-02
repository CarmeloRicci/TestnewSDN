class Packets {
    constructor(NetId, Length, Destination, Source, Type, TTL, NextHop, Payload) {
        this.NetId = NetId;
        this.Length = Length;
        this.Destination = Destination;
        this.Source = Source;
        this.Type = Type;
        this.TTL = TTL;
        this.NextHop = NextHop;
        this.Payload = Payload;
    }

    static print_packets(P) {
        //return 'NetId: '+P.NetId+' Length: '+P.Length+' Destination: '+P.Destination+ ' Source: ' + P.Source + ' Type: '+ P.Type + ' TTL: '+ P.TTL + ' NextHop: '+ P.NextHop + ' Payload: ' + P.Payload;
        return 'NetId: '+P.NetId+' Length: '+P+' Destination: '+P.Destination+ ' Source: ' + P.Source + ' Type: '+ P.Type + ' TTL: '+ P.TTL + ' NextHop: '+ P.NextHop + ' Payload: ' + P.Payload;
    }
}

exports.Packets = Packets;