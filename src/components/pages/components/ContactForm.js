import Button from "react-bootstrap/Button";
import React, { useRef } from "react";
import { Col, Form, Row } from "react-bootstrap";
import emailjs from "emailjs-com";
import EmailjsConfig from "../../../config/EmailjsConfig";

var config = new EmailjsConfig();

const serviceId = config.serviceId;
const templateId = config.templateId;
const userId = config.userId;

const emailPrivacyMsg = "Your email will never be shared with anyone";

const ContactForm = () => {

  const form = useRef(null);
  const firstName = useRef(null);

  //Send email function
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current, userId).then(
      () => {
        alert("Thanks " + firstName.current.value + ", I'll get back to you as soon as I can");
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
      <Form onSubmit={sendEmail} ref={form}>
        <Row>
          <Col md="6 mx-auto text-start">
            <Form.Group className="mb-3 ml-auto" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" ref={firstName}></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md="6 mx-auto text-start">
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md="6 mx-auto text-start">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted privacy-msg">
                <i>{emailPrivacyMsg}</i>
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md="6 mx-auto text-start">
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="outline-light" type="submit">
          Submit
        </Button>
      </Form>
  );
};

export default ContactForm;
