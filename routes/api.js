// grab the things we need
var express = require('express');
var router = express.Router();

var ProductController = require('../controllers/ProductController');

router.get('/:resource', function(req, res, next){
var resource = req.params.resource;
  console.log('api:get(): request recieved for resource: '+resource);
  ProductController.getAllProduct(req.query, function(err, results){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      });
      return;
    }
    res.json({
      confirmation: 'Success',
      results: results
    });
  });
});

router.post('/:resource', function(req, res, next){
  var resource = req.params.resource;
  console.log('api:post(): request recieved for resource: '+resource);
  ProductController.saveProduct(req.body, function(err, results){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      });
      return;
    }
    res.json({
      confirmation: 'Success',
      results: results
    });
  });
});


module.exports = router;
