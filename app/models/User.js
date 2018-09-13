//get the mangoose model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define our model
var userSchema = new Schema({
  name: {type: String, default: ''},
  email: {type: String, default: ''},
  password: {type: String, default: ''},
  role: {type: Number, default: 0}/*,
  image: {type: Number, default: 0}*/
});

//module.exports will allow this model to be passed to other files
module.exports = mongoose.model('User', userSchema);