const express = require('express');
const mongoose = require("mongoose");
const path = require('path');
const config = require('config');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const vetsRouter = require('./routes/vets');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

// initialize express app
const app = express();

// initialize mongoDB config
const db = config.get('mongoURI');

// Adding mongoose
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.error(err));

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully :-D");
})

// Adding cors
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
// Increase the max payload size
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://maps.googleapis.com/"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// app.use('/', indexRouter);


// Use Routes
app.use('/vets', vetsRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;