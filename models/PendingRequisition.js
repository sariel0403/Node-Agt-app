const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PendingRequisitionSchema = new Schema({
    no: {
        type: String,
    },
    entry_date: {
        type: String,
    },
    pickup_date: {
        type: String,
    },
    retailer: {
        type: String,
    },
    description: {
        type: String,
    },
    items_qty: {
        type: Object,
    },
});

module.exports = PendingRequisition = mongoose.model('pendingrequisition', PendingRequisitionSchema);