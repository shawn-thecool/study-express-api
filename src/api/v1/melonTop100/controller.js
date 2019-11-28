const model = require('./model')

exports.createAlbum = (req, res) => {
  res.json({ msg: 'createAlbum' })
}
exports.getAllAlbums = (req, res) => {
  res.json({ msg: 'getAllAlbums' })
}
exports.getAlbumById = (req, res) => {
  res.json({ msg: 'getAlbumById' })
}
exports.updateAlbum = (req, res) => {
  res.json({ msg: 'updateAlbum' })
}
exports.deleteAlbum = (req, res) => {
  res.json({ msg: 'deleteAlbum' })
}
exports.deleteAlbums = (req, res) => {
  res.json({ msg: 'deleteAlbums' })
}
