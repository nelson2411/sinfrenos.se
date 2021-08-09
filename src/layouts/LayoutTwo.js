import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import Footer from '../components/Footer/footer'
import Header from '../components/Header/HeaderTwo'
import Navbar from '../components/Header/Navbar/Navbar'

const LayoutTwo = ({ children }) => {
  return (
    <>
      <div className='layoutTwo'>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}

LayoutTwo.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.string
}

export default LayoutTwo
