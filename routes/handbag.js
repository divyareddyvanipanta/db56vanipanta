var express = require('express');
const handbag_controlers= require('../controllers/handbag');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('handbag', { title: 'Search Results Hand Bags' });
// });

/* GET handbags */
router.get('/', handbag_controlers.handbag_view_all_Page );

// GET request for one handbag.
router.get('/handbags/:id', handbag_controlers.handbag_detail);

/* GET detail handbag page */
router.get('/detail', handbag_controlers.handbag_view_one_Page);

/* GET create costume page */
router.get('/create', handbag_controlers.handbag_create_Page);

/* GET create update page */
router.get('/update', handbag_controlers.handbag_update_Page);

/* GET create costume page */
router.get('/delete', handbag_controlers.handbag_delete_Page);

module.exports = router;
