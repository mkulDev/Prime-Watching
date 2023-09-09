import {SearchContext} from './utils/constants'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './compnenets/Navbar'
import SideBar from './compnenets/SideBar'
import {useState} from 'react'
import VideoDetail from './compnenets/VideoDetail'
import Feed from './compnenets/Feed'
import ChannelDetail from './compnenets/ChannelDetail'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('New')
  return (
    <Router>
      <SearchContext.Provider value={{selectedCategory, setSelectedCategory}}>
        <Navbar />
        <SideBar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
        </Routes>
      </SearchContext.Provider>
    </Router>
  )
}

export default App
