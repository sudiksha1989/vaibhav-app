
import React from 'react';
import { IMAGES, STYLE } from './constant'

import { Container, CardColumns, Card, } from 'react-bootstrap';
import WOW from "wow.js";

class App extends React.Component {
  componentDidMount() {
    new WOW().init();
  }

  handleScroll = () => {

  }

  render() {
    return (

      <>
        <div className="sidenav">
          <div className='site-logo'>
            <img
              src={IMAGES.logo}
              width="50"
              height="40"
              className="d-inline-block align-top"
              alt="logo"
            />
            <a href="#">PerspectivesbyV</a>
          </div>
          <div className='main-menu'>
            <a href="#">Portfolio</a>
            <a href="#">Landscape</a>
            <a href="#">Prints</a>
            <a href="#">Contact/About</a>
          </div>
        </div>

        <div className="main">
          <section class="site-section-hero bg-image" data-stellar-background-ratio="0.5" id="section-home">
            <div className='about-banner-sec'>
              <div className="about-banner-text wow fadeInUp" data-wow-duration="2s" style={STYLE.img}>
                <div className="col-md-7 text-center">
                  <h1 className="wow fadeInUp">Welcome</h1>
                  <p className="wow fadeInUp">We integrate tech expertise and business intelligence which combines with our role as one of the most trusted consultants for Indian business clients.</p>
                </div>
              </div>
            </div>
          </section>
          <div class="container-fluid">



            <section class="row align-items-stretch photos" id="section-photos">
              <Container>
                <CardColumns>
                  <div className='col_half'>
                    <div className="wow fadeInUp" data-wow-duration="2s">
                      <Card >
                        <Card.Img variant="top" src={IMAGES.img1} />
                      </Card>
                    </div>
                    <div className="wow fadeInUp" data-wow-duration="2s">
                      <Card >
                        <Card.Img variant="top" src={IMAGES.img2} />
                      </Card>
                    </div>
                    <div className="wow fadeInUp" data-wow-duration="2s">
                      <Card >
                        <Card.Img variant="top" src={IMAGES.img3} />
                      </Card>
                    </div>
                    <div className="wow fadeInUp" data-wow-duration="2s">
                      <Card >
                        <Card.Img variant="top" src={IMAGES.img1} />
                      </Card>
                    </div>
                    <div className="wow fadeInUp" data-wow-duration="2s">
                      <Card >
                        <Card.Img variant="top" src={IMAGES.img2} />
                      </Card>
                    </div>
                    <div className="wow fadeInUp" data-wow-duration="2s">
                      <Card >
                        <Card.Img variant="top" src={IMAGES.img3} />
                      </Card>
                    </div>
                    <div className="wow fadeInUp" data-wow-duration="2s">
                      <Card >
                        <Card.Img variant="top" src={IMAGES.img3} />
                      </Card>
                    </div>
                    <div className="wow fadeInUp" data-wow-duration="2s">
                      <Card >
                        <Card.Img variant="top" src={IMAGES.img3} />
                      </Card>
                    </div>
                    <div className="wow fadeInUp" data-wow-duration="2s">
                      <Card >
                        <Card.Img variant="top" src={IMAGES.img3} />
                      </Card>
                    </div>
                    <div className="wow fadeInUp" data-wow-duration="2s">
                      <Card >
                        <Card.Img variant="top" src={IMAGES.img3} />
                      </Card>
                    </div>
                    <div className="wow fadeInUp" data-wow-duration="2s">
                      <Card >
                        <Card.Img variant="top" src={IMAGES.img3} />
                      </Card>
                    </div>
                    <div className="wow fadeInUp" data-wow-duration="2s">
                      <Card >
                        <Card.Img variant="top" src={IMAGES.img3} />
                      </Card>
                    </div>
                    <div className="wow fadeInUp" data-wow-duration="2s">
                      <Card >
                        <Card.Img variant="top" src={IMAGES.img3} />
                      </Card>
                    </div>
                    <div className="wow fadeInUp" data-wow-duration="2s">
                      <Card >
                        <Card.Img variant="top" src={IMAGES.img3} />
                      </Card>
                    </div>
                    <div className="wow fadeInUp" data-wow-duration="2s">
                      <Card >
                        <Card.Img variant="top" src={IMAGES.img3} />
                      </Card>
                    </div>
                    <div className="wow fadeInUp" data-wow-duration="2s">
                      <Card >
                        <Card.Img variant="top" src={IMAGES.img3} />
                      </Card>
                    </div>
                    <div className="wow fadeInUp" data-wow-duration="2s">
                      <Card >
                        <Card.Img variant="top" src={IMAGES.img3} />
                      </Card>
                    </div>
                    <div className="wow fadeInUp" data-wow-duration="2s">
                      <Card >
                        <Card.Img variant="top" src={IMAGES.img3} />
                      </Card>
                    </div>
                  </div>
                </CardColumns>
              </Container>

            </section>
          </div>
        </div>

      </>

    );
  }
}

export default App;
