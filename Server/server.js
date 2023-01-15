const express = require('express')
const mongodb = require('mongodb');
const mongoose = require('mongoose')
const cors = require('cors')
const port = 3001

const app = express()

app.use(express.json())
app.use(cors())

let MongoClient = mongodb.MongoClient;

MongoClient.connect("mongodb://localhost:27017/mern-project", function(err, database) {
  if (err) return console.error(err);
console.log("MongoDB connected on port 27017")
});

app.get('/', (req, res) => {
  res.send('Hello World, This is MERN Stack Project!')
})

app.listen(port, () => {
  console.log(`WORKING AT http://localhost:${port}`)
})