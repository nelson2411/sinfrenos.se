import React, { Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import LayoutOne from '../layouts/LayoutOne'
import PageHeader from '../components/PageHeader'
import Services from '../components/Services/home-one/ServiceContainer'
import ChooseUs from '../components/WhyChooseUs/ChooseUs'
import PricingTable from '../components/PricingTable/PricingContainer'

const servicePage = () => {
  return (
    <>
      <MetaTags>
        <title>klinarmen | Home</title>
        <meta
          name='description'
          content='Cleaning  React JS Template.'
        />
      </MetaTags>
      <LayoutOne>
        <div className='service-page'>
          <PageHeader
            bgImg={require('../assets/images/Our-services-sinfrenos.jpg')}
            title='Our Services'
          />
          <Services />
          <ChooseUs />
        </div>
      </LayoutOne>
    </>
  )
}

export default servicePage
