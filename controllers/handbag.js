var Handbag = require('../models/handbag');
// List of all handbags
exports.handbag_list = async function(req, res) {
    try{
        theHandbags = await Handbag.find();
        res.send(theHandbags);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
 res.send('NOT IMPLEMENTED: Handbag list');
};
// for a specific handbag.
exports.handbag_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Handbag.findById(req.params.id)
        res.send(result)
    } 
    catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
 //res.send('NOT IMPLEMENTED: Handbag detail: ' + req.params.id);
};
// Handle handbag create on POST.
exports.handbag_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Handbag();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.bag_name = req.body.bag_name;
    document.bag_color = req.body.bag_color;
    document.bag_cost = req.body.bag_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
// res.send('NOT IMPLEMENTED: handbag create POST');
};
// Handle handbag delete form on DELETE.
exports.handbag_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Handbag.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
 //res.send('NOT IMPLEMENTED: handbag delete DELETE ' + req.params.id);
};
// Handle handbag update form on PUT.
exports.handbag_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await Handbag.findById(req.params.id);
        // Do updates of properties
        if (req.body.bag_name)
            toUpdate.bag_name = req.body.bag_name;
        if (req.body.bag_color)
            toUpdate.bag_color = req.body.bag_color;
        if (req.body.bag_cost)
            toUpdate.bag_cost = req.body.bag_cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result);
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
 res.send('NOT IMPLEMENTED: handbag update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.handbag_view_all_Page = async function(req, res) {
    try{
    theHandbags = await Handbag.find();
    res.render('handbag', { title: 'Handbags Search Results', results: theHandbags });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };