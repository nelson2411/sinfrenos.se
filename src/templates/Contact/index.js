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
                
                title="Kontakta oss gärna om du har några frågor!" 
                subtitle="Vi försöker alltid svara så snabbt vi kan. " 

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