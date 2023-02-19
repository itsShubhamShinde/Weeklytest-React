import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className='headerOuterBox'>
      <div className='headerLeftDiv'>
        <img src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="" />
      </div>

      <div className='headerMiddleDiv'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Services</li>
          <li>Block</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className='headerRightDiv'>
        <button>Enquire Now</button>

      </div>
    </div>
  )
}

export default Header;
