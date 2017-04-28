module.exports = {
	serverOptions : {
		textNetOptions : {
			port : 8081,
			backlog : 1024,
			logConnection : true,
			idleCloseTimeout : 60000,
			logSession : false
		},
		proxyOptions : {
			port : 8080,
			backlog : 1024,
			logEvent : false,
			logError : false,
			logAccess : true
		}
	},
	workerOptions : {
		textNetOptions : {
			serverAddresses : [ {
				host : 'localhost',
				port : 8081
			} ],
			autoRegister : true,
			idlePingTimeout : 30000,
			reconnectInterval : 3000,
			logConnection : true,
			logSession : false
		},
		proxyOptions : {
			logEvent : false,
			logError : false,
			logAccess : true
		}
	}
};