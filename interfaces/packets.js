class Packets {
    constructor(NetId, Length, Destination, Source, Type, TTL, NextHop, Payload) {
        this.NetId = NetId
        this.Length = Length
        this.Destination = Destination
        this.Source = Source
        this.Type = Type
        this.TTL = TTL
        this.NextHop = NextHop
        this.Payload = Payload
    }

    static packets() {
        return packets
    }

    static print_packets(packets) {
        return 'NetId: '+packets.NetId+' Length: '+packets.Length+' Destination: '+packets.Destination+ ' Source: ' + packets.Source + ' Type: '+ packets.Type + ' TTL: '+ packets.TTL + ' NextHop: '+ packets.NextHop + ' Payload: ' + packets.Payload;
    }
}

