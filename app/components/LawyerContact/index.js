/**
 *
 * LawyerContact
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as RBS from 'react-bootstrap';
import { faListAlt, faClock } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faUserCircle, faEllipsisV, faArrowLeft, faPhoneAlt, faFileSignature, faClipboard } from '@fortawesome/free-solid-svg-icons';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userImg from '../../images/bgImages/userImage3.jpg';

function LawyerContact() {

  const [activeProfile, setActiveProfile] = useState("USERLIST");

  const showHideDetails = (code) => {

    setActiveProfile(code);
  }


  return <>
    <RBS.Container fluid>
      <RBS.Row className={(activeProfile !== "USERLIST") ? "d-none d-md-none" : ""}>
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
                    <RBS.Col md={1} xs={3} className="text-center pad-0">
                      <FontAwesomeIcon icon={faUserCircle} className="defaultContactImg" />
                    </RBS.Col>
                    <RBS.Col md={8} xs={7} className="pad-0">
                      <div className="userNameSec">Sanket Deshmukh</div>
                      <div className="clearfix"></div>
                      <div className="userPhoneNo">9545096655</div>

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
                      <RBS.Col md={10} xs={12}>
                        <RBS.Row>
                          <RBS.Col md={2}><b>Email Address:</b></RBS.Col>
                          <RBS.Col md={10}><a href="mailto:sanketdeshmukh40@gmail.com">sanketdeshmukh40@gmail.com</a></RBS.Col>
                        </RBS.Row>
                        <RBS.Row>
                          <RBS.Col md={2}><b>Contact No.:</b></RBS.Col>
                          <RBS.Col md={10}>9545096655</RBS.Col>
                        </RBS.Row>
                        <RBS.Row>
                          <RBS.Col md={2}><b>Active Cases:</b></RBS.Col>
                          <RBS.Col md={10}>3</RBS.Col>
                        </RBS.Row>
                      </RBS.Col>
                      <RBS.Col md={2} xs={12} className="text-center viewProfBtnSec">
                        <RBS.Button variant="warning" size="sm" block onClick={() => showHideDetails("USERPROF")}>View Profile</RBS.Button>
                      </RBS.Col>
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
                    <RBS.Col md={1} xs={3} className="text-center pad-0">
                      <FontAwesomeIcon icon={faUserCircle} className="defaultContactImg" />
                    </RBS.Col>
                    <RBS.Col md={8} xs={7} className="pad-0">
                      <div className="userNameSec">Sanket Deshmukh</div>
                      <div className="clearfix"></div>
                      <div className="userPhoneNo">9545096655</div>

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
                      <RBS.Col md={10} xs={12}>
                        <RBS.Row>
                          <RBS.Col md={2}><b>Email Address:</b></RBS.Col>
                          <RBS.Col md={10}><a href="mailto:sanketdeshmukh40@gmail.com">sanketdeshmukh40@gmail.com</a></RBS.Col>
                        </RBS.Row>
                        <RBS.Row>
                          <RBS.Col md={2}><b>Contact No.:</b></RBS.Col>
                          <RBS.Col md={10}>9545096655</RBS.Col>
                        </RBS.Row>
                        <RBS.Row>
                          <RBS.Col md={2}><b>Active Cases:</b></RBS.Col>
                          <RBS.Col md={10}>3</RBS.Col>
                        </RBS.Row>
                      </RBS.Col>
                      <RBS.Col md={2} xs={12} className="text-center viewProfBtnSec">
                        <RBS.Button variant="warning" size="sm" block onClick={() => showHideDetails("USERPROF")}>View Profile</RBS.Button>
                      </RBS.Col>
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
                    <RBS.Col md={1} xs={3} className="text-center pad-0">
                      <FontAwesomeIcon icon={faUserCircle} className="defaultContactImg" />
                    </RBS.Col>
                    <RBS.Col md={8} xs={7} className="pad-0">
                      <div className="userNameSec">Sanket Deshmukh</div>
                      <div className="clearfix"></div>
                      <div className="userPhoneNo">9545096655</div>

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
                      <RBS.Col md={10} xs={12}>
                        <RBS.Row>
                          <RBS.Col md={2}><b>Email Address:</b></RBS.Col>
                          <RBS.Col md={10}><a href="mailto:sanketdeshmukh40@gmail.com">sanketdeshmukh40@gmail.com</a></RBS.Col>
                        </RBS.Row>
                        <RBS.Row>
                          <RBS.Col md={2}><b>Contact No.:</b></RBS.Col>
                          <RBS.Col md={10}>9545096655</RBS.Col>
                        </RBS.Row>
                        <RBS.Row>
                          <RBS.Col md={2}><b>Active Cases:</b></RBS.Col>
                          <RBS.Col md={10}>3</RBS.Col>
                        </RBS.Row>
                      </RBS.Col>
                      <RBS.Col md={2} xs={12} className="text-center viewProfBtnSec">
                        <RBS.Button variant="warning" size="sm" block onClick={() => showHideDetails("USERPROF")}>View Profile</RBS.Button>
                      </RBS.Col>
                    </RBS.Row>


                  </RBS.Container>

                </RBS.Card.Body>
              </RBS.Accordion.Collapse>
            </RBS.Card>

          </RBS.Accordion>
        </RBS.Col>


      </RBS.Row>
      <RBS.Row className={(activeProfile !== "USERPROF") ? "userProfileSec d-none d-md-none" : "userProfileSec"}>
        <RBS.Col md={12} xs={12}>
          <RBS.Container fluid className="pad-0">
            <RBS.Row>
              <RBS.Col md={12} xs={12} className="pad-0">
                <h5><FontAwesomeIcon icon={faArrowLeft} className="userProfbackIc" onClick={() => showHideDetails("USERLIST")} /> &nbsp; Sanket Deshmukh</h5>
              </RBS.Col>
            </RBS.Row>
          </RBS.Container>
          <hr className="hryellow" />
        </RBS.Col>
        <RBS.Col md={12} xs={12}>
          <RBS.Container fluid>
            <RBS.Row>
              <RBS.Col md={12} xs={12} className="pad-0">
                <h6>Past Visits</h6>
              </RBS.Col>
            </RBS.Row>
          </RBS.Container>
          <hr className="hrgray" />
        </RBS.Col>
        <RBS.Col md={12} xs={12}>
          <RBS.Accordion >
            <RBS.Card>
              <RBS.Card.Header className="bdrInfo">
                {/* <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0"> */}
                <RBS.Container fluid>
                  <RBS.Row>
                    <RBS.Col md={6} xs={8}>
                      <div className="userMobDateTimeSec">29-May-2021 8.30 PM</div>
                      <div className="clearfix"></div>
                      <div className="userNameSec"><span className=" d-none d-sm-inline">Case No :</span> 1234567890098765</div>
                    </RBS.Col>
                    <RBS.Col md={1} className="appTimeSec  d-none d-sm-block text-info">
                      <div>Completed</div>
                    </RBS.Col>
                    <RBS.Col md={2} xs={3} className="appTimeSec  d-none d-sm-block text-center">
                      <div> <FontAwesomeIcon icon={faClipboard} /> <small> 8 Notes</small> </div>
                    </RBS.Col>

                    <RBS.Col md={3} xs={4} className=" appActionSec text-right">
                      <RBS.Accordion.Toggle eventKey="0" className="apptToggleBtn"><FontAwesomeIcon className="appActionBtn" icon={faEllipsisV} /> </RBS.Accordion.Toggle>
                    </RBS.Col>
                  </RBS.Row>
                </RBS.Container>

              </RBS.Card.Header>
              <RBS.Accordion.Collapse eventKey="0">
                <RBS.Card.Body>
                  <RBS.Container fluid className="apptDetailSec">
                    <RBS.Row>
                      <RBS.Col md={2}><b>Registered In : </b></RBS.Col>
                      <RBS.Col md={10}>Supreme Court</RBS.Col>
                    </RBS.Row>
                    <RBS.Row>
                      <RBS.Col md={2}><b>Description : </b></RBS.Col>
                      <RBS.Col md={10}>Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Urna neque viverra justo nec ultrices dui sapien.
                      Volutpat ac tincidunt vitae semper quis lectus nulla.
                      Tellus cras adipiscing enim eu turpis egestas pretium aenean.
                      Fermentum et sollicitudin ac orci.
                      Sagittis purus sit amet volutpat consequat mauris.
                      Nibh nisl condimentum id venenatis.
                                      </RBS.Col>
                    </RBS.Row>
                    <RBS.Row>
                      <RBS.Col md={2}><b>Created Date : </b></RBS.Col>
                      <RBS.Col md={10}> 12-May-2021 </RBS.Col>
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
