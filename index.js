var express = require('express')
  , _ = require('underscore')
  , app = express();

app.get('/', function(req, res){
  res.send('Check your privilege!');
});

// /p/username
// {result: "Username is privileged as hell!"}

app.get('/p/:username', function(req, res){
  res.send({result: req.param('username') + ' is privileged as hell!'});
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
