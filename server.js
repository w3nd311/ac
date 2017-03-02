// server.js

// BASE SETUP ==============================================================

// chamar pacotes necessarios
var express 	= require('express');
var app			= express();
var bodyParser 	= require('body-Parser');
var morgan		= require('morgan');

// config app
app.use(morgan('dev')); // log requests to the console

// conectar ao BD

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

// mais rotas vao aparecer aqui

// rotas que terminam com /alunos
//---------------------------------------------------------------------------------



// registro de rotas =======================================================

// todas as rotas com prefixo /api
app.use('/api', router);

// RODAR SERVIDOR
app.listen(port);
console.log('rodando na porta ' + port);