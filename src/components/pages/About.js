import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./AboutStyle.css";

const profileImageUrl = "https://i.stack.imgur.com/eBXvB.jpg?s=256&g=1";
const currentAge = () => {
    const dob = new Date(1981, 5, 29);
    var now = new Date(Date.now());
    return now.getFullYear() - dob.getFullYear();
}

const About = () => {
    return (
      <Col xs="9" md="6 mx-auto">
        <div>
          <div>
            <Image src={profileImageUrl} alt="Nate" roundedCircle />
          </div>
          <h1 className="intro p-5">
            Hi I'm Nate!
          </h1>
          <p>
            I'm a {currentAge()} year old husband and father, and have found a true passion for software development. <br />I find myself more comfortable with backend development, particularly with Java and Spring Boot, but am very keen and fast to adapt to any language or framework.
          </p>
          <p>
            Checkout the
            <Link className="grow10 inline" to="/">
              <span className="grow">&nbsp; homepage &nbsp;</span>
            </Link>
            for some project examples, or if there's something else you want to see please
            <Link className="grow10 inline" to="/contact">
              <span className="grow">&nbsp; contact me &nbsp;</span>
            </Link>
            so I can show my more targeted skills <br />
            <span className="grow10 laptop inline p-3">👨‍💻</span>
          </p>
        </div>
      </Col>
    );
};

export default About;