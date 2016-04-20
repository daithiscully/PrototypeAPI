/*var assert = require('chai').assert;
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});*/

var should = require('chai').should(),
	expect = require('chai').expect,
    request  = require('supertest'),
    api = request('http://localhost:3000/api/user'),
    app = require('../server.js');

var agent = request.agent(app);

// Tests for getting the Username
describe('GET /api/username/2', function(){
  it('respond with Led Zeppelin as the name', function(done){
    agent
      .get('/api/username/2')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
      .expect({
      	"id": "2",
      	"name": "Led Zeppelin"
      });
  });
});

describe('GET /api/username/3', function(){
  it('respond with Metallica as the name', function(done){
    agent
      .get('/api/username/3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
      .expect({
      	"id": "3",
      	"name": "Metallica"
      });
  });
});

describe('GET /api/username/4', function(){
  it('respond with Iron Maiden as the name', function(done){
    agent
      .get('/api/username/4')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
      .expect({
      	"id": "4",
      	"name": "Iron Maiden"
      });
  });
});

// Tests for getting the Emailuseremail
describe('GET /api/useremail/2', function(){
  it('respond with LedZeppelin@gmail.com as the email', function(done){
    agent
      .get('/api/useremail/2')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
      .expect({
      	"id": "2",
      	"name": "LedZeppelin@gmail.com"
      });
  });
});

describe('GET /api/useremail/3', function(){
  it('respond with Metallica@gmail.com as the email', function(done){
    agent
      .get('/api/useremail/3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
      .expect({
      	"id": "3",
      	"name": "Metallica@gmail.com"
      });
  });
});

describe('GET /api/useremail/4', function(){
  it('respond with IronMaiden@gmail.com as the email', function(done){
    agent
      .get('/api/useremail/4')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
      .expect({
      	"id": "4",
      	"email": "IronMaiden@gmail.com"
      });
  });
});