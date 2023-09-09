import React, {useState, useRef} from 'react'
import {useContext} from 'react'
import {FaSearch} from 'react-icons/fa/'
import {SearchContext} from '../utils/constants'
import {useNavigate} from 'react-router-dom'

const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('')
  const {setSelectedCategory} = useContext(SearchContext)
  const navigate = useNavigate()
  const inputElement = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    setSelectedCategory(searchPhrase)
    setSearchPhrase('')
    inputElement.current.value = ''
    navigate('/')
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputElement}
          type='text'
          className='input-bar'
          placeholder='Search for videos...'
          onChange={(event) => {
            setSearchPhrase(event.target.value)
          }}
        />
        <button type='submit'>
          <FaSearch />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
