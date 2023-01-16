const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: {
    type: String,
    requiered: true
  },
  completed: {
    type: Boolean,
  },
});

const ListModel = mongoose.model("lists", ListSchema)
module.exports = ListModel