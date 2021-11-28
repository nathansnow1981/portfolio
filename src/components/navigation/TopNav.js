import React from 'react';
import { useLocation } from "react-router";
import './TopNavStyle.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const theme = "dark";

const IsActive = (endpoint) => {
  const currentPath = useLocation().pathname;
  return currentPath === endpoint ? "active" : null;
}

const endpoints = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
]

const TopNav = () => {
  return (
    <Navbar bg={theme} variant={theme} expand="lg" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            {endpoints.map((endpoint, index) => {
              return (
                <Nav.Link className={IsActive(endpoint.path)} href={endpoint.path} key={index}>
                  {endpoint.name}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;