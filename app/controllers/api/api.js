var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var Bottle   = require('../../models/bottle');

module.exports = function (app) {
  app.use('/', router);
};

function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  // Otherwise the request is always redirected to the home page
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status(401).json({message: "Please Login"});
  }
}

router.get('/secret', authenticatedUser, function (req, res, next) {
  res.json({message: "secret"});
});

//INDEX
router.get('/api/bottles', authenticatedUser,function(req, res){
  Bottle.find({user_id: req.user.id}, function(err, bottles){
    if (err){
      res.status(400).json({error: err});
    } else {
      res.status(200).json({bottles: bottles});
    }
  });
})

//CREATE
router.post('/api/bottles', authenticatedUser, function (req, res){
  var bottleParams = req.body.bottle;
  bottleParams.user_id = req.user.id;
  Bottle.create(bottleParams, function (err, bottle){
    if (err) {
      res.status(400).json({error: err});
    } else {
      res.status(200).json({message: 'Succesfully Created', bottle: bottle})
    }
  });
})

// SHOW
router.get('/api/bottles/:id', authenticatedUser, function (req, res){
  Bottle.findOne({_id: req.params.id, user_id: req.user._id}, function (err, bottle){
    if (err) {
      res.status(404).json({error: err});
    } else {
      res.status(200).json({bottle: bottle})
    }
  });
})

// UPDATE
router.put('/api/bottles/:id', authenticatedUser, function (req, res) {
  Bottle.findOneAndUpdate({_id: req.params.id, user_id: req.user._id}, req.body.bottle, function (err, bottle){
    if (err){
      res.status(401).json({error: err});
    } else {
      res.status(200).json({message: "Bottles updated!", bottle: bottle});
    }
  })
});

// DELETE
router.get('/api/bottles/:id/delete', authenticatedUser,function (req, res) {
  Bottle.findOneAndRemove({_id: req.params.id, user_id: req.user._id}, req.body.bottle, function (err, service) {
     console.log(req.params)
     if (err) {
       res.status(400).json({error: err});
     } else {
       res.status(200).json({message: 'Succesfully deleted'})
     }
  })
});