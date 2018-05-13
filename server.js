const path = require ('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pinterest');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json('*/*'));
app.use(cookieParser());


const routes = require('./routes');
app.use('/', routes);

app.use(function (err, req, res, next) {
  console.error(err.stack);

  if (err.statusCode == 404) {
    res.render('404')
  } else if (!err.statusCode) {
    res.status(500).send({ 'Error': err.message});
  } else {
    res.status(err.statusCode).send(err.message);
  }

});


const port = process.env.PORT || 3000;

app.listen(port, () => {
console.log('Express server has started on', port);

});
