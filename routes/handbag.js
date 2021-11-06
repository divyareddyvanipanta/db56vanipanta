var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('handbag', { title: 'Search Results Hand Bags' });
});

module.exports = router;
