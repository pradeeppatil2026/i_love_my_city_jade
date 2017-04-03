var express = require('express');
var routes = require('./routes/route.js');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine','jade');

app.use(express.static(__dirname+'/public'));


app.get('/', routes.home);

app.get('/:city', routes.city);

var port = 	process.env.PORT || 8080;

var server = app.listen(port, function(req, res){
	console.log('Catch all the action @	localhost:'+port);
});