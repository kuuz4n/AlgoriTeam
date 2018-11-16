const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const nemsdk = require('nem-sdk').default;
const dotenv = require('dotenv');
//karl
var sessions = require('express-session');
var session;
//karl

const registerRouter = require('./routers/registerRouter');
const bidRouter = require('./routers/bidRouter');
const housenlotRouter = require('./routers/housenlotRouter');
const vehicleRouter = require('./routers/vehicleRouter');
const auctionRouter = require('./routers/auctionRouter');
const indexRouter = require('./routers/indexRouter');

dotenv.load();

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));

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

// login

app.use(sessions({
    secret: 'kn23#(jca98j(*J$',
    resave:false,
    saveUninitialized:true
}))

app.post('/login', function(req,resp){
    session = req.session;
    if(session.uniqueID){
      resp.redirect('/redirects');
    }
    if(req.body.username == 'admin' && req.body.password == 'admin'){
        session.uniqueID = req.body.username;
    }
    resp.redirect('/redirects');
});

app.get('/login', function(req,resp){
  session = req.session;
  if(session.uniqueID){
    resp.redirect('/redirects');
  }
    resp.sendFile('./views/login.html', {root: __dirname});
});

app.get('/logout', function(req, resp){
  req.session.destroy();
    resp.redirect('/login');
});

app.get('/redirects', function(req, resp){
  session = req.session;
    if(session.uniqueID) {
        resp.redirect('/index.html');
    }else{
        resp.end('Invalid username or password');
    }
})
