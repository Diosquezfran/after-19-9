import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = ( ) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand >E-commerce</Navbar.Brand>
      <Nav className="me-auto">
        <NavLink className={( { isActive} ) => isActive ? "link-active navlink" : "navlink"} to="/">Home</NavLink>
        <NavLink className={( { isActive} ) => isActive ? "link-active navlink" : "navlink"} to="/category/tablet">Tablets</NavLink>
        <NavLink  className={( { isActive} ) => isActive ? "link-active navlink" : "navlink"} to="/category/smartphones">Smartphones</NavLink>
        <NavLink  className={( { isActive} ) => isActive ? "link-active navlink" : "navlink"} to="/category/pc">Pc</NavLink>
        <NavLink  className={( { isActive} ) => isActive ? "link-active navlink" : "navlink"} to="/cart">Cart</NavLink>
      </Nav>
    </Container>
    <CartWidget />
  </Navbar>
  );
}

export default NavBar;