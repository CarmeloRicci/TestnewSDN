const NetcatServer = require('netcat/server')
const NetcatClient = require('netcat/client')
const nc = new NetcatServer()
const nc2 = new NetcatClient()

nc.udp().port(2100).listen().on('data', function (rinfo, data) {
    console.log('Got', data.toString(), 'from', rinfo.address, rinfo.port)
    nc.close()
  })

var nc2 = new NetcatClient()
nc2.udp().port(2100).wait(1000).init().send('hello', '127.0.0.1')