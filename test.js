const NetcatServer = require('netcat/server')
const NetcatClient = require('netcat/client')
const nc = new NetcatServer()
const nc2 = new NetcatClient()

nc.udp().port(5000).listen().on('data', function (rinfo, data) {
    console.log('Got', data.toString(), 'from', rinfo.address, rinfo.port)
    nc.close()
  })

