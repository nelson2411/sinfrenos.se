import React, { Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import LayoutOne from '../layouts/LayoutOne'
import Personal from '../components/Products/PersonalContainer'
import Beauty from '../components/Products/BeautyContainer'
import WellBeing from '../components/Products/WellBeingContainer'
import Home from '../components/Products/HomeContainer'
import LogoContainer from '../components/BrandLogo/LogoContainer'
import PageHeader from '../components/PageHeader'

const About = () => {
  return (
    <>
      <MetaTags>
        <title>Sinfrenos AB | Produkter</title>
        <meta
          name='description'
          content='Produkter'
        />
      </MetaTags>

      <LayoutOne>

        <PageHeader
          bgImg={require('../assets/images/shop-amway-sinfrenos.jpg')}
          title='Våra Produkter'
        />

        <WellBeing />
        <Beauty />
        <Personal />
        <Home />

      </LayoutOne>
    </>

  )
}

export default About
