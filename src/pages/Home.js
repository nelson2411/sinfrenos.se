import React, { Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import LayoutOne from '../layouts/LayoutOne'
import Slider from '../components/Slider/SliderOne'
import WelocmePromo from '../components/WelcomePromo/PromoContainer'
import Services from '../components/Services/home-one/ServiceContainer'
import ChooseUs from '../components/WhyChooseUs/ChooseUs'
import Gallery from '../components/Gallery/Gallery'
import Testimonial from '../components/Testimonials/home-one/TestimonialContent'

const Home = () => {
  return (
    <>
      <MetaTags>
        <title>Sinfrenoss | Home</title>
        <meta
          name='description'
          content='Cleaning  React JS Template.'
        />
      </MetaTags>
      <LayoutOne>

        <Slider />
        <WelocmePromo />
        <Services />
        <ChooseUs />
        <Gallery />
        <Testimonial />

      </LayoutOne>
    </>
  )
}

export default Home
