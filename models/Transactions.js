const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionsSchema = new Schema({
  no: {
    type: String,
  },
  type: {
    type: String,
  },
  child_index: {
    type: String,
  },
});

module.exports = Transactions = mongoose.model(
  "transactions",
  TransactionsSchema
);
