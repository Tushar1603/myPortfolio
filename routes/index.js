var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/xyz', function(req, res, next) {
  res.render('xyz', { title: 'Express' });
});


module.exports = router;
