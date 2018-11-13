const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');


router.get('/', (req, res) => {
    res.sendFile('index.html');
  });

module.exports = router;