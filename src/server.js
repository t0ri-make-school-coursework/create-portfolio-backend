/* eslint-disable import/no-extraneous-dependencies */

require('dotenv').config();

const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const util = require('util');
const cors = require('cors');
const expressValidator = require('express-validator');

const app = express();
const PORT = process.env.PORT || 4040;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(expressValidator());
app.use(cookieParser());
app.use(cors());

// Auth
// var checkAuth = (req, res, next) => {
//   if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
//     return req.user = null;
//   } else {
//     var token = req.cookies.nToken;
//     var decodedToken = jwt.decode(token, { complete: true }) || {};
//     req.user = decodedToken.payload;
//   }

//   next();
// };
// app.use(checkAuth);

// Database
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/create-portfolio-backend', { useNewUrlParser: true });

// controllers
require('./controllers/projects.js')(app);
require('./controllers/auth.js')(app);

app.listen(PORT, () => {
  console.log(`listening @ ${PORT}`)
})

module.exports = app;
