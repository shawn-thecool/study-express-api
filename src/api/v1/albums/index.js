const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/reset', controller.crawl)
router.get('/', controller.getAlbums)
router.get('/:name', controller.getAlbumByName)
router.post('/', controller.createAlbum)
router.put('/:name', controller.updateAlbum)
router.patch('/:name/hit', controller.updateAlbumHit)
router.delete('/one/:name', controller.deleteAlbum)
router.delete('/many', controller.deleteAlbumsByName)
router.delete('/all', controller.deleteAllAlbums)

module.exports = router
