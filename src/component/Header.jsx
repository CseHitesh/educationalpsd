import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../resources/NEWLogo.png";
const Header = () => {
  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        id="myheader"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="55"
              height="70"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{
              background: "#fff9f3",
              textAlign: "center",
            }}
          >
            <Nav className="me-auto mx-auto">
              <Nav.Link href="#home">Study</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#admission">Admission</Nav.Link>
              <Nav.Link href="#page">Page</Nav.Link>
              <Nav.Link href="#news">News</Nav.Link>
              <Nav.Link href="#contect">Contect</Nav.Link>
              <Nav.Link href="#Apply" className=" mybtn shadow-lg">
                Apply Now
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
