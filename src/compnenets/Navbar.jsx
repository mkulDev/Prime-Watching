import React from 'react'
import logo from '../images/prime-logo.svg'
import DarkMode from './DarkMode'
import SearchBar from './SearchBar'
import './navbar.css'
const Navbar = () => {
  return (
    <nav>
      <div className='icon-bar'>
        <img src={logo} alt='prime-logo' />
        <h1>Prime Video</h1>
      </div>
      <SearchBar />
      <DarkMode />
    </nav>
  )
}

export default Navbar
