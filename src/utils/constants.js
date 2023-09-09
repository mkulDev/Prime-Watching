import {VscHome} from 'react-icons/vsc'
import {BiCodeAlt} from 'react-icons/bi'
import {SiGoogleearth} from 'react-icons/si/'
import {BsSoundwave} from 'react-icons/bs'
import {SiProgress} from 'react-icons/si'
import {FaMicrophone} from 'react-icons/fa'
import {MdLocalMovies} from 'react-icons/md'
import {MdOutlineGames} from 'react-icons/md'
import {VscLiveShare} from 'react-icons/vsc'
import {MdOutlineSportsBasketball} from 'react-icons/md'
import {TbTie} from 'react-icons/tb'
import {AiOutlineEye} from 'react-icons/ai'
import {MdOutlineTheaterComedy} from 'react-icons/md'
import {CgGym} from 'react-icons/cg'
import {MdAttachMoney} from 'react-icons/md'
import {createContext} from 'react'

export const categories = [
  {name: 'New', icon: <VscHome />},
  {name: 'Coding', icon: <BiCodeAlt />},
  {name: 'News', icon: <SiGoogleearth />},
  {name: 'Music', icon: <BsSoundwave />},
  {name: 'Education', icon: <SiProgress />},
  {name: 'Podcast', icon: <FaMicrophone />},
  {name: 'Movie', icon: <MdLocalMovies />},
  {name: 'Gaming', icon: <MdOutlineGames />},
  {name: 'Live', icon: <VscLiveShare />},
  {name: 'Sport', icon: <MdOutlineSportsBasketball />},
  {name: 'Fashion', icon: <TbTie />},
  {name: 'Beauty', icon: <AiOutlineEye />},
  {name: 'Comedy', icon: <MdOutlineTheaterComedy />},
  {name: 'Gym', icon: <CgGym />},
  {name: 'Crypto', icon: <MdAttachMoney />},
]

export const SearchContext = createContext()
