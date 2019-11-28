const { port } = require('./env.json')
const express = require('express')
const app = express()
const logger = require('morgan')
const cors = require('cors')
const path = require('path')
const favicon = require('serve-favicon')
const mongoose = require('mongoose')
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  // we're connected!
  console.log('connection success:')
  
})
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
mongoose.set('useNewUrlParser', true)
mongoose.connect('mongodb+srv://shawnthecool:1234@shawn-bpdyg.mongodb.net/test?retryWrites=true&w=majority')

// .then(() => {
//   console.log('\x1b[36m', 'Connected successfully to server')
// })
// .catch(err => {
//   console.log(Error, err.message)
// })

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
  console.log('\x1b[36m', `> Server Started ::: http://localhost:${port}`)
})
