import React from 'react'; 
import ContactMap from "./ContactMap";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import ContactForm from "./ContactForm";


const ContactPage = () => {
    return (
        <section className="contact-section contact_page">
            <div className="container">

                {/* Start: Heading */}
                <SectionTitle 
                
                title="Beställ offert " 
                subtitle="Vi tillhandahåller gärna en tjänst med professionalism och kvalitet." 

                />
 
                <div className="row">
                    <div className="col-sm-12">
                        <ContactForm />
                    </div>
                </div> 
            </div>
        </section>
    );
};

export default ContactPage;