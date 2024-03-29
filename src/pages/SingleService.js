import React, { Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import LayoutOne from '../layouts/LayoutOne'
import ServiceDetails from '../templates/ServiceDetails/index'

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

        <ServiceDetails />

      </LayoutOne>
    </>
  )
}

export default servicePage
