const mongoose = require('mongoose');

const animeSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  description: String,
  analysis: String,
  adventure: Number,
  love: Number,
  action: Number,
  comedy: Number,
  friendship: Number
});

const Anime = mongoose.model('Anime', animeSchema);

module.exports = Anime;