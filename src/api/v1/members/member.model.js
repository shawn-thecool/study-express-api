const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MemberSchema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, default: null },
  age: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: null }
})

MemberSchema.pre('save', function(next) {
  console.log('pre-save')
  next()
})

MemberSchema.post('save', function(result) {
  console.log('post-save', result)
})

MemberSchema.statics.findAll = function() {
  return this.find({})
}

MemberSchema.statics.findOneById = function(id) {
  return this.find({ id })
}

MemberSchema.statics.createOne = function(payload) {
  return this.create(payload)
}

module.exports = mongoose.model('Member', MemberSchema)
