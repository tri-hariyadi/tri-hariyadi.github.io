import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import skillData from '../../../data/skills';
import './index.scss';

const Skills = () => {
  return (
    <div className="skill-container">
      <div className="container">
        <Row>
          <Col>
            <h1 className="title-section">Tech Skills</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="card-container-skill">
              <CardBody>
                <Row>
                  <Col md="4">
                    <Card className="skill-group">
                      <CardBody>
                        <CardTitle tag="h3">Program Languages</CardTitle>
                        <hr />
                        <CardText className="item-skills-wrapper">
                          {skillData &&
                            skillData.programLanguages.map((item, idx) => (
                              <span key={`pl-${idx}`} className="item-skill">
                                <img src={item.imgSrc} alt={item.language} className="img-skill mr-3" /> {item.language}
                              </span>
                            ))
                          }
                        </CardText>
                      </CardBody>
                    </Card>
                    <Card className="skill-group">
                      <CardBody>
                        <CardTitle tag="h3">Hosting Platforms</CardTitle>
                        <hr />
                        <CardText className="item-skills-wrapper">
                          {skillData &&
                            skillData.hostingPlatform.map((item, idx) => (
                              <span key={`pl-${idx}`} className="item-skill">
                                <img src={item.imgSrc} alt={item.name} className="img-skill mr-3" /> {item.name}
                              </span>
                            ))
                          }
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="skill-group">
                      <CardBody>
                        <CardTitle tag="h3">Front End</CardTitle>
                        <hr />
                        <CardText className="item-skills-wrapper">
                          {skillData &&
                            skillData.frontEnd.map((item, idx) => (
                              <span key={`fe-${idx}`} className="item-skill">
                                <img src={item.imgSrc} alt={item.name} className="img-skill mr-3" /> {item.name}
                              </span>
                            ))
                          }
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="skill-group">
                      <CardBody>
                        <CardTitle tag="h3">Back End</CardTitle>
                        <hr />
                        <CardText className="item-skills-wrapper">
                          {skillData &&
                            skillData.backEnd.map((item, idx) => (
                              <span key={`fe-${idx}`} className="item-skill">
                                <img src={item.imgSrc} alt={item.name} className="img-skill mr-3" /> {item.name}
                              </span>
                            ))
                          }
                        </CardText>
                      </CardBody>
                    </Card>
                    <Card className="skill-group">
                      <CardBody>
                        <CardTitle tag="h3">Database</CardTitle>
                        <hr />
                        <CardText className="item-skills-wrapper">
                          {skillData &&
                            skillData.dataBase.map((item, idx) => (
                              <span key={`fe-${idx}`} className="item-skill">
                                <img src={item.imgSrc} alt={item.name} className="img-skill-db mr-3" /> {item.name}
                              </span>
                            ))
                          }
                        </CardText>
                      </CardBody>
                    </Card>
                    <Card className="skill-group">
                      <CardBody>
                        <CardTitle tag="h3">Version Control</CardTitle>
                        <hr />
                        <CardText className="item-skills-wrapper">
                          {skillData &&
                            skillData.versionControl.map((item, idx) => (
                              <span key={`fe-${idx}`} className="item-skill">
                                <img src={item.imgSrc} alt={item.name} className="img-skill mr-3" /> {item.name}
                              </span>
                            ))
                          }
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Skills;
