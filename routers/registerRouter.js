const express = require('express');
const router = express.Router();


router.get('/register', (req, res) => {
    res.sendFile('register.html');
  });

module.exports = router;