// const ModuleListenerC = require('./services/listener');
// const ModuleListenerS = require('./services/listenerS');
// const ModuleGetIp = require('./services/GetIp');
// const ModuleReadConf = require('./services/readconf');



//console.log(ModuleGetIp.ArrayIpOut)
//var NodeConf = ModuleReadConf.confnode;
//console.log(ModuleReadConf.confnode)
//console.log('\n\n\t\t\t Sono il nodo ' + NodeConf.properties +' \n\n')

//ModuleListenerC.StartListener("Client Mode",ModuleGetIp.IpClient,2222);
//ModuleListenerS.StartListener("Station Mode",ModuleGetIp.IpServer,50007);


  var addToObject = function (obj, key, value, index) {

	// Create a temp object and index variable
	var temp = {};
	var i = 0;

	// Loop through the original object
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) {

			// If the indexes match, add the new item
			if (i === index && key && value) {
				temp[key] = value;
			}

			// Add the current item in the loop to the temp obj
			temp[prop] = obj[prop];

			// Increase the count
			i++;

		}
	}

	// If no index, add to the end
	if (!index && key && value) {
		temp[key] = value;
	}

	return temp;

};



// Original object
var lunch = {
    sandwich: 'turkey',
    drink: 'soda',
    chips: true
  };

  console.log(lunch)
  
  // Add to the end of the object
addToObject(lunch, 'dessert', 'cookie');
  
  // Add between sandwich and drink
addToObject(lunch, 'topping', 'tomato', 1);
  
  // Immutable copy of lunch
addToObject(lunch);

  console.log(lunch)