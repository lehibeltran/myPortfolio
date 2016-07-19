/**
 * Created by lehi on 7/19/16.
 */
var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/packages', express.static(__dirname + '/node_modules/'));

var port = 3000;
app.listen(port, function() {
    console.log('I\'m listening on port: ', port);
});