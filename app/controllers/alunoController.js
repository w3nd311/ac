var Aluno = require('../../app/models/aluno');

var AlunoCtrl = {

	GetAlunos: function(req, res){
		Aluno.find({}, function(err, alunos) {
			if (err) {
				res.json({ status: false, error: "deu algo errado" });
				return;
			}
			else{
				res.json({ status: true, alunos: alunos});
			}
		});
	},


	PostAluno: function(req, res){
		var aluno = new Aluno(req.body);
		aluno.save(function(err, aluno) {
			if (err) {
				res.json({ status: false, error: "deu algo errado" });
				return;
			}
			else{
				res.json({ status: true, message: "aluno salvo"});
			}
		});
	},

	GetAlunoById: function(req, res) {
		Aluno.findById(req.params.id, function(err, aluno) {
			if (err) {
				res.json({ status: false, error: "deu algo errado" });
			}
			else{
				res.json({ status: true, aluno: aluno});				
			}
		});
	},

	UpdateAluno: function(req, res){
		Aluno.findById(req.params.id, function(err, aluno) {
			if (err) {
				res.json({ status: false, error: "deu algo errado" });
			}
			else{
				aluno.nome = req.body.nome;
				aluno.matricula = req.body.matricula;
				aluno.disciplinas = req.body.disciplinas;
				aluno.save(function(err) {
					if (err) {
						res.send(err);
					}
					else{
						res.json({ message:'aluno atualizado'});
					}
				});
				res.json({ status: true, message: "aluno atualizado"});
			}
		});
	},

	DeleteAluno: function(req, res) {
		Aluno.findById(req.params.id, function(err, aluno) {
			if (err) {
				res.json({ status: false, error: "deu algo errado" });
			}
			else{				
				aluno.remove(function(err) {
					if (err) {
						res.json({status: false, error: "Deleting todo is not successfull"});
						return;
					}
					else{
						res.json({ message:'aluno deletado'});
					}
				});				
			}
		});
	}

};

module.exports = AlunoCtrl;