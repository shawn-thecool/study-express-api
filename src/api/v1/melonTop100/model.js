const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
  name: String
})

module.exports = mongoose.model('Album', bookSchema)
