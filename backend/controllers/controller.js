const topics = require('../models/topics')
const activities = require('../models/activity')

//@desc     get a random topic
//@route    GET /api/topic
//@acess    Public
const getTopic = async (req, res) => {
    try{
        const allTopics = await topics.findById('62a7871c4fec68b040b2456f')
        res.status(200).json({topics: allTopics.topics[Math.floor(Math.random()*allTopics.topics.length)]})
    }
    catch(err){
        res.status(400).json({err}) 
    }
}
//@desc     get a random activity
//@route    GET /api/activity
//@acess    Public
const getActivity = async (req, res) => {
    try{
        const allActivities = await activities.find({})
        res.status(200).json(allActivities)
    }
    catch(err){
        res.status(400).json({err}) 
    }
}

module.exports = {
    getTopic,
    getActivity
}