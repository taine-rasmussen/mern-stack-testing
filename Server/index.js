const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://TaineRas:Flick001%3D%3D1@cluster0.orhpsyz.mongodb.net/merntesting?retryWrites=true&w=majority')

app.get()

app.listen(3001, () => {
  console.log('server is running')
})