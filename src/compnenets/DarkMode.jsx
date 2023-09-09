import React from 'react'
import {BsMoon, BsMoonFill} from 'react-icons/bs/'
import {FaSun, FaRegSun} from 'react-icons/fa/'
import {useEffect, useState} from 'react'

const DarkMode = () => {
  const rootElement = document.querySelector(':root')
  const [darkMode, setDarkMode] = useState(true)
  const changemode = () => {
    setDarkMode(!darkMode)
    darkMode ? (rootElement.dataset.theme = 'light') : (rootElement.dataset.theme = 'dark')
  }
  useEffect(() => {
    rootElement.dataset.theme = 'dark'
  }, [])
  return (
    <div className='dark-mode-bar' onClick={changemode}>
      {darkMode ? (
        <>
          <FaRegSun /> <BsMoonFill />
        </>
      ) : (
        <>
          <FaSun />
          <BsMoon />
        </>
      )}
    </div>
  )
}

export default DarkMode
