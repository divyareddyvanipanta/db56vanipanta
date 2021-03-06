var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var handbag_controller = require('../controllers/handbag');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Handbag.
router.post('/handbags', handbag_controller.handbag_create_post);
// DELETE request to delete Handbag.
router.delete('/handbags/:id', handbag_controller.handbag_delete);
// PUT request to update Handbag.
router.put('/handbags/:id',
handbag_controller.handbag_update_put);
// GET request for one Handbag.
router.get('/handbags/:id', handbag_controller.handbag_detail);
// GET request for list of all Handbag items.
router.get('/handbags', handbag_controller.handbag_list);
module.exports = router;