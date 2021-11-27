import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactFormStyle.css";

// const apiEndpoint = "http://weather-app.ap-southeast-2.elasticbeanstalk.com/weather-app/v1/owm/currentWeather/name?cityName=Toowoomba";
// const localEndpoint = "http://localhost:5000/weather-app/v1/owm/currentWeather/name?cityName=Brisbane";


const serviceId = "service_gbrxger";
const templateId = "template_zf3hacp";
const userId = "user_brg5pYziU2s4ZqpLAk06X";

const ContactForm = () => {

    const contactForm = useRef();

    const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(serviceId, templateId, contactForm.current, userId)
        .then(() => {
                alert("Email Sent!");
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

  return (
    <div >
      <h1>Contact Me</h1>
      <p className="welcome-msg">
        Hi and thanks for checking out my portfolio!
        <br />
        Please fill in the info below and I'll be sure to get back to you as fast as I can
      </p>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <form className="form" ref={contactForm} onSubmit={sendEmail}>
            <div className="name">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input type="text" name="firstName" className="form-control" tabIndex="1" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" className="form-control" tabIndex="2" />
              </div>
            </div>
            <div className="email form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" className="form-control" placeholder="example@email.com" tabIndex="3" />
            </div>
            <div className="message form-group">
              <label htmlFor="message">Message</label>
              <textarea placeholder="Start typing..." rows="5" className="form-control" name="message" tabIndex="4" />
            </div>
            <button type="submit"  className="btn btn-outline-primary grow" tabIndex="5">
                Send
            </button>
          </form>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default ContactForm;
