import React from 'react'
import PromoList from './PromoList'
import PromosData from '../../data/WelcomePromo/promo'
import SectionTitle from '../SectionTitles/SectionTitle'

function PromoContainer () {
  return (
    <section className='service_list_section'>
      <div className='container'>
        {/* Start: Heading */}
        <SectionTitle
          title='Välkommen till Sinfrenos AB'
          subtitle='Välkommen till SINFRENOS AB Tack för att du besöker vår webbplats.
                            Här hittar du all information du behöver om vårt företag och de tjänster vi erbjuder.'
        />

        <div className='row service_list_warp'>
          {PromosData.map(promo => (
            <PromoList
              key={promo.id}
              title={promo.title}
              text={promo.text}
              img={promo.img}
              link={promo.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PromoContainer
