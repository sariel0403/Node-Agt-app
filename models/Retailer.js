const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RetailerSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
});

module.exports = Retailer = mongoose.model('retailer', RetailerSchema);