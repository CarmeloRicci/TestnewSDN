var dgram = require('dgram');
var server = dgram.createSocket('udp4');

var count = 0;

var StartListener = function (TypeListener, NodeConf) {

    var Ip = NodeConf.get('ClientIp')
    var Port = NodeConf.get('ClientPort')

    console.log(TypeListener + ': Ciao! questo è il listener ' + TypeListener + " che è in esecuzione all'indirizzo " + Ip + ' e porta: ' + Port);

    //////// Feedback di apertura connessione ////////
    server.on('listening', function () {
        var address = server.address();
        console.log(TypeListener + ': UDP Server listening on ' + address.address + ':' + address.port);
    });

    //////// Feedback di apertura connessione ////////
    //   server.on('message', function (message, remote) {
    //     console.log(TypeListener + ': [' + count + '] ' + remote.address + ':' + remote.port + ' - ' + message);
    //     count++;
    //     var buf = Buffer.from(message);
    //   });

    server.on('message', function (message, remote) {
        console.log(TypeListener + ': [' + count + '] ' + remote.address + ':' + remote.port + ' - ' + message);
        count++;
        var buf = Buffer.from(message);
    });

    server.bind(Port, Ip);
    
}

exports.StartListener = StartListener;