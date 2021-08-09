import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import Footer from '../components/Footer/footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Header/Navbar/Navbar'

const LayoutOne = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

LayoutOne.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.string
}

export default LayoutOne
