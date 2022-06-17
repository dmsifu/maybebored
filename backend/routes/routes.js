const express = require('express')
const router = express.Router()
const { getTopic, getActivity } = require('../controllers/controller')

router.get('/topic', getTopic)
router.get('/activity', getActivity)

module.exports = router