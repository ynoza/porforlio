import React, { useEffect } from "react";
import { greetings } from "../portfolio";


import { Fade } from 'react-reveal';

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

import SocialLinks from "components/SocialLinks";

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  })
  return ( 
    <Fade top duration={1000} distance="40px">
        <main ref="main">
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 bg-gradient-darker">
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <h2 className="display-4 text-white">{greetings.title}</h2>
                  <p className="lead text-white">{greetings.description}</p>
                  <Row>
                    <Col lg="6">
                      <SocialLinks />
                      <div className="btn-wrapper my-4">
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href={greetings.resumeLink}
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-file" />
                          </span>
                          <span className="btn-inner--text">
                            Here's My Resume
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
        </main>
        </Fade>
   );
}
 
export default Greetings;
