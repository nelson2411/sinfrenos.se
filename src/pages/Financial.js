import React, { Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import LayoutOne from '../layouts/LayoutOne'
import WelocmePromo02 from '../components/WelcomePromo/PromoContainer-02'
import Testimonial from '../components/Testimonials/home-one/TestimonialContent'
import ChooseUs from '../components/WhyChooseUs/ChooseUs'
import Team from '../components/Team/TeamContainer'
import LogoContainer from '../components/BrandLogo/LogoContainer'
import PageHeader from '../components/PageHeader'
import OmOss from '../components/OmOss'

const Financial = () => {
  return (
    <>
      <MetaTags>
        <title>Sinfrenos AB | Finansiell och bokföringsrådgivning</title>
        <meta
          name='description'
          content='Städning tjänster'
        />
      </MetaTags>

      <LayoutOne>

        <PageHeader
          bgImg={require('../assets/images/multiusos-sinfrenos.jpg')}
          title='Finansiell och bokföringsrådgivning'
        />

      </LayoutOne>
    </>

  )
}

export default Financial
