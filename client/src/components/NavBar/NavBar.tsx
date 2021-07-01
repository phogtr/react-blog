import React from "react";

import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

interface NavBarProps {
  userData: any;
}

export const NavBar: React.FC<NavBarProps> = ({ userData }) => {
  let body = userData?.userName ? (
    <Nav>
      <Nav.Link as={Link} to="/">
        {userData.userName}
      </Nav.Link>
      <Nav.Link as={Link} to="/">
        Logout
      </Nav.Link>
    </Nav>
  ) : (
    <Nav>
      <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>
      <Nav.Link as={Link} to="/register">
        Register
      </Nav.Link>
    </Nav>
  );

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          React Blog
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">{body}</Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
