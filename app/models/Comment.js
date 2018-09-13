//get the mangoose model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define our model
var commentSchema = new Schema({
  text: {type: String, default: ''},
  description: {type: String, default: ''},
  date: {type: Date, default: Date.now},
  _post: Schema.Types.ObjectId,
  _author: Schema.Types.ObjectId
});

//module.exports will allow this model to be passed to other files
module.exports = mongoose.model('Comment', commentSchema);