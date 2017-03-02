var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should;
var expect = chai.expect;

var server = 'http://localhost:8080/api';

chai.use(chaiHttp);

describe('teste api', function() {

	describe('Status', function() {
		it('API funcionando', function(done) {
			chai.request(server)
			.get('/')
			.end(function(err, res) {
				expect(res).to.have.status(200);
				done();
			});
		});
	});

});