const express = require('express')
const router = express.Router()
const controller = require('./book.controller')

router.get('/', controller.getBooks)
router.get('/:id', controller.getBookById)
router.post('/', controller.createBook)

module.exports = router
