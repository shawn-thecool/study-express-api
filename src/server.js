const { port } = require('./env.json')
const express = require('express')
const app = express()
const logger = require('morgan')
const cors = require('cors')
const path = require('path')
const favicon = require('serve-favicon')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(cors())
app.use(favicon(path.join(__dirname, '..', 'public', 'images', 'favicon.ico')))

app.use('/melon/albums', require('./api/v1/melonTop100'))
app.use('*', (req, res) => {
  res.json({ msg: 'hello' })
})

app.listen(port, () => {
  console.log('\x1b[36m ', `> Server Started ::: http://localhost:${port}`)
})
