var bodyParser = require('body-parser');
var http 	   = require('http'); 
var express    = require('express')
var app 	   = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: true
}));

var aluno = require('./Schema.js');

app.get('/', function (req, res){
	res.sendFile(__dirname + '/webapp/index.html');
})

app.post('/app/cadastrar', function (req, res) {
	var newAluno = new aluno({nome: req.body.nome, curso: req.body.curso});
	newAluno.save(function(err) {
		if (err) throw err;
	}); 
	res.json({ message: 'Aluno recebido', data: req.body.nome});
})

app.get('/app/listarById/:id', function (req, res) {
	aluno.findOne({ _id: req.params.id }, function(err, todos) {
		if (err) throw err;
		res.json(todos);
	});
})

app.get('/app/listar', function (req, res) {
	aluno.find(function(err, todos) {
		if (err) throw err;
		res.json(todos);
	});
})

app.delete('/app/delete/:id', function (req, res) {
	aluno.findOneAndRemove({ _id: req.params.id }, function(err) {
		if (err) throw err;
	});
	res.json({ message: 'Aluno excluido'});
})

app.put("/app/editar", function(req, res){
	aluno.findByIdAndUpdate(req.body._id, { nome: req.body.nome, curso: req.body.curso }, function(err, user) {
		if (err) res.send(err);
		res.json({ message: 'Aluno alterado'});
	});
});

app.use(express.static(__dirname + '/webapp'));

app.listen(3000)
console.log("localhost:3000")