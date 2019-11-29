const Album = require('./model')

const crawl = (req, res) => {}

const getAllAlbums = (req, res) => {
  Album.findAll()
    .then(albums => res.status(200).json(albums))
    .catch(error => res.status(500).json(error))
}

const getAlbumByName = (req, res) => {
  Album.findOneByName(req.params.name)
    .then(albums => res.status(200).json(albums))
    .catch(error => res.status(500).json(error))
}

const createAlbum = (req, res) => {
  Album.createOne(req.body)
    .then(album => res.status(200).json(album))
    .catch(error => res.status(500).json(error))
}

const updateAlbum = (req, res) => {
  Album.updateOneByName(req.params.name, req.body)
    .then(albums => res.status(200).json(albums))
    .catch(error => res.status(500).json(error))
}

const updateAlbumHit = (req, res) => {
  Album.updateHitByName(req.params.name)
    .then(albums => res.status(200).json(albums))
    .catch(error => res.status(500).json(error))
}

const deleteAlbum = (req, res) => {
  Album.deleteOneByName(req.params.name)
    .then(albums => res.status(200).json(albums))
    .catch(error => res.status(500).json(error))
}

const deleteAlbums = (req, res) => {
  Album.deleteManyByNames(req.body)
    .then(albums => res.status(200).json(albums))
    .catch(error => res.status(500).json(error))
}

module.exports = {
  crawl,
  getAllAlbums,
  getAlbumByName,
  createAlbum,
  updateAlbum,
  updateAlbumHit,
  deleteAlbum,
  deleteAlbums
}
