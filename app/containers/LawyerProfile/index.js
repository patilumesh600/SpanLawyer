/**
 *
 * LawyerProfile
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as RBS from 'react-bootstrap';
import {
  faEye,
  faCalendarAlt,
  faStar,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScheduleAppt from 'components/ScheduleAppointment';
import makeSelectLawyerProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
import userImg from '../../images/bgImages/userImage1.jpg';
export function LawyerProfile() {
  useInjectReducer({ key: 'lawyerProfile', reducer });
  useInjectSaga({ key: 'lawyerProfile', saga });

  return (
    <RBS.Container fluid>
      <RBS.Row style={{ paddingTop: '10px' }}>
        <RBS.Col md={8}>
          {/* <RBS.Col md={12} style={{ border: "1px solid #e1e1e1",background:"#ffe28c" }}>  */}
          <RBS.Col
            md={12}
            style={{ border: '1px solid #e1e1e1', background: '#f5f5f5' }}
          >
            <RBS.Row style={{ padding: '15px 0px', marginBottom: '5px' }}>
              <RBS.Col xs={12} md={3} style={{ textAlign: 'center' }}>
                <RBS.Image
                  src={userImg}
                  roundedCircle
                  height="150"
                  width="150"
                />
              </RBS.Col>
              <RBS.Col
                md={9}
                xs={12}
                style={{ borderLeft: '1px solid #ffc107' }}
              >
                <div style={{ fontSize: '24px', fontWeight: '400' }}>
                  Adv. John Carter{' '}
                  <RBS.Badge
                    pill
                    variant="secondary"
                    style={{ fontSize: '12px' }}
                  >
                    <FontAwesomeIcon icon={faStar} /> 5{' '}
                  </RBS.Badge>
                </div>
                {/* <hr style={{ marginTop: "2px", borderTop: "1px solid #ffc107" }} /> */}
                <div style={{ fontSize: '14px', width: '100%' }}>
                  <div style={{ float: 'left', fontWeight: '500' }}>
                    Qualification:
                  </div>
                  <div style={{ float: 'left' }}>
                    {' '}
                    &nbsp; BA, LLB University of pune
                  </div>
                </div>
                <br />
                <div style={{ fontSize: '14px', width: '100%' }}>
                  <div style={{ float: 'left', fontWeight: '500' }}>
                    Registration Number:{' '}
                  </div>
                  <div style={{ float: 'left' }}> &nbsp; REG09876543210</div>
                </div>
                <br />
                <div style={{ fontSize: '14px', width: '100%' }}>
                  <div style={{ float: 'left', fontWeight: '500' }}>
                    Experience:
                  </div>
                  <div style={{ float: 'left' }}> &nbsp; 10 Yr.+</div>
                </div>
                <br />
                <div style={{ fontSize: '14px', width: '100%' }}>
                  <div style={{ float: 'left', fontWeight: '500' }}>
                    Office Address:{' '}
                  </div>
                  <div style={{ float: 'left' }}>
                    {' '}
                    &nbsp; A-306, Silver city, Wadacha mala, Jadhavwadi,
                    Chikhali, Pune- 411033.
                  </div>
                </div>
                <br />
                <div style={{ fontSize: '14px', width: '100%' }}>
                  <div style={{ float: 'left', fontWeight: '500' }}>
                    Email :{' '}
                  </div>
                  <div style={{ float: 'left' }}>
                    {' '}
                    &nbsp; sanketdeshmukh40@gmail.com{' '}
                  </div>
                  <div style={{ float: 'left', fontWeight: '500' }}>
                    {' '}
                    &nbsp; Phone Number :{' '}
                  </div>
                  <div style={{ float: 'left' }}>
                    {' '}
                    &nbsp; 9545096655 / 9975463675
                  </div>
                </div>
              </RBS.Col>
            </RBS.Row>
          </RBS.Col>
          {/* <hr style={{ marginTop: "15px", borderTop: "1px solid #ffc107" }} /> */}
          <RBS.Row style={{ padding: '10px 0px 0px 0px', fontSize: '14px' }}>
            <RBS.Col md={12} xs={12}>
              <h6>Profile Introduction</h6>
              <hr
                style={{ marginTop: '2px', borderTop: '1px solid #ffc107' }}
              />
            </RBS.Col>
            <RBS.Col md={12}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Pulvinar sapien et ligula ullamcorper malesuada proin. Tristique
              magna sit amet purus gravida quis blandit turpis cursus. Sed
              adipiscing diam donec adipiscing tristique risus. In ornare quam
              viverra orci sagittis eu volutpat. Scelerisque mauris pellentesque
              pulvinar pellentesque habitant morbi tristique. Iaculis nunc sed
              augue lacus viverra vitae congue. Posuere sollicitudin aliquam
              ultrices sagittis orci a scelerisque purus.
            </RBS.Col>
          </RBS.Row>

          <RBS.Row style={{ padding: '10px 0px 0px 0px', fontSize: '14px' }}>
            <RBS.Col md={12} xs={12}>
              <h6>Work Expertise</h6>
              <hr
                style={{ marginTop: '2px', borderTop: '1px solid #ffc107' }}
              />
            </RBS.Col>
            <RBS.Col md={4} xs={12}>
              <ul>
                <li> Divorce/Matrimonial Issue</li>
                <li>Property Issue</li>
                <li>Family And Inheritance Issue</li>
                <li>Cheque/Loan/Recovery Issue</li>
                <li>Employment Issue</li>
              </ul>
            </RBS.Col>
            <RBS.Col md={4} xs={12}>
              <ul>
                <li>Criminal Issue</li>
                <li>Consumer Court Issue</li>
                <li>Accident And Insurance Issue</li>
                <li>Armed Force Tribunal Matter</li>
                <li>Business / Corporate / Startup Issue</li>
              </ul>
            </RBS.Col>
            <RBS.Col md={4} xs={12}>
              <ul>
                <li>Civil Matters / Something else</li>
                <li>Supreme Court Matter</li>
                <li>Muslim Law Matter</li>
                <li>Immigration Issue</li>
              </ul>
            </RBS.Col>
          </RBS.Row>
          <RBS.Row style={{ padding: '10px 0px 0px 0px', fontSize: '14px' }}>
            <RBS.Col md={12} xs={12}>
              <h6>Working Courts</h6>
              <hr
                style={{ marginTop: '2px', borderTop: '1px solid #ffc107' }}
              />
            </RBS.Col>
            <RBS.Col md={12} xs={12}>
              District Court (Pune), Family Court (Pune), District Court
              (Ahmednagar), Family Court (Ahmednagar), Mumbai High Court,
              Aurngabad District Court.
            </RBS.Col>
          </RBS.Row>
          <RBS.Row style={{ padding: '10px 0px 0px 0px', fontSize: '14px' }}>
            <RBS.Col md={12} xs={12}>
              <h6>Categories wise performance</h6>
              <hr
                style={{ marginTop: '2px', borderTop: '1px solid #ffc107' }}
              />
            </RBS.Col>
            <br />
            <br />
            <RBS.Col md={4} style={{ fontWeight: '500' }}>
              Civil And Property
            </RBS.Col>
            <RBS.Col md={8} style={{ paddingTop: '10px' }}>
              <RBS.ProgressBar
                striped
                variant="warning"
                now={80}
                style={{ height: '5px' }}
              />
            </RBS.Col>
            <br />
            <RBS.Col md={4} style={{ fontWeight: '500' }}>
              Family And Matrimony Advice
            </RBS.Col>
            <RBS.Col md={8} style={{ paddingTop: '10px' }}>
              <RBS.ProgressBar
                striped
                variant="warning"
                now={60}
                style={{ height: '5px' }}
              />
            </RBS.Col>
            <br />
            <RBS.Col md={4} style={{ fontWeight: '500' }}>
              Banking And Corporate Matters
            </RBS.Col>
            <RBS.Col md={8} style={{ paddingTop: '10px' }}>
              <RBS.ProgressBar
                striped
                variant="warning"
                now={70}
                style={{ height: '5px' }}
              />
            </RBS.Col>
            <br />
            <RBS.Col md={4} style={{ fontWeight: '500' }}>
              Employment And Labor Matters
            </RBS.Col>
            <RBS.Col md={8} style={{ paddingTop: '10px' }}>
              <RBS.ProgressBar
                striped
                variant="warning"
                now={40}
                style={{ height: '5px' }}
              />
            </RBS.Col>
          </RBS.Row>
        </RBS.Col>
        <RBS.Col md={4}>
          <ScheduleAppt />
          <br />
          <h5>Similar profiles</h5>
          <hr style={{ marginTop: '2px', borderTop: '1px solid #ffc107' }} />
          <RBS.Row
            style={{
              padding: '15px 0px',
              marginBottom: '5px',
              borderBottom: '1px solid #e1e1e1',
            }}
          >
            <RBS.Col md={2} style={{ textAlign: 'center' }}>
              <RBS.Image src={userImg} roundedCircle height="50" width="50" />
            </RBS.Col>
            <RBS.Col md={6}>
              <div style={{ fontWeight: '500' }}>
                Adv. John Snow &nbsp;{' '}
                <RBS.Badge
                  pill
                  variant="secondary"
                  style={{ fontSize: '12px' }}
                >
                  <FontAwesomeIcon icon={faStar} /> 5{' '}
                </RBS.Badge>
              </div>
              <div style={{ fontSize: '12px' }}>BA, B.Ed, LLB</div>
            </RBS.Col>
            <RBS.Col
              md={4}
              className="text-center"
              style={{ paddingTop: '5px' }}
            >
              <RBS.Button variant="outline-secondary" size="sm">
                View Profile
              </RBS.Button>
            </RBS.Col>
          </RBS.Row>
          <RBS.Row
            style={{
              padding: '15px 0px',
              marginBottom: '5px',
              borderBottom: '1px solid #e1e1e1',
            }}
          >
            <RBS.Col md={2} style={{ textAlign: 'center' }}>
              <RBS.Image src={userImg} roundedCircle height="50" width="50" />
            </RBS.Col>
            <RBS.Col md={6}>
              <div style={{ fontWeight: '500' }}>
                Adv. John Snow &nbsp;{' '}
                <RBS.Badge
                  pill
                  variant="secondary"
                  style={{ fontSize: '12px' }}
                >
                  <FontAwesomeIcon icon={faStar} /> 5{' '}
                </RBS.Badge>
              </div>
              <div style={{ fontSize: '12px' }}>BA, B.Ed, LLB</div>
            </RBS.Col>
            <RBS.Col
              md={4}
              className="text-center"
              style={{ paddingTop: '5px' }}
            >
              <RBS.Button variant="outline-secondary" size="sm">
                View Profile
              </RBS.Button>
            </RBS.Col>
          </RBS.Row>
          <RBS.Row
            style={{
              padding: '15px 0px',
              marginBottom: '5px',
              borderBottom: '1px solid #e1e1e1',
            }}
          >
            <RBS.Col md={2} style={{ textAlign: 'center' }}>
              <RBS.Image src={userImg} roundedCircle height="50" width="50" />
            </RBS.Col>
            <RBS.Col md={6}>
              <div style={{ fontWeight: '500' }}>
                Adv. John Snow &nbsp;{' '}
                <RBS.Badge
                  pill
                  variant="secondary"
                  style={{ fontSize: '12px' }}
                >
                  <FontAwesomeIcon icon={faStar} /> 5{' '}
                </RBS.Badge>
              </div>
              <div style={{ fontSize: '12px' }}>BA, B.Ed, LLB</div>
            </RBS.Col>
            <RBS.Col
              md={4}
              className="text-center"
              style={{ paddingTop: '5px' }}
            >
              <RBS.Button variant="outline-secondary" size="sm">
                View Profile
              </RBS.Button>
            </RBS.Col>
          </RBS.Row>
        </RBS.Col>
      </RBS.Row>
    </RBS.Container>
  );
}

LawyerProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  lawyerProfile: makeSelectLawyerProfile(),
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

export default compose(withConnect)(LawyerProfile);
