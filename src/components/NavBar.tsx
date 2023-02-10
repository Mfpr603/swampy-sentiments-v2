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
            <Link to="/">   
              
                    <img
                    className='shrekHead'
                    src={process.env.PUBLIC_URL + "/assets/shrekHead.png"}
                    alt="shrekHead"
                    />
     </Link>
            <Link to="pussinmoods">Puss in Moods</Link>
            <Link to="WishUponWellness">Wish Upon Wellness</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
