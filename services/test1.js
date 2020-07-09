var PORT = 2222;
var HOST = '192.168.2.1';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');
var count = 0;

server.on('listening', function() {
  var address = server.address();
 console.log('UDP Server listening on ' + address.address + ':' + address.port);
});


server.on('message', function(message, remote) {
 console.log('['+ count +'] ' + remote.address + ':' + remote.port +' - ' + message);
 count++;
});

server.bind(PORT, HOST);