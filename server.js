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

//As a fallback, any route that would otherwise throw a 404 (Not Found) will be given to the
//home page, which will try to decompose the route and use the correct client-side route.
app.use(function(req, res)
{
    console.log('Falling back to ./demo instead of ' + req.url);
    req.url = 'index.html';
});

var port = process.env.PORT || 9038;
console.log("Express port I'll use:", port);
app.listen(port, function() {
    console.log('Demo server started on port ' + port);
});