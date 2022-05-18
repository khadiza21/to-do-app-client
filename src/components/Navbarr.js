import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Navbarr = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
      signOut(auth);
    };
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="home">
            TO DO APP
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-light mx-2" as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link className="text-light mx-2" as={Link} to="about">
                About
              </Nav.Link>
              {user ? (
                <button
                  className="btn btn-info text-dark fw-bold btn-link text-decoration-none"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              ) : (
                <Nav.Link
                  as={Link}
                  className="btn btn-info fw-bold text-dark"
                  to="login"
                >
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navbarr;