const Anime = require('../database/model.js');
const mongoose = require('mongoose');

// send request to database to match keywords
const findPersonalityType = (theme) => {
  let query = { [theme]: 10 }
  return Anime.find(query);

};



module.exports = { findPersonalityType }