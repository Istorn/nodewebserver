var configValues=require('./config');
var mongoose=require('mongoose');
mongoose.Promise=require('bluebird');
module.exports={

  getDbConnString: function(){
    console.log('mongodb://' + configValues.dbname + ':' + configValues.dbpsw + '@ds133558.mlab.com:33558/dummydb');
    return 'mongodb://' + configValues.dbname + ':' + configValues.dbpsw + '@ds133558.mlab.com:33558/dummydb';
  }
}
