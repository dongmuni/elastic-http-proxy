// jshint esversion: 6

const os = require('os');

const envmap = {
	'DESKTOP-0276JQ0': 'local'/*,
	'dev-sys': 'dev',
	'dev-app': 'dev'*/
};

const type = envmap[os.hostname()];

module.exports = type ? require('./config-' + type) : require('./config-live');
