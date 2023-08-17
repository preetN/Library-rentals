import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Navbar variant="dark" bg="dark" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Library Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/signin">
                SignIn
              </Link>
              <Link className="nav-link" to="/signup">
                SignUp
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
