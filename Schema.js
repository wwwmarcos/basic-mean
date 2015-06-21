var mongoose = require('mongoose');  
mongoose.connect('mongodb://localhost/Escola');

var db = mongoose.connection;  
db.on('error', function(err){  
	console.log('Mongodb - Erro de conexao.', err)
});
db.on('open', function () {  
	console.log('Mongodb - Conexão aberta.')
});
db.on('connected', function(err){  
	console.log('Mongodb - Conectado')
});
db.on('disconnected', function(err){  
	console.log('Mongodb - Desconectado')
});

var Schema = mongoose.Schema;

var alunoShema = new Schema({
	nome: String,
	curso: String
});

module.exports = mongoose.model('Alunos', alunoShema);

