var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Olx App' });
});
/* GET add employee page. */
router.get('/addpost', function(req, res, next) {
  res.render('addpost', { title: 'Olx App' });
});


module.exports = router;