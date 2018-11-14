const express = require('express');
const router = express.Router(); //eslint-disable-line


router.get('/auction', (req, res) => {
    res.sendFile('auction.html');
  });


  router.get('/', (req, res) => {
    res.sendFile('index.html');
  });

  router.get('/register', (req, res) => {
    res.sendFile('register.html');
  });

  router.get('/bid', (req, res) => {
    res.sendFile('bid.html');
  });

  router.get('/housenlot', (req, res) => {
    res.sendFile('housenlot.html');
  });

  router.get('/vehicle', (req, res) => {
    res.sendFile('vehicle.html');
  });
  
module.exports = router;