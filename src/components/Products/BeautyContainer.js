import React from 'react';
import SlickSlider from '../UI/Carousel/slick'
import BeautyProducts from '../../data/Products/beauty.json'  
import BeautyItem from "../Products/BeautyItem";

  
const WellBeing = () => {  

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
                {/* End: Heading */}

                <div className="row"> 
                    <div className="col"> 
                    <div className="text-amway">
                    <h4>Skönhet</h4>
                    <p>Vacker hud, läckra färger och fängslande dofter för att öka ditt självförtroende.</p>
                    </div>
                        <SlickSlider settings={settings}>
                            {
                                BeautyProducts.map(service => (
                                    <div key={service.id}>
                                        <BeautyItem
                                        key={service.id} 
                                        id={service.id} 
                                        title={service.title} 
                                        pris={service.pris}
                                        //shortDesc={service.shortDesc} 
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

export default WellBeing;