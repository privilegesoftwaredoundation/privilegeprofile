var assert = require("assert")
  , should = require('should')
  , app = require('../app');


describe('App', function(){
  describe('home', function(){
  	var home = app.handlers.home;

    it('should return -1 when the value is not present', function(done){
      var req = {}
        , res = {
          send: function(result){
            'Check your privilege!'.should.be.equal(result);
        	  done();
          }
      };
      home(req, res);
    });
  });
});