const express = require('express'),
      app = express(),
      process = require('process')

app.get('/', (req, res) => {
	if (Math.random() < parseFloat(process.env.PBUG)) {
		res.send('Bug found')
		process.exit(-1)
		return
	}
	
	res.send('No bug!')
})

app.listen(8888, () => {
	console.log('Example app listening on port 3000!')
})

