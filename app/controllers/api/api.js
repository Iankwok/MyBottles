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
    return res.json({message: "Please Login"});
  }
}

router.get('/secret', authenticatedUser, function (req, res, next) {
  res.json({message: "secret"});
});

//INDEX
router.get('/api/bottles', authenticatedUser,function(req, res){
  Bottle.find({user_id: req.user.id}, function(err, bottles){
    if (err){
      res.send("Something Wrong happened" + err)
    } else {
      res.send(bottles);
    }
  });
})

//CREATE
router.post('/api/bottles', authenticatedUser, function (req, res){
  var bottleParams = req.body.bottle;
  bottleParams.user_id = req.user.id;
  Bottle.create(bottleParams, function (err, bottles){
    if (err) {
      res.send("something wrong happened " + err )
    } else {
      //update user model's bottle id
      // Bottle.findby({user_id: req.user._id}, function (err, bottle){
      //   req.body.user.bottle_id = bottle.id;
      // })
      res.redirect('/api/bottles');
    }
  });
})

// SHOW
router.get('/api/bottles/:id', authenticatedUser, function (req, res){
  Bottle.findOne({_id: req.params.id, user_id: req.user._id}, function (err, bottle){
    if (err) {
      res.send("something wrong happened " + err )
    } else {
      res.send(bottle);
    }
  });
})

// UPDATE
router.put('/api/bottles/:id', authenticatedUser, function (req, res) {
  Bottle.findOneAndUpdate({_id: req.params.id, user_id: req.user._id}, req.body.bottle, function (err, bottle){
    if (err){
      res.send(err);
    } else {
      res.json({message: "Bottles updated!"});
    }
  })
});

// DELETE
router.get('/api/bottles/:id/delete', authenticatedUser,function (req, res) {
  Bottle.findOneAndRemove({_id: req.params.id, user_id: req.user._id}, req.body.bottle, function (err, service) {
     console.log(req.params)
     if (err) {
       res.send(err);
     } else {
       res.json({message: 'Succesfully deleted'})
     }
  })
});