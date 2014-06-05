#! /usr/bin/env node

/*
 * gitIO
 * http://git.io
 *
 * Copyright (c) 2014 Krish Dholakiya
 * Licensed under the MIT license.
 */

'use strict';

var request = require('request');

var payload = {
	url: process.argv[2],
	code: process.argv[3]
};

request.post({
	url: 'http://git.io',
	form: payload
}, function(err, res, body) {
	if(err) {
		return console.log('Well, looks like something went wrong. Try again perhaps?');
	}
	var statusCode = res.headers.status.split(' ')[0];
	if(statusCode == '201') {
		console.log('\nCongratulations! You can access your URL at ' + res.headers.location + '\n');
	} else if (statusCode == '422') {
		console.log('\nOne of two things went wrong:\n\n');
		console.log('  - You may have tried to shorten a link not hosted on Github.com\n');
		console.log('  - http://git.io/' + payload.code + ' was already taken\n\n');
	}
});


