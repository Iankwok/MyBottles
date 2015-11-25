var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.render('static/home', {
    title: 'Generator-Express MVC'
  });
});

router.get('/bottles', function (req, res) {
  res.render('bottles/index', {
  });
});

router.get('/bottles/:id', function (req, res) {
  res.render('bottles/show', {
  });
});