/**
 *
 * LawyerCases
 *
 */

import React, { useState } from 'react';
import * as RBS from 'react-bootstrap';
import CaseNoteModal from 'components/CaseNoteModal';
import { faSearch, faEllipsisV, faArrowLeft, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chrono } from "react-chrono";

function LawyerCases() {

  const items = [{
    title: "21 May 2021",
    cardTitle: "21 May 2021",
    cardSubtitle: "More details related to case is requested by Court.",
    cardDetailedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  },
  {
    title: "21 May 2021",
    cardTitle: "21 May 2021",
    cardSubtitle: "More details related to case is requested by Court.",
    cardDetailedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title: "21 May 2021",
    cardTitle: "21 May 2021",
    cardSubtitle: "More details related to case is requested by Court.",
    cardDetailedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }, {
    title: "21 May 2021",
    cardTitle: "21 May 2021",
    cardSubtitle: "More details related to case is requested by Court.",
    cardDetailedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  }, {
    title: "21 May 2021",
    cardTitle: "21 May 2021",
    cardSubtitle: "More details related to case is requested by Court.",
    cardDetailedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }];

  const [activeProfile, setActiveProfile] = useState("USERLIST");

  const showHideDetails = (code) => {
    setActiveProfile(code);
  }
  const [modalShow, setModalShow] = React.useState(false);

  return <>
    <RBS.Container fluid>
      <RBS.Row className={(activeProfile !== "USERLIST") ? "d-none d-md-none" : ""}>
        <RBS.Col md={12} xs={12}>
          <RBS.Form>
            <RBS.Form.Row flex>
              <RBS.Col md={6} xs={8}>
                <RBS.InputGroup className="mb-2" size="sm">
                  <RBS.FormControl placeholder="Search by case number" aria-label="Search by case number"
                    aria-describedby="basic-addon2" />
                  <RBS.InputGroup.Append>
                    <RBS.InputGroup.Text id="basic-addon2" className="noBg">
                      <FontAwesomeIcon icon={faSearch} />
                    </RBS.InputGroup.Text>
                  </RBS.InputGroup.Append>
                </RBS.InputGroup>

              </RBS.Col>

              <RBS.Col md={{ span: 3, offset: 3 }} xs={4} className="text-right contactCountSec">
                <RBS.Button variant="warning" size="sm" onClick={() => setModalShow(true)}>+ Add Case</RBS.Button>
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
                    <RBS.Col md={9} xs={9}>
                      <div className="userMobDateTimeSec">29-May-2021 8.30 PM</div>
                      <div className="clearfix"></div>
                      <div className="userNameSec"><span className=" d-none d-sm-inline">Case No :</span> 1234567890098765</div>
                    </RBS.Col>

                    <RBS.Col md={3} xs={3} className=" appActionSec text-right">
                      <FontAwesomeIcon className="appActionBtn" icon={faPenAlt} />
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
                          <RBS.Col md={2}><b>Email Address: </b></RBS.Col>
                          <RBS.Col md={10}><a href="mailto:sanketdeshmukh40@gmail.com">sanketdeshmukh40@gmail.com</a></RBS.Col>
                        </RBS.Row>
                        <RBS.Row>
                          <RBS.Col md={2}><b>Contact No. </b></RBS.Col>
                          <RBS.Col md={10}>9545096655</RBS.Col>
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
        {/* <RBS.Col md={12}>
          <div Col md={12} style={{ height: '100%' }}>
            <Chrono
              items={items} scrollable  
              theme={{ primary: "#ffc107", secondary: "#9c9c9c" }}
              
            />
          </div>
        </RBS.Col> */}

      </RBS.Row>
      <RBS.Row className={(activeProfile !== "USERPROF") ? "userProfileSec d-none d-md-none" : "userProfileSec"}>
        <RBS.Col md={12} xs={12}>
          <RBS.Container fluid className="pad-0">
            <RBS.Row>
              <RBS.Col md={12} xs={12} className="pad-0">
                <h5><FontAwesomeIcon icon={faArrowLeft} className="userProfbackIc" onClick={() => showHideDetails("USERLIST")} /> &nbsp; Case No : 1234567890098765</h5>
              </RBS.Col>
            </RBS.Row>
          </RBS.Container>
          <hr className="hryellow" />
        </RBS.Col>
        <div className="timeLineSec">
          <Chrono
            items={items} scrollable cardWidth="500px" cardPositionHorizontal="TOP"
            theme={{ primary: "#000", secondary: "#ffc107" }}
            mode="VERTICAL"
          />
        </div>
      </RBS.Row>
      <RBS.Row >
        <CaseNoteModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </RBS.Row>
    </RBS.Container>
  </>;
}

LawyerCases.propTypes = {};

export default LawyerCases;
