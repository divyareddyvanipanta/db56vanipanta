var Handbag = require('../models/handbag');
// List of all handbags
exports.handbag_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Handbag list');
};
// for a specific handbag.
exports.handbag_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Handbag detail: ' + req.params.id);
};
// Handle handbag create on POST.
exports.handbag_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: handbag create POST');
};
// Handle handbag delete form on DELETE.
exports.handbag_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: handbag delete DELETE ' + req.params.id);
};
// Handle handbag update form on PUT.
exports.handbag_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: handbag update PUT' + req.params.id);
};