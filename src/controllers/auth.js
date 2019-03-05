/* eslint-disable consistent-return */
const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = (app) => {
  // Create a User
  app.get('/sign-up', (req, res) => {
    const user = new User(req.body);

    user
      .save()
      .then(() => {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '60 days' });
        res.cookie('createPortfolioToken', token, { maxAge: 900000, httpOnly: true });
        res.sendStatus(200);
      })
      .catch((err) => {
        const error = new Error(err.message);
        console.log(error);
      });
  });

  // Sign-In
  app.post('/sign-in', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // Find this user name
    User.findOne({ username }, 'username password')
      .then((user) => {
        if (!user) {
          // User not found
          return res.status(401).send({ message: 'Wrong Username or Password' });
        }
        // Check the password
        user.comparePassword(password, (err, isMatch) => {
          if (!isMatch) {
            // Password does not match
            return res.status(401).send({ message: 'Wrong Username or password' });
          }
          // Create a token
          const token = jwt.sign({ _id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '60 days' });
          // Set a cookie and redirect to root
          res.cookie('createPortfolioToken', token, { maxAge: 900000, httpOnly: true });
          res.sendStatus(200);
        });
      })
      .catch((err) => {
        const error = new Error(err.message);
        console.log(error);
      });
  });

  // Sign-Out
  app.get('/sign-out', (req, res) => {
    res.clearCookie('createPortfolioToken');
    res.sendStatus(200);
  });
};
