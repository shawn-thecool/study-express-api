const { port } = require('./setting.json')
const express = require('express')
const app = express()
const logger = require('morgan')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(cors())

app.use('/', (req, res) => {
  res.json('hello world')
})

app.listen(port, () => {
  console.log('\x1b[36m ', `> Server Started... Listening on Port : ${port}...`)
})
