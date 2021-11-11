var express = require('express');
const handbag_controlers= require('../controllers/handbag');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('handbag', { title: 'Search Results Hand Bags' });
// });

/* GET costumes */
router.get('/', handbag_controlers.handbag_view_all_Page );
module.exports = router;
