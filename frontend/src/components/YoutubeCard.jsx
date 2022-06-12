
const YoutubeCard = ( { youtubeVids} ) => {

    //sets up thumbnail, title, description to display into youtube card
    function parseVideoData(vidoes){
         return vidoes.map((item, index)=>(
            <a key={index} href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>
                <div className="youtube-video">
                    <img src={item.snippet.thumbnails.high.url} alt={item.snippet.title} />
                    <div className="youtube-title-description">
                        <h2>{item.snippet.title}</h2>
                        <p>{item.snippet.description}</p>
                    </div>
                </div>
            </a>
        ))
    } 

  return (
    <div className="youtube-card">
        {parseVideoData(youtubeVids)}
    </div>
  )
}

export default YoutubeCard