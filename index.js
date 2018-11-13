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
const indexRouter = require('./routers/indexRouter');

dotenv.load();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/views'));

app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/auction', auctionRouter);
app.use('/housenlot', housenlotRouter);
app.use('/vehicle', vehicleRouter);
app.use('/bid', bidRouter);

app.listen(port, (err) => {
    if(err) { return console.error(err); }
    console.log(`Listening to ${port}...`);
  });