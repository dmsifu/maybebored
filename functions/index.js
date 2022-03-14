const axios  = require('axios')
require('dotenv').config()
const APIKEY = process.env.APIKEY

exports.handler = async function(event){
    const activityName = event.queryStringParameters.search

    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?key=${APIKEY}&part=snippet&maxResults=15&q=how%to%${activityName}`) 

    try {
        return {
            statusCode: 200,
            body: JSON.stringify(response.data.items)
        }
    } catch (error) {
        return {
            statusCode: 422,
            body: `Error: ${error.stack}`
        }            
    }
}