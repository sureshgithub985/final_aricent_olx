var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var schema = new Schema({
  title: {type: String, required: true},
  category: {type:String, required: true},
  description: { type: String, required: true},
  image: { type: String, required: true },
  name: { type: String, required: true},
  phone_number: { type: Number, required: true},
  city: { type: String, required: true}
});
// make this available to our users in our Node applications
module.exports = mongoose.model('Product', schema);
