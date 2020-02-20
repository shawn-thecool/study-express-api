const { port, dbUrl } = require('./../.env.json')
const express = require('express')
const app = express()
const logger = require('morgan')
const cors = require('cors')
const path = require('path')
const favicon = require('serve-favicon')
const mongoose = require('mongoose')
const db = mongoose.connection
// db
db.on('error', () => console.log('\u001b[31m%s\u001b[0m', '[mongoDB] : Error'))
db.once('open', () => console.log('\u001b[33m%s\u001b[0m', '[mongoDB] : Connected'))
db.on('disconnected', () => console.log('\u001b[31m%s\u001b[0m', '[mongoDB] : Disconnected'))
// mongoose
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
mongoose.set('useNewUrlParser', true)
mongoose.connect(dbUrl)
// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(cors())
app.use(favicon(path.join(__dirname, '..', 'public', 'images', 'favicon.ico')))
// router
app.use('/api/v1/albums', require('./api/v1/albums'))
app.use('/api/v1/members', require('./api/v1/members'))
app.use('/api/v1/books', require('./api/v1/books'))
app.use('*', (req, res) => res.json({ msg: 'hello' }))
// server
app.listen(port, () => console.log('\x1b[36m%s\u001b[0m', `[server] : Started at http://localhost:${port}`))
