const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.post('/', controller.createAlbum)
router.get('/', controller.getAllAlbums)
router.get('/:name', controller.getAlbumByName)
router.put('/:name', controller.updateAlbum)
router.patch('/:name/hit', controller.updateAlbumHit)
router.delete('/:name', controller.deleteAlbum)
router.delete('/', controller.deleteAlbums)

module.exports = router
