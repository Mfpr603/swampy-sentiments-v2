import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar sticky="top"  expand="md">
      <Container>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link to="/"> 
                      <img
                      className='shrekHead'
                      src={process.env.PUBLIC_URL + "/assets/shrekHead.png"}
                      alt="shrekHead"
                      />          
    </Link>
            <Link to="pussinmoods"> <img
                    className='pussInMoods'
                    src={process.env.PUBLIC_URL + "/assets/PussInBoots.png"}
                    alt="Puss in Boots"
                    /></Link>
            <Link to="WishUponWellness">
            <img
                    className='wishUpon'
                    src={process.env.PUBLIC_URL + "/assets/wishUpon.png"}
                    alt="WishUpon"
                    /></Link>
            <Link to="gingysgrumpometer"> <img
                    className='gingy'
                    src={process.env.PUBLIC_URL + "/assets/gingy.png"}
                    alt="gingy"
                    />
     </Link>
            

            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
