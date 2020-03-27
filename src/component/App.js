
import React from 'react';
import { IMAGES } from './constant'

import { BouncyDiv } from './app.style';
import { CardColumns, Card, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import WOW from "wow.js";

class App extends React.Component {
  componentDidMount() {
    new WOW().init();
  }

  render() {
    return (

      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


        <div className='container'>
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
        </div>
      </>

    );
  }
}

export default App;
