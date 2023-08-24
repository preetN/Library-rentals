import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { setAdmin } from "../../user/userSlice";
function Header() {
  const { admin } = useSelector((state) => state.adminInfo);
  const dispatch = useDispatch();
  const handleOnLogout = () => {
    signOut(auth).then(() => {
      dispatch(setAdmin({}));
    });
  };
  return (
    <div>
      <Navbar variant="dark" bg="dark" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Library Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              {admin?.uid ? (
                <>
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                  <Link className="nav-link" onClick={handleOnLogout} to="#">
                    Sign Out
                  </Link>
                </>
              ) : (
                <Link className="nav-link" to="/signin">
                  SignIn
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
