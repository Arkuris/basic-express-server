'use strict';


const validator = (req, res, next) => {
  let name = req.query.name;
  if (!name) {
    next({code: 400, message: 'Name is required in the query!'});
  } else {
    next();
  }
}

module.exports = validator;