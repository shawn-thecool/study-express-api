const Album = require('./model')

const createAlbum = (req, res) => {
  res.json({ msg: 'createAlbum' })
}
const getAllAlbums = (req, res) => {
  const album = new Album()
  console.log(album)
  album.name = 'shawn'
  album.save(err => {
    if (err) {
      console.error(err)
      res.json({ result: 0 })
      return
    }
    res.json({ result: 1 })
  })
  // res.json({ msg: 'getAllAlbums' })
}
const getAlbumById = (req, res) => {
  res.json({ msg: 'getAlbumById' })
}
const updateAlbum = (req, res) => {
  res.json({ msg: 'updateAlbum' })
}
const deleteAlbum = (req, res) => {
  res.json({ msg: 'deleteAlbum' })
}
const deleteAlbums = (req, res) => {
  res.json({ msg: 'deleteAlbums' })
}

module.exports = {
  createAlbum,
  getAllAlbums,
  getAlbumById,
  updateAlbum,
  deleteAlbum,
  deleteAlbums
}
