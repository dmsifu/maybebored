const axios = require('axios')
const activity = require('../models/activity')

async function addToDatabase(){
    // activity.insertMany([
    //     { topic: 'education', activity: 'watch a documentary' ,youtubeInfo: await getYoutubeData('watch a documentary')},
    //     { topic: 'anime', activity: 'find out the most anticipated anime coming this year', youtubeInfo: await getYoutubeData('find out the most anticipated anime coming this year')},
    //     { topic: 'gaming', activity: 'play a difficult game',youtubeInfo: await getYoutubeData('play a difficult game')},
    //     { topic: 'recreational', activity: 'learn to skateboard',youtubeInfo: await getYoutubeData('learn to skateboard')},
    //     { topic: 'charity', activity: 'pick up trash in your neighborhood',youtubeInfo: await getYoutubeData('pick up trash in your neighborhood')},
    //     { topic: 'music', activity: 'learn to play the drums', youtubeInfo: await getYoutubeData('learn the trumpet')},
    //     { topic: 'film', activity: 'watch a film critique', youtubeInfo: await getYoutubeData('watch a film critique')},
    //     { topic: 'busywork', activity: 'do the laundry',youtubeInfo: await getYoutubeData('do the laundry')},
    //     { topic: 'cooking', activity: 'cook a copycat fast food recipe',youtubeInfo: await getYoutubeData('cook a copycat fast food recipe')}
    // ]).then(function(){
    //     console.log("Data inserted")  // Success
    // }).catch(function(error){
    //     console.log(error)      // Failure
    // });
    // newActivity.save(function(err,result){
    //     if (err){
    //         console.log(err);
    //     }
    //     else{
    //         console.log(result)
    //     }
    // })
    
}

async function getYoutubeData(activityName){
    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.APIKEY}&part=snippet&maxResults=15&q=${activityName}`) 
    const youtubeInfo = response.data.items.map((element)=>{
        return {
            videoURL: `https://www.youtube.com/watch?v=${element.id.videoId}`,
            uploadDate: element.snippet.publishedAt,
            title: element.snippet.title,
            description: element.snippet.description,
            thumbnailURL: element.snippet.thumbnails.medium.url,
            channel: element.snippet.channelTitle
        }
    })
    return youtubeInfo
}

module.exports = addToDatabase