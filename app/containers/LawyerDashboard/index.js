/**
 *
 * LawyerDashboard
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLawyerDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import ProfileEditor from 'components/LawyerProfileEditor';
import ProfileShare from 'components/LawyerProfileShare';
import ReferAndEarn from 'components/ReferAndEarn';
import MyContacts from 'components/LawyerContact';
import MyCases from 'components/LawyerCases';

import * as RBS from 'react-bootstrap';
import { faListAlt, faClock, faHandshake, faCalendarAlt, faAddressBook, faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt, faUserEdit, faShareAlt, faCheck, faTimes, faFileContract, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userImg from '../../images/bgImages/userImage3.jpg';

import './dashboard.css';
export function LawyerDashboard() {
  useInjectReducer({ key: 'lawyerDashboard', reducer });
  useInjectSaga({ key: 'lawyerDashboard', saga });


  const [activeSecCode, setActiveSecCode] = useState("APPT");

  const showHideSec = (code) => {

    setActiveSecCode(code);
  }
  return <div id="lawyerDashboard">
    <RBS.Container fluid>
      <RBS.Row>
        <RBS.Col md={12}>
          <RBS.Row>
            <RBS.Col md={3}>
              <RBS.Row className="userProfHeader">
                <RBS.Col md={12} xs={4}>
                  <RBS.Image src={userImg} roundedCircle height="100" width="100" />
                  <br />
                </RBS.Col>
                <RBS.Col md={12} xs={8}>
                  <h3>Welcome John</h3>
                  <small><div className="text-muted"> 124 Followers | 23 Reviews </div></small>
                  <br />
                </RBS.Col>
                <RBS.Col md={12} sm={12} >
                  <RBS.Row className="d-none d-md-flex">
                    <RBS.Col md={6} xs={3} className="dashHdrMenu">
                      <div className="dashHdrIcon">329</div>
                      <div className="dashHdrMenuTxt">Appointments</div>
                    </RBS.Col>
                    <RBS.Col md={6} xs={3} className="dashHdrMenu">
                      <div className="dashHdrIcon">1,20,000</div>
                      <div className="dashHdrMenuTxt">Collections</div>
                    </RBS.Col>

                    <RBS.Col md={6} xs={3} className="dashHdrMenu">
                      <div className="dashHdrIcon">79</div>
                      <div className="dashHdrMenuTxt">Profile Visits</div>
                    </RBS.Col>
                    <RBS.Col md={6} xs={3} className="dashHdrMenu">
                      <div className="dashHdrIcon">3.5</div>
                      <div className="dashHdrMenuTxt">Ratings</div>
                    </RBS.Col>
                  </RBS.Row>
                  <hr />
                  <RBS.Row>

                    <RBS.Col md={12} xs={2} className="dashHdrMenu">
                      <div className={(activeSecCode !== "APPT") ? "dashHdrActionBtn" : "dashHdrActionBtn active"} onClick={() => showHideSec('APPT')}><FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon> <span className="d-none d-md-inline">My Appointments </span></div>
                    </RBS.Col>
                    <RBS.Col md={12} xs={2} className="dashHdrMenu">
                      <div className={(activeSecCode !== "CASES") ? "dashHdrActionBtn" : "dashHdrActionBtn active"} onClick={() => showHideSec('CASES')}><FontAwesomeIcon icon={faFileContract}></FontAwesomeIcon> <span className="d-none d-md-inline">My Cases</span></div>
                    </RBS.Col>
                    <RBS.Col md={12} xs={2} className="dashHdrMenu">
                      <div className={(activeSecCode !== "CONTACTS") ? "dashHdrActionBtn" : "dashHdrActionBtn active"} onClick={() => showHideSec('CONTACTS')}><FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon> <span className="d-none d-md-inline">My Contacts</span></div>
                    </RBS.Col>
                    <RBS.Col md={12} xs={2} className="dashHdrMenu">
                      <div className={(activeSecCode !== "EDIT") ? "dashHdrActionBtn" : "dashHdrActionBtn active"} onClick={() => showHideSec('EDIT')}><FontAwesomeIcon icon={faUserEdit}></FontAwesomeIcon> <span className="d-none d-md-inline">Edit Profile</span></div>
                    </RBS.Col>
                    <RBS.Col md={12} xs={2} className="dashHdrMenu">
                      <div className={(activeSecCode !== "SHARE") ? "dashHdrActionBtn" : "dashHdrActionBtn active"} onClick={() => showHideSec('SHARE')}><FontAwesomeIcon icon={faShareAlt}></FontAwesomeIcon> <span className="d-none d-md-inline">Share Profile</span></div>
                    </RBS.Col>
                    <RBS.Col md={12} xs={2} className="dashHdrMenu">
                      <div className={(activeSecCode !== "REFER") ? "dashHdrActionBtn" : "dashHdrActionBtn active"} onClick={() => showHideSec('REFER')}><FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon> <span className="d-none d-md-inline">Refer And Earn</span></div>
                    </RBS.Col>
                  </RBS.Row>
                </RBS.Col>
              </RBS.Row>
            </RBS.Col>
            <RBS.Col md={9} className="scrollContent">
              <RBS.Row className={(activeSecCode !== "APPT") ? "dashContent d-none d-md-none" : "dashContent"}>
                <RBS.Col md={12} className="pad-0">
                  <RBS.Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <RBS.Col md={12} sm={12} className="text-center tabHdr">
                      <RBS.Row>
                        <RBS.Col md={{ span: 6, offset: 3 }} xs={12}>
                          <RBS.Nav className="tabCont">
                            <RBS.Row>
                              <RBS.Col md={4} xs={4} className="pad-0">
                                <RBS.Nav.Item>
                                  <RBS.Nav.Link eventKey="first">Upcoming Visits</RBS.Nav.Link>
                                </RBS.Nav.Item>
                              </RBS.Col>
                              <RBS.Col md={4} xs={4} className="pad-0">
                                <RBS.Nav.Item>
                                  <RBS.Nav.Link eventKey="second">Past Visits</RBS.Nav.Link>
                                </RBS.Nav.Item>
                              </RBS.Col>
                              <RBS.Col md={4} xs={4} className="pad-0">
                                <RBS.Nav.Item>
                                  <RBS.Nav.Link eventKey="third">My Collections</RBS.Nav.Link>
                                </RBS.Nav.Item>
                              </RBS.Col>
                            </RBS.Row>
                          </RBS.Nav>
                        </RBS.Col>
                      </RBS.Row>


                      {/*  */}
                    </RBS.Col>
                    <RBS.Col sm={12}>
                      <RBS.Tab.Content>
                        <RBS.Tab.Pane eventKey="first">
                          <RBS.Container fluid>
                            <RBS.Row className="filterCont">
                              <RBS.Col md={12}>
                                <div className="fltDate"><FontAwesomeIcon icon={faCalendarAlt} /> 17 May 2021 - 22 May 2021</div>
                              </RBS.Col>
                            </RBS.Row>
                          </RBS.Container>
                          <div className="clearfix" />
                          <RBS.Accordion >
                            <RBS.Card>
                              <RBS.Card.Header className="bdrDanger">
                                {/* <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0"> */}
                                <RBS.Container fluid>
                                  <RBS.Row>
                                    <RBS.Col md={1} className="pad-0 apptDateSc d-none d-sm-block text-center">
                                      <RBS.Badge variant="light" >
                                        <div className="apptDateVal">21</div>
                                        <div className="clearfix"></div>
                                        <div className="appDateYr">May 2021</div>
                                      </RBS.Badge>
                                    </RBS.Col>
                                    <RBS.Col md={5} xs={8}>
                                      <div className="userMobDateTimeSec d-block d-md-none">29-May-2021 8.30 PM</div>
                                      <div className="userNameSec">Mr. Sanket Deshmukh</div>
                                      <div className="clearfix"></div>
                                      <div className="apptCatSec"><b>Case No.</b> : 1234567890098765</div>
                                    </RBS.Col>
                                    <RBS.Col md={2} xs={3} className="appTimeSec  d-none d-sm-block text-center">

                                      <div> 08:30 PM</div>
                                    </RBS.Col>
                                    <RBS.Col md={1} className="appTimeSec  d-none d-sm-block text-danger">
                                      <div>Rejected</div>
                                    </RBS.Col>
                                    <RBS.Col md={3} xs={4} className=" appActionSec text-right">
                                      <RBS.Accordion.Toggle eventKey="0" className="apptToggleBtn"><FontAwesomeIcon className="appActionBtn" icon={faListAlt} /> </RBS.Accordion.Toggle>
                                      <FontAwesomeIcon className="appActionBtn" icon={faCheck} />
                                      <FontAwesomeIcon className="appActionBtn" icon={faTimes} />
                                      <FontAwesomeIcon className="appActionBtn d-none d-md-inline" icon={faClock} />
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

                            <RBS.Card>
                              <RBS.Card.Header className="bdrSuccess">
                                {/* <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0"> */}
                                <RBS.Container fluid>
                                  <RBS.Row>
                                    <RBS.Col md={1} className="pad-0 apptDateSc d-none d-sm-block text-center">
                                      <RBS.Badge variant="light" >
                                        <div className="apptDateVal">21</div>
                                        <div className="clearfix"></div>
                                        <div className="appDateYr">May 2021</div>
                                      </RBS.Badge>
                                    </RBS.Col>
                                    <RBS.Col md={5} xs={8}>
                                      <div className="userMobDateTimeSec d-block d-md-none">21-May-2021 8.30 PM</div>
                                      <div className="userNameSec">Mr. Sanket Deshmukh</div>
                                      <div className="clearfix"></div>
                                      <div className="apptCatSec"><b>Case No.</b> : 1234567890098765</div>
                                    </RBS.Col>
                                    <RBS.Col md={2} xs={3} className="appTimeSec  d-none d-sm-block text-center">

                                      <div> 08:30 PM</div>
                                    </RBS.Col>
                                    <RBS.Col md={1} className="appTimeSec  d-none d-sm-block text-success">
                                      <div>Confirmed</div>
                                    </RBS.Col>
                                    <RBS.Col md={3} xs={4} className=" appActionSec text-right">
                                      <RBS.Accordion.Toggle eventKey="1" className="apptToggleBtn"><FontAwesomeIcon className="appActionBtn" icon={faListAlt} /> </RBS.Accordion.Toggle>
                                      <FontAwesomeIcon className="appActionBtn" icon={faCheck} />
                                      <FontAwesomeIcon className="appActionBtn" icon={faTimes} />
                                      <FontAwesomeIcon className="appActionBtn d-none d-md-inline" icon={faClock} />
                                    </RBS.Col>
                                  </RBS.Row>
                                </RBS.Container>

                              </RBS.Card.Header>
                              <RBS.Accordion.Collapse eventKey="1">
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
                            <RBS.Card>
                              <RBS.Card.Header className="bdrWarning">
                                {/* <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0"> */}
                                <RBS.Container fluid>
                                  <RBS.Row>
                                    <RBS.Col md={1} className="pad-0 apptDateSc d-none d-sm-block text-center">
                                      <RBS.Badge variant="light" >
                                        <div className="apptDateVal">22</div>
                                        <div className="clearfix"></div>
                                        <div className="appDateYr">May 2021</div>
                                      </RBS.Badge>
                                    </RBS.Col>
                                    <RBS.Col md={5} xs={8}>
                                      <div className="userMobDateTimeSec d-block d-md-none">22-May-2021 8.30 PM</div>
                                      <div className="userNameSec">Mr. Sanket Deshmukh</div>
                                      <div className="clearfix"></div>
                                      <div className="apptCatSec"><b>Case No.</b> : 1234567890098765</div>
                                    </RBS.Col>
                                    <RBS.Col md={2} xs={3} className="appTimeSec  d-none d-sm-block text-center">

                                      <div> 08:30 PM</div>
                                    </RBS.Col>
                                    <RBS.Col md={1} className="appTimeSec  d-none d-sm-block text-warning">
                                      <div>Pending</div>
                                    </RBS.Col>
                                    <RBS.Col md={3} xs={4} className=" appActionSec text-right">
                                      <RBS.Accordion.Toggle eventKey="2" className="apptToggleBtn"><FontAwesomeIcon className="appActionBtn" icon={faListAlt} /> </RBS.Accordion.Toggle>
                                      <FontAwesomeIcon className="appActionBtn" icon={faCheck} />
                                      <FontAwesomeIcon className="appActionBtn" icon={faTimes} />
                                      <FontAwesomeIcon className="appActionBtn d-none d-md-inline" icon={faClock} />
                                    </RBS.Col>
                                  </RBS.Row>
                                </RBS.Container>

                              </RBS.Card.Header>
                              <RBS.Accordion.Collapse eventKey="2">
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
                        </RBS.Tab.Pane>
                        <RBS.Tab.Pane eventKey="second">
                          <RBS.Container fluid>
                            <RBS.Row className="filterCont">
                              <RBS.Col md={12}>
                                <div className="fltDate"><FontAwesomeIcon icon={faCalendarAlt} /> 10 May 2021 - 16 May 2021</div>
                              </RBS.Col>
                            </RBS.Row>
                          </RBS.Container>
                          <div className="clearfix" />
                          <RBS.Accordion >
                            <RBS.Card>
                              <RBS.Card.Header className="bdrInfo">
                                {/* <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0"> */}
                                <RBS.Container fluid>
                                  <RBS.Row>
                                    <RBS.Col md={1} className="pad-0 apptDateSc d-none d-sm-block text-center">
                                      <RBS.Badge variant="light" >
                                        <div className="apptDateVal">11</div>
                                        <div className="clearfix"></div>
                                        <div className="appDateYr">May 2021</div>
                                      </RBS.Badge>
                                    </RBS.Col>
                                    <RBS.Col md={5} xs={8}>
                                      <div className="userMobDateTimeSec d-block d-md-none">29-May-2021 8.30 PM</div>
                                      <div className="userNameSec">Mr. Sanket Deshmukh</div>
                                      <div className="clearfix"></div>
                                      <div className="apptCatSec"><b>Case No.</b> : 1234567890098765</div>
                                    </RBS.Col>
                                    <RBS.Col md={2} xs={3} className="appTimeSec  d-none d-sm-block text-center">

                                      <div> 08:30 PM</div>
                                    </RBS.Col>
                                    <RBS.Col md={1} className="appTimeSec  d-none d-sm-block text-info">
                                      <div>Completed</div>
                                    </RBS.Col>
                                    <RBS.Col md={3} xs={4} className=" appActionSec text-right">
                                      <RBS.Accordion.Toggle eventKey="0" className="apptToggleBtn"><FontAwesomeIcon className="appActionBtn" icon={faListAlt} /> </RBS.Accordion.Toggle>
                                      <FontAwesomeIcon className="appActionBtn" icon={faPhoneAlt} />
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

                            <RBS.Card>
                              <RBS.Card.Header className="bdrInfo">
                                {/* <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0"> */}
                                <RBS.Container fluid>
                                  <RBS.Row>
                                    <RBS.Col md={1} className="pad-0 apptDateSc d-none d-sm-block text-center">
                                      <RBS.Badge variant="light" >
                                        <div className="apptDateVal">10</div>
                                        <div className="clearfix"></div>
                                        <div className="appDateYr">May 2021</div>
                                      </RBS.Badge>
                                    </RBS.Col>
                                    <RBS.Col md={5} xs={8}>
                                      <div className="userMobDateTimeSec d-block d-md-none">21-May-2021 8.30 PM</div>
                                      <div className="userNameSec">Mr. Sanket Deshmukh</div>
                                      <div className="clearfix"></div>
                                      <div className="apptCatSec"><b>Case No.</b> : 1234567890098765</div>
                                    </RBS.Col>
                                    <RBS.Col md={2} xs={3} className="appTimeSec  d-none d-sm-block text-center">

                                      <div> 08:30 PM</div>
                                    </RBS.Col>
                                    <RBS.Col md={1} className="appTimeSec  d-none d-sm-block text-info">
                                      <div>Completed</div>
                                    </RBS.Col>
                                    <RBS.Col md={3} xs={4} className=" appActionSec text-right">
                                      <RBS.Accordion.Toggle eventKey="1" className="apptToggleBtn"><FontAwesomeIcon className="appActionBtn" icon={faListAlt} /> </RBS.Accordion.Toggle>
                                      <FontAwesomeIcon className="appActionBtn" icon={faPhoneAlt} />
                                    </RBS.Col>
                                  </RBS.Row>
                                </RBS.Container>

                              </RBS.Card.Header>
                              <RBS.Accordion.Collapse eventKey="1">
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
                            <RBS.Card>
                              <RBS.Card.Header className="bdrInfo">
                                {/* <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0"> */}
                                <RBS.Container fluid>
                                  <RBS.Row>
                                    <RBS.Col md={1} className="pad-0 apptDateSc d-none d-sm-block text-center">
                                      <RBS.Badge variant="light" >
                                        <div className="apptDateVal">09</div>
                                        <div className="clearfix"></div>
                                        <div className="appDateYr">May 2021</div>
                                      </RBS.Badge>
                                    </RBS.Col>
                                    <RBS.Col md={5} xs={8}>
                                      <div className="userMobDateTimeSec d-block d-md-none">09-May-2021 8.30 PM</div>
                                      <div className="userNameSec">Mr. Sanket Deshmukh</div>
                                      <div className="clearfix"></div>
                                      <div className="apptCatSec"><b>Case No.</b> : 1234567890098765</div>
                                    </RBS.Col>
                                    <RBS.Col md={2} xs={3} className="appTimeSec  d-none d-sm-block text-center">

                                      <div> 08:30 PM</div>
                                    </RBS.Col>
                                    <RBS.Col md={1} className="appTimeSec  d-none d-sm-block text-info">
                                      <div>Completed</div>
                                    </RBS.Col>
                                    <RBS.Col md={3} xs={4} className=" appActionSec text-right">
                                      <RBS.Accordion.Toggle eventKey="2" className="apptToggleBtn"><FontAwesomeIcon className="appActionBtn" icon={faListAlt} /> </RBS.Accordion.Toggle>
                                      <FontAwesomeIcon className="appActionBtn" icon={faPhoneAlt} />
                                    </RBS.Col>
                                  </RBS.Row>
                                </RBS.Container>

                              </RBS.Card.Header>
                              <RBS.Accordion.Collapse eventKey="2">
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
                        </RBS.Tab.Pane>
                        <RBS.Tab.Pane eventKey="third">
                          <RBS.Container fluid className="pad-0">
                            <RBS.Row>
                              <RBS.Col md={4} xs={6}>
                                <RBS.Card className="collectSecBg" border="warning" text="dark">
                                  <RBS.Card.Body>
                                    <RBS.Card.Text>
                                      <h1>599</h1>
                                      <div className="clearfix"></div>
                                      <h5>Weekly Collection</h5>
                                      <div className="clearfix"></div>
                                      <h6 className="d-none d-md-block"><small>17-May - 23-May</small></h6>
                                    </RBS.Card.Text>
                                  </RBS.Card.Body>
                                </RBS.Card>
                              </RBS.Col>
                              <RBS.Col md={4} xs={6}>
                                <RBS.Card className="collectSecBg" border="warning" text="dark">
                                  <RBS.Card.Body>
                                    <RBS.Card.Text>
                                      <h1>1,000</h1>
                                      <div className="clearfix"></div>
                                      <h5>Monthly Collection</h5>
                                      <div className="clearfix"></div>
                                      <h6 className="d-none d-md-block"><small>May-2021</small></h6>
                                    </RBS.Card.Text>
                                  </RBS.Card.Body>
                                </RBS.Card>
                              </RBS.Col>
                              <RBS.Col md={4} xs={12}>
                                <RBS.Card className="collectSecBg" border="warning" text="dark">
                                  <RBS.Card.Body>
                                    <RBS.Card.Text>
                                      <h1>1,10,000</h1>
                                      <div className="clearfix"></div>
                                      <h5>Yearly Collection</h5>
                                      <div className="clearfix"></div>
                                      <h6 className="d-none d-md-block"><small>2021</small></h6>
                                    </RBS.Card.Text>
                                  </RBS.Card.Body>
                                </RBS.Card>
                              </RBS.Col>

                            </RBS.Row>
                            <hr className="hryellow" />
                            <RBS.Row>
                              <RBS.Col md={12} xs={12}>
                                <RBS.Accordion >
                                  <RBS.Card>
                                    <RBS.Card.Header className="bdrSuccess">
                                      {/* <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0"> */}
                                      <RBS.Container fluid>
                                        <RBS.Row>
                                          <RBS.Col md={9} xs={8}>
                                            <div className="userNameSec">Sanket Deshmukh</div>
                                            <div className="clearfix"></div>
                                          </RBS.Col>
                                          <RBS.Col md={2} xs={3} className=" appAmtSec text-right">
                                            <div className="appAmt text-success"> + 599</div>
                                          </RBS.Col>
                                          <RBS.Col md={1} xs={1} className=" appAmtActionSec text-right">
                                            <RBS.Accordion.Toggle eventKey="0" className="apptToggleBtn"><FontAwesomeIcon className="appActionBtn" icon={faEllipsisV} /> </RBS.Accordion.Toggle>

                                          </RBS.Col>
                                        </RBS.Row>
                                      </RBS.Container>

                                    </RBS.Card.Header>
                                    <RBS.Accordion.Collapse eventKey="0">
                                      <RBS.Card.Body>
                                        <RBS.Container fluid className="apptDetailSec">
                                          <RBS.Row>
                                            <RBS.Col md={2} xs={3}><b>Transection No: </b></RBS.Col>
                                            <RBS.Col md={10} xs={9}><a href="javascript:;">90909099090909090</a></RBS.Col>
                                          </RBS.Row>
                                          <RBS.Row>
                                            <RBS.Col md={2} xs={3}><b>Appointment Date: </b></RBS.Col>
                                            <RBS.Col md={10} xs={9}>09-May-2021</RBS.Col>
                                          </RBS.Row>
                                          <RBS.Row>
                                            <RBS.Col md={2} xs={3}><b>Payment Mode: </b></RBS.Col>
                                            <RBS.Col md={10} xs={9}>Online</RBS.Col>
                                          </RBS.Row>
                                        </RBS.Container>

                                      </RBS.Card.Body>
                                    </RBS.Accordion.Collapse>
                                  </RBS.Card>
                                  <RBS.Card>
                                    <RBS.Card.Header className="bdrSuccess">
                                      {/* <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0"> */}
                                      <RBS.Container fluid>
                                        <RBS.Row>
                                          <RBS.Col md={9} xs={8}>
                                            <div className="userNameSec">Sanket Deshmukh</div>
                                            <div className="clearfix"></div>
                                          </RBS.Col>
                                          <RBS.Col md={2} xs={3} className=" appAmtSec text-right">
                                            <div className="appAmt text-success"> + 599</div>
                                          </RBS.Col>
                                          <RBS.Col md={1} xs={1} className=" appAmtActionSec text-right">
                                            <RBS.Accordion.Toggle eventKey="1" className="apptToggleBtn"><FontAwesomeIcon className="appActionBtn" icon={faEllipsisV} /> </RBS.Accordion.Toggle>

                                          </RBS.Col>
                                        </RBS.Row>
                                      </RBS.Container>

                                    </RBS.Card.Header>
                                    <RBS.Accordion.Collapse eventKey="1">
                                      <RBS.Card.Body>
                                        <RBS.Container fluid className="apptDetailSec">
                                          <RBS.Row>
                                            <RBS.Col md={2} xs={3}><b>Transection No: </b></RBS.Col>
                                            <RBS.Col md={10} xs={9}><a href="javascript:;">90909099090909090</a></RBS.Col>
                                          </RBS.Row>
                                          <RBS.Row>
                                            <RBS.Col md={2} xs={3}><b>Appointment Date: </b></RBS.Col>
                                            <RBS.Col md={10} xs={9}>09-May-2021</RBS.Col>
                                          </RBS.Row>
                                          <RBS.Row>
                                            <RBS.Col md={2} xs={3}><b>Payment Mode: </b></RBS.Col>
                                            <RBS.Col md={10} xs={9}>Online</RBS.Col>
                                          </RBS.Row>
                                        </RBS.Container>

                                      </RBS.Card.Body>
                                    </RBS.Accordion.Collapse>
                                  </RBS.Card>

                                  <RBS.Card>
                                    <RBS.Card.Header className="bdrSuccess">
                                      {/* <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0"> */}
                                      <RBS.Container fluid>
                                        <RBS.Row>
                                          <RBS.Col md={9} xs={8}>
                                            <div className="userNameSec">Sanket Deshmukh</div>
                                            <div className="clearfix"></div>
                                          </RBS.Col>
                                          <RBS.Col md={2} xs={3} className=" appAmtSec text-right">
                                            <div className="appAmt text-success"> + 599</div>
                                          </RBS.Col>
                                          <RBS.Col md={1} xs={1} className=" appAmtActionSec text-right">
                                            <RBS.Accordion.Toggle eventKey="2" className="apptToggleBtn"><FontAwesomeIcon className="appActionBtn" icon={faEllipsisV} /> </RBS.Accordion.Toggle>

                                          </RBS.Col>
                                        </RBS.Row>
                                      </RBS.Container>

                                    </RBS.Card.Header>
                                    <RBS.Accordion.Collapse eventKey="2">
                                      <RBS.Card.Body>
                                        <RBS.Container fluid className="apptDetailSec">
                                          <RBS.Row>
                                            <RBS.Col md={2} xs={3}><b>Transection No: </b></RBS.Col>
                                            <RBS.Col md={10} xs={9}><a href="javascript:;">90909099090909090</a></RBS.Col>
                                          </RBS.Row>
                                          <RBS.Row>
                                            <RBS.Col md={2} xs={3}><b>Appointment Date: </b></RBS.Col>
                                            <RBS.Col md={10} xs={9}>09-May-2021</RBS.Col>
                                          </RBS.Row>
                                          <RBS.Row>
                                            <RBS.Col md={2} xs={3}><b>Payment Mode: </b></RBS.Col>
                                            <RBS.Col md={10} xs={9}>Online</RBS.Col>
                                          </RBS.Row>
                                        </RBS.Container>

                                      </RBS.Card.Body>
                                    </RBS.Accordion.Collapse>
                                  </RBS.Card>

                                </RBS.Accordion>
                              </RBS.Col>
                            </RBS.Row>
                          </RBS.Container>
                        </RBS.Tab.Pane>

                      </RBS.Tab.Content>
                    </RBS.Col>
                  </RBS.Tab.Container>
                </RBS.Col>

              </RBS.Row>
              <div className="clearfix"></div>
              <RBS.Row className={(activeSecCode !== "CASES") ? "dashCasesSec d-none d-md-none" : "dashCasesSec"}>
                <MyCases />
              </RBS.Row>
              <div className="clearfix"></div>
              <RBS.Row className={(activeSecCode !== "CONTACTS") ? "dashContactSec d-none d-md-none" : "dashContactSec"}>
                <MyContacts />
              </RBS.Row>
              <div className="clearfix"></div>
              <RBS.Row className={(activeSecCode !== "EDIT") ? "dashEditSec d-none d-md-none" : "dashEditSec"}>
                <ProfileEditor />
              </RBS.Row>
              <RBS.Row className={(activeSecCode !== "SHARE") ? "dashShareProfSec d-none d-md-none" : "dashShareProfSec"}>
                <ProfileShare />
              </RBS.Row>
              <RBS.Row className={(activeSecCode !== "REFER") ? "dashReferProfSec d-none d-md-none" : "dashReferProfSec"} >
                <ReferAndEarn />
              </RBS.Row>
            </RBS.Col>
          </RBS.Row>
        </RBS.Col>
        <div className="clearfix"></div>
      </RBS.Row>
      <div className="clearfix"></div>
    </RBS.Container>
    <div className="clearfix"></div>
  </div>
    ;
}

LawyerDashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  lawyerDashboard: makeSelectLawyerDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LawyerDashboard);
