// Backend framework
const express = require('express');
// Interact with mongodb 
const mongoose = require("mongoose");

const config = require('config');

const app = express();

// Bodyparser middleware
app.use(express.json());

// DB config 
const db = config.get('mongoURI')

// Connect to mongo
mongoose.connect(db, {
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true
})
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.error(err));

// Use Routes
app.use('/users', require('./routes/users'));

// Serve static assets if we are in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// const port = process.env.PORT || 9000;

// app.listen(port, () => console.log(`Server started on port ${port}`));

// const createError = require('http-errors');

// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// const cors = require("cors");

// const bodyParser = require('body-parser')
// const CONNECTION_STRING = "mongodb+srv://televet:cpsc436i@televet-u0yv3.mongodb.net/televet?retryWrites=true&w=majority";

// // Adding mongoose


// const connection = mongoose.connection;

// connection.once("open", function () {
//   console.log("MongoDB database connection established successfully :-D");
// })

// const vetsRouter = require('./routes/vets');
// const usersRouter = require('./routes/users');
// const indexRouter = require('./routes/index');



// // Adding cors
// app.use(cors());

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// //app.use(express.json());
// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://maps.googleapis.com/"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.use('/vets', vetsRouter);
// app.use('/users', usersRouter);
// app.use('/', indexRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });



module.exports = app;