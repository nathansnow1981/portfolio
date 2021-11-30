import React, { useEffect } from 'react';
import { Col, Container, Card } from 'react-bootstrap';
import WebsterConfig from '../../config/WebsterConfig';

/**
 * Visual settings
 */
const variant = "dark";
const cardBorderVariant = "light";
const cardTextVariant = "light";
const columnClassName = "mx-auto";
const cardClassName = "m-3";
const imagePosition = "top";
const colXs = 12, colSm = 6, colMd = 6, colLg = 4;

/**
 * Queries the API for the current projects
 * @returns Returns a list of project objects
 */
const currentProjectsList = () => {

    let xhr = new XMLHttpRequest();
    xhr.open("get", WebsterConfig.projectsUrl, false);
    xhr.send();
    return JSON.parse(xhr.responseText)

}


const Home = () => {

    useEffect(() => {
      window.scrollTo(0, 0)
    }, []);
    
    return (
      <Container className="flex-container">
          {
              currentProjectsList().map((project, index) => {
                  return (
                    <Col className={columnClassName} xs={colXs} sm={colSm} md={colMd} lg={colLg} key={index}>
                      <Card border={cardBorderVariant} text={cardTextVariant} bg={variant} className={cardClassName}>
                        <Card.Header>{project.header}</Card.Header>
                        <Card.Img variant={imagePosition} src={project.image} />
                        <Card.Body>
                          <Card.Title>{project.title}</Card.Title>
                          <Card.Text>{project.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
              })
          }
      </Container>
    );
};

export default Home;