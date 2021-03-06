const NetcatServer = require('netcat/server')
const NetcatClient = require('netcat/client')
const nc = new NetcatServer()
const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const ModulePackets = require('../interfaces/packets');
const ModuleMessage = require('../interfaces/message');
const ModulePacketHandler = require('../services/PacketHandler');
const ModuleConf = require('../interfaces/config');
const ModuleBeacon = require('../services/Beacon');
const ModuleMain = require('../main');



class ListenClient {
    static StartListener(TypeListener, NodeConf, FlagRunBeaconProcess) {

        var Ip = NodeConf.get('ClientIp')
        var Port = NodeConf.get('ClientPort')

        server.on('listening', function () {
            var address = server.address();
            console.log(TypeListener + ': UDP Server listening on ' + address.address + ':' + address.port);
        });

        server.on('message', function (message, remote) {
            console.log(TypeListener + ': Receiver message from ' + remote.address + ':' + remote.port + ' - ' + message);
            //console.log (ModulePackets.Packets.print_packets(ModuleMessage.Message.get_packet_for_message(message) ) );
            ModulePacketHandler.PacketHandler.packet_handler(ModuleMessage.Message.get_packet_for_message(message),NodeConf); // Attivo il Packet Handle per il messaggio appena ricevuto
        });

        nc.udp().port(parseInt(NodeConf.get('ClientBroadcastPort'))).listen().on('data', function (rinfo, data) {
            //console.log('Got', data.toString(), 'from', rinfo.address, rinfo.port)
            ModulePacketHandler.PacketHandler.packet_handler(ModuleMessage.Message.get_packet_for_message(data),NodeConf); // Attivo il Packet Handle per il messaggio appena ricevuto
        })

        server.bind(Port, Ip, function () {
            server.setBroadcast(true);
            //server.addMembership(NodeConf.get('ClientBroadcastIp'),NodeConf.get('ClientIp'))
        });

    }
    static BeaconProcess(NodeConf) {

        var message = ModuleMessage.Message.get_message_for_paket(ModuleBeacon.Beacon.CreateBeaconMessage(NodeConf.get('MyAddress'), NodeConf.get('ClientIp')))
        server.send(message, 0, message.length, NodeConf.get('ClientBroadcastPort'), NodeConf.get('ClientBroadcastIp'), function (err, bytes) {
            if (err) {
                //Broadcast.close();
            } else {
                console.log('CreateBeaconMessage -> Beacon sent ');
            }
        });
        setTimeout(() => { BeaconProcess(NodeConf) }, 6000);
    }



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
exports.ListenClient = ListenClient;
