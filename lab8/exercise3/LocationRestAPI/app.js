var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const locationRouter = require('./routes/location');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// setup routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/location', locationRouter);

// open our database connection
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, database) {
  if (err) throw err;
  app.locals.db = database.db('MongoLabs');
  database.db('MongoLabs').collection('lab8_ex3').createIndex({location:'2d'});

  const seedLocations = [
    {"name" : "Pizza Hut", "category" : "Restaurant", "location" : [ -91.98914, 41.00686 ] },
    {"name" : "Walmart Supercenter", "category" : "Supercenter", "location" : [ -91.99326780000001, 41.00768800000001 ] },
    {"name" : "Hy-Vee", "category" : "Supermarket", "location" : [ -91.9785195, 41.00467999999999 ] },
    {"name" : "Subway ", "category" : "Restaurants", "location" : [ -91.97267169999998, 41.0067101 ] },
    {"name" : "Fairfield Recreation Center", "category" : "Recreation Center", "location" : [ -91.97523239999998, 41.0054453 ] },
    {"name" : "The Depot Brewery", "category" : "Night Club", "location" : [ -91.9680032, 41.01098500000001 ] }
  ];

  // database.db('MongoLabs').collection('lab8_ex3').insert(seedLocations, (err, results) => {
  //   if(err) console.log("error during seed data insertion.");
  //   else console.log('seed data inserted successfully to the collection');
  // });

  const port = 4000;
  app.listen(port,()=> console.log(`Listening at port ${port}`));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  console.log("Error handler middleware called !");
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;