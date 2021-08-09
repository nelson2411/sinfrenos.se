import React , {Fragment } from 'react';  
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Contact from "../templates/Contact/index";
import RequestQuoteForm from "../components/RequestQuoteForm/RequestQuoteForm";  
import ContactMap from "../templates/Contact/ContactMap";


import PageHeader from '../components/PageHeader'

const ContactPage = () => {
    
    return(

        <Fragment>
            <MetaTags>
              <title>klinarmen | Contact Us</title>
              <meta
                name="description"
                content="Cleaning  React JS Template."
              />
            </MetaTags>

            <LayoutOne>
              <PageHeader
                bgImg={require('../assets/images/contact-sinfrenos.jpg')}
                title="Kontakta Oss" 
              />
              <section className="estimat_sectn" id="quote">
              <div className="container">
	        <div className="row">
	            <div className="col-md-4 col-sm-12"> 
					{/* Request Quote Form */}
					<RequestQuoteForm />
	            </div>

				<div className="col-md-8 why_chs">
                     {/* Request Quote Form */}
                  <ContactMap latitude="59.33869182916059" longitude="18.06286704243638" />
                  
                </div>
	        </div>
	        {/* row */}
	    </div>
      </section>
      
            </LayoutOne>
        </Fragment>

      );
  }

     

export default ContactPage;   