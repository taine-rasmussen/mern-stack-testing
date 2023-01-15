const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: {
    type: String
  },
  completed: {
    type: Boolean,
  },
});

const ListModel = mongoose.model("list", ListSchema)
module.exports = ListModel