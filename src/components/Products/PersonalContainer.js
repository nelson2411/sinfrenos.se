import React from 'react'
import SlickSlider from '../UI/Carousel/slick'
import ProductsBeauty from '../../data/Products/personal-care.json'
import PersonalItem from '../Products/PersonalItem'
import SectionTitle from '../SectionTitles/SectionTitle'

const Beauty = () => {
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

        <div className='row'>
          <div className='col'>
            <div className='text-amway'>
              <h4>Personlig Vård</h4>
              <p>Gör dig redo att avslöja ditt bästa jag. Från frisk hud till ett perfekt leende.</p>
            </div>
            <SlickSlider settings={settings}>
              {
                                ProductsBeauty.map(service => (
                                  <div key={service.id}>
                                    <PersonalItem
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

export default Beauty
