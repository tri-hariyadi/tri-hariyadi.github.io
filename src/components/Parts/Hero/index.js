import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import Slider from "react-slick";
import Typewriter from "typewriter-effect";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
import { Slide1, Slide2, Slide3, ILTri } from '../../../assets';
import './index.scss';
import { Button } from '../../Common';

const Hero = () => {
  const [zoom, setZoom] = useState(false);
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    speed: 700,
    className: 'slide-wrapp',
    adaptiveHeight: true,
    arrows: false
  };
  return (
    <header>
      <div className="name-wrapper container d-flex justify-content-center content">
        <Row>
          <Col md="8" xl="6" className="section-hero">
            <div>
              <ul className="header__ul">
                <li>
                  <Button type="link" target="_blank" isExternal href={"https://google.com"} style={{ color: 'white' }}>
                    <FaFacebookF className="headerIcon" />
                  </Button>
                </li>
                <li>
                  <Button type="link" target="_blank" isExternal href={"https://google.com"} style={{ color: 'white' }}>
                    <FaTwitter className="headerIcon" />
                  </Button>
                </li>
                <li>
                  <Button type="link" target="_blank" isExternal href={"https://google.com"} style={{ color: 'white' }}>
                    <FaPinterest className="headerIcon" />
                  </Button>
                </li>
                <li>
                  <Button type="link" target="_blank" isExternal href={"https://google.com"} style={{ color: 'white' }}>
                    <FaInstagram className="headerIcon" />
                  </Button>
                </li>
              </ul>
              <h1 className="tag-name">Hi, i am Tri Hariyadi</h1>
              <Typewriter
                options={{
                  strings: ["I am a Web Developer", "I am a Mobile Developer", "I am a BackEnd Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  wrapperClassName: 'tag-desc'
                }}
              />
              <br />
              <Button isOutlineDanger style={{ color: 'white' }}>
                <span className="text-button">See My Portfolio</span>
              </Button>
            </div>
            <div>
              <img src={ILTri} alt="img-tri" className="img-profile-mobile" />
            </div>
          </Col>
          <Col md="4" xl="6" className="section-hero img-tri">
            <img src={ILTri} alt="img-tri" className="d-block" style={{height: '80vh'}} />
          </Col>
        </Row>
      </div>
      <div>
        <Slider {...settings}
          afterChange={idx => setZoom(idx)}
          onInit={() => setZoom(0)}
        >
          <div className={zoom === 0 ? "img-zoom" : undefined}>
            <img src={Slide1} alt="img-carousel" />
          </div>
          <div className={zoom === 1 ? "img-zoom" : undefined}>
            <img src={Slide2} alt="img-carousel" />
          </div>
          <div className={zoom === 2 ? "img-zoom" : undefined}>
            <img src={Slide3} alt="img-carousel" />
          </div>
        </Slider>
      </div>
    </header>
  )
}

export default Hero;
