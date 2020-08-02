const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const ModulePackets = require('../interfaces/packets');
const ModuleMessage = require('../interfaces/message');
const ModulePacketHandler = require('../services/PacketHandler');
const ModuleConf = require('../interfaces/config');
const ModuleBeacon = require('../services/Beacon');

var count = 0;

var StartListener = function (TypeListener, NodeConf, FlagRunBeaconProcess) {

    var Ip = NodeConf.get('ClientIp')
    var Port = NodeConf.get('ClientPort')

    server.on('listening', function () {
        var address = server.address();
        console.log(TypeListener + ': UDP Server listening on ' + address.address + ':' + address.port);
    });

    server.on('message', function (message, remote) {
        console.log(TypeListener + ': Receiver message from ' + remote.address + ':' + remote.port + ' - ' + message);
        //console.log (ModulePackets.Packets.print_packets(ModuleMessage.Message.get_packet_for_message(message) ) );
        ModulePacketHandler.PacketHandler.packet_handler(ModuleMessage.Message.get_packet_for_message(message)); // Attivo il Packet Handle per il messaggio appena ricevuto
    });

    //server.bind(Port, Ip);

    server.bind(Port, Ip, function () {
        server.setBroadcast(true);
        
      });
    server.addMembership(NodeConf.get('ClientIp'));

    // const p1 = new ModulePackets.Packets(1, 100, 1, 1, 0, 99, 1, 'Ciao');
    // console.log(TypeListener + ': ' + ModulePackets.Packets.print_packets(p1))

    // //var message = Buffer.concat([ModuleMessage.Message.get_message_for_paket(p1)], ModuleConf.LenLength);
    // var message = ModuleMessage.Message.get_message_for_paket(p1)

    // server.send(message, 0, message.length, 5000, "10.10.0.11", function (err, bytes) {
    //     if (err) {
    //         //server.close();
    //     } else {
    //         console.log('Data sent !!!');
    //     }
    // });

}


exports.StartListener = StartListener;