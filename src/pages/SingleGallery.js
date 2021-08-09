import React, { Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import LayoutOne from '../layouts/LayoutOne'
import GalleryDetails from '../templates/GalleryDetails/index'

const galleryPage = () => {
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

        <GalleryDetails />

      </LayoutOne>
    </>
  )
}

export default galleryPage
