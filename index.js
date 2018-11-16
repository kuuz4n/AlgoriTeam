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
  console.log(`Fetched all data in houseandlot`);
});

app.get('/api/admin/:id', (req, res) => {
  let x = req.params.id;
  connection.query('SELECT * FROM houseandlot WHERE h_id='+ x +'', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
  console.log(`Fetched data with id ${x}`);
});

app.get('/admin', function (req, res) {
  res.render('admin/index.pug');
});

app.get('/add', function (req, res) {
  res.render('admin/add.pug');
});

app.get('/getforedit/:id', (req, res) => {
  let x = req.params.id;
  connection.query('SELECT * FROM houseandlot WHERE h_id='+ x +'', function (error, results, fields) {
    if (error) throw error;
    app.get('/api/getforedit', (req, res) => {
      res.send(JSON.stringify(results));
    });
    app.get('/getforedit', (req, res) => {
      res.render('admin/edit.pug', results);
    });
  });
  console.log(`Fetched data with id ${x}`);
});

/* app.get('/edit', function (req, res) {
  res.render('admin/edit.pug');
}); */

app.post('/add', function (req, res, next) {
  connection.query(`INSERT INTO houseandlot(la,fa,address,year_ac,cond,price) VALUES (`+ req.body.la +`,`+ req.body.fa +`,"`+ req.body.address +`",`+ req.body.year_ac +`,"`+ req.body.cond +`",`+ req.body.price +`)`, function (error, results, fields) {
    if(error) throw error;
    res.redirect('/admin');
  });
  console.log(`Successfully added`);
});

app.post('/edit', (req, res) => {
  let x = req.body.h_id;
  connection.query('UPDATE houseandlot SET la='+ req.body.la +',fa='+ req.body.fa +',address="'+ req.body.address +'",year_ac='+ req.body.year_ac +',cond="'+ req.body.cond +'",price='+ req.body.price +' WHERE h_id='+ x +'', function (error, results, fields) {
    if (error) throw error;
  });
  console.log(`Successfully edited data with id ${x}`);
  res.redirect('/admin');
});

app.delete('/api/admin/:id', (req, res) => {
  let x = req.params.id;
  connection.query('DELETE FROM houseandlot WHERE h_id='+ x +'', function (error, results, fields) {
    if (error) throw error;
  });
  console.log(`Successfully deleted`);
  res.redirect('/admin');
});

app.listen(port, (err) => {
  if(err) { return console.error(err); }
  console.log(`Listening to ${port}...`);
});