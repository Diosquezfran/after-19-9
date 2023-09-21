import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
      <Nav className="me-auto">
        <NavLink className={( { isActive} ) => isActive ? "link-active" : ""} to="/">Home</NavLink>
        <NavLink className={( { isActive} ) => isActive ? "link-active" : ""} to="/category/jewelery">jewelery</NavLink>
        <NavLink style={ ({ isActive}) => isActive ? { color: "blueviolet"} : {} } to="/contact">other category</NavLink>

      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavBar;