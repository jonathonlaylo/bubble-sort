/*jshint esversion: 6 */
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

const hbs = handlebars.create({
  extname: '.hbs',
  defaultlayout: 'app'
});

app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');

app.use('/', (req, res)=>{
  res.render('index');
});

module.exports = app;