import React from 'react'
import {Link, useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {fetchAPI} from '../utils/FetchURL'
import {useState} from 'react'
import {useEffect} from 'react'
import {HiCheckCircle} from 'react-icons/hi'
import {AiOutlineEye} from 'react-icons/ai'
import {AiOutlineLike} from 'react-icons/ai'
import './videoDetail.css'
import RelatedCard from './RelatedCard'

//https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=7ghhRHRP6t4
const VideoDetail = () => {
  const [video, setVideo] = useState(null)
  const [playList, setplayList] = useState([])
  const {id} = useParams()

  useEffect(() => {
    fetchAPI(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`).then((data) => setVideo(data))
    fetchAPI(`search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=50`).then((list) => setplayList(list))
  }, [id])

  if (!video) return <h2>Loading...</h2>
  const {
    items: {
      0: {
        snippet: {title, channelTitle, description},
        statistics: {likeCount, viewCount},
      },
    },
  } = video

  const {items} = playList

  return (
    <div className='video-detail-container'>
      <div className='video-detail'>
        <div className='player-wrapper'>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width={'100%'} height={'100%'} />
        </div>
        <h4 className='video-detail-title'>{title}</h4>
        <Link to={`video/${id}`}>
          <span className='video-detail-channel-title'>
            {channelTitle.slice(0, 25)} <HiCheckCircle />
          </span>
        </Link>
        <span className='statistics'>
          <AiOutlineLike />
          {likeCount}
        </span>
        <span className='statistics'>
          <AiOutlineEye />
          {viewCount}
        </span>
        <p className='video-detail-description'>{description}</p>
      </div>
      <div className='video-section'>{items?.map((element, index) => element.id.videoId && <RelatedCard video={element} key={index} />)}</div>
    </div>
  )
}

export default VideoDetail
