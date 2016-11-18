var expect = require('chai').expect;
var nock = require('nock');

describe('index', function() {
  beforeEach(function() {
    nock('http://example.com')
      .get('/message')
      .reply(200, 'hello world');
  });
  it('renders', function() {
    return this.visit('/')
      .then(function(res) {
        var $ = res.jQuery;
        // var response = res.response;

        // add your real tests here
        expect($('body').length).to.equal(1);
        expect($('h1').text().trim()).to.equal('ember-fastboot-addon-tests');
        expect($('.message').text()).to.equal('hello world');
      });
  });

});