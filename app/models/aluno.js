var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlunoSchema = new Schema({
	nome: String,
	matricula: String,
	disciplinas: Array
});

module.exports = mongoose.model('Aluno', AlunoSchema);