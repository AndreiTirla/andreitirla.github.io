const express = require('express')
const app = express()
const port = 4000
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send([
    { "name": "HTML", "endorsements": 15 }, 
    { "name": "CSS", "endorsements": 5 }, 
    { "name": "JS", "endorsements":29 }
])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})