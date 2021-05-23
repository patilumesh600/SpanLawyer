/**
 *
 * LawyerContact
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as RBS from 'react-bootstrap';
import { faListAlt, faClock } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faUserCircle, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userImg from '../../images/bgImages/userImage3.jpg';

function LawyerContact() {
  return <>
    <RBS.Container fluid className="pad-0">
      <RBS.Row>
        <RBS.Col md={12} xs={12}>
          <RBS.Form>
            <RBS.Form.Row flex>
              <RBS.Col md={6} xs={12}>
                <RBS.InputGroup className="mb-2" size="sm">
                  <RBS.FormControl placeholder="Search by Name, Email, Phone number" aria-label="Search by Name, Email, PhoneNumber"
                    aria-describedby="basic-addon2" />
                  <RBS.InputGroup.Append>
                    <RBS.InputGroup.Text id="basic-addon2" className="noBg">
                      <FontAwesomeIcon icon={faSearch} />
                    </RBS.InputGroup.Text>
                  </RBS.InputGroup.Append>
                </RBS.InputGroup>

              </RBS.Col>

              <RBS.Col md={{ span: 3, offset: 3 }} className="text-right contactCountSec d-none d-md-block">
                Total : 223 Contacts
              </RBS.Col>

            </RBS.Form.Row>
          </RBS.Form>
          <hr className="hryellow" />
        </RBS.Col>
        <RBS.Col md={12} xs={12}>
          <RBS.Accordion >
            <RBS.Card>
              <RBS.Card.Header className="bdrDark">
                {/* <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0"> */}
                <RBS.Container fluid>
                  <RBS.Row>
                    <RBS.Col md={1} xs={3} className="text-center">
                      <FontAwesomeIcon icon={faUserCircle} className="defaultContactImg" />
                    </RBS.Col>
                    <RBS.Col md={8} xs={7} className="pad-0">
                      <div className="userNameSec">Sanket Deshmukh</div>
                      <div className="clearfix"></div>
                    </RBS.Col>

                    <RBS.Col md={3} xs={2} className=" appActionSec text-right">
                      <RBS.Accordion.Toggle eventKey="0" className="apptToggleBtn"><FontAwesomeIcon className="appActionBtn" icon={faEllipsisV} /> </RBS.Accordion.Toggle>

                    </RBS.Col>
                  </RBS.Row>
                </RBS.Container>

              </RBS.Card.Header>
              <RBS.Accordion.Collapse eventKey="0">
                <RBS.Card.Body>
                  <RBS.Container fluid className="apptDetailSec">
                    <RBS.Row>
                      <RBS.Col md={2}><b>Email Address: </b></RBS.Col>
                      <RBS.Col md={10}><a href="mailto:sanketdeshmukh40@gmail.com">sanketdeshmukh40@gmail.com</a></RBS.Col>
                    </RBS.Row>
                    <RBS.Row>
                      <RBS.Col md={2}><b>Phone Number: </b></RBS.Col>
                      <RBS.Col md={10}>9545096655</RBS.Col>
                    </RBS.Row>
                  </RBS.Container>

                </RBS.Card.Body>
              </RBS.Accordion.Collapse>
            </RBS.Card>
            <RBS.Card>
              <RBS.Card.Header className="bdrDark">
                {/* <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0"> */}
                <RBS.Container fluid>
                  <RBS.Row>
                    <RBS.Col md={1} xs={3} className="text-center">
                      <FontAwesomeIcon icon={faUserCircle} className="defaultContactImg" />
                    </RBS.Col>
                    <RBS.Col md={8} xs={7} className="pad-0">
                      <div className="userNameSec">Sanket Deshmukh</div>
                      <div className="clearfix"></div>
                    </RBS.Col>

                    <RBS.Col md={3} xs={2} className=" appActionSec text-right">
                      <RBS.Accordion.Toggle eventKey="1" className="apptToggleBtn"><FontAwesomeIcon className="appActionBtn" icon={faEllipsisV} /> </RBS.Accordion.Toggle>

                    </RBS.Col>
                  </RBS.Row>
                </RBS.Container>

              </RBS.Card.Header>
              <RBS.Accordion.Collapse eventKey="1">
                <RBS.Card.Body>
                  <RBS.Container fluid className="apptDetailSec">
                    <RBS.Row>
                      <RBS.Col md={2}><b>Email Address: </b></RBS.Col>
                      <RBS.Col md={10}><a href="mailto:sanketdeshmukh40@gmail.com">sanketdeshmukh40@gmail.com</a></RBS.Col>
                    </RBS.Row>
                    <RBS.Row>
                      <RBS.Col md={2}><b>Phone Number: </b></RBS.Col>
                      <RBS.Col md={10}>9545096655</RBS.Col>
                    </RBS.Row>
                  </RBS.Container>

                </RBS.Card.Body>
              </RBS.Accordion.Collapse>
            </RBS.Card>

            <RBS.Card>
              <RBS.Card.Header className="bdrDark">
                {/* <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0"> */}
                <RBS.Container fluid>
                  <RBS.Row>
                    <RBS.Col md={1} xs={3} className="text-center">
                      <FontAwesomeIcon icon={faUserCircle} className="defaultContactImg" />
                    </RBS.Col>
                    <RBS.Col md={8} xs={7} className="pad-0">
                      <div className="userNameSec">Sanket Deshmukh</div>
                      <div className="clearfix"></div>
                    </RBS.Col>

                    <RBS.Col md={3} xs={2} className=" appActionSec text-right">
                      <RBS.Accordion.Toggle eventKey="2" className="apptToggleBtn"><FontAwesomeIcon className="appActionBtn" icon={faEllipsisV} /> </RBS.Accordion.Toggle>

                    </RBS.Col>
                  </RBS.Row>
                </RBS.Container>

              </RBS.Card.Header>
              <RBS.Accordion.Collapse eventKey="2">
                <RBS.Card.Body>
                  <RBS.Container fluid className="apptDetailSec">
                    <RBS.Row>
                      <RBS.Col md={2}><b>Email Address: </b></RBS.Col>
                      <RBS.Col md={10}><a href="mailto:sanketdeshmukh40@gmail.com">sanketdeshmukh40@gmail.com</a></RBS.Col>
                    </RBS.Row>
                    <RBS.Row>
                      <RBS.Col md={2}><b>Phone Number: </b></RBS.Col>
                      <RBS.Col md={10}>9545096655</RBS.Col>
                    </RBS.Row>
                  </RBS.Container>

                </RBS.Card.Body>
              </RBS.Accordion.Collapse>
            </RBS.Card>

            <RBS.Card>
              <RBS.Card.Header className="bdrDark">
                {/* <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0"> */}
                <RBS.Container fluid>
                  <RBS.Row>
                    <RBS.Col md={1} xs={3} className="text-center">
                      <FontAwesomeIcon icon={faUserCircle} className="defaultContactImg" />
                    </RBS.Col>
                    <RBS.Col md={8} xs={7} className="pad-0">
                      <div className="userNameSec">Sanket Deshmukh</div>
                      <div className="clearfix"></div>
                    </RBS.Col>

                    <RBS.Col md={3} xs={2} className=" appActionSec text-right">
                      <RBS.Accordion.Toggle eventKey="3" className="apptToggleBtn"><FontAwesomeIcon className="appActionBtn" icon={faEllipsisV} /> </RBS.Accordion.Toggle>

                    </RBS.Col>
                  </RBS.Row>
                </RBS.Container>

              </RBS.Card.Header>
              <RBS.Accordion.Collapse eventKey="3">
                <RBS.Card.Body>
                  <RBS.Container fluid className="apptDetailSec">
                    <RBS.Row>
                      <RBS.Col md={2}><b>Email Address: </b></RBS.Col>
                      <RBS.Col md={10}><a href="mailto:sanketdeshmukh40@gmail.com">sanketdeshmukh40@gmail.com</a></RBS.Col>
                    </RBS.Row>
                    <RBS.Row>
                      <RBS.Col md={2}><b>Phone Number: </b></RBS.Col>
                      <RBS.Col md={10}>9545096655</RBS.Col>
                    </RBS.Row>
                  </RBS.Container>

                </RBS.Card.Body>
              </RBS.Accordion.Collapse>
            </RBS.Card>

            <RBS.Card>
              <RBS.Card.Header className="bdrDark">
                {/* <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0"> */}
                <RBS.Container fluid>
                  <RBS.Row>
                    <RBS.Col md={1} xs={3} className="text-center">
                      <FontAwesomeIcon icon={faUserCircle} className="defaultContactImg" />
                    </RBS.Col>
                    <RBS.Col md={8} xs={7} className="pad-0">
                      <div className="userNameSec">Sanket Deshmukh</div>
                      <div className="clearfix"></div>
                    </RBS.Col>

                    <RBS.Col md={3} xs={2} className=" appActionSec text-right">
                      <RBS.Accordion.Toggle eventKey="4" className="apptToggleBtn"><FontAwesomeIcon className="appActionBtn" icon={faEllipsisV} /> </RBS.Accordion.Toggle>

                    </RBS.Col>
                  </RBS.Row>
                </RBS.Container>

              </RBS.Card.Header>
              <RBS.Accordion.Collapse eventKey="4">
                <RBS.Card.Body>
                  <RBS.Container fluid className="apptDetailSec">
                    <RBS.Row>
                      <RBS.Col md={2}><b>Email Address: </b></RBS.Col>
                      <RBS.Col md={10}><a href="mailto:sanketdeshmukh40@gmail.com">sanketdeshmukh40@gmail.com</a></RBS.Col>
                    </RBS.Row>
                    <RBS.Row>
                      <RBS.Col md={2}><b>Phone Number: </b></RBS.Col>
                      <RBS.Col md={10}>9545096655</RBS.Col>
                    </RBS.Row>
                  </RBS.Container>

                </RBS.Card.Body>
              </RBS.Accordion.Collapse>
            </RBS.Card>

            <RBS.Card>
              <RBS.Card.Header className="bdrDark">
                {/* <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0"> */}
                <RBS.Container fluid>
                  <RBS.Row>
                    <RBS.Col md={1} xs={3} className="text-center">
                      <FontAwesomeIcon icon={faUserCircle} className="defaultContactImg" />
                    </RBS.Col>
                    <RBS.Col md={8} xs={7} className="pad-0">
                      <div className="userNameSec">Sanket Deshmukh</div>
                    </RBS.Col>

                    <RBS.Col md={3} xs={2} className=" appActionSec text-right">
                      <RBS.Accordion.Toggle eventKey="5" className="apptToggleBtn"><FontAwesomeIcon className="appActionBtn" icon={faEllipsisV} /> </RBS.Accordion.Toggle>

                    </RBS.Col>
                  </RBS.Row>
                </RBS.Container>

              </RBS.Card.Header>
              <RBS.Accordion.Collapse eventKey="5">
                <RBS.Card.Body>
                  <RBS.Container fluid className="apptDetailSec">
                    <RBS.Row>
                      <RBS.Col md={2}><b>Email Address: </b></RBS.Col>
                      <RBS.Col md={10}><a href="mailto:sanketdeshmukh40@gmail.com">sanketdeshmukh40@gmail.com</a></RBS.Col>
                    </RBS.Row>
                    <RBS.Row>
                      <RBS.Col md={2}><b>Phone Number: </b></RBS.Col>
                      <RBS.Col md={10}>9545096655</RBS.Col>
                    </RBS.Row>
                  </RBS.Container>

                </RBS.Card.Body>
              </RBS.Accordion.Collapse>
            </RBS.Card>

          </RBS.Accordion>
        </RBS.Col>


      </RBS.Row>
    </RBS.Container>
  </>
    ;
}

LawyerContact.propTypes = {};

export default LawyerContact;
