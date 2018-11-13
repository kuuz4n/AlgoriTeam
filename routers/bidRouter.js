const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');



router.get('/bid', (req, res) => {
    res.sendFile('bid.html');
  });

module.exports = router;