const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  res.render('index')
});


router.get('*', (req, res, next) => {
  let err = new Error('No Such Page');
  err.statusCode = 404;
  next(err);
});


module.exports = router;
