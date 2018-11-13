import express, { static } from 'express';
import { urlencoded } from 'body-parser';
import path from 'path';
const app = express();
const port = 3000;
import { load } from 'dotenv';

load();

app.use(urlencoded({ extended: false }));

app.use(static(__dirname + '/views'));

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