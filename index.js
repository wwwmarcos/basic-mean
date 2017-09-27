const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const Aluno = require('./Schema.js')
const path = require('path')

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/webapp/index.html'))
})

app.post('/app/cadastrar', function (req, res) {
  var newAluno = new Aluno({
    nome: req.body.nome,
    curso: req.body.curso
  })

  newAluno.save(function (err) {
    if (err) throw err
  })

  res.json({
    message: 'Aluno recebido',
    data: req.body.nome
  })
})

app.get('/app/listarById/:id', function (req, res) {
  Aluno.findOne({
    _id: req.params.id
  }, function (err, todos) {
    if (err) throw err
    res.json(todos)
  })
})

app.get('/app/listar', function (req, res) {
  Aluno.find(function (err, todos) {
    if (err) throw err
    res.json(todos)
  })
})

app.delete('/app/delete/:id', function (req, res) {
  Aluno.findOneAndRemove({
    _id: req.params.id
  }, function (err) {
    if (err) throw err
  })
  res.json({
    message: 'Aluno excluido'
  })
})

app.put('/app/editar', function (req, res) {
  Aluno.findByIdAndUpdate(req.body._id, {
    nome: req.body.nome,
    curso: req.body.curso
  }, function (err, user) {
    if (err) res.send(err)
    res.json({
      message: 'Aluno alterado'
    })
  })
})

app.use(express.static(path.join(__dirname, '/webapp/index.html')))

app.set('port', (process.env.PORT || 3000))

app.listen(app.get('port'), function () {
  console.log('running on port', app.get('port'))
})
