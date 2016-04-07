var mongoose = require('mongoose');
mongoose.connect('mongodb://joseph1028:joseph1028@ds019470.mlab.com:19470/josephtest');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  username : String,
  workname : String,
  time : String,
  content :String

});
module.exports = mongoose.model('Person', personSchema);
