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
app.use(express.json());

// this route should invoke query on controller file
app.get('/personality', (req, res) => {
  findPersonalityType(req.query)
  .then(data => {
    console.log('ANIME GOTTEN')
    res.status(200).send(data)
  })
  .catch(err => {
    console.log('ERR GETTING PERSONALITY', err)
  })
})

app.listen(port, () => {
  console.log(`The app server is running on port: ${port}!`);
})
