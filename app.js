var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('Hello Sean Roger!')
})

app.listen(4000)
