import React from 'react';
import SlickSlider from '../UI/Carousel/slick'
import ProductsHome from '../../data/Products/home.json'  
import HomeItem from "../Products/HomeItem";
import SectionTitle from "../SectionTitles/SectionTitle";

  
const Home = () => {  

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

                <div className="row"> 
                    <div className="col"> 
                    <div className="text-amway">
                    <h4>Hem</h4>
                    <p>Våra produkter städar ditt hem så att du kan spendera mer tid på att njuta av livet.</p>
                    </div>
                        <SlickSlider settings={settings}>
                            {
                                ProductsHome.map(service => (
                                    <div key={service.id}>
                                        <HomeItem
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

export default Home;