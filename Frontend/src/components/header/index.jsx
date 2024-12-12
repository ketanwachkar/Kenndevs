import React from 'react'
import Logo from "../../assets/png/logobg.png"
import './header.scss';

const Header = () => {
  return (
    <div className='header-container'>
      <img src={Logo} className='logo-image' alt=''/>
    </div>
  )
}

export default Header
