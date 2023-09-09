import React from 'react'
import {useParams} from 'react-router-dom'
import {fetchAPI} from '../utils/FetchURL'
import {useState} from 'react'
import {useEffect} from 'react'
import {HiCheckCircle} from 'react-icons/hi'
import './channelDetail.css'
import VideoCard from './VideoCard'

const ChannelDetail = () => {
  const [channelData, setChannelData] = useState(null)
  const [playList, setplayList] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    fetchAPI(`channels?part=snippet%2Cstatistics&id=${id}`).then((data) => setChannelData(data.items[0]))
    fetchAPI(`search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`).then((list) => setplayList(list.items))
  }, [id])

  if (!channelData && !playList) return <h2>Loading...</h2>

  const {
    brandingSettings: {
      image: {bannerExternalUrl},
    },
    snippet: {
      thumbnails: {
        high: {url},
      },
      title,
    },

    statistics: {subscriberCount},
  } = channelData

  return (
    <div className='container'>
      <div className='channelBar' style={{backgroundImage: `url(${bannerExternalUrl})`}}>
        <img src={url} alt='baner' />
      </div>
      <div className='channel-title'>
        <h4>
          {title} <HiCheckCircle />
        </h4>
        <p>{subscriberCount} Subscribers</p>
      </div>
      <div className='videos-container'>{playList?.map((element, index) => element.id.videoId && <VideoCard video={element} key={index} />)}</div>
    </div>
  )
}

export default ChannelDetail
