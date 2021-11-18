var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const connectionString = "mongodb+srv://divyavanipanta:reddyy%40123@cluster0.8uinu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose = require('mongoose');
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var handbagRouter = require('./routes/handbag');
var addModsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var Handbag = require('./models/handbag');
var resourceRouter = require('./routes/resource');

// We can seed the collection if needed on server start
async function recreateDB(){
 // Delete everything
 await Handbag.deleteMany();
 let instance1 = new
Handbag({bag_name:"Louis Vuitton", bag_color:'Black', bag_cost:200});
 instance1.save( function(err,doc) {
 if(err) return console.error(err);
 console.log("First object saved")
 });
 let instance2 = new
 Handbag({bag_name:"Michael Kors", bag_color:'Brown', bag_cost:250});
 instance2.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Second object saved")
  });
  let instance3 = new
  Handbag({bag_name:"Kate Spade", bag_color:'Burgandy', bag_cost:150});
   instance3.save( function(err,doc) {
   if(err) return console.error(err);
   console.log("Third object saved")
   });
}
let reseed = false;
if (reseed) { recreateDB();}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/handbags', handbagRouter);
app.use('/addmods', addModsRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

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

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

module.exports = app;
