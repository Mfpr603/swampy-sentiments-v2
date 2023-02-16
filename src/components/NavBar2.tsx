import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImgNavBar }  from './NavBar'; 

export const NavBar2 = () => {
  return (
    <Navbar sticky="top"  expand="md">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <div className = "imgNavBar">
        <ImgNavBar />
        </div>
          
          
            <div className = "links"> 
            <Link to="/"> Swampy Home           
            </Link>
            <Link to="pussinmoods">Puss in Moods 
                    </Link>
            <Link to="WishUponWellness">Wish Upon Wellness
            </Link>
            <Link to="gingysgrumpometer"> Gingys Grumpometer
     </Link>
            </div>
            

            

         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
