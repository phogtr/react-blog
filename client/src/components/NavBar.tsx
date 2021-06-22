import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">React Blog</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
