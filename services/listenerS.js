var dgram = require('dgram');
var server = dgram.createSocket('udp4');
const ModulePackets = require('../interfaces/packets');
const ModuleMessage = require('../interfaces/message');
const ModulePacketHandler = require('../services/PacketHandler')

var count = 0;

var StartListener = function (TypeListener, NodeConf) {
  var Ip = NodeConf.get('ServerIp')
  var Port = NodeConf.get('ServerPort')

  //console.log(TypeListener + ': Ciao! questo è il listener ' + TypeListener + " che è in esecuzione all'indirizzo " + Ip + ' e porta: ' + Port);

  server.on('listening', function () {
    var address = server.address();
    console.log(TypeListener + ': UDP Server listening on ' + address.address + ':' + address.port);
  });

  server.on('message', function (message, remote) {
    //console.log(TypeListener + ': Receiver message from ' + remote.address + ':' + remote.port + ' - ' + message);
    //console.log (ModulePackets.Packets.print_packets(ModuleMessage.Message.get_packet_for_message(message) ) );
    ModulePacketHandler.PacketHandler.packet_handler(ModuleMessage.Message.get_packet_for_message(message)); // Attivo il Packet Handle per il messaggio appena ricevuto
  });

  server.bind(Port, Ip);

}


exports.StartListener = StartListener;