var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');
//  MUST REMOVE TICK MARKS IN FILE PATH BELOW !!!!!!!!
var models_path = path.join(__dirname + './../models');

//      ####  CHANGE DB NAME IN LINE BELOW  = change 'standard_db_template_name'   ####
mongoose.connect('mongodb://localhost/boiler_login'); // the LAST / being the desired name of the DB.
fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js')>=0){
    require(models_path + '/' + file);
  }
})
