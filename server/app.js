var express = require('express');
var app = express();
var createEmployee = require('./createEmployee');


app.get('/', function(request, response){
    response.send('Hello');
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});


//we will need this, but get rid of it later
var jsonString = JSON.stringify(myArray);