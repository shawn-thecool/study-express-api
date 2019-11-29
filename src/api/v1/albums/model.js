const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AlbumSchema = new Schema({
  name: { type: String, required: true, unique: true },
  song: { type: String, default: null },
  img: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: null },
  hit: { type: Number, default: 0 }
})

AlbumSchema.pre('save', function(next) {
  console.log('pre-save')
  next()
})

AlbumSchema.post('save', function(result) {
  console.log('post-save', result)
})

AlbumSchema.statics.createOne = function(payload) {
  return this.create(payload)
}

AlbumSchema.statics.findAll = function() {
  return this.find({})
}

AlbumSchema.statics.findOneByName = function(name) {
  return this.find({ name })
}

AlbumSchema.statics.updateOneByName = function(name, payload) {
  return this.findOneAndUpdate({ name }, { ...payload, updatedAt: new Date() }, { new: true })
}

AlbumSchema.statics.updateHitByName = function(name) {
  return this.findOneAndUpdate({ name }, { $inc: { hit: +1 } })
}

AlbumSchema.statics.deleteOneByName = function(name) {
  return this.deleteOne({ name })
}

AlbumSchema.statics.deleteManyByNames = function(payload) {
  return this.deleteMany({ name: { $in: payload.names } })
}

module.exports = mongoose.model('Album', AlbumSchema)
