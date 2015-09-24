var express = require('express');
var app = express();
var createEmployee = require('./createEmployee');
var path = require('path');

app.use(express.static(path.join(__dirname, './public')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, './public/views/index.html'));
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

app.get('/createemployee', function(request, response) {
    var jsonString = JSON.stringify(createEmployee());
    console.log("Created Employee");
    response.send(jsonString);

});




//we will need this, but get rid of it later
//var jsonString = JSON.stringify(myArray);