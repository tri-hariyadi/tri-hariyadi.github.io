import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { ILTri } from '../../../assets';
import './index.scss';

const AboutMe = () => {
  return (
    <section className="section-about">
      <div className="container">
        <Row>
          <Col>
            <h1 className="title-section">About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <img src={ILTri} alt="img-tri" className="img-fluid d-block w-100" />
          </Col>
          <Col md="6">
            <Card className="card-about">
              <CardBody>
                <CardTitle tag="h3" style={{ textAlign: 'left' }}>Hi There! <strong>I am Tri Hariyadi</strong></CardTitle>
                <CardText>
                  A passionate programmer, born and brought up in Wonogiri, Jawa Tengah, Indonesia. Im working with newest front-end framework like React Native
                  and React Js. {"\n"}
                  I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default AboutMe
