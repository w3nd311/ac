var mongoose = require('mongoose');

var alunoSchema = mongoose.Schema({
	nome: String
});

var Aluno = mongoose.model('Aluno', alunoSchema);
module.exports = Aluno;