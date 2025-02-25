import React from 'react'
import Logo from "../../assets/png/logobg.png"
import './header.scss';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-content'>
      <img src={Logo} className='logo-image' alt=''/>
      <button>contact us</button>
      </div>
    </div>
  )
}

export default Header
