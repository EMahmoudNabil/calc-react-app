import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import Toggle from "./Toggle";

export const NavBar = ({ theme, toggleTheme }) => {
  return (
    <Row>
      <Col sm="12">
        <Navbar bg={theme} variant={theme} expand="lg">
          <Container>
            <Navbar.Brand href="#" className="title">
              Change mode
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>

              <Toggle theme={theme} toggleTheme={toggleTheme} />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
};
