
import React from 'react';
import { IMAGES } from './constant'

import {Container, CardColumns, Card, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import WOW from "wow.js";

class App extends React.Component {
  componentDidMount() {
    new WOW().init();
  }

  render() {
    return (

      <>
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="black" variant="dark">
          <Navbar.Brand href="#home">
            <img
              src={IMAGES.logo}
              width="50"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />PerspectivesbyV</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">              
            </Nav>
            <Nav>
            <Nav.Link href="#features">Portfolio</Nav.Link>
              <Nav.Link href="#pricing">Landscape</Nav.Link>
              <Nav.Link href="#pricing">Prints</Nav.Link>
              <Nav.Link href="#deets">Contact/About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


        <Container>
          <CardColumns>
            <div className='col_half'>
              <div class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img1} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="2s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img2} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="4s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img3} />
                </Card>
              </div>
            </div>
            <div className='col_third'>
              <div class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img4} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="2s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img5} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="4s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img6} />
                </Card>
              </div>
            </div>
            <div class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">
              <Card >
                <Card.Img variant="top" src={IMAGES.img4} />
              </Card>
            </div>
            <div class="wow fadeInUp" data-wow-delay="2s" data-wow-duration="2s">
              <Card >
                <Card.Img variant="top" src={IMAGES.img5} />
              </Card>
            </div>
            <div class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="4s">
              <Card >
                <Card.Img variant="top" src={IMAGES.img6} />
              </Card>
            </div>
          </CardColumns>
        </Container>
      </>

    );
  }
}

export default App;
