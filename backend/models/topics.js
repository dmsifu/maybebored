const mongoose = require('mongoose')

const topics = mongoose.Schema( { topics: Array})

module.exports = mongoose.model('topics', topics)