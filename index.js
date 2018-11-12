const nem = require('nem-sdk').default;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = 3000;
//let morgan = require('morgan');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'html');

app.listen(port, (err) => {
    if(err) { return console.error(err); }
    console.log(`Listening to ${port}...`);
  });