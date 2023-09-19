'use strict'; 

const logger = (req, res, next) => {
  console.log('Method Request: ' + req.method);
  console.log('Path Request: ' + req.path);
  console.log('Query Request: ' + req.query);
  next();  //this is the line that allows us to move on in our code after logging out what we need for debugging purposes!
};

module.exports=logger;