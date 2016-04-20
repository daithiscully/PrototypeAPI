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

describe('Math', function () {
  describe('#max', function () {
    it('returns the biggest number from the arguments', function () {
      var max = Math.max(1, 2, 10, 3);
      expect(max).to.equal(10);
    });
  });
});

describe('GET /api/user/2', function(){
  it('respond with Led Zeppelin as the name', function(done){
    agent
      .get('/api/user/2')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
      .expect({
      	"id": "2",
      	"name": "Led Zeppelin"
      });
  });
});

describe('GET /api/user/3', function(){
  it('respond with Metallica as the name', function(done){
    agent
      .get('/api/user/3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
      .expect({
      	"id": "3",
      	"name": "Metallica"
      });
  });
});

describe('GET /api/user/4', function(){
  it('respond with Iron Maiden as the name', function(done){
    agent
      .get('/api/user/4')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
      .expect({
      	"id": "4",
      	"name": "Iron Maiden"
      });
  });
});