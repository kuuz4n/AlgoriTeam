const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');


router.get('/housenlot', (req, res) => {
    res.render('views/housenlot.pug');
  });

  router.get('/', (req, res) => {
    res.render('views/index.pug');
  });

  router.get('/register', (req, res) => {
    res.render('views/register.pug');
  });

  router.get('/auction', (req, res) => {
    res.render('views/auction.pug');
  });

  router.get('/bid', (req, res) => {
    res.render('views/bid.pug');
  });

  router.get('/vehicle', (req, res) => {
    res.render('views/vehicle.pug');
  });
  
module.exports = router;