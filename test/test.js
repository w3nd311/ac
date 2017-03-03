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

	describe('GET todos os alunos', function() {

	    it('should return todos os alunos', function(done) {
	      var AlunoMock = sinon.mock(Aluno);
	      var expectedResult = {status: true, Alunos: [] };
	      AlunoMock.expects('find').yields(null, expectedResult);
	      Aluno.find(function(err, result) {
	      	AlunoMock.verify();
	      	AlunoMock.restore();
	      	expect(result.status).to.be.true;
	      	done();
	      });
	    });

	    it('should return error', function(done) {
	      var AlunoMock = sinon.mock(Aluno);
	      var expectedResult = {status: false, error: "algo deu errado" };
	      AlunoMock.expects('find').yields(expectedResult, null);
	      Aluno.find(function(err, result) {
	      	AlunoMock.verify();
	      	AlunoMock.restore();
	      	expect(err.status).to.not.be.true;
	      	done();
	      });
	    });

    });

	

});