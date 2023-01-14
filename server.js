const express = require('express')
const mongodb = require('mongodb');
const app = express()
const port = 3000

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