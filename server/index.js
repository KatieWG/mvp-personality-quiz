// write header
const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mvp');
const { findPersonalityType } = require('../database/controller.js')

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'client/dist')));
app.use(express.json());

// this route should invoke query on controller file
app.get('/personality/:theme', (req, res) => {
  findPersonalityType(req.params.theme)
  .then(anime => {
    console.log('ANIME GOTTEN WITH THE THEME', req.params.theme)
    res.status(200).send(anime)
  })
  .catch(err => {
    console.log('ERR GETTING PERSONALITY', err)
  })
})

app.listen(port, () => {
  console.log(`The app server is running on port: ${port}!`);
})
