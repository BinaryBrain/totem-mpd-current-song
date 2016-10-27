#!/usr/bin/env node
"use strict";

const spawn = require('child_process').spawn;
let proc = spawn('./get-song.sh');

proc.stdout.on('data', (data) => {
	data = data.toString()

	var tags = ['mpd', 'music']
	var json = {
		title: 'mpd',
		text: data,
		tags: tags
	}

	process.stdout.write(JSON.stringify(json) + '\n');
});

proc.stderr.on('data', (data) => {
	console.error(`stderr: ${data}`);
});

proc.on('close', (code) => {
});
