const express = require('express')
const router = express.Router()
const { getActivity } = require('../controllers/controller')

router.get('/activity', getActivity)

module.exports = router