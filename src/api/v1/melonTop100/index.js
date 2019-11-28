const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.post('/', controller.createAlbum)
router.get('/', controller.getAllAlbums)
router.get('/:id', controller.getAlbumById)
router.patch('/', controller.updateAlbum)
router.delete('/:id', controller.deleteAlbum)
router.delete('/', controller.deleteAlbums)

module.exports = router
