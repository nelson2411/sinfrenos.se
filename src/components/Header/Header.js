import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

const Header = () => {
  return (

    <div className='header_top'>
      {/* Logo */}
      <div className='container'>
        <div className='row'>
          <div className='header_logo'>
            <Link to={process.env.PUBLIC_URL + '/'}>
              <img src={logo} alt='' />
            </Link>
          </div>
          <div className='header_top_location'>
            <div className='top_location'>
              <i className='icon_clock_alt' />
              <p>Öppettider</p>
              <span> 8:00AM - 6:00PM</span>
            </div>
            <div className='top_location'>
              <i className='icon_phone' />
              <p>Kontakt Oss</p>
              <span>014 7422 866</span>
            </div>
          </div>
          <div className='header-right'>
            <ul>
              <li>
                <a href='//facebook.com'>
                  <i className='fa fa-facebook' />
                </a>
              </li>
              <li>
                <a href='//facebook.com'>
                  <i className='fa fa-twitter' />
                </a>
              </li>
              <li>
                <a href='//facebook.com'>
                  <i className='fa fa-instagram' />
                </a>
              </li>
              <li>
                <a href='//facebook.com'>
                  <i className='fa fa-pinterest' />
                </a>
              </li>
            </ul>
          </div>
          {/* End: social-nav */}
        </div>
      </div>
    </div>

  )
}

export default Header
