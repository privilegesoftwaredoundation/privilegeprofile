var express = require('express')
  , _ = require('underscore')
  , app = express();

var home = function(req, res){
  res.send('Check your privilege!');
};

// /p/username
// {result: "Username is privileged as hell!"}
var profile = function(req, res){
  res.send({result: req.param('username') + ' is privileged as hell!'});
};

app.get('/', home);
app.get('/p/:username', profile);

module.exports = {
  app: app,
  handlers: {
  	home: home,
  	profile: profile
  }
};