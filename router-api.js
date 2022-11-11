const express = require('express')
const router = express.Router()
const moldController = require('./controllers/moldController')

router.post('/create-mold', moldController.create)
router.post('/update/:id', moldController.updateMold)
router.get('/view-mold/:moldNumber', moldController.findMold)

module.exports = router
