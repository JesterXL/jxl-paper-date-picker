console.log('Loading express server...');

var _ = require('lodash');
var express = require('express');
var app = express();
var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/favicon.ico'));
app.use('/bower_components',  express.static('bower_components'));
app.use('/node_modules',  express.static('node_modules'));
app.use('/', express.static('./'));

app.get('/', function(req, res) {
	res.send('Cannot find an index.html. Ensure you have built your project via "grunt".');
});

// hack for bower_components
app.use(function(req, res)
{
    var oldURL = req.url;
    req.url = __dirname + '/bower_components' + req.url;
    console.log('Falling back to ' + req.url + ' instead of ' + oldURL);
    res.sendFile(req.url);
});


var port = process.env.PORT || 9038;
console.log("Express port I'll use:", port);
app.listen(port, function() {
    console.log('Demo server started on port ' + port);
});