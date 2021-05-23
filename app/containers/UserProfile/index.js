/**
 *
 * UserProfile
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUserProfile from './selectors';
import reducer from './reducer';
import saga from './saga';

import * as RBS from 'react-bootstrap';
import { faEdit, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { faCalendarTimes, faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userImg from '../../images/bgImages/userImage2.jpg';
export function UserProfile() {
  useInjectReducer({ key: 'userProfile', reducer });
  useInjectSaga({ key: 'userProfile', saga });

  return <RBS.Container style={{ marginTop: "7%" }}>
    <RBS.Row>
      <RBS.Col md={{ span: 10, offset: 1 }} >
        <RBS.Row style={{ minHeight: "100px", border: "1px solid #e1e1e1" }}>
          <RBS.Col md={12} style={{ border: '1px solid #e1e1e1', background: '#f5f5f5' }}>
            <RBS.Row style={{ padding: '15px 0px', marginBottom: '5px' }}>
              <RBS.Col xs={12} md={2} style={{ textAlign: 'center' }}>
                <RBS.Image
                  src={userImg}
                  roundedCircle
                  height="100"
                  width="100"
                />
              </RBS.Col>
              <RBS.Col md={8} xs={12} style={{}}>

                <div style={{ fontSize: "24px", fontWeight: "600" }}>Dwayne Johnson</div>
                <small stle={{ color: "#929292" }}> Male | 30 Years</small>
                <br />
                <RBS.Badge pill variant="warning" style={{ fontWeight: "normal" }}>SPUID_023232323</RBS.Badge>

              </RBS.Col>
              <RBS.Col md={2} xs={12} style={{ paddingTop: "15px" }}>
                <RBS.Button size="sm" block variant="warning"> <FontAwesomeIcon icon={faUserEdit} /> Edit Profile</RBS.Button>
                <RBS.Button size="sm" block variant="secondary"> <FontAwesomeIcon icon={faEdit} /> Write Review</RBS.Button>
              </RBS.Col>
            </RBS.Row>
          </RBS.Col>
        </RBS.Row>
        <RBS.Row style={{ marginTop: "2%" }} >
          <RBS.Col md={4} style={{ padding: "10px 15px" }}>
            <div style={{ fontSize: "18px", fontWeight: "500" }}>Personal Information</div>
            <hr style={{ marginTop: "2px", borderTop: "1px solid #ffc107" }} />
            <div style={{ fontSize: "14px" }}>
              <div style={{ fontSize: "14px", color: "#515151", fontWeight: "500" }}>Date Of Birth</div>
              <div>29-JUL-1991</div>
              <hr style={{ marginTop: "5px" }} />
              <div style={{ fontSize: "14px", color: "#515151", fontWeight: "500" }}>Gender</div>
              <div>Male</div>
              <hr style={{ marginTop: "5px" }} />
              <div style={{ fontSize: "14px", color: "#515151", fontWeight: "500" }}>Phone Number</div>
              <div>9545096655 / 9975463675</div>
              <hr style={{ marginTop: "5px" }} />
              <div style={{ fontSize: "14px", color: "#515151", fontWeight: "500" }}>Email Address</div>
              <div>sanketdeshmukh40@gmail.com</div>
              <hr style={{ marginTop: "5px" }} />
              <div style={{ fontSize: "14px", color: "#515151", fontWeight: "500" }}>Address</div>
              <div>A-306, Silver city, Sawata mali mandir road, Wadacha mala, Jadhavwadi, Chikhali, Pune- 411062</div>

            </div>
          </RBS.Col>
          <RBS.Col md={8} style={{ borderLeft: "1px solid #e1e1e1", padding: "10px 15px" }}>
            <RBS.Row>
              <RBS.Col md={12} style={{ fontSize: "18px", fontWeight: "500" }}>Visit Details
              <hr style={{ marginTop: "2px", borderTop: "1px solid #ffc107" }} />
              </RBS.Col>
              <RBS.Col md={12} style={{ fontSize: "16px", fontWeight: "500" }}>Upcoming Visits
              <br />
              </RBS.Col>
              <RBS.Col md={12} style={{ marginTop: "10px", borderBottom: "1px solid #e1e1e1", paddingBottom: "5px", fontSize: "14px" }}>
                <RBS.Row>
                  <RBS.Col md={2}>

                    <div className="text-center" style={{ border: "1px solid #ffc107", fontSize: "16px", borderRadius: "3px" }}><b>01
                      <br />
                      <small> JAN-2021</small></b></div>
                  </RBS.Col>
                  <RBS.Col md={6}>
                    <b>Adv. John Carter</b>
                    <br />
                    <div style={{ fontSize: "12px" }}><b>Case Type: </b> Family issues</div>
                    <div style={{ fontSize: "12px" }}><b>Created On: </b> 31-Dec-2020</div>
                  </RBS.Col>
                  <RBS.Col md={2} className="text-center" style={{ fontSize: "16px", paddingTop: "10px" }}><RBS.Badge pill variant="warning">Pending</RBS.Badge></RBS.Col>
                  <RBS.Col className="text-center" md={2} style={{ fontSize: "18px", paddingTop: "10px" }}>
                    {/* <RBS.Button variant="link" size="sm" block style={{ height: "25px", fontSize: "14px", padding: "1px" }}>Reschedule</RBS.Button>
                    <RBS.Button variant="link" size="sm" block style={{ height: "25px", fontSize: "14px", padding: "1px" }}>Cancel</RBS.Button> */}
                    <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faClock}></FontAwesomeIcon> | <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faCalendarTimes}></FontAwesomeIcon>

                  </RBS.Col>
                </RBS.Row>
              </RBS.Col>

              <RBS.Col md={12} style={{ marginTop: "10px", borderBottom: "1px solid #e1e1e1", paddingBottom: "5px", fontSize: "14px" }}>
                <RBS.Row>
                  <RBS.Col md={2}>

                    <div className="text-center" style={{ border: "1px solid #ffc107", fontSize: "16px", borderRadius: "3px" }}><b>01
                      <br />
                      <small> JAN-2021</small></b></div>
                  </RBS.Col>
                  <RBS.Col md={6}>
                    <b>Adv. John Carter</b>
                    <br />
                    <div style={{ fontSize: "12px" }}><b>Case Type: </b> Family issues</div>
                    <div style={{ fontSize: "12px" }}><b>Created On: </b> 31-Dec-2020</div>
                  </RBS.Col>
                  <RBS.Col md={2} className="text-center" style={{ fontSize: "16px", paddingTop: "10px" }}><RBS.Badge pill variant="warning">Pending</RBS.Badge></RBS.Col>
                  <RBS.Col className="text-center" md={2} style={{ fontSize: "18px", paddingTop: "10px" }}>
                    {/* <RBS.Button variant="link" size="sm" block style={{ height: "25px", fontSize: "14px", padding: "1px" }}>Reschedule</RBS.Button>
                    <RBS.Button variant="link" size="sm" block style={{ height: "25px", fontSize: "14px", padding: "1px" }}>Cancel</RBS.Button> */}
                    <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faClock}></FontAwesomeIcon> | <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faCalendarTimes}></FontAwesomeIcon>

                  </RBS.Col>
                </RBS.Row>
              </RBS.Col>
             
              <RBS.Col md={12} style={{ fontSize: "16px", fontWeight: "500",marginTop:"7%" }}>Past Visits
              <br />
              </RBS.Col>
              <RBS.Col md={12} style={{ marginTop: "10px", borderBottom: "1px solid #e1e1e1", paddingBottom: "5px", fontSize: "14px" }}>
                <RBS.Row>
                  <RBS.Col md={2}>

                    <div className="text-center" style={{ border: "1px solid #28a745", fontSize: "16px", borderRadius: "3px" }}><b>01
                      <br />
                      <small> JAN-2021</small></b></div>
                  </RBS.Col>
                  <RBS.Col md={6}>
                    <b>Adv. John Carter</b>
                    <br />
                    <div style={{ fontSize: "12px" }}><b>Case Type: </b> Family issues</div>
                    <div style={{ fontSize: "12px" }}><b>Created On: </b> 31-Dec-2020</div>
                  </RBS.Col>
                  <RBS.Col md={2} className="text-center" style={{ fontSize: "16px", paddingTop: "10px" }}><RBS.Badge pill variant="success">Completed</RBS.Badge></RBS.Col>
                  <RBS.Col className="text-center" md={2} style={{ fontSize: "18px", paddingTop: "10px" }}>
                    {/* <RBS.Button variant="link" size="sm" block style={{ height: "25px", fontSize: "14px", padding: "1px" }}>Reschedule</RBS.Button>
                    <RBS.Button variant="link" size="sm" block style={{ height: "25px", fontSize: "14px", padding: "1px" }}>Cancel</RBS.Button> */}
                    <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faClock}></FontAwesomeIcon> | <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faCalendarTimes}></FontAwesomeIcon>

                  </RBS.Col>
                </RBS.Row>
              </RBS.Col>

              <RBS.Col md={12} style={{ marginTop: "10px", borderBottom: "1px solid #e1e1e1", paddingBottom: "5px", fontSize: "14px" }}>
                <RBS.Row>
                  <RBS.Col md={2}>

                    <div className="text-center" style={{ border: "1px solid #28a745", fontSize: "16px", borderRadius: "3px" }}><b>01
                      <br />
                      <small> JAN-2021</small></b></div>
                  </RBS.Col>
                  <RBS.Col md={6}>
                    <b>Adv. John Carter</b>
                    <br />
                    <div style={{ fontSize: "12px" }}><b>Case Type: </b> Family issues</div>
                    <div style={{ fontSize: "12px" }}><b>Created On: </b> 31-Dec-2020</div>
                  </RBS.Col>
                  <RBS.Col md={2} className="text-center" style={{ fontSize: "16px", paddingTop: "10px" }}><RBS.Badge pill variant="success">Completed</RBS.Badge></RBS.Col>
                  <RBS.Col className="text-center" md={2} style={{ fontSize: "18px", paddingTop: "10px" }}>
                    {/* <RBS.Button variant="link" size="sm" block style={{ height: "25px", fontSize: "14px", padding: "1px" }}>Reschedule</RBS.Button>
                    <RBS.Button variant="link" size="sm" block style={{ height: "25px", fontSize: "14px", padding: "1px" }}>Cancel</RBS.Button> */}
                    <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faClock}></FontAwesomeIcon> | <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faCalendarTimes}></FontAwesomeIcon>

                  </RBS.Col>
                </RBS.Row>
              </RBS.Col>

              <RBS.Col md={12} style={{ marginTop: "10px", borderBottom: "1px solid #e1e1e1", paddingBottom: "5px", fontSize: "14px" }}>
                <RBS.Row>
                  <RBS.Col md={2}>

                    <div className="text-center" style={{ border: "1px solid #dc3545", fontSize: "16px", borderRadius: "3px" }}><b>01
                      <br />
                      <small> JAN-2021</small></b></div>
                  </RBS.Col>
                  <RBS.Col md={6}>
                    <b>Adv. John Carter</b>
                    <br />
                    <div style={{ fontSize: "12px" }}><b>Case Type: </b> Family issues</div>
                    <div style={{ fontSize: "12px" }}><b>Created On: </b> 31-Dec-2020</div>
                  </RBS.Col>
                  <RBS.Col md={2} className="text-center" style={{ fontSize: "16px", paddingTop: "10px" }}><RBS.Badge pill variant="danger">Canceled</RBS.Badge></RBS.Col>
                  <RBS.Col className="text-center" md={2} style={{ fontSize: "18px", paddingTop: "10px" }}>
                    {/* <RBS.Button variant="link" size="sm" block style={{ height: "25px", fontSize: "14px", padding: "1px" }}>Reschedule</RBS.Button>
                    <RBS.Button variant="link" size="sm" block style={{ height: "25px", fontSize: "14px", padding: "1px" }}>Cancel</RBS.Button> */}
                    <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faClock}></FontAwesomeIcon> | <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faCalendarTimes}></FontAwesomeIcon>

                  </RBS.Col>
                </RBS.Row>
              </RBS.Col>

              <RBS.Col md={12} style={{ marginTop: "10px", borderBottom: "1px solid #e1e1e1", paddingBottom: "5px", fontSize: "14px" }}>
                <RBS.Row>
                  <RBS.Col md={2}>

                    <div className="text-center" style={{ border: "1px solid #28a745", fontSize: "16px", borderRadius: "3px" }}><b>01
                      <br />
                      <small> JAN-2021</small></b></div>
                  </RBS.Col>
                  <RBS.Col md={6}>
                    <b>Adv. John Carter</b>
                    <br />
                    <div style={{ fontSize: "12px" }}><b>Case Type: </b> Family issues</div>
                    <div style={{ fontSize: "12px" }}><b>Created On: </b> 31-Dec-2020</div>
                  </RBS.Col>
                  <RBS.Col md={2} className="text-center" style={{ fontSize: "16px", paddingTop: "10px" }}><RBS.Badge pill variant="success">Completed</RBS.Badge></RBS.Col>
                  <RBS.Col className="text-center" md={2} style={{ fontSize: "18px", paddingTop: "10px" }}>
                    {/* <RBS.Button variant="link" size="sm" block style={{ height: "25px", fontSize: "14px", padding: "1px" }}>Reschedule</RBS.Button>
                    <RBS.Button variant="link" size="sm" block style={{ height: "25px", fontSize: "14px", padding: "1px" }}>Cancel</RBS.Button> */}
                    <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faClock}></FontAwesomeIcon> | <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faCalendarTimes}></FontAwesomeIcon>

                  </RBS.Col>
                </RBS.Row>
              </RBS.Col>

            </RBS.Row>
          </RBS.Col>

        </RBS.Row>
      </RBS.Col>
    </RBS.Row>
  </RBS.Container>;
}

UserProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userProfile: makeSelectUserProfile(),
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

export default compose(withConnect)(UserProfile);
