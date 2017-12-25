var express = require('express'),
 app = express(),
 http = require('http'),
 httpServer = http.Server(app);

app.use('/static', express.static('static'));

app.get('/', function(req, res) {
console.log('request');
 res.sendFile(__dirname + '/index.html');
});
app.listen(8080);