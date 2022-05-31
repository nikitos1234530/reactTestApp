import React from 'react'
import '../header/header.css'
import logo from '../../img/logo.svg'
import style from '../../styles/body.module.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-nav'>
        <div className='header-nav__logo'>
          <img src={logo} alt='Logo' />
        </div>
        <div className='header-nav__navbar'>
          <ul className='nav-list'>
            <li>
              <a href='#'>Overview</a>
            </li>
            <li>
              <a href='#'>How it works</a>
            </li>
            <li>
              <a href='#'>Reviews</a>
            </li>
            <li>
              <a href='#'>Checklist</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='header-title'>
        <h1>
          Change your name quickly!<button className={style.btn}>Get started now</button>
        </h1>
      </div>
      <div className='header-subtitle'>
        <p>
          Starting a new chapter in your life should be a time of excitement and
          fresh beginnings.
        </p>
      </div>
    </header>
  )
}

export default Header
