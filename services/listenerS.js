var dgram = require('dgram');
var server = dgram.createSocket('udp4');
const ModulePackets = require('../interfaces/packets');
const ModuleMessage = require('../interfaces/message');

var count = 0;

var StartListener = function (TypeListener, NodeConf) {

  var Ip = NodeConf.get('ServerIp')
  var Port = NodeConf.get('ServerPort')

  console.log(TypeListener + ': Ciao! questo è il listener ' + TypeListener + " che è in esecuzione all'indirizzo " + Ip + ' e porta: ' + Port);

  server.on('listening', function () {
    var address = server.address();
    console.log(TypeListener + ': UDP Server listening on ' + address.address + ':' + address.port);
  });

  server.on('message', function (message, remote) {
    console.log('[' + count + '] ' + remote.address + ':' + remote.port + ' - ' + message);
    count++;
    var buf = Buffer.from(message);
    ModuleMessage.Message.get_packet_for_message(message);

  });

  server.bind(Port, Ip);

}


exports.StartListener = StartListener;