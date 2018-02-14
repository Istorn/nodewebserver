var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var apiMain = require('./controllers/apiMain');

mongoose.connect(config.getDbConnString());
var port = process.env.PORT || 3000;
apiMain(app);

app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  res.render('index', { name: 'Emanuele' });
});

app.listen(port, () => {
  console.log('in ascolto sulla porta ' + port);
});
