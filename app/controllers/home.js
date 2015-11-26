var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/', router);
};

function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  // Otherwise the request is always redirected to the home page
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect('/signin');
  }
}
//WELCOME
router.get('/', function (req, res, next) {
  res.render('static/home', {
    title: 'Generator-Express MVC'
  });
});

//INDEX
router.get('/bottles', authenticatedUser, function (req, res) {
  res.render('bottles/index');
});

//NEW
router.get('/bottles/new', authenticatedUser, function (req, res) {
  res.render('bottles/new');
});

//EDIT
router.get('/bottles/:id/edit', authenticatedUser, function (req, res) {
  res.render('bottles/edit');
});