var ModuleListener = require('./services/listener');


myIpC = "192.168.1.90"
myIpS = "192.168.1.90"

ModuleListener.StartListener("Client Mode",2222);
ModuleListener.StartListener("Station Mode",50007);