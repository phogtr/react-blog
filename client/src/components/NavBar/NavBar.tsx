import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logoutRequest } from "src/api/user/userApi";
import { UserContext } from "../../utils/UserContext";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  const { userData, setUser } = useContext(UserContext);

  const logoutHandler = async () => {
    await logoutRequest();
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
      <Nav.Link as={Link} to="/" onClick={logoutHandler}>
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
