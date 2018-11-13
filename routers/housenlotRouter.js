const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');


router.get('/housenlot', (req, res) => {
    res.sendFile('housenlot.html');
  });

module.exports = router;