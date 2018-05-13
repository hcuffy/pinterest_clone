const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InterestSchema = new Schema({
  image: String,
  owner: String
}, {
  timestamps: true
});

const ModelClass = mongoose.model('interest', InterestSchema);

module.exports = ModelClass;
