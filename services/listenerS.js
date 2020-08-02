const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const ModulePackets = require('../interfaces/packets');
const ModuleMessage = require('../interfaces/message');
const ModulePacketHandler = require('../services/PacketHandler');
const ModuleConf = require('../interfaces/config');
const ModuleBeacon = require('../services/Beacon');

var count = 0;

var StartListener = function (TypeListener, NodeConf, FlagRunBeaconProcess) {

  var Ip = NodeConf.get('ServerIp')
  var Port = NodeConf.get('ServerPort')

  //console.log(TypeListener + ': Ciao! questo è il listener ' + TypeListener + " che è in esecuzione all'indirizzo " + Ip + ' e porta: ' + Port);

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

  // server.bind(Port, function () {
  //   server.setBroadcast(true);
  // });

  if (FlagRunBeaconProcess == 1) {
    console.log("OK 1 !!!")
    var message = ModuleMessage.Message.get_message_for_paket(ModuleBeacon.Beacon.CreateBeaconMessage(NodeConf.get('MyAddress'), NodeConf.get('ServerIp')))

    server.send(message, 0, message.length, NodeConf.get('ServerPort'), '10.10.0.5', function (err, bytes) {
      if (err) {
        //Broadcast.close();
      } else {
        console.log('CreateBeaconMessage -> Beacon sent ');
      }
    });


  //ModuleBeacon.Beacon.StartBeaconProcess(message,NodeConf.get('ServerPort'), NodeConf.get('ServerBroadcast'))

  // if (FlagRunBeaconProcess == 1) {
  //   setTimeout(function cb() {
  //     var message = ModuleMessage.Message.get_message_for_paket( ModuleBeacon.Beacon.CreateBeaconMessage(NodeConf.get('MyAddress'), NodeConf.get('ServerIp')) )
  //     server.send(message, 0, message.length, NodeConf.get('ServerPort'), NodeConf.get('ServerBroadcast'), function (err, bytes) {
  //       if (err) {
  //         //server.close();
  //       } else {
  //         console.log(TypeListener + ': Beacon sent ');
  //       }
  //     });
  //   }, 1000);


 }










}




exports.StartListener = StartListener;