const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/produtos', (req,res) => {
    res.send('User Agent: '+ req.get("User-Agent"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})