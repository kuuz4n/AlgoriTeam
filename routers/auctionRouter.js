const express = require('express');
const router = express.Router(); //eslint-disable-line


router.get('/auction', (req, res) => {
    res.sendFile('auction.html');
  });

module.exports = router;