const mongoose = require('mongoose')

const activities = mongoose.Schema( { 
    topic: String,
    activity: String,
    youtubeInfo: [
        {
            videoURL: String,
            uploadDate: String,
            title: String,
            description: String,
            thumbnailURL: String,
            channel: String
        }
    ]
 })

module.exports = mongoose.model('activities', activities)