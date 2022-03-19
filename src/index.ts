import express from 'express'
const app = express()

app.get('/', function (req, res) {
  console.log('hello World')
  res.send('Hello World')
})

app.listen(3000)
