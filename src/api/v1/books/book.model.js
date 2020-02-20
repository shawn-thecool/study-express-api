const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, default: null },
  content: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: null }
})

BookSchema.pre('save', function(next) {
  console.log('pre-save')
  next()
})

BookSchema.post('save', function(result) {
  console.log('post-save', result)
})

BookSchema.statics.findAll = function() {
  return this.find({})
}

BookSchema.statics.findOneById = function(id) {
  return this.find({ id })
}

BookSchema.statics.createOne = function(payload) {
  return this.create(payload)
}

module.exports = mongoose.model('Book', BookSchema)
