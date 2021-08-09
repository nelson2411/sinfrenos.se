import React, { Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import LayoutOne from '../layouts/LayoutOne'
import Contact from '../templates/Contact/indexOffert'
import PageHeader from '../components/PageHeader'

const OffertPage = () => {
  return (

    <>
      <MetaTags>
        <title>klinarmen | Contact Us</title>
        <meta
          name='description'
          content='Cleaning  React JS Template.'
        />
      </MetaTags>

      <LayoutOne>
        <PageHeader
          bgImg={require('../assets/images/quote-sinfrenos.jpg')}
          title='Offertförfrågan'
        />

        <Contact />

      </LayoutOne>
    </>

  )
}

export default OffertPage
