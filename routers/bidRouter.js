const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');



router.get('/bid', (req, res) => {
    res.sendFile('bid.html');
  });

  router.get('/', (req, res) => {
    res.sendFile('index.html');
  });

  router.get('/register', (req, res) => {
    res.sendFile('housenlot.html');
  });

  router.get('/auction', (req, res) => {
    res.sendFile('housenlot.html');
  });

  router.get('/housenlot', (req, res) => {
    res.sendFile('housenlot.html');
  });

  router.get('/vehicle', (req, res) => {
    res.sendFile('vehicle.html');
  });

module.exports = router;