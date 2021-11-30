import React, { useEffect } from 'react';
import { Col, Container, Card } from 'react-bootstrap';
import WebsterConfig from '../../config/WebsterConfig';

const variant = "dark";
const cardBorderVariant = "light";
const cardTextVariant = "light";
const columnClassName = "mx-auto";
const cardClassName = "m-3";
const imagePosition = "top";
const colXs = 12, colSm = 6, colMd = 6, colLg = 4;
const projects = [
  {
    id: 1,
    name: "Project 1",
    desc: "Just a short description",
    img: "https://cdn.pixabay.com/photo/2017/08/25/13/36/code-geek-2680204_960_720.png",
  },
  {
    id: 2,
    name: "Project 2",
    desc: "Just a short description",
    img: "https://cdn.pixabay.com/photo/2017/08/25/13/36/code-geek-2680204_960_720.png",
  },
  {
    id: 3,
    name: "Project 3",
    desc: "Just a short description",
    img: "https://cdn.pixabay.com/photo/2017/08/25/13/36/code-geek-2680204_960_720.png",
  },
  {
    id: 4,
    name: "Project 4",
    desc: "Just a short description",
    img: "https://cdn.pixabay.com/photo/2017/08/25/13/36/code-geek-2680204_960_720.png",
  },
];



let xhr = new XMLHttpRequest()
xhr.open("get", WebsterConfig.projectsUrl)
xhr.send()

xhr.onload = () => {
    globalList(JSON.parse(xhr.response))
};

const globalList = (list) => {
    return list
}

const Home = () => {

    useEffect(() => {
      window.scrollTo(0, 0)
    }, []);
    
    return (
      <Container className="flex-container">
          {
              projects.map((proj, id) => {
                  return (
                    <Col className={columnClassName} xs={colXs} sm={colSm} md={colMd} lg={colLg} key={id}>
                      <Card border={cardBorderVariant} text={cardTextVariant} bg={variant} className={cardClassName}>
                        <Card.Header>{proj.name}</Card.Header>
                        <Card.Img variant={imagePosition} src={proj.img} />
                        <Card.Body>
                          <Card.Title>{proj.name}</Card.Title>
                          <Card.Text>{proj.desc}</Card.Text>
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