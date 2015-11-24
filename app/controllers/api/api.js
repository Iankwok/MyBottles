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
  Bottle.find({}, function(err, bottles){
    if (err){
      res.send("Something Wrong happened" + err)
    } else {
      res.send(bottles);
    }
  });
})

// SHOW
router.get('/api/bottles/:id',authenticatedUser, function (req, res){
  Bottle.findById(req.params.id, function (err, bottles){
    if (err) {
      res.send("something wrong happened " + err )
    } else {
      res.send(bottles);
    }
  });
})

// CREATE req.body.bottle gives empty {}
router.post('/api/bottles', authenticatedUser, function (req, res){
  Bottle.create(req.body.bottle, function (err, bottles){
    if (err) {
      res.send("something wrong happened " + err )
    } else {
      res.redirect('/api/bottles');
    }
  });
})

// UPDATE
router.put('/api/bottle/:id', function (req, res) {
  Bottle.findByIdAndUpdate(req.params.id, req.body.bottle, function (err, bottle){
    if (err){
      res.send(err);
    } else {
      res.json({message: "Bottles updated!"});
    }
  })
});

// DELETE
router.get('/api/bottles/:id/delete', function (req, res) {
  Bottle.findByIdAndRemove(req.params.id, function (err, service) {
     console.log(req.params)
     if (err) {
       res.send(err);
     } else {
       res.json({message: 'Succesfully deleted'})
     }
  })
});