import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiCheckCircle } from 'react-icons/hi'

const VideoCard = ({ video }) => {
  const videoId = video?.id?.videoId || ''
  const title = video?.snippet?.title || ''
  const description = video?.snippet?.description || ''
  const channelTitle = video?.snippet?.channelTitle || ''
  const channelId = video?.snippet?.channelId || ''
  const url = video?.snippet?.thumbnails?.medium?.url || ''

  const [thumbnailError, setThumbnailError] = useState(false)

  const handleThumbnailError = () => {
    setThumbnailError(true)
  }

  return (
    <div className='card'>
      <Link to={`video/${videoId}`}>
        {thumbnailError ? (
          <img
            src='../images/prime-logo.svg'
            alt='default thumbnail'
          />
        ) : (
          <img
            src={url}
            alt='thumbnail'
            onError={handleThumbnailError}
          />
        )}
      </Link>
      <div className='card-info'>
        <h4>{title.slice(0, 40)}</h4>
        <Link to={`channel/${channelId}`}>
          <span>
            {channelTitle.slice(0, 25)} <HiCheckCircle />
          </span>
        </Link>
        <p>{description.slice(0, 160) + ''}</p>
      </div>
    </div>
  )
}

export default VideoCard
