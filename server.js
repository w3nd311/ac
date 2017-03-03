// server.js

// BASE SETUP ==============================================================

// chamar pacotes necessarios
var express 	= require('express');
var app			= express();
var bodyParser 	= require('body-Parser');
var morgan		= require('morgan');

var Aluno 					= require('./app/models/aluno');
var AlunoController 		= require('./app/controllers/alunoController');

// conectar ao BD
var mongoose 	= require('mongoose');
mongoose.Promise = global.Promise; // n sei o que é mas se tirar nao funciona
mongoose.connect('mongodb://wendell:batata@ds113630.mlab.com:13630/ursos');

// config app
app.use(morgan('dev')); // mostra requisiçoes no console

// config app pra usar bodyparser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// porta
var port = process.env.PORT || 8080;

// rotas pra API ===========================================================
var router = express.Router();

// middleware para todas as requisições
router.use(function(req, res, next){
	console.log('algo aconteceu.');
	next(); // pra ter certeza de que vai pra proxima rota e não pare aqui
});

// teste de rota pra ver se ta OK
router.get('/', function(req, res){
	res.json({ message: 'funcionando'});
});

// rotas
router.post('/alunos', AlunoController.PostAluno);
router.get('/alunos', AlunoController.GetAlunos);
router.put('/alunos/:id', AlunoController.UpdateAluno);
router.delete('/alunos/:id', AlunoController.DeleteAluno);
router.get('/alunos/:id', AlunoController.GetAlunoById);

// registro de rotas =======================================================

// todas as rotas com prefixo /api
app.use('/api', router);

// RODAR SERVIDOR
app.listen(port);
console.log('rodando na porta ' + port);