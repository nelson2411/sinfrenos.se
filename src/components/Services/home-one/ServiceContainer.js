import React from 'react';
import SlickSlider from '../../UI/Carousel/slick'
import ServicesData from '../../../data/Services/service-one'  
import ServiceItem from "./ServiceItem";
import SectionTitle from "../../SectionTitles/SectionTitle";

  
const Service = () => {  

    const settings = {
        dots: true,
        arrows:true,
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
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                }
              } 
 
            ]
      };

 
        return (

        <section className="service_section">
            <div className="container"> 
                {/* Heading */}
                <SectionTitle
                    title="Våra Tjänster"
                    subtitle="Vårt företag har ett brett utbud av tjänster och innovativa lösningar för kunder i alla sektorer och med olika budgetar."
                />
                {/* End: Heading */}

                <div className="row"> 
                    <div className="col"> 
                        <SlickSlider settings={settings}>
                            {
                                ServicesData.map(service => (
                                    <div key={service.id}>
                                        <ServiceItem 
                                        key={service.id} 
                                        id={service.id} 
                                        title={service.title} 
                                        shortDesc={service.shortDesc} 
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
        );
    }
;

export default Service;