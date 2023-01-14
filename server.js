const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World, This is MERN Stack Project!')
})

app.listen(port, () => {
  console.log(`ITS WORKING!!!! http://localhost:${port}`)
})