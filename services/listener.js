const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const ModulePackets = require('../interfaces/packets');
const ModulePacketHandler = require('../services/PacketHandler');

var count = 0;

var StartListener = function (TypeListener, NodeConf) {

    var Ip = NodeConf.get('ClientIp')
    var Port = NodeConf.get('ClientPort')

    server.on('listening', function () {
        var address = server.address();
        console.log(TypeListener + ': UDP Server listening on ' + address.address + ':' + address.port);
    });

    server.on('message', function (message, remote) {
        console.log(TypeListener + ': Receiver message from ' + remote.address + ':' + remote.port + ' - ' + message);
        var buf = Buffer.from(message);

    });

    server.bind(Port, Ip);

    const p1 = new ModulePackets.Packets(1,100,1,1,0,99,1,"Ciao");
    console.log(TypeListener + ':' + ModulePackets.Packets.print_packets(p1))
    console.log(TypeListener + ':' + p1.print_packets)

}

exports.StartListener = StartListener;