const express = require('express');
const app = express();
const mongoose = require('mongoose')
const ListModel = require('./models/List')

app.use(express.json())

mongoose.connect('mongodb+srv://TaineRas:Flick001%3D%3D1@cluster0.orhpsyz.mongodb.net/merntesting?retryWrites=true&w=majority')

app.get("/getList", (req, res) => {
  ListModel.find({}, (err, result) => {
    if(err){
      res.json(err)
    } else {
      res.json(result)
    }
  })
});

app.post("/createListItem", async (req, res) => {
  const item = req.body;
  const newItem = new ListModel(item);
  await newItem.save();

  res.json(item)
});

app.listen(3001, () => {
  console.log('server is running')
})