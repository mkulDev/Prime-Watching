import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {HiCheckCircle} from 'react-icons/hi'

const RelatedCard = ({video}) => {
  const {
    id: {videoId},
    snippet: {
      title,
      channelTitle,
      thumbnails: {
        medium: {url},
      },
    },
  } = video

  const [thumbnailError, setThumbnailError] = useState(false)

  const handleThumbnailError = () => {
    setThumbnailError(true)
  }

  return (
    <div className='related-card'>
      <Link to={`../video/${videoId}`}>{thumbnailError ? <img src='../images/prime-logo.svg' alt='default thumbnail' /> : <img src={url} alt='thumbnail' onError={handleThumbnailError} />}</Link>
      <div className='related-card-info'>
        <h4>{title.slice(0, 40)}</h4>
        <Link to={`video/${videoId}`}>
          <span>
            {channelTitle.slice(0, 25)} <HiCheckCircle />
          </span>
        </Link>
      </div>
    </div>
  )
}

export default RelatedCard
