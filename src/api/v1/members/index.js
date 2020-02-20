const express = require('express')
const router = express.Router()
const controller = require('./member.controller')

router.get('/', controller.getMembers)
router.get('/:id', controller.getMemberById)
router.post('/', controller.createMember)

module.exports = router
