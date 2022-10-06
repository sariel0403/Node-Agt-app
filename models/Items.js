const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    quantity: {
        type: String,
    }
});

module.exports = Items = mongoose.model('items', ItemsSchema);