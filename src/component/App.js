
import React from 'react';
import { IMAGES } from './constant'

import { Container, CardColumns, Card, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import WOW from "wow.js";

class App extends React.Component {
  componentDidMount() {
    new WOW().init();
  }

  handleScroll=()=>{
    
  }

  render() {
    return (

      <>
        <div class='about-banner-sec'>
          <Navbar collapseOnSelect fixed="top" expand="lg" bg="black" onScroll={this.handleScroll()} variant="dark">
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
          <div class="about-banner-text wow fadeInUp" data-wow-duration="2s"
            style={{
              visibility: 'visible',
              animationDuration: '2s',
              animationName: 'fadeInDown',
            }}>
            <div class="containerDiv">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h1>Welcome</h1>
                <p>We integrate tech expertise and business intelligence which combines with our role as one of the most trusted consultants for Indian business clients.</p>
              </div>
            </div>
          </div>
        </div>
        <Container>
          <CardColumns>
            <div className='col_half'>
              <div class="wow fadeInUp" data-wow-duration="2s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img1} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img2} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img3} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img1} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img2} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img3} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img3} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img3} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img3} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img3} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img3} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img3} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img3} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img3} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img3} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img3} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img3} />
                </Card>
              </div>
              <div class="wow fadeInUp" data-wow-duration="2s">
                <Card >
                  <Card.Img variant="top" src={IMAGES.img3} />
                </Card>
              </div>
            </div>
          </CardColumns>
        </Container>
      </>

    );
  }
}

export default App;
