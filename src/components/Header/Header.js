import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="navbar-brand">
          Logo-Website
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/user" className="nav-link">
              Users
            </NavLink>
            <NavLink to="admin" className="nav-link">
              Admin
            </NavLink>
          </Nav>
          <Nav>
            <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item>Register</NavDropdown.Item>
              <NavDropdown.Item>Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
