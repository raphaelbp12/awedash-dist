var express = require('express'),
 app = express(),
 http = require('http'),
 httpServer = http.Server(app);

app.use('/static', express.static('static'));
app.use('/.well-known/acme-challenge', express.static('.well-known/acme-challenge'));

app.get('/*', function(req, res) {
console.log('request');
 res.sendFile(__dirname + '/index.html');
});
app.listen(80);