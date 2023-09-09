import React, {useContext, useEffect} from 'react'
import {categories, SearchContext} from '../utils/constants'
import './sidebar.css'
import {Link} from 'react-router-dom'
export const UserContext = React.createContext()

const SideBar = () => {
  const {selectedCategory, setSelectedCategory} = useContext(SearchContext)

  useEffect(() => {
    const ScrollableMenu = document.querySelector('.side-bar')
    ScrollableMenu &&
      ScrollableMenu.addEventListener('wheel', (eventt) => {
        eventt.preventDefault()
        ScrollableMenu.scrollLeft += eventt.deltaY / 2
      })
  }, [])

  return (
    <div className='side-bar'>
      {categories?.map((category) => (
        <Link to='/' key={category.name}>
          <button
            style={category.name === selectedCategory ? {background: 'linear-gradient(45deg, rgba(91, 0, 16, 1) 0%, rgba(191, 6, 6, 1) 100%)', color: 'hsl(0, 0%, 100%)'} : {}}
            className='category-button'
            onClick={() => {
              setSelectedCategory(category.name)
            }}
          >
            {category.icon}
            <span className='cat-button-text' style={category.name === selectedCategory ? {color: 'hsl(0, 0%, 100%)'} : {}}>
              {category.name}
            </span>
          </button>
        </Link>
      ))}
    </div>
  )
}

export default SideBar
