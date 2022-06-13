const mongoose = require('mongoose')

const activities = mongoose.Schema( { 
    topic: String,
    activity: String,
    youtubeInfo: {
        videoURL: String,
        thumbnailURL: String,
        channel: String,
        views: String,
        uploadDate: String,
        description: String
    }
 })

module.exports = mongoose.model('activities', activities)