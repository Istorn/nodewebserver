var express= require('express');
var app=express();
var mongoose=require('mongoose');
var config=require('./config');
var apiMain=require('./controllers/apiMain');

var port=process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnString());

apiMain(app);

app.listen(port, ()=>{
  console.log("in ascolto sulla porta "+port);
});
