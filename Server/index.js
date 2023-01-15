const express = require('express');
const app = express();
const mongoose = require('mongoose')
const ListModel = require('./models/List')

mongoose.connect('mongodb+srv://TaineRas:Flick001%3D%3D1@cluster0.orhpsyz.mongodb.net/merntesting?retryWrites=true&w=majority')

app.get("/getList", (req, res) => {
  ListModel.find({}, (err, result) => {
    if(err){
      res.json(err)
    } else {
      res.json(result)
    }
  })
})

app.listen(3001, () => {
  console.log('server is running')
})