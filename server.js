const express = require('express');
const app = express();
const PORT = 5001;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const config = require('../server/api/config/config')
const keys = require('../server/keys/init');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const morgan = require('morgan');
const path = require('path');
const setUserOnLocalsMiddleware = require('../server/middleware/user-local');
const requireLogin = require('../server/middleware/requireLogin');
const handlebars = require('handlebars');


app.use(morgan('default'));

mongoose.Promise = global.Promise;
const db = require('./api/config/config').mongo.connectionString;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Mongo connected'))
  .catch(err => console.log(err));

//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(session({
  store: new MongoStore({ url: config.mongo.connectionString }),
  secret: keys.secret,
  maxAge: 60 * 60 * 1000, // ms; lasts for one hour
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 216000000
  }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(setUserOnLocalsMiddleware());

app.user(handlebars);

app.get('/', requireLogin, (req, res) => {
  res.json({ "Hello": "World" })
})

require('./api/routes/')(app);

app.listen(PORT, () => {
  console.log('listening on ' + PORT);
});