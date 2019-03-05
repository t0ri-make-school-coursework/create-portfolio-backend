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

  // Sign-Out
  app.get('/sign-out', (req, res) => {
    res.clearCookie('createPortfolioToken');
    res.sendStatus(200);
  }).catch((err) => {
    const error = new Error(err.message);
    console.log(error);
  });
};
