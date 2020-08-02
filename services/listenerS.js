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

var count = 0;
var FlagRunBeaconProcess = 0;
class ListenServer {
  static StartListener(TypeListener, NodeConf, FlagRunBeacon) {
    console.log(NodeConf.get("ClientIp"))
    FlagRunBeaconProcess = FlagRunBeacon
    var Ip = NodeConf.get('ServerIp')
    var Port = NodeConf.get('ServerPort')

    server.on('listening', function () {
      var address = server.address();
      console.log(TypeListener + ': UDP Server listening on ' + address.address + ':' + address.port);
    });

    server.on('message', function (message, remote) {
      console.log(TypeListener + ': Receiver message from ' + remote.address + ':' + remote.port + ' - ' + message);
      //console.log (ModulePackets.Packets.print_packets(ModuleMessage.Message.get_packet_for_message(message) ) );
      ModulePacketHandler.PacketHandler.packet_handler(ModuleMessage.Message.get_packet_for_message(message)); // Attivo il Packet Handle per il messaggio appena ricevuto
    });

    nc.udp().port(parseInt(NodeConf.get('ServerBroadcastPort'))).listen().on('data', function (rinfo, data) {
      //console.log('Got', data.toString(), 'from', rinfo.address, rinfo.port)
      ModulePacketHandler.PacketHandler.packet_handler(ModuleMessage.Message.get_packet_for_message(data), NodeConf); // Attivo il Packet Handle per il messaggio appena ricevuto
    })

    server.bind(Port, Ip, function () {
      server.setBroadcast(true);
    });

    if (FlagRunBeaconProcess == 1) {
      BeaconProcess(NodeConf);
    }
  }

  static BeaconProcess(NodeConf) {

    var message = ModuleMessage.Message.get_message_for_paket(ModuleBeacon.Beacon.CreateBeaconMessage(NodeConf.get('MyAddress'), NodeConf.get('ServerIp')))
    server.send(message, 0, message.length, NodeConf.get('ServerBroadcastPort'), NodeConf.get('ServerBroadcastIp'), function (err, bytes) {
      if (err) {
        //Broadcast.close();
      } else {
        console.log('CreateBeaconMessage -> Beacon sent');
      }
    });
    setTimeout(() => { BeaconProcess(NodeConf) }, 6000);
  }
}
exports.ListenServer = ListenServer;