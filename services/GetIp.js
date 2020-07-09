var os = require('os');
var ifaces = os.networkInterfaces();

var ArrayIpOut = []
var IpClient = "";
var IpServer = "";

console.log("Start GetIp.js\n")

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }
    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      //console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      //console.log(ifname, iface.address);
      ArrayIpOut.push({'interfaces': ifname , 'ip': iface.address })
    }
    ++alias;
  });
});

for (var i in ArrayIpOut) {
  if(ArrayIpOut[i].interfaces == "wlan0") IpClient = ArrayIpOut[i].ip
  if(ArrayIpOut[i].interfaces == "uap0") IpServer = ArrayIpOut[i].ip
}

exports.ArrayIpOut = ArrayIpOut; // ho tutti gli indirizzi
exports.IpClient = IpClient;
exports.IpServer = IpServer;