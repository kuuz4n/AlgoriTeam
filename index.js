const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const nem = require('nem-sdk').default;
//let morgan = require('morgan');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
  });

  app.get('/register', (req, res) => {
    res.sendFile('register.html');
  });

  app.get('/auction', (req, res) => {
    res.sendFile('auction.html');
  });

app.listen(port, (err) => {
    if(err) { return console.error(err); }
    console.log(`Listening to ${port}...`);
  });