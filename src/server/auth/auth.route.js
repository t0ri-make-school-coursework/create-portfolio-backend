const express = require('express');

const router = express.Router(); // eslint-disable-line new-cap

// #TODO: Implement authentication routes.
const getAuth = (username, password) => {
  const res = { username, password };
  return res;
};


module.exports = { router, getAuth };
