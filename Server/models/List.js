const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  },
});

const ListModel = mongoose.model("List", ListSchema)
module.exports = ListModel