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

    static packets() {
        return Packets
    }

    static print_packets(packets) {
        return 'NetId: '+Packets.NetId+' Length: '+Packets.Length+' Destination: '+Packets.Destination+ ' Source: ' + Packets.Source + ' Type: '+ Packets.Type + ' TTL: '+ Packets.TTL + ' NextHop: '+ Packets.NextHop + ' Payload: ' + Packets.Payload;
    }
}

exports.Packets = Packets;