var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var membroSchema=new Schema({
    nome: String,
    cognome: String,
    datanascita: Date,
    email: String,
    telefono: String
});

var Membri=mongoose.model('Membri',membroSchema);
module.exports=Membri;
