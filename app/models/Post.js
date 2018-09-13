//get the mangoose model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define our model
var postSchema = new Schema({
  title: {type: String, default: ''},
  description: {type: String, default: ''},
  votes: {type: Number, default: 0},
  date: {type: Date, default: Date.now},
  _comments: [Schema.Types.ObjectId],
  _author: Schema.Types.ObjectId
});

//module.exports will allow this model to be passed to other files
module.exports = mongoose.model('Post', postSchema);