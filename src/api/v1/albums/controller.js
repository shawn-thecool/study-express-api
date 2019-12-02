const Album = require('./model')
const { crawlMelonNewIndex } = require('./../../../crawl/melon')

const crawl = (req, res) => {
  crawlMelonNewIndex()
    .then(data => {
      data.map(album => {
        Album.createOne(album)
          .then(album => console.log('create album successfuly -', album.name))
          .catch(error => {
            console.log('create album fail with -', error)
            Album.findOneByName(album.name, album)
              .then(albums => console.log('update album successfuly -', album.name))
              .catch(error => console.log('update album fail with -', error))
          })
      })
      return data
    })
    .then(data => res.json(data))
}

const getAlbums = (req, res) => {
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

const deleteAlbumsByName = (req, res) => {
  Album.deleteManyByNames(req.body)
    .then(albums => res.status(200).json(albums))
    .catch(error => res.status(500).json(error))
}

const deleteAllAlbums = (req, res) => {
  Album.deleteAll()
    .then(albums => res.status(200).json(albums))
    .catch(error => res.status(500).json(error))
}

module.exports = {
  crawl,
  getAlbums,
  getAlbumByName,
  createAlbum,
  updateAlbum,
  updateAlbumHit,
  deleteAlbum,
  deleteAlbumsByName,
  deleteAllAlbums
}
