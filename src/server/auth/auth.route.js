const express = require('express');


// #TODO: Implement authentication routes.
const getAuth = (username, password) => {
  const res = { username, password };
  return res;
};


module.exports = { getAuth };
