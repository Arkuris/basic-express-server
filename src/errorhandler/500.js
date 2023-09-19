'use strict';

module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 - Server Error');
}