const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const nemsdk = require('nem-sdk').default;
const dotenv = require('dotenv');
const mysql = require('mysql');

const registerRouter = require('./routers/registerRouter');
const bidRouter = require('./routers/bidRouter');
const housenlotRouter = require('./routers/housenlotRouter');
const vehicleRouter = require('./routers/vehicleRouter');
const auctionRouter = require('./routers/auctionRouter');
const indexRouter = require('./routers/indexRouter');
//const adminRouter = require('./routers/adminRouter');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'algoriteam'
});

dotenv.load();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.set('views', path.join(__dirname, ''));
app.set('scripts', path.join(__dirname, ''));
app.set('view engine', 'pug');

app.use('/', indexRouter);
//app.use('/admin', indexRouter);
app.use('/register', registerRouter);
app.use('/auction', auctionRouter);
app.use('/housenlot', housenlotRouter);
app.use('/vehicle', vehicleRouter);
app.use('/bid', bidRouter);

app.get('/api/admin', function (req, res, next) {
  connection.query('SELECT * FROM houseandlot', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/admin', function (req, res) {
  res.render('admin/index.pug');
});

app.listen(port, (err) => {
  if(err) { return console.error(err); }
  console.log(`Listening to ${port}...`);
});