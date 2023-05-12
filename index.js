// jshint esversion: 6

/**
 * http://usejsdoc.org/
 */

'use strict';

const config = require('./config');
const httpProxy	= require('@dongmuni/nodejs-http-proxy');

if ( process.argv.length < 3 )
{
	console.log(`USAGE: ${process.argv[0]} ${process.argv[1]} (server|client)`);
	process.exit(-1);
}

var appType = process.argv[2];

if ( appType === 'server' )
{
	httpProxy.startServer(config.serverOptions);
}
else if ( appType === 'worker' )
{
	httpProxy.startWorker(config.workerOptions);
}
