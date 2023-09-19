'use strict';

const express = require('express');
const cors = require('cors');

const logger = require('./middleware/logger.js');
const validator = require('./middlewares/validator.js');
const notFoundHandler = require('./errorhandler/404');
const serverErrorHandler = require('./errorhandler/500');

const app = express();
app.use(cors());

app.use(logger);

app.get('/person', validator, (req, res) => {
  res.json({ name: req.query.name });
});

app.get('/sum', (req, res, next) => {
  res.send('Summing Values');
});

app.use(notFoundHandler); //this is 404 error
app.use(serverErrorHandler); //this one is 500 erro

module.exports = app;