var express = require('express');
var app = express();
var process = require('process');
app.get('/', function (req, res) {
	if (Math.random()<parseFloat(process.env.PBUG))
	{
		res.send('Bug found');
		process.exit(-1);
	}
	res.send('No bug!');
});

app.listen(8888, function () {
	console.log('Example app listening on port 3000!');
});

