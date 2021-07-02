import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import axios from "axios";

interface NavBarProps {
  userData: any;
  setUser: (_: any) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ userData, setUser }) => {
  const logoutRequest = async () => {
    await axios.delete("http://localhost:5000/api/logout");
    setUser({});
    localStorage.clear();
  };

  let body = userData?.userName ? (
    <Nav>
      <Nav.Link as={Link} to="/create-post">
        Create Post
      </Nav.Link>
      <Nav.Link as={Link} to="/">
        {userData.userName}
      </Nav.Link>
      <Nav.Link as={Link} to="/" onClick={logoutRequest}>
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
