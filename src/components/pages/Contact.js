import React from 'react';
import ContactForm from '../ContactForm';

const Contact = () => {

    document.title = "Contact - Portfolio";
    
    return (
      <div>
          <h1>Contact Me</h1>
          <p className="welcome-msg">
            Hi and thanks for checking out my portfolio!
            <br />
            Please fill in the info below including a detailed message and I'll be sure to get back to you as fast as I can
          </p>
        <ContactForm />
      </div>
    );
};

export default Contact;