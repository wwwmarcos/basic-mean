var express = require('express');

module.exports = (function() {

    var router = express.Router();

    app.get('/app/cadastrar/{}', function (req, res) {
        escola.find(function(err, todos) {
            if (err)
            res.send(err)
            res.json(todos);
        });
    })


    app.post('/app/listar', function (req, res) {
        escola.find(function(err, todos) {
            if (err)
            res.send(err)
            res.json(todos);
        });
    })

    return router;    
    
})();


