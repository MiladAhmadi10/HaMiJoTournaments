const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const tournamentRoutes = require('../routes/tournaments');
let session = require('express-session')
let passport = require('passport')
let passportLocal = require('passport-local')
let localStrategy = passportLocal.Strategy;
let flash = require(connect-flash);


const app = express();



//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hamijotournament', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


//set up express sesion

app.use(session({
  secret:"SomeSecret",
  saveUninitialized:false,
  resave:false
}))


//intilize flash
app.use(flash());

//initilize flash
app.use(passport.initialize());
app.use(passport.session());

//user model instance
let userModel = require('../models/user');
let user = userModel.User;

///serizlize and deserialize
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

//Middleware setup
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../public')));
app.use(cookieParser());

//View engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

//Use routes
app.use('/', tournamentRoutes);

module.exports = app;
