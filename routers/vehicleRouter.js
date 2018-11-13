const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');


router.get('/vehicle', (req, res) => {
    res.sendFile('vehicle.html');
  });

module.exports = router;