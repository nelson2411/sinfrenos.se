import React from 'react'
import SlickSlider from '../UI/Carousel/slick'
import ProductsWellBeing from '../../data/Products/well-being.json'
import WellBeingItem from '../Products/WellBeingtItem'
import SectionTitle from '../SectionTitles/SectionTitle'

const WellBeing = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 2,
    // Responsive breakpoints
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }

    ]
  }

  return (

    <section className='service_section'>
      <div className='container'>
        {/* Heading */}
        <SectionTitle
          title='Våra Produkter'
          subtitle='Utforska vår produktvärld. En sak du alltid kan lita på: högkvalitativa produkter, oavsett i vilken kategori du handlar.'
        />
        {/* End: Heading */}

        <div className='row'>
          <div className='col'>
            <div className='text-amway'>
              <h4>Välbefinnande</h4>
              <p>Bättre näring börjar just nu. Få vitaminer, kosttillskott och mer för ditt välbefinnande.</p>
            </div>
            <SlickSlider settings={settings}>
              {
                                ProductsWellBeing.map(service => (
                                  <div key={service.id}>
                                    <WellBeingItem
                                      key={service.id}
                                      id={service.id}
                                      title={service.title}
                                      pris={service.pris}
                                        // shortDesc={service.shortDesc}
                                      thumb={service.thumb}
                                      btnText={service.btnText}
                                    />
                                  </div>
                                ))
                            }
            </SlickSlider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WellBeing
