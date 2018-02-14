var Membri = require('../models/membroModel');
var bodyParser = require('body-parser');
var fs=require('fs');
var indexHTML='./index.html';

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/',(req,res)=>{
      fs.readFile(indexHTML,(err,result)=>{
          if (err){
            throw err;
          }
          res.writeHeader(200,{'Content-Type':'text/html'});
          res.write(result);
          res.end();
      })
  });
  app.get('/api/based/:dbname', function(req, res) {
    Membri.find({ username: req.params.dbname }, function(err, membri) {
      if (err) throw err;
      res.send(membri);
    });
  });

  app.get('/api/membri/:id', function(req, res) {
    Membri.findById({ _id: req.params.id }, function(err, membro) {
      if (err) throw err;
      res.send(membro);
    });
  });

  app.post('/api/membro', function(req, res) {
    if (req.body.id) {
      Membro.findByIdAndUpdate(
        req.body.id,
        { membro: req.body.membro },
        function(err, membro) {
          if (err) throw err;
          res.send('ok');
        }
      );
    } else {
      var nuovoMembro = Membri({
        nome: req.body.nome,
        cognome: req.body.cognome,
        datanascita: req.body.datanascita,
        email: req.body.email,
        telefono: req.body.telefono
      });
      nuovoMembro.save(function(err) {
        if (err) throw err;
        res.send('ok');
      });
    }
  });

  app.delete('/api/membro', function(req, res) {
    Membri.findByIdAndRemove(req.body.id, function(err) {
      if (err) throw err;
      res.send('ok');
    });
  });
};
