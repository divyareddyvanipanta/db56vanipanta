const mongoose = require("mongoose")
const handbagSchema = mongoose.Schema({
bag_name: String,
bag_color: String,
bag_cost: Number,
bag_size: Number,
})
module.exports = mongoose.model("Handbag",handbagSchema)