const express = require('express');
const app = express();
const mongoose = require('mongoose')
const ListModel = require('./models/List')

const cors = require("cors");

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb+srv://TaineRas:Flick001%3D%3D1@cluster0.orhpsyz.mongodb.net/merntesting?retryWrites=true&w=majority')

app.get("/getList", async (req, res) => {

    try {
      await ListModel.find({}, (err, result) => {
        if (err) {
          return res.json(err)
        } else {
          return res.json(result)
        }
      })
    } catch (err) {
      console.log(err)
    }
});

app.post("/createListItem", async (req, res) => {
  const item = req.body;
  const newItem = new ListModel(item);
  await newItem.save();

  res.json(item)
});

app.put("/updateItemStatus", async (req, res) => {
  const newStatus = req.body.newStatus
  const id = req.body.id

 try {
   await ListModel.findById(id, (err, updatedItem) => {
     updatedItem.completed = newStatus
     updatedItem.save();
     res.send('updateItemStatus')
   })
 } catch (err){
   console.log(err)
 }
})

app.listen(3001, () => {
  console.log('server is running')
})