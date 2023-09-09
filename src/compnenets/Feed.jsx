import React, {useContext, useEffect, useState} from 'react'
import {SearchContext} from '../utils/constants'
import {fetchAPI} from '../utils/FetchURL'
import VideoCard from './VideoCard'
import './feed.css'
const Feed = () => {
  const {selectedCategory} = useContext(SearchContext)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchAPI(`search?q=${selectedCategory}&part=snippet%2Cid&regionCode=US&maxResults=50`).then((data) => setVideos(data.items))
  }, [selectedCategory])

  if (!videos) {
    return <h2> Loading...</h2>
  }

  return (
    <div className='container'>
      <div className='videos-container'>
        <h2 className='category-info'>
          {selectedCategory} <span> videos</span>
        </h2>
        {videos?.map((element, index) => element.id.videoId && <VideoCard video={element} key={index} />)}
      </div>
    </div>
  )
}

export default Feed
