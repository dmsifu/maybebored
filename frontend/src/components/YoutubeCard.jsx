
const YoutubeCard = ( { youtubeVids} ) => {

  return (
    <div className="youtube-card">
        {youtubeVids?.map((video, index) => (
            <a key={index} href={video.videoURL}>
                <div className="youtube-video">
                    <img src={video.thumbnailURL} alt={video.title} />
                    <div className="youtube-title-description">
                        <h2>{video.title}</h2>
                        <p>{video.description}</p>
                    </div>
                </div>
            </a>
        ))}
    </div>
  )
}

export default YoutubeCard