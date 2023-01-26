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

app.post("/updateItem", async (req, res) => {
 try{
  const id = req.body.id
   const title = await ListModel.findByIdAndUpdate(
    { _id: id }, req.body, 
    { 
      new: true,
      runValidators: true
    }
  )
  if(!title){
    return res.status(404).json(`No task with id: ${id}`)
  }
  res.status.json(title);
 } catch (error){
  res.status(500).json({  error: error.message })
 }
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
  try {
    const id = req.body.id
    const status = await ListModel.findByIdAndUpdate(
      { _id: id }, req.body,
      {
        new: true,
        runValidators: true
      }
    )
    if (!status) {
      return res.status(404).json(`No task with id: ${id}`)
    }
    res.status.json(status);
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(3001, () => {
  console.log('server is running')
})