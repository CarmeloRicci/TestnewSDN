var melo = class Packets {
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

    static print_packets(Packets) {
        return 'NetId: '+this.NetId+' Length: '+this.Length+' Destination: '+this.Destination+ ' Source: ' + this.Source + ' Type: '+ this.Type + ' TTL: '+ this.TTL + ' NextHop: '+ this.NextHop + ' Payload: ' + this.Payload;
    }
}

exports.melo = melo;