const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const nemsdk = require('nem-sdk').default;
const dotenv = require('dotenv');

const registerRouter = require('./routers/registerRouter');
const bidRouter = require('./routers/bidRouter');
const housenlotRouter = require('./routers/housenlotRouter');
const vehicleRouter = require('./routers/vehicleRouter');
const auctionRouter = require('./routers/auctionRouter');

dotenv.load();

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