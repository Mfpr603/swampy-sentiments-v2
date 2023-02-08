import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar sticky="top"  expand="md">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link to="/">Swampy Home</Link>
            {/* <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link> */}
            <Link to="pussinmoods">Puss in Moods</Link>
            <Link to="WishUponWellness">Wish Upon Wellness</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
