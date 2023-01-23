const express = require('express');
const app = express();
const mongoose = require('mongoose')
const ListModel = require('./models/List')

const cors = require("cors");

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb+srv://TaineRas:Flick001%3D%3D1@cluster0.orhpsyz.mongodb.net/merntesting?retryWrites=true&w=majority')

app.get("/getList", async (req, res) => {
   await ListModel.find({}, (err, result) => {
    if(err){
      res.json(err)
    } else {
      res.json(result)      
    }
  })
});

app.put("/updateItem", async (req, res) => {
  const item = req.body
  console.log(item)
  await ListModel.findByIdAndUpdate(item.id, { item },
    () => {
      console.log('update:', item)
    })
})

app.post("/createListItem", async (req, res) => {
  const item = req.body;
  const newItem = new ListModel(item);
  await newItem.save();
  res.json(item)
});

app.delete("/deleteItem", async (req, res) => {
  const item = req.body
  await ListModel.findOneAndRemove({item},
    () => {
      console.log('Deleted:', item )
    })
});

app.put("/updateItemStatus", async (req, res) => {
  const newStatus = req.body.completed
  const id = req.body.id
  try {
    await ListModel.findOneAndUpdate(id, (err, updatedItem) => {
      console.log(updatedItem, newStatus)
      updatedItem.completed = newStatus
      updatedItem.save();
      res.send('updateItemStatus')
    }).clone()
  } catch (err){
    console.log(err)
  }
})

app.listen(3001, () => {
  console.log('server is running')
})